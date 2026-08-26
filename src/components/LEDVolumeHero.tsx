"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

interface GridCell {
  x: number;
  y: number;
  brightness: number;
  targetBrightness: number;
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

    const cellSize = 20;
    const gap = 2;

    const initializeCells = (width: number, height: number) => {
      const cols = Math.ceil(width / (cellSize + gap));
      const rows = Math.ceil(height / (cellSize + gap));
      cellsRef.current = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          cellsRef.current.push({
            x: col * (cellSize + gap),
            y: row * (cellSize + gap),
            brightness: 0,
            targetBrightness: 0,
          });
        }
      }
    };

    const drawStaticGrid = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      cellsRef.current.forEach((cell) => {
        const distFromCenter = Math.sqrt(
          Math.pow(cell.x - centerX, 2) + Math.pow(cell.y - centerY, 2)
        );
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
        const normalizedDist = distFromCenter / maxDist;
        
        const brightness = Math.max(0.02, 0.15 * (1 - normalizedDist * 0.8));
        
        ctx.fillStyle = `rgba(34, 211, 238, ${brightness})`;
        ctx.fillRect(cell.x, cell.y, cellSize - gap, cellSize - gap);
      });
    };

    const animate = () => {
      if (prefersReducedMotion) {
        drawStaticGrid();
        return;
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      timeRef.current += 0.015;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      cellsRef.current.forEach((cell) => {
        const distFromCenter = Math.sqrt(
          Math.pow(cell.x - centerX, 2) + Math.pow(cell.y - centerY, 2)
        );
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
        const normalizedDist = distFromCenter / maxDist;

        const wave1 = Math.sin(timeRef.current * 0.5 + normalizedDist * 4) * 0.5 + 0.5;
        const wave2 = Math.sin(timeRef.current * 0.3 - normalizedDist * 3 + Math.PI) * 0.5 + 0.5;
        const pulse = Math.sin(timeRef.current * 0.8) * 0.3 + 0.7;

        cell.targetBrightness = 
          (wave1 * 0.4 + wave2 * 0.3) * pulse * (1 - normalizedDist * 0.6);

        if (Math.random() < 0.001) {
          cell.targetBrightness = Math.min(1, cell.targetBrightness + 0.5);
        }

        cell.brightness += (cell.targetBrightness - cell.brightness) * 0.08;
        cell.brightness = Math.max(0.02, Math.min(1, cell.brightness));

        const hue = 185 + normalizedDist * 30;
        const saturation = 80 + cell.brightness * 20;
        const lightness = 30 + cell.brightness * 40;

        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${cell.brightness * 0.8 + 0.1})`;
        ctx.fillRect(cell.x, cell.y, cellSize - gap, cellSize - gap);

        if (cell.brightness > 0.6) {
          ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
          ctx.shadowBlur = 10;
          ctx.fillRect(cell.x, cell.y, cellSize - gap, cellSize - gap);
          ctx.shadowBlur = 0;
        }
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
    </div>
  );
}
