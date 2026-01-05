import React from 'react';

const Bio: React.FC = () => {
  return (
    <section id="about" className="w-full bg-slate-950 text-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait Section */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-lg overflow-hidden border-4 border-red-600 shadow-2xl">
              {/* Portrait Placeholder with gradient and icon */}
              <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-32 h-32 text-white mx-auto mb-4 opacity-80"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white font-bold text-xl">SPYDA MAN</p>
                  <p className="text-red-200 text-sm mt-2">Portrait Coming Soon</p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Bio Text Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-red-600">Meet SPYDA MAN</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                SPYDA MAN is your friendly neighborhood parody hero, swinging through the digital web with humor, charm, and questionable decision-making skills. With great power comes great responsibility—and apparently, a lot of terrible jokes.
              </p>

              <p>
                By day, he's a mild-mannered web developer. By night, he's a mild-mannered web developer who tells jokes at midnight. His extraordinary abilities include spinning intricate webs of code, catching bugs with surprising accuracy, and making puns that would make even the most stoic villain cringe.
              </p>

              <p>
                From his humble beginnings in a New York apartment filled with spider plants (which he's ironically afraid of), SPYDA MAN has risen to become the internet's most questionable superhero. His mission: to protect the digital realm, one bad joke at a time.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded-lg p-4 border border-red-600/30">
                <p className="text-2xl font-bold text-red-600">∞</p>
                <p className="text-sm text-gray-400 mt-2">Jokes Told</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-red-600/30">
                <p className="text-2xl font-bold text-red-600">100%</p>
                <p className="text-sm text-gray-400 mt-2">Parody Certified</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 border border-red-600/30">
                <p className="text-2xl font-bold text-red-600">1</p>
                <p className="text-sm text-gray-400 mt-2">Great Power</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
