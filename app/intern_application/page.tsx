"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Building,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

function InternApplicationForm() {
  const searchParams = useSearchParams();
  const internshipRole = searchParams.get("job");
  const department = searchParams.get("department");
  const [isPageReady, setIsPageReady] = useState(false);
  const [showGraduationYear, setShowGraduationYear] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    university: "",
    degree: "",
    currentYear: "",
    graduationYear: "",
    coverLetter: "",
    heardAbout: "",
    internshipRole: internshipRole || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  // Real-time validation
  useEffect(() => {
    if (touched.fullName) validateField("fullName", formData.fullName);
  }, [formData.fullName]);

  useEffect(() => {
    if (touched.email) validateField("email", formData.email);
  }, [formData.email]);

  useEffect(() => {
    if (touched.phone) validateField("phone", formData.phone);
  }, [formData.phone]);

  useEffect(() => {
    if (touched.coverLetter) validateField("coverLetter", formData.coverLetter);
  }, [formData.coverLetter]);

  useEffect(() => {
    if (touched.currentYear) validateField("currentYear", formData.currentYear);
  }, [formData.currentYear]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle current year change to show/hide graduation year
  const handleCurrentYearChange = (value: string) => {
    setFormData(prev => ({ ...prev, currentYear: value }));
    if (value === "Completed") {
      setShowGraduationYear(true);
    } else {
      setShowGraduationYear(false);
      setFormData(prev => ({ ...prev, graduationYear: "" }));
    }
  };

  const validateField = (fieldName: string, value: string) => {
    let error = "";

    switch (fieldName) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.length < 2) {
          error = "Name must be at least 2 characters";
        } else if (value.length > 100) {
          error = "Name must be less than 100 characters";
        } else if (!/^[a-zA-Z\s\-\.]+$/.test(value)) {
          error = "Name can only contain letters, spaces, hyphens, and dots";
        }
        break;

      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.trim()) {
          error = "Email address is required";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email address (e.g., name@example.com)";
        } else if (value.length > 255) {
          error = "Email must be less than 255 characters";
        }
        break;

      case "phone":
        const phoneRegex = /^[6-9][0-9]{9}$/;
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!phoneRegex.test(value.replace(/[\s\-\(\)\+]/g, ""))) {
          error = "Please enter a valid 10-digit Indian mobile number";
        }
        break;

      case "coverLetter":
        if (!value.trim()) {
          error = "Cover letter is required";
        } else if (value.length < 100) {
          error = "Please provide more details (minimum 100 characters)";
        } else if (value.length > 2000) {
          error = "Cover letter must be less than 2000 characters";
        }
        break;

      case "currentYear":
        if (!value) {
          error = "Please select your current year";
        }
        break;

      case "university":
        if (!value.trim()) {
          error = "University/College name is required";
        }
        break;

      case "degree":
        if (!value.trim()) {
          error = "Degree/Course name is required";
        }
        break;

      case "graduationYear":
        if (showGraduationYear && !value) {
          error = "Graduation year is required";
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error === "";
  };

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    validateField(fieldName, formData[fieldName as keyof typeof formData] as string);
  };

  const validateForm = () => {
    const requiredFields = ["fullName", "email", "phone", "coverLetter", "university", "degree", "currentYear"];
    let isValid = true;

    requiredFields.forEach((field) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const fieldValid = validateField(field, formData[field as keyof typeof formData] as string);
      if (!fieldValid) isValid = false;
    });

    if (showGraduationYear && !formData.graduationYear) {
      setTouched((prev) => ({ ...prev, graduationYear: true }));
      validateField("graduationYear", formData.graduationYear);
      isValid = false;
    }

    if (!resumeFile) {
      setErrors((prev) => ({ ...prev, resume: "Please upload your resume (PDF, DOC, or DOCX)" }));
      isValid = false;
    } else if (resumeFile.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resume: "Resume must be less than 5MB" }));
      isValid = false;
    }

    return isValid;
  };

  const uploadResume = async (file: File): Promise<string> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `intern_application_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `intern_applications/${fileName}`;

    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(uploadInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    const { error } = await supabase.storage.from("resumes").upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

    clearInterval(uploadInterval);
    setUploadProgress(100);

    if (error) {
      throw error;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("resumes").getPublicUrl(filePath);

    return publicUrl;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "currentYear") {
      handleCurrentYearChange(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File size must be less than 5MB" }));
        return;
      }

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const allowedExtensions = [".pdf", ".doc", ".docx"];
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();

      if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
        setErrors((prev) => ({ ...prev, resume: "Only PDF, DOC, and DOCX files are allowed" }));
        return;
      }

      setResumeFile(file);
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const removeResume = () => {
    setResumeFile(null);
    setUploadProgress(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      let resumeUrl = "";
      if (resumeFile) {
        resumeUrl = await uploadResume(resumeFile);
      }

      const { error } = await supabase.from("intern_applications").insert([
        {
          full_name: formData.fullName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          location: formData.location.trim() || null,
          university: formData.university.trim(),
          degree: formData.degree.trim(),
          current_year: formData.currentYear,
          graduation_year: formData.graduationYear || null,
          internship_role: internshipRole || null,
          cover_letter: formData.coverLetter.trim(),
          heard_about: formData.heardAbout || null,
          resume_url: resumeUrl,
          status: "pending",
          created_at: new Date().toISOString(),
        },
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
          fullName: "",
          email: "",
          phone: "",
          location: "",
          university: "",
          degree: "",
          currentYear: "",
          graduationYear: "",
          internshipRole: internshipRole || "",
          coverLetter: "",
          heardAbout: ""
        });
        setShowGraduationYear(false);
        setResumeFile(null);
        setErrors({});
        setTouched({});
        setUploadProgress(0);
      }, 15000);
    } catch (error: any) {
      console.error("Error submitting intern application:", error);
      setSubmitError(error.message || "Failed to submit application. Please try again.");
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  const isFormValid = () => {
    let baseValid = 
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.coverLetter.trim().length >= 100 &&
      formData.university.trim() &&
      formData.degree.trim() &&
      formData.currentYear &&
      resumeFile &&
      !errors.fullName &&
      !errors.email &&
      !errors.phone &&
      !errors.coverLetter &&
      !errors.university &&
      !errors.degree &&
      !errors.currentYear;

    if (showGraduationYear) {
      baseValid = baseValid && formData.graduationYear && !errors.graduationYear;
    }

    return baseValid;
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
            Internship Application Submitted!
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for applying{internshipRole ? ` for the ${internshipRole} position` : ""}. Our team will review
            your application and get back to you within 5-7 business days.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            <span>Redirecting to internships page in 15 seconds...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <Link 
          href="/internships" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Internships
        </Link>
      </nav>

      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">INTERNSHIP APPLICATION</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4 mx-auto max-w-3xl text-center">
              {internshipRole ? `Apply for ${internshipRole}` : "Internship Application"}
            </h1>

            {internshipRole && department && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6"
              >
                <Building className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{department} Department</span>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto text-center"
            >
              {internshipRole
                ? `We're excited to learn more about you and why you'd be a great fit for the ${internshipRole} internship.`
                : "Kickstart your career with our internship program. Tell us about yourself and how you can contribute to our team!"}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isPageReady && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="py-12 px-6 bg-gray-900"
          >
            <div className="max-w-4xl mx-auto">
              {submitError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400 text-sm">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <User className="w-5 h-5 text-purple-400" />
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
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur("fullName")}
                        className={`w-full px-4 py-3 bg-gray-700 border ${
                          errors.fullName && touched.fullName ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && touched.fullName && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        className={`w-full px-4 py-3 bg-gray-700 border ${
                          errors.email && touched.email ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        className={`w-full px-4 py-3 bg-gray-700 border ${
                          errors.phone && touched.phone ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        placeholder="+91 9876543210"
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                      <p className="text-gray-500 text-xs mt-1">Enter your 10-digit mobile number</p>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Educational Information */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Educational Information</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        University/College <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        onBlur={() => handleBlur("university")}
                        className={`w-full px-4 py-3 bg-gray-700 border ${
                          errors.university && touched.university ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        placeholder="Enter your university/college name"
                      />
                      {errors.university && touched.university && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.university}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Degree/Course <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        onBlur={() => handleBlur("degree")}
                        className={`w-full px-4 py-3 bg-gray-700 border ${
                          errors.degree && touched.degree ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        placeholder="e.g., B.Tech CSE, BCA, MCA"
                      />
                      {errors.degree && touched.degree && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.degree}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Current Year <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="currentYear"
                        value={formData.currentYear}
                        onChange={handleChange}
                        onBlur={() => handleBlur("currentYear")}
                        className={`w-full px-4 py-3 bg-gray-700 border ${
                          errors.currentYear && touched.currentYear ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors`}
                      >
                        <option value="">Select current year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Completed">Completed (Graduated)</option>
                      </select>
                      {errors.currentYear && touched.currentYear && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.currentYear}
                        </p>
                      )}
                    </div>

                    {showGraduationYear && (
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">
                          Graduation Year <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="graduationYear"
                          value={formData.graduationYear}
                          onChange={handleChange}
                          onBlur={() => handleBlur("graduationYear")}
                          className={`w-full px-4 py-3 bg-gray-700 border ${
                            errors.graduationYear && touched.graduationYear ? "border-red-500" : "border-gray-600"
                          } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors`}
                        >
                          <option value="">Select graduation year</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                        </select>
                        {errors.graduationYear && touched.graduationYear && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.graduationYear}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Resume & Cover Letter */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Resume & Cover Letter</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Upload Resume/CV <span className="text-red-400">*</span>
                      </label>
                      {!resumeFile ? (
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className={`w-full px-4 py-3 bg-gray-700 border ${
                            errors.resume ? "border-red-500" : "border-gray-600"
                          } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700`}
                        />
                      ) : (
                        <div className="bg-gray-700 border border-green-500/50 rounded-lg p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <FileText className="w-5 h-5 text-green-400" />
                              <span className="text-sm text-gray-300 truncate max-w-75">
                                {resumeFile.name}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={removeResume}
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              <AlertCircle className="w-5 h-5" />
                            </button>
                          </div>
                          {uploadProgress > 0 && uploadProgress < 100 && (
                            <div className="mt-2">
                              <div className="h-1 bg-gray-600 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-purple-500 transition-all duration-300"
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
                      <p className="text-gray-500 text-sm mt-2">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Cover Letter / Why do you want to join? <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="coverLetter"
                        rows={6}
                        value={formData.coverLetter}
                        onChange={handleChange}
                        onBlur={() => handleBlur("coverLetter")}
                        className={`w-full px-4 py-3 bg-gray-700 border ${
                          errors.coverLetter && touched.coverLetter ? "border-red-500" : "border-gray-600"
                        } rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none`}
                        placeholder={`Tell us why you're interested in ${
                          internshipRole ? `the ${internshipRole} position` : "this internship"
                        }, what makes you a great fit, and what you hope to learn...`}
                      />
                      {errors.coverLetter && touched.coverLetter && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.coverLetter}
                        </p>
                      )}
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-gray-500 text-xs">Minimum 100 characters</p>
                        <p
                          className={`text-xs ${
                            formData.coverLetter.length < 100 && formData.coverLetter.length > 0
                              ? "text-red-400"
                              : "text-gray-500"
                          }`}
                        >
                          {formData.coverLetter.length}/100 characters
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        How did you hear about this internship?
                      </label>
                      <select
                        name="heardAbout"
                        value={formData.heardAbout}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Indeed">Indeed</option>
                        <option value="Internshala">Internshala</option>
                        <option value="College">College Placement Cell</option>
                        <option value="Friend">Friend/Colleague</option>
                        <option value="Website">Company Website</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Status Indicator */}
                <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-500 pt-4">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.fullName ? "bg-green-500" : "bg-gray-600"
                      }`}
                    ></div>
                    <span>Name</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.email ? "bg-green-500" : "bg-gray-600"
                      }`}
                    ></div>
                    <span>Email</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.phone ? "bg-green-500" : "bg-gray-600"
                      }`}
                    ></div>
                    <span>Phone</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.university ? "bg-green-500" : "bg-gray-600"
                      }`}
                    ></div>
                    <span>University</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.degree ? "bg-green-500" : "bg-gray-600"
                      }`}
                    ></div>
                    <span>Degree</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.currentYear ? "bg-green-500" : "bg-gray-600"
                      }`}
                    ></div>
                    <span>Current Year</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        formData.coverLetter.length >= 100 ? "bg-green-500" : "bg-gray-600"
                      }`}
                    ></div>
                    <span>Cover Letter</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${resumeFile ? "bg-green-500" : "bg-gray-600"}`}
                    ></div>
                    <span>Resume</span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-900/20 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center pt-4">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy_policy" className="text-purple-400 hover:underline">
                    Privacy Policy
                  </Link>
                  . We'll only use your information for recruitment purposes.
                </p>
              </form>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

export default function InternApplicationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-3 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      }
    >
      <InternApplicationForm />
    </Suspense>
  );
}