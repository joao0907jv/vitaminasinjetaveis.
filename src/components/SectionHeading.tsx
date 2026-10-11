import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  children: React.ReactNode;
}

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{children}</h2>
      <i />
    </div>
  );
}
