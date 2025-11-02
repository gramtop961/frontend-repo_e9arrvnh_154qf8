import React from 'react';
import { Cpu, Bot, CircuitBoard, Wrench, Palette, Ruler, PenTool, Layers, LineChart } from 'lucide-react';

const domains = [
  { title: 'AI & Machine Learning', icon: Cpu, desc: 'Build intuition with models, prompts, and data stories using no‑code tools.' },
  { title: 'Agentic AI', icon: Bot, desc: 'Design autonomous agents that plan, reason, and act to accomplish goals.' },
  { title: 'Digital Twin', icon: Layers, desc: 'Mirror real‑world systems in virtual environments to test and optimize safely.' },
  { title: 'RPA (Automation)', icon: LineChart, desc: 'Automate repetitive tasks and orchestrate workflows for real productivity.' },
  { title: 'Entrepreneurship', icon: PenTool, desc: 'Turn ideas into ventures: problem discovery, prototyping, pitching, and impact.' },
  { title: 'PCB Design', icon: CircuitBoard, desc: 'Design, route, and fabricate simple boards that power your creations.' },
  { title: 'Electronics & Interconnectors', icon: Wrench, desc: 'From sensors to connectors — wire, test, and integrate hardware systems.' },
  { title: 'Mechanics', icon: Ruler, desc: 'Model mechanisms, 3D print parts, and understand forces in motion.' },
  { title: 'UI/UX Design', icon: Palette, desc: 'Design human‑centered interfaces and interactive prototypes that delight.' },
];

const Domains = () => {
  return (
    <section id="domains" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore multidisciplinary domains</h2>
          <p className="mt-3 text-slate-300">
            Students learn by building — blending engineering principles with modern AI and design
            thinking across real‑world contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl transition opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
