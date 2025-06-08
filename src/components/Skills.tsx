import React from 'react';
import { Cloud, Database, GitBranch, Shield, Cpu, Network } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Cloud Platforms',
      icon: <Cloud size={24} />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean']
    },
    {
      category: 'Containerization & Orchestration',
      icon: <Database size={24} />,
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Helm']
    },
    {
      category: 'CI/CD & Version Control',
      icon: <GitBranch size={24} />,
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Git']
    },
    {
      category: 'Infrastructure as Code',
      icon: <Cpu size={24} />,
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
    },
    {
      category: 'Monitoring & Observability',
      icon: <Network size={24} />,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    },
    {
      category: 'Security & Compliance',
      icon: <Shield size={24} />,
      skills: ['Vault', 'OWASP', 'SonarQube', 'Security Scanning']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Technical expertise across the full DevOps lifecycle and modern infrastructure technologies
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Cpu className="text-cyan-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Core Technologies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
            <h4 className="text-xl font-semibold text-white mb-3">Continuous Learning</h4>
            <p className="text-slate-300 mb-4">
              Staying current with emerging technologies and best practices in cloud computing, automation, and infrastructure management to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Cloud Native</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Site Reliability</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Security First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;