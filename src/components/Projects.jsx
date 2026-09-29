import React from 'react';
import { ExternalLink } from 'lucide-react';
import Section from './Section';
import { projects } from '../data';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-slate-900 mb-2 flex items-center justify-between">
              {p.title}
              {p.link && p.link !== '#' && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`}>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-600" />
                </a>
              )}
            </h3>
            <p className="text-slate-600 mb-4">{p.description}</p>
            <ul className="mb-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
              {p.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
