import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img 
      src="https://i.imgur.com/4MBgTLn.png" 
      alt="Vincent Logo"
      className={className} 
    />
  );
};
