import { useEffect, useRef } from 'react';

/**
 * A small simulated spike raster: each row is one neuron, each tick one spike,
 * drifting left as time passes. Purely decorative. Visitors who prefer reduced
 * motion get a still frame.
 */

interface Spike {
  x: number;
  alpha: number;
}

const ROWS = 6;
const ROW_HEIGHT = 9;
const TICK_HEIGHT = 5;
const SPEED = 14; // px per second
const FADE = 80; // px over which spikes fade in and out at either edge

const SpikeRaster = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ink =
      getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#f2f2f2';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const height = ROWS * ROW_HEIGHT;

    // Mean firing rate per neuron, in spikes per second.
    const rates = Array.from({ length: ROWS }, (_, i) => 0.15 + ((i * 7) % 5) * 0.14);
    let rows: Spike[][] = [];
    let width = 0;

    const newSpike = (x: number): Spike => ({ x, alpha: 0.25 + Math.random() * 0.75 });

    // Fill the strip as if it had already been running.
    const seed = () => {
      rows = rates.map((rate) => {
        const spikes: Spike[] = [];
        const meanGap = SPEED / rate;
        let x = Math.random() * meanGap;
        while (x < width) {
          spikes.push(newSpike(x));
          x += -Math.log(1 - Math.random()) * meanGap;
        }
        return spikes;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = ink;
      rows.forEach((spikes, r) => {
        for (const spike of spikes) {
          ctx.globalAlpha = spike.alpha * Math.min(1, spike.x / FADE, (width - spike.x) / FADE);
          ctx.fillRect(Math.round(spike.x), r * ROW_HEIGHT + 2, 1.5, TICK_HEIGHT);
        }
      });
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw();
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      rows.forEach((spikes, r) => {
        for (const spike of spikes) spike.x -= SPEED * dt;
        while (spikes.length && spikes[0].x < 0) spikes.shift();
        if (Math.random() < rates[r] * dt) spikes.push(newSpike(width));
      });
      draw();
      raf = requestAnimationFrame(tick);
    };

    if (!reduced) raf = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="spike-raster"
      style={{ height: ROWS * ROW_HEIGHT }}
      aria-hidden="true"
    />
  );
};

export default SpikeRaster;
