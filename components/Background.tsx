import React, { useEffect, useRef } from 'react';
import { Particle } from '../types';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5,
        targetAlpha: Math.random() * 0.6 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Romantic Red/Pink Gradient Background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      // Deep burgundy at top -> Rich dark pink at bottom
      gradient.addColorStop(0, '#2a0a12'); // Deep Rose/Black blend
      gradient.addColorStop(0.5, '#4c0519'); // Rose 950
      gradient.addColorStop(1, '#660820'); // Rose 900ish
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulse alpha
        if (p.alpha < p.targetAlpha) p.alpha += 0.003;
        if (p.alpha > p.targetAlpha) p.alpha -= 0.003;
        if (Math.abs(p.alpha - p.targetAlpha) < 0.01) {
            p.targetAlpha = Math.random() * 0.5 + 0.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Lighter particles (Soft Pink/White) to pop against red background
        ctx.fillStyle = `rgba(255, 200, 210, ${p.alpha})`; 
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    const animId = requestAnimationFrame(draw);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default Background;