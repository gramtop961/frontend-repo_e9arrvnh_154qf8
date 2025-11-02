import React from 'react';
import { ArrowRight, Mail, Calendar, Globe } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">Bring the Innovation Program to your school</h3>
            <p className="mt-3 text-slate-300">
              We offer flexible in‑school labs, after‑school clubs, and intensive bootcamps with mentor
              support, teacher enablement, and ready‑to‑run resources.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Book an intro session
                <Calendar className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@innovation.school"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20"
              >
                Email us
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-cyan-300" /> Global & blended</div>
              <div className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-cyan-300" /> Student portfolios</div>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/10 via-violet-400/10 to-fuchsia-400/10 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-950 p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Duration</div>
                  <div className="mt-1 font-semibold">6–12 weeks</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Format</div>
                  <div className="mt-1 font-semibold">Labs + Projects</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Focus</div>
                  <div className="mt-1 font-semibold">No‑/Low‑Code + Hands‑On</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-slate-400">Outcomes</div>
                  <div className="mt-1 font-semibold">Portfolio + Demo Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
