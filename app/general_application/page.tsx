'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Upload, FileText, Mail, User, CheckCircle, AlertCircle, X, Eye, Briefcase, Phone, Linkedin, Globe } from 'lucide-react';
import { supabase } from '@/lib/supabase';

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
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  // Real-time validation on field change
  useEffect(() => {
    if (touched.name) validateField('name', formData.name);
  }, [formData.name]);

  useEffect(() => {
    if (touched.email) validateField('email', formData.email);
  }, [formData.email]);

  useEffect(() => {
    if (touched.phone) validateField('phone', formData.phone);
  }, [formData.phone]);

  useEffect(() => {
    if (touched.experience) validateField('experience', formData.experience);
  }, [formData.experience]);

  useEffect(() => {
    if (touched.message) validateField('message', formData.message);
  }, [formData.message]);

  useEffect(() => {
    if (touched.portfolio) validateField('portfolio', formData.portfolio);
  }, [formData.portfolio]);

  // Validate single field
  const validateField = (fieldName: string, value: string) => {
    let error = '';
    
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (value.length > 100) {
          error = 'Name must be less than 100 characters';
        } else if (!/^[a-zA-Z\s\-\.]+$/.test(value)) {
          error = 'Name can only contain letters, spaces, hyphens, and dots';
        }
        break;
        
      case 'email':
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.trim()) {
          error = 'Email address is required';
        } else if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address (e.g., name@example.com)';
        } else if (value.length > 255) {
          error = 'Email must be less than 255 characters';
        }
        break;
        
      case 'phone':
        const phoneRegex = /^[6-9][0-9]{9}$/;
        if (value && !phoneRegex.test(value.replace(/[\s\-\(\)\+]/g, ''))) {
          error = 'Please enter a valid 10-digit Indian mobile number';
        }
        break;
        
      case 'experience':
        if (!value) {
          error = 'Please select your years of experience';
        }
        break;
        
      case 'portfolio':
        if (value && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(value)) {
          error = 'Please enter a valid URL (e.g., https://linkedin.com/in/username)';
        }
        break;
        
      case 'message':
        if (!value.trim()) {
          error = 'Please tell us about yourself';
        } else if (value.length < 50) {
          error = 'Please provide more details (minimum 50 characters)';
        } else if (value.length > 2000) {
          error = 'Message must be less than 2000 characters';
        }
        break;
    }
    
    setErrors(prev => ({ ...prev, [fieldName]: error }));
    return error === '';
  };

  // Handle field blur
  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    validateField(fieldName, formData[fieldName as keyof typeof formData] as string);
  };

  // Full form validation before submit
  const validateForm = () => {
    const allFields = ['name', 'email', 'experience', 'message'];
    let isValid = true;
    
    allFields.forEach(field => {
      setTouched(prev => ({ ...prev, [field]: true }));
      const fieldValid = validateField(field, formData[field as keyof typeof formData] as string);
      if (!fieldValid) isValid = false;
    });
    
    // Validate portfolio if provided
    if (formData.portfolio) {
      const portfolioValid = validateField('portfolio', formData.portfolio);
      if (!portfolioValid) isValid = false;
    }
    
    // Validate phone if provided
    if (formData.phone) {
      const phoneValid = validateField('phone', formData.phone);
      if (!phoneValid) isValid = false;
    }
    
    // Resume validation
    if (!resume) {
      setErrors(prev => ({ ...prev, resume: 'Please upload your resume (PDF, DOC, or DOCX)' }));
      isValid = false;
    } else if (resume.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, resume: 'Resume must be less than 5MB' }));
      isValid = false;
    }
    
    return isValid;
  };

  // Upload file to Supabase Storage
  const uploadResume = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `resume_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `general_applications/${fileName}`;

    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(uploadInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    const { error } = await supabase.storage
      .from('resumes')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    clearInterval(uploadInterval);
    setUploadProgress(100);

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }));
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
        setErrors(prev => ({ ...prev, resume: 'Only PDF, DOC, and DOCX files are allowed' }));
        return;
      }
      
      setResume(file);
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const removeResume = () => {
    setResume(null);
    setUploadProgress(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      // Upload resume first
      let resumeUrl = '';
      if (resume) {
        resumeUrl = await uploadResume(resume);
      }

      // Insert data into Supabase
      const { error } = await supabase
        .from('general_applications')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim() || null,
            position: formData.position,
            experience: formData.experience,
            portfolio_url: formData.portfolio.trim() || null,
            resume_url: resumeUrl,
            message: formData.message.trim(),
            status: 'pending',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 15 seconds
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
        setErrors({});
        setTouched({});
        setUploadProgress(0);
      }, 15000);

    } catch (error: any) {
      console.error('Error submitting application:', error);
      setSubmitError(error.message || 'Failed to submit application. Please try again.');
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  // Check if form is valid for submission
  const isFormValid = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.experience && 
           formData.message.trim().length >= 50 &&
           resume &&
           !errors.name && !errors.email && !errors.experience && !errors.message;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <Link 
          href="/careers" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Careers
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">JOIN OUR TEAM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            General <span className="text-blue-400">Application</span>
          </h1>
          <p className="text-xl text-gray-300">
            Don't see a perfect role? Send us your resume and tell us how you can contribute to our team.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Application Submitted Successfully!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your interest in joining Indcode Technologies. 
                Our HR team will review your application and get back to you within 5-7 business days.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span>Redirecting to careers page in 15 seconds...</span>
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="mb-8 pb-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold mb-2">Application Form</h2>
                <p className="text-gray-400">
                  All fields marked with <span className="text-red-400">*</span> are required.
                </p>
              </div>

              {submitError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <p className="text-red-400 text-sm">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-900/50 border ${
                          errors.name && touched.name ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && touched.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-900/50 border ${
                          errors.email && touched.email ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && touched.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-900/50 border ${
                          errors.phone && touched.phone ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                        placeholder="+91 9876543210"
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">Enter your 10-digit mobile number</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Years of Experience <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      onBlur={() => handleBlur('experience')}
                      className={`w-full px-4 py-3 bg-gray-900/50 border ${
                        errors.experience && touched.experience ? 'border-red-500' : 'border-gray-700'
                      } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer appearance-none`}
                    >
                      <option value="">Select years of experience</option>
                      <option value="Fresher">Fresher (0-1 years)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-8">5-8 years</option>
                      <option value="8-10">8-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.experience && touched.experience && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.experience}
                      </p>
                    )}
                  </div>
                </div>

                {/* Portfolio & Resume */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Portfolio / LinkedIn / GitHub URL
                    </label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        onBlur={() => handleBlur('portfolio')}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-900/50 border ${
                          errors.portfolio && touched.portfolio ? 'border-red-500' : 'border-gray-700'
                        } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                    {errors.portfolio && touched.portfolio && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.portfolio}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Resume / CV <span className="text-red-400">*</span>
                    </label>
                    {!resume ? (
                      <div className="relative">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className={`w-full px-4 py-3 bg-gray-900/50 border ${
                            errors.resume ? 'border-red-500' : 'border-gray-700'
                          } rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer`}
                        />
                      </div>
                    ) : (
                      <div className="bg-gray-900/50 border border-green-500/50 rounded-xl p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-300 truncate max-w-[200px]">{resume.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeResume}
                            className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        {uploadProgress > 0 && uploadProgress < 100 && (
                          <div className="mt-2">
                            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-500 transition-all duration-300"
                                style={{ width: `${uploadProgress}%` }}
                              />
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Uploading... {uploadProgress}%</p>
                          </div>
                        )}
                      </div>
                    )}
                    {errors.resume && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.resume}
                      </p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Why do you want to join us? <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-900/50 border ${
                      errors.message && touched.message ? 'border-red-500' : 'border-gray-700'
                    } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none cursor-text`}
                    placeholder="Describe your skills, experience, what you can bring to our team, and why you're interested in Indcode Technologies..."
                  />
                  {errors.message && touched.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-gray-500 text-xs">Minimum 50 characters</p>
                    <p className={`text-xs ${formData.message.length < 50 && formData.message.length > 0 ? 'text-red-400' : 'text-gray-500'}`}>
                      {formData.message.length}/50 characters
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className="w-full py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-blue-900/20"
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

                {/* Form Status Indicator */}
                <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-500 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${formData.name ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    <span>Name</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${formData.email ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    <span>Email</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${formData.experience ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    <span>Experience</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${formData.message.length >= 50 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    <span>Message</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${resume ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    <span>Resume</span>
                  </div>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>. 
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