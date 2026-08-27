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

    const cellSize = 8;
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

      const centerX = rect.width * 0.3;
      const centerY = rect.height * 0.4;

      cellsRef.current.forEach((cell) => {
        const distFromCenter = Math.sqrt(
          Math.pow(cell.x - centerX, 2) + Math.pow(cell.y - centerY, 2)
        );
        const maxDist = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 0.5;
        const normalizedDist = Math.min(distFromCenter / maxDist, 1);
        
        const brightness = Math.max(0.03, 0.2 * (1 - normalizedDist * 0.9));
        
        ctx.fillStyle = `rgba(249, 115, 22, ${brightness})`;
        ctx.fillRect(cell.x, cell.y, cellSize, cellSize);
      });
    };

    const animate = () => {
      if (prefersReducedMotion) {
        drawStaticGrid();
        return;
      }

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      timeRef.current += 0.008;

      const centerX = rect.width * 0.3;
      const centerY = rect.height * 0.4;

      cellsRef.current.forEach((cell) => {
        const distFromCenter = Math.sqrt(
          Math.pow(cell.x - centerX, 2) + Math.pow(cell.y - centerY, 2)
        );
        const maxDist = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 0.5;
        const normalizedDist = Math.min(distFromCenter / maxDist, 1);

        const wave1 = Math.sin(timeRef.current * 0.4 + normalizedDist * 6) * 0.5 + 0.5;
        const wave2 = Math.sin(timeRef.current * 0.25 - cell.x * 0.01 + cell.y * 0.005) * 0.5 + 0.5;
        const dataStream = Math.sin(timeRef.current * 2 + cell.y * 0.1) > 0.95 ? 0.4 : 0;

        cell.targetBrightness = 
          (wave1 * 0.3 + wave2 * 0.2 + dataStream) * (1 - normalizedDist * 0.7);

        if (Math.random() < 0.0005) {
          cell.targetBrightness = Math.min(1, cell.targetBrightness + 0.6);
        }

        cell.brightness += (cell.targetBrightness - cell.brightness) * 0.06;
        cell.brightness = Math.max(0.02, Math.min(1, cell.brightness));

        const alpha = cell.brightness * 0.9 + 0.05;
        
        if (cell.brightness > 0.5) {
          ctx.fillStyle = `rgba(251, 146, 60, ${alpha})`;
        } else if (cell.brightness > 0.2) {
          ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(194, 65, 12, ${alpha * 0.6})`;
        }
        
        ctx.fillRect(cell.x, cell.y, cellSize, cellSize);

        if (cell.brightness > 0.7) {
          ctx.shadowColor = `rgba(249, 115, 22, 0.6)`;
          ctx.shadowBlur = 12;
          ctx.fillRect(cell.x, cell.y, cellSize, cellSize);
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
        style={{ opacity: 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
