import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { domainsData } from './domainsData';

const accentMap = {
  cyan: 'from-cyan-400/20 to-cyan-400/0 text-cyan-200 ring-cyan-400/20',
  violet: 'from-violet-400/20 to-violet-400/0 text-violet-200 ring-violet-400/20',
  fuchsia: 'from-fuchsia-400/20 to-fuchsia-400/0 text-fuchsia-200 ring-fuchsia-400/20',
  emerald: 'from-emerald-400/20 to-emerald-400/0 text-emerald-200 ring-emerald-400/20',
  amber: 'from-amber-400/20 to-amber-400/0 text-amber-200 ring-amber-400/20',
  sky: 'from-sky-400/20 to-sky-400/0 text-sky-200 ring-sky-400/20',
  rose: 'from-rose-400/20 to-rose-400/0 text-rose-200 ring-rose-400/20',
  indigo: 'from-indigo-400/20 to-indigo-400/0 text-indigo-200 ring-indigo-400/20',
  purple: 'from-purple-400/20 to-purple-400/0 text-purple-200 ring-purple-400/20',
};

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

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-slate-950/80" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 ring-1 ring-inset ${accent.split(' ').slice(-1)} backdrop-blur`}>
              <span className="h-2 w-2 rounded-full bg-current"></span>
              <span className="text-xs tracking-wide">Domain</span>
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{domain.title}</h1>
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
            <div className={`pointer-events-none absolute -inset-10 blur-3xl bg-gradient-to-br ${accent}`} />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
            </div>
            <p className="mt-4 text-sm text-slate-400">Interactive 3D concepts, mini‑simulations, and visual demos accompany this track.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DomainDetail;
