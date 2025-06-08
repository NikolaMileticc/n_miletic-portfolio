import React from "react";
import { Code, Database, GraduationCap, BookOpen, Target } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", level: 85 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Linux", level: 80 },
    { name: "Git/GitHub", level: 90 },
    { name: "Terraform", level: 65 },
  ];

  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: "4th Year",
      subtitle: "Computer Science",
      description: "Expected graduation 2025",
    },
    {
      icon: <BookOpen size={24} />,
      title: "3.7",
      subtitle: "GPA",
      description: "Strong academic performance",
    },
    {
      icon: <Target size={24} />,
      title: "10+",
      subtitle: "Personal Projects",
      description: "Hands-on learning experience",
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Systems",
    "Computer Networks",
    "Operating Systems",
    "Cloud Computing",
  ];

  const interests = [
    "Cloud Infrastructure & AWS",
    "Container Technologies (Docker, Kubernetes)",
    "Infrastructure as Code (Terraform)",
    "CI/CD Pipeline Development",
    "System Administration & Linux",
    "Automation & Scripting",
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Passionate Computer Science student eager to apply academic
            knowledge in real-world DevOps environments
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-cyan-400">{highlight.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {highlight.title}
              </h3>
              <p className="text-cyan-400 font-semibold mb-2">
                {highlight.subtitle}
              </p>
              <p className="text-slate-300 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="text-cyan-400" size={28} />
                My Journey
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a fourth-year Computer Science student with a growing
                  passion for DevOps and cloud technologies. Through coursework
                  and personal projects, I've developed a strong foundation in
                  software development and system administration.
                </p>
                <p>
                  My interest in DevOps began during a cloud computing course
                  where I discovered the power of automation and infrastructure
                  as code. Since then, I've been actively learning AWS, Docker,
                  and various DevOps tools through hands-on projects.
                </p>
                <p>
                  I'm eager to apply my academic knowledge in a professional
                  environment and contribute to real-world infrastructure
                  challenges while continuing to learn from experienced
                  professionals.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-400/20">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <BookOpen className="text-cyan-400" size={24} />
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <Database className="text-cyan-400" size={24} />
                Technical Skills
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <Target className="text-cyan-400" size={24} />
                Areas of Interest
              </h4>
              <p className="text-slate-300 leading-relaxed mb-4">
                Passionate about modern infrastructure practices and eager to
                learn from industry professionals in a collaborative
                environment.
              </p>
              <div className="space-y-2">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 p-6 rounded-xl border border-green-400/20">
              <h4 className="text-lg font-semibold text-white mb-3">
                🎯 Internship Goals
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Seeking opportunities to contribute to DevOps teams while
                gaining hands-on experience with enterprise-scale
                infrastructure, automation tools, and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
