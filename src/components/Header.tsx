import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size="md" />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-red-600">SPYDA MAN</h1>
            <p className="text-xs sm:text-sm text-gray-300">Your Friendly Neighborhood Parody</p>
          </div>
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#gallery" className="hover:text-red-600 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
