import React from 'react';

const styles = {
  primary: 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-600/30',
  outline: 'border-2 border-slate-300 text-slate-800 hover:border-cyan-600 hover:text-cyan-600',
};

export default function Button({ variant = 'primary', className = '', href, children, ...props }) {
  const cls = `inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`;
  if (href) {
    const external = href.startsWith('http') || href.endsWith('.pdf');
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
        {children}
      </a>
    );
  }
  return <button className={cls} {...props}>{children}</button>;
}
