import React, { useState } from 'react';
import { mockJokes, type Joke } from '@/data/jokes';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Jokes: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleJoke = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="jokes" className="w-full bg-slate-900 text-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-600">SPYDA MAN</span> Jokes
          </h2>
          <p className="text-gray-400 text-lg">Get a laugh from your friendly neighborhood parody hero</p>
        </div>

        <div className="space-y-4">
          {mockJokes.map((joke: Joke) => (
            <div
              key={joke.id}
              className="bg-slate-800 rounded-lg border border-red-600/30 overflow-hidden hover:border-red-600/60 transition-colors"
            >
              <button
                onClick={() => toggleJoke(joke.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-left text-lg font-semibold text-gray-100">{joke.setup}</span>
                <ChevronDown
                  className={`w-5 h-5 text-red-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedId === joke.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === joke.id && (
                <div className="bg-slate-700/30 border-t border-red-600/20 px-6 py-4 animate-in fade-in">
                  <p className="text-gray-300 text-lg italic">{joke.punchline}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Need more laughs? Share SPYDA MAN's jokes with your friends!</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300">
            Share the Humor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jokes;
