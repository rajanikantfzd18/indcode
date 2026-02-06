"use client";

import { useState } from "react";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  Cpu,
  Palette,
  Server,
  Brain,
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Lock
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "web", label: "Web Solutions" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "ai", label: "AI & Automation" },
  ];

  const services = [
    {
      id: 1,
      category: "web",
      icon: Globe,
      title: "Enterprise Web Development",
      description: "Scalable, high-performance web applications built with modern frameworks like Next.js, React, and Node.js.",
      features: ["Custom CMS", "E-commerce Solutions", "API Integration", "Real-time Features"],
      price: "From $5,000",
      duration: "4-8 Weeks",
      popular: true
    },
    {
      id: 2,
      category: "mobile",
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      description: "Native-like mobile experiences using React Native and Flutter for iOS and Android.",
      features: ["Offline Support", "Push Notifications", "App Store Deployment", "In-App Purchases"],
      price: "From $8,000",
      duration: "6-12 Weeks",
      popular: false
    },
    {
      id: 3,
      category: "cloud",
      icon: Cloud,
      title: "Cloud Architecture & DevOps",
      description: "End-to-end cloud solutions with AWS, Azure, and Google Cloud Platform. Automated CI/CD pipelines.",
      features: ["Microservices", "CI/CD Pipelines", "Containerization", "Auto-scaling"],
      price: "From $3,000",
      duration: "2-4 Weeks",
      popular: true
    },
    {
      id: 4,
      category: "ai",
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions with predictive analytics, chatbots, and automation.",
      features: ["ChatGPT Integration", "Predictive Models", "Computer Vision", "NLP Processing"],
      price: "From $10,000",
      duration: "8-16 Weeks",
      popular: false
    },
    {
      id: 5,
      category: "web",
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design with interactive prototypes and design systems.",
      features: ["User Research", "Wireframing", "Design Systems", "Usability Testing"],
      price: "From $2,500",
      duration: "2-6 Weeks",
      popular: false
    },
    {
      id: 6,
      category: "cloud",
      icon: Server,
      title: "Database Architecture",
      description: "Optimized database solutions with MongoDB, PostgreSQL, and Redis.",
      features: ["Data Migration", "Query Optimization", "Backup Solutions", "Real-time Sync"],
      price: "From $4,000",
      duration: "3-6 Weeks",
      popular: false
    },
    {
      id: 7,
      category: "ai",
      icon: Zap,
      title: "Business Process Automation",
      description: "Automate workflows and increase efficiency with custom automation tools.",
      features: ["Workflow Design", "RPA", "API Automation", "Report Generation"],
      price: "From $6,000",
      duration: "4-10 Weeks",
      popular: true
    },
    {
      id: 8,
      category: "web",
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade security audits, penetration testing, and secure architecture.",
      features: ["Security Audits", "Penetration Testing", "SSL Implementation", "GDPR Compliance"],
      price: "From $3,500",
      duration: "2-5 Weeks",
      popular: false
    },
    {
      id: 9,
      category: "mobile",
      icon: BarChart3,
      title: "Progressive Web Apps (PWA)",
      description: "Native app-like experiences that work offline and install on devices.",
      features: ["Offline Functionality", "Push Notifications", "App-like UI", "Cross-platform"],
      price: "From $7,000",
      duration: "5-10 Weeks",
      popular: true
    },
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Engineers" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - Same as Home Page */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">OUR SERVICES</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 mb-6">
              Building Digital
              <span className="block mt-4">Products for the <span className="text-blue-400">Future</span></span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              We deliver cutting-edge digital solutions that drive growth, enhance efficiency, 
              and create lasting value for your business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs - Home Page Colors */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-800"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid - Home Page Colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/25">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price & Duration */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
                <div className="text-sm text-gray-500">
                  <Target className="w-4 h-4 inline mr-1 text-blue-400" />
                  {service.category.toUpperCase()}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section - Home Page Colors */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Development Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A structured approach ensuring quality, transparency, and timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Discovery", desc: "Requirement analysis & planning" },
              { icon: Palette, title: "Design", desc: "UI/UX design & prototyping" },
              { icon: Code2, title: "Development", desc: "Agile development & testing" },
              { icon: Rocket, title: "Deployment", desc: "Launch & ongoing support" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{step.title}</div>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Home Page Colors */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Build Something <span className="text-blue-400">Impactful</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Partner with Indcode Technologies to transform your ideas into scalable digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20">
                Schedule a Free Consultation
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