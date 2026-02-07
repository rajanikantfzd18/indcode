"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Users,
  Trophy,
  Zap,
  Heart,
  Sparkles,
  DollarSign,
  Clock,
  MapPin,
  Calendar,
  ExternalLink,
  ArrowRight,
  Coffee,
  Globe,
  Award,
  Target
} from "lucide-react";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("openings");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      salary: "$80,000 - $120,000",
      description: "Build cutting-edge web applications using React, Next.js, and modern frontend technologies.",
      requirements: ["Expert in React & TypeScript", "Experience with Next.js", "Knowledge of modern CSS", "API integration"],
      featured: true
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      type: "Full-time",
      location: "Hybrid",
      experience: "2+ years",
      salary: "$60,000 - $90,000",
      description: "Create beautiful and intuitive user interfaces for web and mobile applications.",
      requirements: ["Proficient in Figma", "User research skills", "Prototyping", "Design systems"],
      featured: true
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      salary: "$85,000 - $130,000",
      description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
      requirements: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD tools", "Infrastructure as Code"],
      featured: false
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      type: "Full-time",
      location: "On-site",
      experience: "4+ years",
      salary: "$90,000 - $140,000",
      description: "Lead product strategy and work closely with engineering and design teams.",
      requirements: ["Product lifecycle management", "Agile methodologies", "Data analysis", "Roadmap planning"],
      featured: false
    },
    {
      id: 5,
      title: "Backend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      salary: "$70,000 - $110,000",
      description: "Develop scalable backend services and APIs using Node.js and modern frameworks.",
      requirements: ["Node.js/Express", "Database design", "REST/GraphQL APIs", "Microservices"],
      featured: false
    },
    {
      id: 6,
      title: "Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Hybrid",
      experience: "2+ years",
      salary: "$50,000 - $80,000",
      description: "Drive our digital marketing strategy and brand awareness campaigns.",
      requirements: ["Content creation", "SEO/SEM", "Social media", "Analytics"],
      featured: false
    },
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", desc: "Above industry standard packages" },
    { icon: Clock, title: "Flexible Hours", desc: "Work when you're most productive" },
    { icon: Globe, title: "Remote Work", desc: "Work from anywhere in the world" },
    { icon: Heart, title: "Health Insurance", desc: "Comprehensive medical coverage" },
    { icon: GraduationCap, title: "Learning Budget", desc: "$1,000 annual learning stipend" },
    { icon: Coffee, title: "Wellness Program", desc: "Gym memberships & wellness apps" },
    { icon: Trophy, title: "Career Growth", desc: "Clear promotion paths & mentorship" },
    { icon: Award, title: "Stock Options", desc: "Own a piece of the company" },
  ];

  const culture = [
    "Flat hierarchy with open communication",
    "Weekly knowledge sharing sessions",
    "Regular team building activities",
    "Focus on work-life balance",
    "Innovation time for personal projects",
    "Diverse and inclusive environment"
  ];

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
              <span className="text-blue-400 text-sm font-medium">JOIN OUR TEAM</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 mb-6">
              Build Your
              <span className="block mt-4">Career With <span className="text-blue-400">Purpose</span></span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join a passionate team that's shaping the future of technology.
              Work on challenging projects, grow your skills, and make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "openings", label: "Open Positions", icon: Briefcase },
              { id: "benefits", label: "Benefits", icon: Heart },
              { id: "culture", label: "Culture", icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                  }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Open Positions */}
          {activeTab === "openings" && (
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Featured Badge */}
                  {job.featured && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-full mb-4">
                      <Zap className="w-3 h-3" />
                      Featured
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                          {job.department}
                        </span>
                      </div>

                      <p className="text-gray-400 mb-6">{job.description}</p>

                      {/* Job Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-300">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-300">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-300">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-300">{job.salary}</span>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-gray-400 text-sm mb-2">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div>
                      <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Benefits */}
          {activeTab === "benefits" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Why You'll <span className="text-blue-400">Love</span> Working Here
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We invest in our team's growth, well-being, and success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 text-center"
                  >
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Culture */}
          {activeTab === "culture" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Our <span className="text-blue-400">Culture</span> & Values
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We believe that great products are built by happy, empowered teams.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Excellence",
                          desc: "We strive for the highest quality in everything we do."
                        },
                        {
                          title: "Collaboration",
                          desc: "Great ideas come from working together and sharing knowledge."
                        },
                        {
                          title: "Innovation",
                          desc: "We embrace new technologies and creative approaches."
                        },
                        {
                          title: "Integrity",
                          desc: "We do what's right, even when no one is watching."
                        }
                      ].map((value, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{value.title}</h4>
                            <p className="text-gray-400 text-sm">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">Team Culture</h3>
                    <div className="space-y-4">
                      {culture.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Don't See the Perfect <span className="text-blue-400">Role</span>?
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and
              tell us how you can contribute to our team.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/general_application" className="inline-block">
                <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer">
                  Send General Application
                  <ExternalLink className="w-5 h-5" />
                </button>
              </a>

              <a href="/internships" className="inline-block">
                <button className="px-10 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  Learn About Internships
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}