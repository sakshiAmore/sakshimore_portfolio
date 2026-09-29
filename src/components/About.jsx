import React from 'react';
import Section from './Section';
import { certifications, education, profile } from '../data';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-lg text-slate-600 leading-relaxed">
        {profile.about.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.qualification} className="border-l-2 border-cyan-600 pl-5">
                <h4 className="font-semibold text-slate-900">{item.qualification}</h4>
                <p className="text-slate-600">{item.institution}</p>
                <p className="text-sm text-slate-500">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Certifications</h3>
          <ul className="space-y-3 text-slate-600">
            {certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
