"use client";

import * as React from "react";
import { useEffect, useRef } from "react";

/**
 * UnmannedFactoryCanvas
 * ---------------------
 * A 2D canvas visualization evoking a 7×24 lights-out factory floor:
 *  - Perspective grid receding into distance
 *  - CNC/robotic-arm "toolpaths" drawn as glowing cyan lines that animate in and out
 *  - Pulsing nodes (AI decision points / machine cells)
 *  - Horizontal scanning laser line
 *  - Floating data particles along the digital thread
 *  - Subtle mouse parallax
 */
export function UnmannedFactoryCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse parallax
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ---------- Scene state ----------
    type Node = { x: number; y: number; z: number; phase: number; size: number };
    type Toolpath = { points: { x: number; y: number }[]; progress: number; speed: number; life: number; maxLife: number };
    type Particle = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number };

    const nodes: Node[] = [];
    const toolpaths: Toolpath[] = [];
    const particles: Particle[] = [];

    // Seed factory nodes (machine cells) in perspective space
    const NODE_COUNT = 22;
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 2,
        y: Math.random() * 0.9 + 0.05, // depth
        z: Math.random(),
        phase: Math.random() * Math.PI * 2,
        size: 2 + Math.random() * 3,
      });
    }

    // Project perspective point (z=0 near, z=1 far) to screen
    const project = (nx: number, ny: number, z: number, parallaxX = 0, parallaxY = 0) => {
      // Horizon line at ~30% from top
      const horizonY = height * 0.28;
      // Vanishing point
      const vpX = width / 2 + parallaxX * 20;
      const vpY = horizonY + parallaxY * 10;
      // z=0 at bottom (foreground), z=1 at horizon (far)
      const t = z;
      const sx = vpX + nx * width * 0.55 * (1 - t * 0.9);
      const sy = vpY + (height - vpY) * (1 - t);
      return { x: sx, y: sy, scale: 1 - t * 0.85 };
    };

    const spawnToolpath = () => {
      if (nodes.length < 2) return;
      // Generate a CNC-like zigzag toolpath between two random close nodes
      let a = nodes[Math.floor(Math.random() * nodes.length)];
      let b = nodes[Math.floor(Math.random() * nodes.length)];
      let attempts = 0;
      while (a === b && attempts < 5) {
        b = nodes[Math.floor(Math.random() * nodes.length)];
        attempts++;
      }
      if (a === b) return;
      const segments = 4 + Math.floor(Math.random() * 5);
      const pts: { x: number; y: number }[] = [];
      const ax = a.x + (Math.random() - 0.5) * 0.1;
      const bx = b.x + (Math.random() - 0.5) * 0.1;
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        // zigzag perpendicular to path
        const dir = i % 2 === 0 ? 1 : -1;
        const perp = dir * 0.06 * Math.sin(t * Math.PI);
        const px = ax + (bx - ax) * t + perp;
        const py = a.y + (b.y - a.y) * t;
        pts.push({ x: px, y: py });
      }
      toolpaths.push({
        points: pts,
        progress: 0,
        speed: 0.004 + Math.random() * 0.006,
        life: 0,
        maxLife: 220 + Math.random() * 180,
      });
    };

    const spawnParticle = () => {
      if (nodes.length < 2) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      const b = nodes[Math.floor(Math.random() * nodes.length)];
      if (a === b) return;
      particles.push({
        x: a.x,
        y: a.y,
        vx: (b.x - a.x) * 0.01,
        vy: (b.y - a.y) * 0.01,
        life: 0,
        maxLife: 80 + Math.random() * 60,
      });
    };

    let scanlineY = 0;
    let frame = 0;

    const render = () => {
      frame++;
      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.05;
      const px = mouseRef.current.x;
      const py = mouseRef.current.y;

      // Clear with subtle trail for glow persistence
      ctx.fillStyle = "rgba(5,7,10,0.35)";
      ctx.fillRect(0, 0, width, height);

      // ------- Perspective grid floor -------
      const horizonY = height * 0.28 + py * 10;
      const vpX = width / 2 + px * 20;

      // Horizontal lines (depth lines)
      ctx.strokeStyle = "rgba(0,229,255,0.10)";
      ctx.lineWidth = 1;
      const hLines = 18;
      for (let i = 1; i <= hLines; i++) {
        const t = i / hLines;
        // Non-linear spacing (perspective compression toward horizon)
        const pct = Math.pow(t, 1.8);
        const y = horizonY + (height - horizonY) * pct;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Vertical lines (radiating from vanishing point)
      const vLines = 22;
      for (let i = -vLines; i <= vLines; i++) {
        // Bottom X position spread
        const offset = i / vLines;
        const bottomX = width / 2 + offset * width * 0.9;
        ctx.beginPath();
        ctx.moveTo(vpX, horizonY);
        ctx.lineTo(bottomX, height);
        ctx.strokeStyle = `rgba(0,229,255,${0.04 + Math.abs(offset) * 0.05})`;
        ctx.stroke();
      }

      // Horizon glow
      const hGrad = ctx.createLinearGradient(0, horizonY - 60, 0, horizonY + 80);
      hGrad.addColorStop(0, "rgba(0,229,255,0)");
      hGrad.addColorStop(0.5, "rgba(0,229,255,0.08)");
      hGrad.addColorStop(1, "rgba(0,229,255,0)");
      ctx.fillStyle = hGrad;
      ctx.fillRect(0, horizonY - 60, width, 140);

      // ------- Nodes (machine cells) -------
      nodes.forEach((n) => {
        n.phase += 0.02;
        const p = project(n.x, n.y, n.z, px, py);
        const pulse = 0.5 + Math.sin(n.phase) * 0.5;
        const r = n.size * p.scale;

        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
        glow.addColorStop(0, `rgba(0,229,255,${0.25 * pulse})`);
        glow.addColorStop(1, "rgba(0,229,255,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = "#00E5FF";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Ring
        ctx.strokeStyle = `rgba(0,229,255,${0.4 + pulse * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * (1.5 + pulse * 0.6), 0, Math.PI * 2);
        ctx.stroke();
      });

      // ------- Toolpaths (glowing CNC trajectories) -------
      if (frame % 40 === 0 && toolpaths.length < 6) spawnToolpath();

      for (let i = toolpaths.length - 1; i >= 0; i--) {
        const tp = toolpaths[i];
        tp.progress += tp.speed;
        tp.life++;
        if (tp.life > tp.maxLife) {
          toolpaths.splice(i, 1);
          continue;
        }
        const fadeIn = Math.min(1, tp.life / 30);
        const fadeOut = Math.min(1, (tp.maxLife - tp.life) / 40);
        const alpha = fadeIn * fadeOut;

        const pts = tp.points.map((pt, idx) => {
          // distribute z by point index (first point "far", last "near" or vice versa based on y)
          const z = 0.3 + pt.y * 0.6;
          return project(pt.x, 0, z, px, py);
        });

        // Glow pass
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#00E5FF";
        ctx.strokeStyle = `rgba(0,229,255,${0.7 * alpha})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        const drawUntil = Math.floor(pts.length * Math.min(1, tp.progress));
        for (let j = 0; j <= drawUntil; j++) {
          if (j === 0) ctx.moveTo(pts[j].x, pts[j].y);
          else ctx.lineTo(pts[j].x, pts[j].y);
        }
        ctx.stroke();

        // Moving "toolhead" dot at leading edge
        if (drawUntil < pts.length) {
          const tip = pts[Math.max(0, Math.min(pts.length - 1, drawUntil))];
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.shadowBlur = 20;
          ctx.shadowColor = "#00E5FF";
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }

      // ------- Particles (data flow) -------
      if (frame % 12 === 0 && particles.length < 40) spawnParticle();
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life++;
        if (pt.life > pt.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        const z = 0.3 + pt.y * 0.6;
        const p = project(pt.x, 0, z, px, py);
        const a = Math.sin((pt.life / pt.maxLife) * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${0.7 * a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00E5FF";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ------- Scanning laser line -------
      scanlineY += 1.2;
      if (scanlineY > height + 40) scanlineY = horizonY - 40;
      if (scanlineY > horizonY) {
        const scanGrad = ctx.createLinearGradient(0, scanlineY - 40, 0, scanlineY + 40);
        scanGrad.addColorStop(0, "rgba(0,229,255,0)");
        scanGrad.addColorStop(0.5, "rgba(0,229,255,0.08)");
        scanGrad.addColorStop(1, "rgba(0,229,255,0)");
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, scanlineY - 40, width, 80);

        // Bright thin line
        ctx.strokeStyle = "rgba(0,229,255,0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, scanlineY);
        ctx.lineTo(width, scanlineY);
        ctx.stroke();
      }

      // ------- Vignette -------
      const vg = ctx.createRadialGradient(
        width / 2,
        height * 0.6,
        height * 0.2,
        width / 2,
        height * 0.6,
        height * 0.9,
      );
      vg.addColorStop(0, "rgba(5,7,10,0)");
      vg.addColorStop(1, "rgba(5,7,10,0.85)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, width, height);

      // ------- HUD corners -------
      ctx.strokeStyle = "rgba(0,229,255,0.5)";
      ctx.lineWidth = 1.2;
      const cornerLen = 22;
      const margin = 28;
      // TL
      ctx.beginPath();
      ctx.moveTo(margin, margin + cornerLen);
      ctx.lineTo(margin, margin);
      ctx.lineTo(margin + cornerLen, margin);
      ctx.stroke();
      // TR
      ctx.beginPath();
      ctx.moveTo(width - margin - cornerLen, margin);
      ctx.lineTo(width - margin, margin);
      ctx.lineTo(width - margin, margin + cornerLen);
      ctx.stroke();
      // BL
      ctx.beginPath();
      ctx.moveTo(margin, height - margin - cornerLen);
      ctx.lineTo(margin, height - margin);
      ctx.lineTo(margin + cornerLen, height - margin);
      ctx.stroke();
      // BR
      ctx.beginPath();
      ctx.moveTo(width - margin - cornerLen, height - margin);
      ctx.lineTo(width - margin, height - margin);
      ctx.lineTo(width - margin, height - margin - cornerLen);
      ctx.stroke();

      // ------- HUD readouts -------
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.fillStyle = "rgba(0,229,255,0.7)";
      ctx.textBaseline = "top";
      ctx.fillText("SYS // FAXIS GRID ONLINE", margin + 6, margin + 6);
      ctx.textAlign = "right";
      ctx.fillText(`NODES: ${nodes.length}  TPS: ${toolpaths.length}`, width - margin - 6, margin + 6);
      ctx.textAlign = "left";
      ctx.textBaseline = "bottom";
      ctx.fillText(`LIGHTS-OUT MODE // 24/7 // v1.0`, margin + 6, height - margin - 6);
      ctx.textAlign = "right";
      const t = new Date();
      const ts = `${String(t.getUTCHours()).padStart(2, "0")}:${String(t.getUTCMinutes()).padStart(2, "0")}:${String(t.getUTCSeconds()).padStart(2, "0")} UTC`;
      ctx.fillText(ts, width - margin - 6, height - margin - 6);
      ctx.textAlign = "left";

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
