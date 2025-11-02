import React from 'react';
import { CheckCircle, Brain, Layers, Wrench, BookOpen } from 'lucide-react';

const tracks = [
  {
    title: 'No‑Code Foundations',
    icon: BookOpen,
    points: [
      'Drag‑and‑drop apps for AI, automation, and dashboards',
      'Prompting, data fluency, and ethical AI basics',
      'Instant results to spark curiosity and confidence',
    ],
  },
  {
    title: 'Low‑Code Builder',
    icon: Layers,
    points: [
      'APIs, webhooks, and integrations',
      'Sequencing workflows and agent orchestration',
      'Intro to versioning and debugging mindset',
    ],
  },
  {
    title: 'Hands‑On Labs',
    icon: Wrench,
    points: [
      'Electronics, mechanics, and PCB mini‑projects',
      'Digital twins for testing and optimization',
      'Design thinking and rapid prototyping',
    ],
  },
  {
    title: 'AI Studio',
    icon: Brain,
    points: [
      'Build AI copilots and autonomous agents',
      'Experiment with vision, speech, and RAG concepts',
      'Deploy and demo with real users',
    ],
  },
];

const ProgramTracks = () => {
  return (
    <section id="tracks" className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A progressive, project‑based journey</h2>
          <p className="mt-3 text-slate-300">
            Students move from visual creation to thoughtful engineering — mastering AI and systems
            thinking through a sequence of real builds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {tracks.map(({ title, icon: Icon, points }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex items-center gap-3">
                <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300 ring-1 ring-inset ring-violet-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <ul className="mt-2 space-y-3 text-sm text-slate-300">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramTracks;
