"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Sparkles,
  ArrowLeft,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

function ApplicationForm() {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("job");
  const department = searchParams.get("department");
  const [isPageReady, setIsPageReady] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    experience: "",
    currentCompany: "",
    noticePeriod: "",
    expectedSalary: "",
    coverLetter: "",
    heardAbout: ""
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Page ready hone ka delay - text pehle show hoga
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-6">
            <CheckCircle className="w-16 h-16 text-green-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Application Submitted!
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for applying{jobTitle ? ` for the ${jobTitle} position` : ""}. 
            Our team will review your application and get back to you within 5-7 business days.
          </p>
          <Link href="/careers">
            <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300">
              Back to Careers
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - Text pehle show hoga */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-12 mx-auto max-w-3xl text-center">
              {jobTitle ? `Apply for ${jobTitle}` : "General Application"}
            </h1>
            
            {jobTitle && department && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6"
              >
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{department} Department</span>
              </motion.div>
            )}
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto text-center"
            >
              {jobTitle 
                ? `We're excited to learn more about you and why you'd be a great fit for the ${jobTitle} position.`
                : "Tell us about yourself and how you can contribute to our team. We're always looking for talented individuals!"}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Application Form - Text ke baad show hoga with fade-in animation */}
      <AnimatePresence>
        {isPageReady && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="py-12 px-6 bg-gray-900"
          >
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <User className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Personal Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Enter Your Name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Professional Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Years of Experience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select experience</option>
                        <option value="Fresher">Fresher (0-1 years)</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Current Company
                      </label>
                      <input
                        type="text"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Current employer"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Notice Period
                      </label>
                      <select
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select notice period</option>
                        <option value="Immediate">Immediate</option>
                        <option value="15 Days">15 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="45 Days">45 Days</option>
                        <option value="60 Days">60 Days</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Expected Salary (per month)
                      </label>
                      <input
                        type="text"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="₹15,000 - ₹25,000"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Social Profiles</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="linkedin.com/in/username"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="github.com/username"
                      />
                    </div>
                  </div>
                </div>

                {/* Resume & Cover Letter */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Resume & Cover Letter</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Upload Resume <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                      />
                      <p className="text-gray-500 text-sm mt-2">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Cover Letter
                      </label>
                      <textarea
                        name="coverLetter"
                        rows={6}
                        value={formData.coverLetter}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder={`Tell us why you're interested in ${jobTitle ? `the ${jobTitle} position` : "joining our team"} and what makes you a great fit...`}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        How did you hear about us?
                      </label>
                      <select
                        name="heardAbout"
                        value={formData.heardAbout}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Indeed">Indeed</option>
                        <option value="Naukri">Naukri.com</option>
                        <option value="Friend">Friend/Colleague</option>
                        <option value="Website">Company Website</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 flex items-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function GeneralApplicationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    }>
      <ApplicationForm />
    </Suspense>
  );
}