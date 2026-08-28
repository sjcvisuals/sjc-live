"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

interface GridCell {
  x: number;
  y: number;
  brightness: number;
  targetBrightness: number;
  hue: number;
}

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

export function LEDVolumeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    () => false
  );
  const animationRef = useRef<number | null>(null);
  const cellsRef = useRef<GridCell[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initializeCells(rect.width, rect.height);
    };

    const cellSize = 6;
    const gap = 3;

    const initializeCells = (width: number, height: number) => {
      const cols = Math.ceil(width / (cellSize + gap));
      const rows = Math.ceil(height / (cellSize + gap));
      cellsRef.current = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * (cellSize + gap);
          const y = row * (cellSize + gap);
          const distFromTopRight = Math.sqrt(
            Math.pow(x - width, 2) + Math.pow(y, 2)
          );
          const normalizedDist = distFromTopRight / Math.sqrt(width * width + height * height);
          
          cellsRef.current.push({
            x,
            y,
            brightness: 0,
            targetBrightness: 0,
            hue: 20 + normalizedDist * 40,
          });
        }
      }
    };

    const drawStaticGrid = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      cellsRef.current.forEach((cell) => {
        const distFromTopRight = Math.sqrt(
          Math.pow(cell.x - rect.width, 2) + Math.pow(cell.y, 2)
        );
        const maxDist = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
        const normalizedDist = distFromTopRight / maxDist;
        
        const brightness = Math.max(0.05, 0.3 * (1 - normalizedDist));
        
        ctx.fillStyle = `hsla(${cell.hue}, 90%, 60%, ${brightness})`;
        ctx.beginPath();
        ctx.arc(cell.x + cellSize / 2, cell.y + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      if (prefersReducedMotion) {
        drawStaticGrid();
        return;
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      timeRef.current += 0.006;

      cellsRef.current.forEach((cell) => {
        const distFromTopRight = Math.sqrt(
          Math.pow(cell.x - rect.width, 2) + Math.pow(cell.y, 2)
        );
        const maxDist = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
        const normalizedDist = distFromTopRight / maxDist;

        const wave1 = Math.sin(timeRef.current * 0.5 + normalizedDist * 8) * 0.5 + 0.5;
        const wave2 = Math.sin(timeRef.current * 0.3 + cell.x * 0.008 - cell.y * 0.005) * 0.5 + 0.5;

        cell.targetBrightness = 
          (wave1 * 0.4 + wave2 * 0.3) * (1 - normalizedDist * 0.6);

        if (Math.random() < 0.0003) {
          cell.targetBrightness = Math.min(1, cell.targetBrightness + 0.5);
        }

        cell.brightness += (cell.targetBrightness - cell.brightness) * 0.04;
        cell.brightness = Math.max(0.03, Math.min(0.6, cell.brightness));

        const hue = cell.hue + Math.sin(timeRef.current * 0.2 + normalizedDist * 2) * 15;
        const saturation = 85 + cell.brightness * 15;
        const lightness = 55 + cell.brightness * 15;
        const alpha = cell.brightness * 0.8;
        
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(cell.x + cellSize / 2, cell.y + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (prefersReducedMotion) {
      drawStaticGrid();
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}
