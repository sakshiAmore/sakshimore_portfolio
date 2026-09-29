import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, title, children, alt = false }) {
  return (
    <section id={id} className={`py-24 ${alt ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-600 to-orange-500 rounded mb-12" />
          {children}
        </motion.div>
      </div>
    </section>
  );
}
