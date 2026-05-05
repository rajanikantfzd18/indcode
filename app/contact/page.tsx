"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Globe,
  Shield,
  User,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
    projectType: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "SaaS Platform",
    "E-commerce",
    "UI/UX Design",
    "Consultation",
    "Other"
  ];

  const budgetRanges = [
    "Less than ₹ 5,000",
    "₹ 5,000 - ₹ 10,000",
    "₹ 10,000 - ₹ 25,000",
    "₹ 25,000 - ₹ 50,000",
    "₹ 50,000+",
    "Not sure yet"
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["indcodetechnologies@gmail.com"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 7505243833"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Indira Nagar, Lucknow, Uttar Pradesh, India"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Weekends: Emergency Support"],
      color: "from-orange-500 to-amber-500"
    }
  ];

  // Validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,15}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Project Type validation
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_applications')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
            company: formData.company.trim() || null,
            project_type: formData.projectType,
            budget: formData.budget || null,
            message: formData.message.trim(),
            status: 'pending'
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      // Success
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 15 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          message: "",
          projectType: ""
        });
        setErrors({});
      }, 15000);

    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitError(error.message || "Failed to submit. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleBudgetChange = (range: string) => {
    setFormData({
      ...formData,
      budget: range
    });
  };

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
              <span className="text-blue-400 text-sm font-medium">LET'S CONNECT</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-blue-300 mb-6">
              Start Your
              <span className="block mt-4">Digital <span className="text-blue-400">Journey</span></span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto -mb-12 leading-relaxed">
              Have an idea? Let's transform it into reality. Share your vision with us,
              and we'll craft the perfect solution together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Side */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Mail className="w-7 h-7 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-linear-to-br ${info.color}`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-400">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Why Partner With Us
                </h3>
                <div className="space-y-3">
                  {[
                    "Free initial consultation",
                    "Detailed project proposal",
                    "Transparent pricing",
                    "Dedicated project manager",
                    "Regular progress updates",
                    "Post-launch support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Success Message Centered */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-full flex items-center"
            >
              {isSubmitted ? (
                <div className="w-full flex flex-col items-center justify-center py-12">
                  <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-6">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400 text-center max-w-md mx-auto">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                  </div>

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                          placeholder="Your email address"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          <Globe className="w-4 h-4 inline mr-2" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="NA if not applicable"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 border ${errors.projectType ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {budgetRanges.map((range) => (
                          <label key={range} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="budget"
                              value={range}
                              checked={formData.budget === range}
                              onChange={() => handleBudgetChange(range)}
                              className="text-blue-500 focus:ring-blue-500"
                            />
                            <span className="text-gray-300 text-sm">{range}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-gray-500">
                        * Required fields
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
            >
              COMMON QUESTIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl font-bold text-white"
            >
              Frequently Asked <span className="text-blue-400">Questions</span>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How soon can we start working together?",
                a: "We can typically begin within 1-2 weeks after the initial consultation and project scoping."
              },
              {
                q: "What is your typical project timeline?",
                a: "Timelines vary based on project complexity, but most web projects take 4-12 weeks from start to launch."
              },
              {
                q: "Do you provide ongoing support after launch?",
                a: "Yes, we offer various support packages including maintenance, updates, and technical support."
              },
              {
                q: "Can you work with our existing development team?",
                a: "Absolutely! We often collaborate with in-house teams to provide expertise and accelerate development."
              },
              {
                q: "What industries do you specialize in?",
                a: "We have experience across SaaS, E-commerce, Healthcare, Education, Finance, and Startup ecosystems."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to <span className="text-blue-400">Transform</span> Your Vision?
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's schedule a discovery call to discuss your project in detail.
              No commitment required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href="/schedule_call" className="w-full max-w-xs sm:w-auto">
                <button className="w-full px-6 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer">
                  Schedule a Free Call
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>

              <a
                href="/documents/brochure.pdf"
                download="Indcode-Technologies-Brochure.pdf"
                className="w-full sm:w-auto"
              >
                <button className="w-full px-8 py-4 bg-transparent border-2 border-gray-700 text-white font-bold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  Download Our Brochure
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}