"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud,
  CheckCircle,
  Sparkles,
  Rocket,
  Shield,
  Zap,
  Users,
  BarChart3,
  Globe
} from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main className="overflow-hidden" ref={containerRef}>
      {/* HERO SECTION WITH PARALLAX */}
      <section className="relative min-h-screen pt-30 pb-40 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
        {/* Animated 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating 3D Shapes */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64"
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [360, 180, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80"
          >
            <div className="w-full h-full bg-gradient-to-tr from-purple-500/15 to-pink-500/10 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Pulsing Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute w-[800px] h-[800px] border border-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.05, 0.2] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="absolute w-[1000px] h-[1000px] border border-cyan-400/15 rounded-full"
            />
          </div>

          {/* Grid with Perspective */}
          <div className="absolute inset-0 opacity-10 transform-gpu">
            <div
              className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"
              style={{
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'center'
              }}
            />
          </div>

          {/* Animated Code Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -1000],
                  x: Math.sin(i) * 100,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.1
                }}
                className="absolute text-blue-400/20 text-xl font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                {i % 2 === 0 ? '<>' : '</>'}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content with 3D Effect */}
        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-6xl"
          >
            {/* Company Name with 3D Text Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                {/* 3D Shadow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 blur-2xl opacity-50"></div>
                <div className="relative">
                  <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                      INDCODE
                    </span>
                  </h1>
                  <motion.div
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 40px rgba(59, 130, 246, 0.8)",
                        "0 0 20px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-cyan-300"
                  >
                    TECHNOLOGIES
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Animated Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We craft{" "}
                <motion.span
                  animate={{ color: ['#60a5fa', '#22d3ee', '#60a5fa'] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="font-bold"
                >
                  cutting-edge digital solutions
                </motion.span>{" "}
                that transform businesses and create{" "}
                <motion.span
                  animate={{ color: ['#22d3ee', '#60a5fa', '#22d3ee'] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  className="font-bold"
                >
                  lasting impact
                </motion.span>
              </p>
            </motion.div>

            {/* Interactive CTA Buttons with 3D Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              {/* Primary Button with 3D Effect */}
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 rounded-2xl overflow-hidden"
              >
                {/* 3D Button Base */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
                {/* 3D Top Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 translate-y-1 group-hover:translate-y-0 transition-transform"></div>
                {/* Shine Effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-white font-bold text-lg">Start Your Journey</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 rounded-2xl border-2 border-blue-500/50 bg-transparent backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300"
              >
                <span className="text-white font-bold text-lg">Explore Our Work</span>
                <div className="absolute -bottom-1 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Advanced Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <div className="text-xs text-blue-400 mb-2 font-mono tracking-widest">
              SCROLL TO EXPLORE
            </div>
            <div className="relative">
              {/* Outer Pulse */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -inset-2 border border-blue-400/30 rounded-full"
              />
              {/* Scroll Wheel */}
              <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center items-start p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-cyan-300 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {['</>', '{ }', '[]', '=>', ';', '()', '==', '!=='].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: Math.sin(i) * 10,
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + i,
                delay: i * 0.5
              }}
              className="absolute text-blue-400/30 font-mono text-2xl"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 7)}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION - ENHANCED */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
              >
                About Indcode
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-5xl font-bold text-gray-900"
              >
                Engineering Excellence in <span className="text-blue-600">Every Pixel</span> & <span className="text-blue-600">Every Line</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-gray-600 text-lg leading-relaxed"
              >
                We are a technology powerhouse dedicated to crafting high-performance,
                secure, and future-ready software products. Our fusion of robust engineering
                practices with deep business insight delivers transformative digital experiences.
              </motion.p>
            </div>

            {/* Interactive card stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-3xl -rotate-3 shadow-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                    <Rocket className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Project</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">Enterprise Dashboard</h3>
                  <p className="mt-3 text-gray-400">Real-time analytics platform built with Next.js & Node.js</p>
                </div>
                <div className="flex gap-4">
                  {["React", "Node", "AWS", "MongoDB"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - ENHANCED */}
      <section className="py-22 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-5xl font-bold text-white"
            >
              Full-Spectrum <span className="text-blue-400">Digital Solutions</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Web Engineering",
                desc: "High-performance web applications using React, Next.js, and modern cloud architecture.",
                features: ["SSR/SSG", "Microservices", "Real-time Features"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Smartphone,
                title: "App Development",
                desc: "Native & cross-platform mobile apps with Flutter & React Native for seamless experiences.",
                features: ["iOS & Android", "Offline Support", "App Store Deployment"],
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Cloud,
                title: "SaaS & Automation",
                desc: "Custom SaaS platforms and intelligent workflow automation systems. Built for scale and security.",
                features: ["Multi-tenant", "API Integration", "Auto-scaling"],
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative bg-gray-800 rounded-2xl p-8 hover:bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>

                <div className="space-y-3">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - ENHANCED */}
      <section className="relative py-22 bg-black overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              How We Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-5xl font-bold text-white"
            >
              Our <span className="text-blue-400">Proven</span> Process
            </motion.h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 hidden lg:block"></div>

            <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
              {[
                {
                  number: "01",
                  title: "Discover",
                  desc: "Deep dive into requirements, market research, and solution architecture planning.",
                  icon: Users
                },
                {
                  number: "02",
                  title: "Design",
                  desc: "UI/UX prototyping, system design, and technical specifications.",
                  icon: BarChart3
                },
                {
                  number: "03",
                  title: "Build",
                  desc: "Agile development with continuous integration and quality assurance.",
                  icon: Code2
                },
                {
                  number: "04",
                  title: "Scale",
                  desc: "Deployment, monitoring, optimization, and ongoing support.",
                  icon: Rocket
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover:bg-gray-900/50 backdrop-blur-sm">
                    <div className="text-6xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {step.number}
                    </div>
                    <div className="inline-flex p-3 rounded-lg bg-blue-500/20 border border-blue-500/30 mt-6 mb-4">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - ENHANCED */}
      <section className="relative py-22 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Ready to Transform?</span>
            </div>

            <h2 className="text-6xl font-bold text-white mb-8">
              Let's Build Something <span className="text-blue-400">Extraordinary</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with Indcode Technologies to transform your vision into a
              scalable, high-impact digital product. Your success is our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-3 hover:gap-5 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/25">
                Start Your Journey
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-bold text-lg border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95">
                Schedule a Call
              </button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <p className="text-gray-400 mb-6">Trusted by innovative teams worldwide</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50">
                {["Startups", "Enterprises", "Agencies", "Scale-ups"].map((client, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 font-medium">{client}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}