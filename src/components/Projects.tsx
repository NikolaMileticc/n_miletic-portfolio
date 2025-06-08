import React from 'react';
import { ExternalLink, Github, Cloud, Database, Activity, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Cloud Infrastructure',
      description: 'Built a complete AWS infrastructure using Terraform to host multiple web applications with automated CI/CD pipelines and monitoring.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
      achievements: [
        'Automated infrastructure provisioning with Terraform',
        'Implemented CI/CD pipeline with GitHub Actions',
        'Set up monitoring with CloudWatch and SNS alerts',
        'Configured auto-scaling and load balancing'
      ],
      technologies: ['AWS EC2', 'Terraform', 'Docker', 'GitHub Actions', 'CloudWatch'],
      icon: <Cloud size={24} />,
      type: 'Personal Project'
    },
    {
      title: 'Containerized Microservices App',
      description: 'Developed a multi-service application using Docker and Docker Compose, implementing service discovery and inter-service communication.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Docker', 'Node.js', 'PostgreSQL', 'Redis'],
      achievements: [
        'Containerized 5 different microservices',
        'Implemented service mesh communication',
        'Set up development environment with Docker Compose',
        'Created health checks and logging strategies'
      ],
      technologies: ['Docker', 'Docker Compose', 'Node.js', 'PostgreSQL', 'Redis'],
      icon: <Database size={24} />,
      type: 'Academic Project'
    },
    {
      title: 'Automated Deployment Pipeline',
      description: 'Created a complete CI/CD pipeline for a web application using Jenkins, including automated testing, building, and deployment to staging/production.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Jenkins', 'Python', 'Docker', 'AWS'],
      achievements: [
        'Automated testing and code quality checks',
        'Implemented blue-green deployment strategy',
        'Set up automated rollback mechanisms',
        'Created deployment notifications and reporting'
      ],
      technologies: ['Jenkins', 'Python', 'Docker', 'AWS S3', 'Slack API'],
      icon: <Activity size={24} />,
      type: 'Learning Project'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects & Learning</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Hands-on projects demonstrating my passion for DevOps and continuous learning through practical implementation
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-cyan-400">
                      {project.icon}
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">{project.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">What I Learned</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      <Github size={16} />
                      View Code
                    </button>
                    <button className="flex items-center gap-2 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                  </div>
                </div>

                <div className="lg:p-8 p-4">
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-xl border border-cyan-400/20 max-w-3xl mx-auto">
            <Code className="text-cyan-400 mx-auto mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-3">Always Learning</h3>
            <p className="text-slate-300 leading-relaxed">
              These projects represent my journey in learning DevOps practices. I'm constantly working on new projects and exploring emerging technologies to expand my knowledge and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;