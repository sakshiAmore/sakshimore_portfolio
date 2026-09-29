import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isScrolled || open ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false); }}
            className="text-2xl font-bold text-slate-900 hover:text-cyan-600 transition-colors"
          >
            SM
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}
                className="relative group text-slate-600 hover:text-cyan-600 font-medium transition-colors">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium">Resume</a>
            <a href={`${import.meta.env.BASE_URL}cover-letter.pdf`} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors font-medium">Cover Letter</a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
            className="md:hidden p-2 text-slate-600 hover:text-cyan-600">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <motion.div style={{ scaleX }} className="absolute bottom-0 inset-x-0 h-1 origin-left bg-gradient-to-r from-cyan-600 to-orange-500" />
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className="text-2xl font-semibold text-slate-900 hover:text-cyan-600">{l.label}</motion.a>
              ))}
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer"
                className="px-8 py-3 bg-cyan-600 text-white rounded-lg font-medium text-lg">Resume</a>
              <a href={`${import.meta.env.BASE_URL}cover-letter.pdf`} target="_blank" rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg font-medium text-lg">Cover Letter</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
