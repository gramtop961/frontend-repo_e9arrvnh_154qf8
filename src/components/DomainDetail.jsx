import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { domainsData } from './domainsData';

const accentMap = {
  cyan: {
    gradient: 'from-cyan-400/20 to-cyan-400/0',
    text: 'text-cyan-200',
    ring: 'ring-cyan-400/20',
    glow: 'bg-cyan-400/10',
  },
  violet: {
    gradient: 'from-violet-400/20 to-violet-400/0',
    text: 'text-violet-200',
    ring: 'ring-violet-400/20',
    glow: 'bg-violet-400/10',
  },
  fuchsia: {
    gradient: 'from-fuchsia-400/20 to-fuchsia-400/0',
    text: 'text-fuchsia-200',
    ring: 'ring-fuchsia-400/20',
    glow: 'bg-fuchsia-400/10',
  },
  emerald: {
    gradient: 'from-emerald-400/20 to-emerald-400/0',
    text: 'text-emerald-200',
    ring: 'ring-emerald-400/20',
    glow: 'bg-emerald-400/10',
  },
  amber: {
    gradient: 'from-amber-400/20 to-amber-400/0',
    text: 'text-amber-200',
    ring: 'ring-amber-400/20',
    glow: 'bg-amber-400/10',
  },
  sky: {
    gradient: 'from-sky-400/20 to-sky-400/0',
    text: 'text-sky-200',
    ring: 'ring-sky-400/20',
    glow: 'bg-sky-400/10',
  },
  rose: {
    gradient: 'from-rose-400/20 to-rose-400/0',
    text: 'text-rose-200',
    ring: 'ring-rose-400/20',
    glow: 'bg-rose-400/10',
  },
  indigo: {
    gradient: 'from-indigo-400/20 to-indigo-400/0',
    text: 'text-indigo-200',
    ring: 'ring-indigo-400/20',
    glow: 'bg-indigo-400/10',
  },
  purple: {
    gradient: 'from-purple-400/20 to-purple-400/0',
    text: 'text-purple-200',
    ring: 'ring-purple-400/20',
    glow: 'bg-purple-400/10',
  },
};

// Optional: different Spline scenes per vibe (kept same for stability).
const sceneUrl = 'https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode';

const DomainDetail = () => {
  const { slug } = useParams();
  const domain = domainsData.find((d) => d.slug === slug);

  if (!domain) {
    return (
      <div className="min-h-[70vh] grid place-items-center bg-slate-950 text-white px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Domain not found</h1>
          <p className="mt-2 text-slate-400">The page you are looking for does not exist.</p>
          <Link to="/" className="mt-6 inline-block rounded-lg bg-white/10 px-4 py-2 hover:bg-white/20">Go home</Link>
        </div>
      </div>
    );
  }

  const accent = accentMap[domain.accent] ?? accentMap.cyan;

  // Anime-style floating petals/sparkles
  const petals = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 6,
    scale: 0.6 + Math.random() * 0.9,
  }));

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Contrast overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-slate-950/80" />

      {/* Accent anime glow */}
      <div className={`pointer-events-none absolute -inset-20 blur-3xl bg-gradient-to-br ${accent.gradient}`} />

      {/* Floating sparkles/petals for anime feel */}
      <div className="pointer-events-none absolute inset-0">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            className={`absolute h-2 w-3 rotate-12 rounded-full ${accent.glow}`}
            style={{ left: `${p.left}%`, top: '-10%' }}
            initial={{ y: -50, opacity: 0, rotate: 0 }}
            animate={{ y: '120vh', opacity: [0, 0.8, 0], rotate: [0, 45, -30, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <Link to="/" className={`inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20 ${accent.text}`}>
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 ring-1 ring-inset ${accent.ring} backdrop-blur`}>
              <Sparkles className={`h-4 w-4 ${accent.text}`} />
              <span className="text-xs tracking-wide">Domain</span>
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {domain.title}
            </h1>
            <p className="max-w-prose text-slate-300">{domain.short}</p>

            <ul className="mt-6 space-y-3">
              {domain.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className={`pointer-events-none absolute -inset-10 blur-3xl bg-gradient-to-br ${accent.gradient}`} />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                {/* Anime speedlines */}
                <div className="absolute inset-0 opacity-40">
                  {[...Array(16)].map((_, i) => (
                    <motion.span
                      key={i}
                      className={`absolute left-1/2 top-1/2 h-px w-40 -translate-x-1/2 -translate-y-1/2 bg-white/60`}
                      style={{ rotate: i * (360 / 16) }}
                      animate={{ x: [0, 30, 0], opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
                {/* Soft radial center to mimic lens flare */}
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_60%)]" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">Anime‑style motion, glow accents, and interactive visuals bring this domain to life.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DomainDetail;
