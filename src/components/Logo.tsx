import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${sizeMap[size]}`}>
      <img
        src="/src/assets/logo-placeholder.svg"
        alt="SPYDA MAN Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
