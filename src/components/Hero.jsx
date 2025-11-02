import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays to improve text contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-medium tracking-wide text-cyan-200">
              Next‑Gen STEM & AI Innovation Program
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Build future‑ready creators with Engineering, Design, and AI
          </h1>

          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            A hands‑on learning ecosystem where students explore AI & Machine Learning, Agentic AI,
            Digital Twins, RPA, Electronics, Mechanics, PCB Design, and UI/UX through no‑code and
            low‑code platforms.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#tracks"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-slate-900 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Explore Learning Paths
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              Program Guide
              <Shield className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-cyan-300" />
              <span>For Grades 6–12</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cyan-300" />
              <span>Safe, guided learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
