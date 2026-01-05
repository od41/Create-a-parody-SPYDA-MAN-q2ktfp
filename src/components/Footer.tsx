import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Branding Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Logo size="md" />
              <h2 className="text-lg font-bold text-red-600">SPYDA MAN</h2>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Your Friendly Neighborhood Parody
            </p>
          </div>

          {/* Legal Links Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-200 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#terms"
                  className="text-sm text-gray-400 hover:text-red-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-gray-400 hover:text-red-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-sm text-gray-400 hover:text-red-600 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Logo Section */}
          <div className="flex flex-col items-center md:items-end">
            <Logo size="md" />
            <p className="text-xs text-gray-500 mt-2">Made with ♥️ for Spider-lovers</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} SPYDA MAN. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              This is a parody website created for entertainment purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
