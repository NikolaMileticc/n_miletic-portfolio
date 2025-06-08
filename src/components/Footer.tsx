import React from 'react';
import { Heart, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            © 2024 Nikola Miletić. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="text-red-400 fill-current" size={16} />
            <span>by a passionate CS student</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-800 text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-2">
            <GraduationCap size={16} />
            <p>Computer Science Student | DevOps Enthusiast | Seeking Internship Opportunities</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;