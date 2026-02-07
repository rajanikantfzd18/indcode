'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Upload, FileText, Mail, User, CheckCircle } from 'lucide-react';

export default function GeneralApplicationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'General Application',
    experience: '',
    portfolio: '',
    message: ''
  });
  
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: 'General Application',
        experience: '',
        portfolio: '',
        message: ''
      });
      setResume(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <Link 
          href="/careers" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            General <span className="text-blue-400">Application</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Send us your resume and tell us how you can contribute to our team.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-900/20 border border-green-800/50 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your application. We'll review your profile and get back to you within 5-7 business days.
              </p>
              <Link 
                href="/careers"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
              >
                View Other Positions
              </Link>
            </div>
          ) : (
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Application Form</h2>
                <p className="text-gray-400">
                  Fill out the form below and upload your resume. We'll contact you if there's a match.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="inline w-4 h-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="inline w-4 h-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                {/* Contact & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 0123456789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years (Entry Level)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                {/* Portfolio & Resume */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Portfolio/LinkedIn URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <FileText className="inline w-4 h-4 mr-1" />
                      Upload Resume *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                      />
                      {resume && (
                        <div className="mt-2 text-sm text-green-400 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          {resume.name}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about yourself and why you want to join us *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your skills, experience, and what you're looking for in your next role..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-blue-900/20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy. 
                  We'll only use your information for recruitment purposes.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}