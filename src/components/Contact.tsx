import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  Calendar,
  FileText,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "nikola.miletic997@gmail.com",
      href: "mailto:nikola.miletic997@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Novi Sad , Serbia",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/nikola-miletic-student",
      label: "LinkedIn",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/NikolaMileticc",
      label: "GitHub",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com/nikola_miletic",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Interested in discussing internship opportunities or just want to
            connect? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors duration-200 group"
                  >
                    <div className="text-cyan-400 group-hover:text-cyan-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-slate-300 text-sm">{info.label}</div>
                      <div className="text-white font-semibold">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-400/20">
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Calendar className="text-cyan-400" size={20} />
                Internship Availability
              </h4>
              <p className="text-slate-300 mb-4">
                Available for summer 2025 internships and part-time
                opportunities during the academic year. Open to remote, hybrid,
                or on-site positions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  Summer 2025
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                  Full-time
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Part-time
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  Remote Friendly
                </span>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <FileText className="text-cyan-400" size={20} />
                Quick Facts
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Expected graduation: May 2025</li>
                <li>• Available for 3-6 month internships</li>
                <li>• Strong academic background (3.7 GPA)</li>
                <li>• Passionate about DevOps and cloud technologies</li>
                <li>• Quick learner with hands-on project experience</li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-slate-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-slate-400"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-slate-400"
                  placeholder="Internship Opportunity / General Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-slate-400 resize-none"
                  placeholder="Tell me about the internship opportunity or how we can connect..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
