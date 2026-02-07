"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Rocket,
  Zap,
  Sparkles,
  Heart,
  Code2,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Handshake,
  GraduationCap
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Fresh ideas and modern approaches to solve today's digital challenges."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We grow with our clients, treating every project as a collaborative journey."
    },
    {
      icon: CheckCircle,
      title: "Quality Focus",
      description: "Attention to detail and commitment to delivering exceptional work."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your growth is our success. We measure our worth by your achievements."
    }
  ];

  const foundingStory = [
    "Indcode Technologies was born from a simple yet powerful vision: to make premium digital solutions accessible to ambitious businesses.",
    "As a fresh startup, we bring energy, innovation, and a client-first approach that sets us apart.",
    "Our small but highly skilled team is passionate about transforming ideas into reality with cutting-edge technology."
  ];

  const team = [
    { name: "Founder", role: "Vision & Strategy", expertise: "Tech Entrepreneurship, Product Development" },
    { name: "Lead Developer", role: "Technical Excellence", expertise: "Full-Stack Development, Cloud Architecture" },
    { name: "UX Designer", role: "User Experience", expertise: "UI/UX Design, Product Strategy" }
  ];

  const upcomingGoals = [
    "Build 20 successful projects in our first year",
    "Establish partnerships with 5+ startups",
    "Create impactful digital solutions for local businesses",
    "Build a reputation for quality and reliability"
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - For New Company */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">FRESH START, BIG DREAMS</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 mb-6">
              Building Tomorrow's
              <span className="block mt-4">Digital Landscape <span className="text-blue-400">Today</span></span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Indcode Technologies is a passionate new startup dedicated to helping businesses
              navigate the digital world with innovative, affordable, and effective solutions.
            </p>

            {/* New Company Stats - Realistic for Startup */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
              {[
                { value: "Brand New", label: "Fresh Energy & Ideas", icon: Rocket },
                { value: "100%", label: "Client-Focused", icon: Heart },
                { value: "Agile", label: "Flexible Approach", icon: Zap },
                { value: "Growing", label: "Building Our Legacy", icon: TrendingUp }
              ].map((stat, index) => (
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
                  <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - For New Company */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
              >
                OUR BEGINNING
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-4xl md:text-5xl font-bold text-white"
              >
                The <span className="text-blue-400">Journey</span> Begins Here
              </motion.h2>

              <div className="mt-8 space-y-6">
                {foundingStory.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-gray-400 text-lg leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
              <p className="text-gray-400 mb-6">
                As a new player in the market, we bring fresh perspectives,
                competitive pricing, and a hunger to prove ourselves through
                exceptional work and outstanding client relationships.
              </p>
              <div className="flex items-center gap-2 text-blue-400">
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm">Learning and growing with every project</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              WHAT DRIVES US
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
            >
              Our <span className="text-blue-400">Foundation</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Small but Mighty */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              SMALL TEAM, BIG IMPACT
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
            >
              Meet Our <span className="text-blue-400">Core Team</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
              A compact team of dedicated professionals who wear multiple hats
              to deliver outstanding results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-blue-400 font-semibold mb-3">{member.role}</div>
                <div className="text-gray-400 text-sm">{member.expertise}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Aspirations */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              ROAD AHEAD
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
            >
              Our <span className="text-blue-400">Ambitions</span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {upcomingGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gray-900 rounded-xl border border-gray-800"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">{goal}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - For New Company */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 px-6 py-3 rounded-full mb-8">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">BE OUR EARLY PARTNER</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let's <span className="text-blue-400">Grow Together</span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              As a new company, we offer personalized attention, flexible solutions,
              and the energy to make your project a success.
              Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="inline-block">
                <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 cursor-pointer">
                  Start Your First Project
                </button>
              </a>

              <a href="/schedule_call" className="inline-block">
                <button className="px-10 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  Schedule a Discovery Call
                </button>
              </a>
            </div>

            {/* Special Offer for Early Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">LAUNCH SPECIAL</span>
              </div>
              <p className="text-gray-300">
                <span className="font-bold text-white">20% OFF</span> on your first project
                for our founding clients!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}