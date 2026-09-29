import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, MapPin } from 'lucide-react';
import Button from './ui/Button';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const social = 'p-3 rounded-full border-2 border-slate-200 text-slate-600 hover:border-cyan-600 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300';

export default function Hero() {
  const toProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <motion.p {...fade(0)} className="text-sm sm:text-base font-medium text-cyan-600 tracking-wider uppercase">
                {profile.roles}
              </motion.p>
              <motion.h1 {...fade(0.1)} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight">
                {profile.name}
              </motion.h1>
            </div>

            <motion.p {...fade(0.3)} className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl">
              {profile.tagline}
            </motion.p>

            <motion.div {...fade(0.4)} className="flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-600" />{profile.location}</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />Open to opportunities
              </span>
            </motion.div>

            <motion.div {...fade(0.5)} className="flex flex-wrap gap-4">
              <Button onClick={toProjects}>View Projects</Button>
              <Button variant="outline" href={`${import.meta.env.BASE_URL}resume.pdf`}>Resume</Button>
              <Button variant="outline" href={`${import.meta.env.BASE_URL}cover-letter.pdf`}>Cover Letter</Button>
            </motion.div>

            <motion.div {...fade(0.6)} className="flex gap-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={social}><GithubIcon className="w-5 h-5" /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={social}><LinkedinIcon className="w-5 h-5" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className={social}><Mail className="w-5 h-5" /></a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }} className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 via-cyan-500 to-orange-400 rounded-3xl blur-2xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                <img src={`${import.meta.env.BASE_URL}sakshi-photo.jpg`} alt={profile.name} className="w-full h-auto object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl shadow-xl p-5 border border-emerald-100"
              >
                <div className="text-sm text-slate-500 mb-1">Status</div>
                <div className="text-lg font-bold text-emerald-600 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />Open to Work
                </div>
                <div className="text-sm text-slate-600 font-medium">Data Science • AI/ML Engineer • Generative AI • Data Analyst</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={toProjects} aria-label="Scroll down"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </motion.button>
    </section>
  );
}
