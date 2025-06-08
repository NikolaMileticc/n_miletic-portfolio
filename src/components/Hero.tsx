import React from "react";
import { Download, Mail, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-cyan-400" size={32} />
                <span className="text-cyan-400 font-semibold">
                  Software Engineering Student
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-white">Nikola Miletić</span>
                <br />
                <span className="text-cyan-400">DevOps Enthusiast</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Fourth-year SWE student passionate about cloud infrastructure,
                <br />
                automation, and modern development practices.
              </p>
              <p className="text-lg text-slate-400">
                🎯 Actively seeking DevOps/Infrastructure internship
                opportunities
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <button className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <img
                    src="/img/slika.jpg"
                    alt="Nikola Miletic"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
