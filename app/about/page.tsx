"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  GraduationCap,
  Award,
  Briefcase,
  Star
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
    "Founded by Mr. Rajani kant, a passionate technologist with expertise across development, design, and business strategy.",
    "As a fresh startup, we bring energy, innovation, and a client-first approach that sets us apart."
  ];

  const expertise = [
    "Full-Stack Development",
    "UI/UX Design",
    "Cloud Architecture",
    "Product Strategy",
    "Tech Entrepreneurship",
    "Business Development"
  ];

  const achievements = [
    "Visionary leadership in technology",
    "End-to-end project execution expertise",
    "Client-centric approach to solutions",
    "Commitment to quality and innovation"
  ];

  const upcomingGoals = [
    "Build 20 successful projects in our first year",
    "Establish partnerships with 5+ startups",
    "Create impactful digital solutions for local businesses",
    "Build a reputation for quality and reliability"
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
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

            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-blue-300 mb-6">
              Building Tomorrow's
              <span className="block mt-4">Digital Landscape <span className="text-blue-400">Today</span></span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Indcode Technologies is a passionate new startup dedicated to helping businesses
              navigate the digital world with innovative, affordable, and effective solutions.
            </p>

            {/* Company Stats */}
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

      {/* Founder Section - Professional Profile */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              LEADERSHIP
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl md:text-5xl font-bold text-white"
            >
              Meet Our <span className="text-blue-400">Founder</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>

                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl bg-gray-800 aspect-3/4">
                  <Image
                    src="/Founder&CEO.jpg"
                    alt="Mr. Rajani kant - Founder & CEO"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Hover Border - Photo ke Bahar */}
                <div className="absolute -inset-1 rounded-2xl border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

                {/* Badge */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-full shadow-xl hidden lg:block z-30">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-4">
                  <Star className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">FOUNDER & CHIEF EXECUTIVE OFFICER</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Mr. Rajani kant
                </h3>

                <div className="flex items-center gap-2 text-gray-400">
                  <Briefcase className="w-5 h-5" />
                  <span>Visionary Leader & Technologist</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                With a comprehensive background spanning development, design, and business strategy,
                Mr. Rajani kant brings a unique multi-disciplinary approach to Indcode Technologies.
                His vision is to create a company that combines technical excellence with business
                acumen to deliver exceptional value to clients.
              </p>

              {/* Areas of Expertise */}
              <div>
                <h4 className="text-white font-semibold mb-4">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm border border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-4 border-blue-500 pl-6 py-2 bg-gray-800/30 rounded-r-2xl">
                <p className="text-gray-300 italic">
                  "Building a company is about more than just technology – it's about understanding
                  people, solving real problems, and creating lasting value for our clients."
                </p>
                <p className="text-blue-400 mt-2 font-medium">— Mr. Rajani kant</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-black">
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
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <div className="inline-flex p-4 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 mb-6">
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
      <section className="py-24 px-6 bg-gray-900">
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
                className="group bg-black rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
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
                  <div className="shrink-0">
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-linear-to-br from-gray-900 to-black text-center">
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
              Under the leadership of Mr. Rajani kant, we offer personalized attention,
              flexible solutions, and the energy to make your project a success.
              Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="inline-block">
                <button className="px-10 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 cursor-pointer">
                  Start Your First Project
                </button>
              </a>

              <a href="/schedule_call" className="inline-block">
                <button className="px-10 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  Schedule a Discovery Call
                </button>
              </a>
            </div>

            {/* Special Offer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 p-6 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
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