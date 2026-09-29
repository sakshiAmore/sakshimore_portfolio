import React from 'react';
import Section from './Section';
import { skills } from '../data';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" alt>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="px-3 py-1 text-sm rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
