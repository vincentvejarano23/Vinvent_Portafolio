
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ children, className = '', style }) => {
  return (
    <section className={`py-20 md:py-32 ${className}`} style={style}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
