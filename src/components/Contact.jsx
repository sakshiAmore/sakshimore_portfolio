import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from './Section';
import Button from './ui/Button';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-lg text-slate-600 max-w-2xl mb-8">
        Open to Data Science • AI/ML Engineer • Generative AI • Data Analyst opportunities. The quickest way to reach me is email.
      </p>
      <div className="flex flex-wrap gap-4 mb-8">
        <Button href={`mailto:${profile.email}`}><Mail className="w-5 h-5 mr-2" />{profile.email}</Button>
        <Button variant="outline" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}><Phone className="w-5 h-5 mr-2" />{profile.phone}</Button>
        <Button variant="outline" href={profile.linkedin}><LinkedinIcon className="w-5 h-5 mr-2" />LinkedIn</Button>
        <Button variant="outline" href={profile.github}><GithubIcon className="w-5 h-5 mr-2" />GitHub</Button>
      </div>
      <p className="flex items-center gap-2 text-slate-500"><MapPin className="w-4 h-4" />{profile.location}</p>
    </Section>
  );
}
