import React from 'react';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
