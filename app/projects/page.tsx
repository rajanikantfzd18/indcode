"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink,
  Github,
  Globe,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Filter,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  Award
} from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "design", label: "UI/UX Design" },
  ];

  const projects = [
    {
      id: 1,
      category: "web",
      title: "E-commerce Analytics Dashboard",
      description: "Real-time analytics platform for e-commerce businesses with predictive insights.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "D3.js"],
      imageColor: "from-blue-500 to-cyan-500",
      liveUrl: "https://demo.indcode.com",
      githubUrl: "https://github.com",
      stats: { timeline: "8 weeks", team: "3 members", clients: "500+" },
      featured: true
    },
    {
      id: 2,
      category: "mobile",
      title: "Health & Fitness Tracker",
      description: "Cross-platform fitness app with AI-powered workout plans and progress tracking.",
      technologies: ["React Native", "Firebase", "TensorFlow.js"],
      imageColor: "from-purple-500 to-pink-500",
      liveUrl: "https://appstore.com",
      stats: { timeline: "12 weeks", team: "4 members", clients: "10K+" },
      featured: true
    },
    {
      id: 3,
      category: "saas",
      title: "Project Management Suite",
      description: "Comprehensive project management tool for remote teams with real-time collaboration.",
      technologies: ["Vue.js", "Django", "Redis", "WebSockets"],
      imageColor: "from-green-500 to-emerald-500",
      liveUrl: "https://pm.indcode.com",
      stats: { timeline: "16 weeks", team: "6 members", clients: "200+" },
      featured: false
    },
    {
      id: 4,
      category: "design",
      title: "Banking App Redesign",
      description: "Complete UI/UX redesign for a digital banking application focusing on user experience.",
      technologies: ["Figma", "Adobe XD", "After Effects"],
      imageColor: "from-orange-500 to-amber-500",
      liveUrl: "https://dribbble.com",
      stats: { timeline: "6 weeks", team: "2 members", clients: "Bank" },
      featured: false
    },
    {
      id: 5,
      category: "web",
      title: "Real Estate Platform",
      description: "Property listing platform with virtual tours and AI-based recommendations.",
      technologies: ["React", "NestJS", "MongoDB", "Three.js"],
      imageColor: "from-red-500 to-rose-500",
      liveUrl: "https://realestate.indcode.com",
      stats: { timeline: "10 weeks", team: "5 members", clients: "50+" },
      featured: true
    },
    {
      id: 6,
      category: "mobile",
      title: "Food Delivery App",
      description: "End-to-end food delivery solution with real-time tracking and payments.",
      technologies: ["Flutter", "Node.js", "Stripe", "Google Maps"],
      imageColor: "from-yellow-500 to-lime-500",
      liveUrl: "https://playstore.com",
      stats: { timeline: "14 weeks", team: "5 members", clients: "5K+" },
      featured: false
    },
  ];

  const stats = [
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "30+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Client Retention" },
    { icon: Clock, value: "1000+", label: "Development Hours" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">OUR PORTFOLIO</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 mb-6">
              Projects That
              <span className="block mt-4">Define <span className="text-blue-400">Excellence</span></span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Explore our portfolio of innovative digital solutions that have helped 
              businesses achieve remarkable growth and transformation.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-blue-500/10 mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {activeFilter === filter.id && <Filter className="w-4 h-4" />}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-full shadow-lg">
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Image Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/30">
                      {project.category === "web" && <Globe className="w-16 h-16" />}
                      {project.category === "mobile" && <Smartphone className="w-16 h-16" />}
                      {project.category === "saas" && <Cloud className="w-16 h-16" />}
                      {project.category === "design" && <Palette className="w-16 h-16" />}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Timeline</div>
                      <div className="text-sm font-semibold">{project.stats.timeline}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Team</div>
                      <div className="text-sm font-semibold">{project.stats.team}</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Impact</div>
                      <div className="text-sm font-semibold">{project.stats.clients}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              CLIENT FEEDBACK
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl font-bold text-white"
            >
              What Our <span className="text-blue-400">Clients Say</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                feedback: "Indcode transformed our MVP into a scalable product that attracted major investors. Exceptional work!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CTO, RetailPro",
                feedback: "The e-commerce platform they built increased our sales by 300%. Highly recommend their expertise.",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Product Manager, HealthPlus",
                feedback: "Their mobile app development exceeded our expectations. The team is professional and highly skilled.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.feedback}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start <span className="text-blue-400">Your Project</span>?
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}