import React from 'react';
import Section from './Section';
import { experience } from '../data';

export default function Experience() {
  return (
    <Section id="experience" title="Experience" alt>
      <div className="space-y-8 border-l-2 border-cyan-200 pl-6">
        {experience.map((e) => (
          <div key={e.role + e.company} className="relative">
            <span className="absolute -left-[33px] top-2 w-3 h-3 rounded-full bg-cyan-600 ring-4 ring-white" />
            <h3 className="text-xl font-semibold text-slate-900">{e.role}</h3>
            <p className="text-cyan-700 font-medium">{e.company} <span className="text-slate-500 font-normal">· {e.period}</span></p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-600">
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
