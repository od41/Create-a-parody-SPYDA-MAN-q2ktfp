import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="mb-8 animate-bounce">
          <h2 className="text-red-600 text-lg sm:text-xl font-bold tracking-widest uppercase mb-4">
            Welcome to the Web
          </h2>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="text-red-600">SPYDA MAN</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mt-4">
            Probably Your Friendly Neighborhood Hero
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          With great power comes great responsibility... and apparently a lot of web-building. Discover the hilarious adventures of everyone's favorite parody superhero.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Powers
          </Button>
          <Button
            size="lg"
            className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-base px-8 py-6 rounded-lg transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-10 right-10 text-red-600 opacity-20">
          <svg className="w-20 h-20 animate-spin" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="absolute bottom-10 left-10 text-red-600 opacity-20">
          <svg className="w-24 h-24 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5m-11-5v5m7-5v5m-9 .75h12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
