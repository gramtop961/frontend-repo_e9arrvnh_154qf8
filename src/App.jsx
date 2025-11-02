import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Domains from './components/Domains.jsx';
import ProgramTracks from './components/ProgramTracks.jsx';
import CTA from './components/CTA.jsx';
import DomainDetail from './components/DomainDetail.jsx';
import { Rocket } from 'lucide-react';

function HomePage() {
  return (
    <>
      <Hero />
      <Domains />
      <ProgramTracks />
      <CTA />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-slate-950 text-white">
        {/* Top bar */}
        <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-200">STEM & AI Innovation</span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
              <a className="hover:text-white" href="/#domains">Domains</a>
              <a className="hover:text-white" href="/#tracks">Tracks</a>
              <a className="hover:text-white" href="/#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/domain/:slug" element={<DomainDetail />} />
          </Routes>
        </main>

        <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} STEM & AI Innovation Program — Empowering next‑gen creators.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
