import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Bot, CircuitBoard, Wrench, Palette, Ruler, PenTool, Layers, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { domainsData } from './domainsData';

const iconMap = {
  'AI & Machine Learning': Cpu,
  'Agentic AI': Bot,
  'Digital Twin': Layers,
  'RPA (Automation)': LineChart,
  'Entrepreneurship': PenTool,
  'PCB Design': CircuitBoard,
  'Electronics & Interconnectors': Wrench,
  'Mechanics': Ruler,
  'UI/UX Design': Palette,
};

const Domains = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="domains" className="relative w-full bg-slate-950 py-20 text-white">
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300/40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore multidisciplinary domains</h2>
          <p className="mt-3 text-slate-300">
            Students learn by building — blending engineering principles with modern AI and design
            thinking across real‑world contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domainsData.map(({ title, slug, short }) => {
            const Icon = iconMap[title] ?? Cpu;
            return (
              <Link
                to={`/domain/${slug}`}
                key={slug}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition will-change-transform"
                onMouseEnter={() => setHovered(slug)}
                onMouseLeave={() => setHovered(null)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--x', `${x}px`);
                  e.currentTarget.style.setProperty('--y', `${y}px`);
                  const rx = ((y - rect.height / 2) / rect.height) * -10;
                  const ry = ((x - rect.width / 2) / rect.width) * 10;
                  e.currentTarget.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                }}
              >
                {/* Cursor spotlight */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(200px circle at var(--x) var(--y), rgba(34,211,238,0.15), transparent 60%)',
                  }}
                />

                <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{short}</p>

                <motion.div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl"
                  animate={{ scale: hovered === slug ? [1, 1.15, 1] : 1, opacity: hovered === slug ? 1 : 0 }}
                  transition={{ duration: 1.8, repeat: hovered === slug ? Infinity : 0 }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
