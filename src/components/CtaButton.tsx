import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function CtaButton({ children, className = '', href = '#oferta' }: CtaButtonProps) {
  return (
    <a className={`cta ${className}`.trim()} href={href}>
      {children}
    </a>
  );
}
