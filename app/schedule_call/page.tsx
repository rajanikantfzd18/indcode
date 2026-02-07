"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar,
  Clock,
  Users,
  Video,
  Phone,
  CheckCircle,
  Sparkles,
  ArrowLeft,
  Globe,
  Mail,
  MapPin
} from "lucide-react";
import Link from "next/link";

export default function ScheduleCallPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [callType, setCallType] = useState("video");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "01:00 PM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const callTypes = [
    { id: "video", label: "Video Call", icon: Video, desc: "Google Meet, Zoom or Teams" },
    { id: "phone", label: "Phone Call", icon: Phone, desc: "Audio call at your convenience" },
    { id: "office", label: "Office Visit", icon: Users, desc: "In-person meeting at our office" }
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "SaaS Platform",
    "E-commerce Solution",
    "Custom Software",
    "Consultation",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for the call");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Send email notification (simulated)
    console.log("Call Scheduled:", {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      type: callType
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Generate next 7 days for calendar
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const formattedDate = date.toISOString().split('T')[0];
        const displayDate = date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        });
        
        days.push({ value: formattedDate, label: displayDate });
      }
    }
    
    return days;
  };

  const nextDays = getNextDays();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">LET'S CONNECT</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Book a <span className="text-blue-400">Discovery Call</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Schedule a free consultation to discuss your project and explore how we can help you succeed.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Calendar & Time */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 rounded-full bg-green-500/20 mb-6">
                      <CheckCircle className="w-16 h-16 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Call Scheduled Successfully!</h3>
                    <div className="bg-gray-800 rounded-xl p-6 mb-6">
                      <div className="text-lg font-semibold text-green-400 mb-2">Call Details:</div>
                      <div className="space-y-2 text-gray-300">
                        <div>Date: {selectedDate}</div>
                        <div>Time: {selectedTime}</div>
                        <div>Type: {callTypes.find(t => t.id === callType)?.label}</div>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-8">
                      We've sent a confirmation to {formData.email}. 
                      You'll receive a calendar invite shortly.
                    </p>
                    <Link
                      href="/"
                      className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                    >
                      Return to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-8">Select Date & Time</h2>

                    {/* Call Type Selection */}
                    <div className="mb-10">
                      <h3 className="text-lg font-semibold text-gray-300 mb-4">Call Type</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {callTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setCallType(type.id)}
                            className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                              callType === type.id
                                ? "border-blue-500 bg-blue-500/10"
                                : "border-gray-700 hover:border-gray-600"
                            }`}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`p-2 rounded-lg ${
                                callType === type.id 
                                  ? "bg-blue-500" 
                                  : "bg-gray-800"
                              }`}>
                                <type.icon className="w-5 h-5 text-white" />
                              </div>
                              <span className="font-semibold text-white">{type.label}</span>
                            </div>
                            <p className="text-sm text-gray-400">{type.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-10">
                      <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Select Date
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {nextDays.map((day) => (
                          <button
                            key={day.value}
                            onClick={() => setSelectedDate(day.value)}
                            className={`p-4 rounded-xl border transition-all duration-300 ${
                              selectedDate === day.value
                                ? "border-blue-500 bg-blue-500/10 text-blue-400"
                                : "border-gray-700 hover:border-gray-600 text-gray-300"
                            }`}
                          >
                            <div className="text-lg font-semibold">{day.label.split(' ')[1]}</div>
                            <div className="text-sm">{day.label.split(' ')[0]}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div className="mb-10">
                      <h3 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Select Time (IST)
                      </h3>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 rounded-lg border transition-all duration-300 ${
                              selectedTime === time
                                ? "border-blue-500 bg-blue-500/10 text-blue-400"
                                : "border-gray-700 hover:border-gray-600 text-gray-300"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selected Time Display */}
                    {(selectedDate || selectedTime) && (
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-8">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-blue-400">Selected Slot</div>
                            <div className="text-lg font-semibold text-white">
                              {selectedDate && nextDays.find(d => d.value === selectedDate)?.label}
                              {selectedTime && ` at ${selectedTime}`}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedDate("");
                              setSelectedTime("");
                            }}
                            className="text-sm text-gray-400 hover:text-white"
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-lg font-semibold text-gray-300 mb-6">Your Details</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Company</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-8">
                        <label className="block text-gray-400 text-sm mb-2">Message (Optional)</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Briefly describe what you'd like to discuss..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !selectedDate || !selectedTime}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Scheduling...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5" />
                            Schedule Discovery Call
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right Column - Info */}
            <div>
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-6">
                <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    "30-minute free consultation",
                    "Discussion of your project requirements",
                    "Expert recommendations",
                    "Preliminary timeline & budget estimate",
                    "Q&A session",
                    "No-obligation follow-up"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white">hello@indcode.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-white">+91 98765 43210</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Time Zone</div>
                      <div className="text-white">IST (UTC+5:30)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="text-white">Remote / On-site Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20 mt-6">
                <h3 className="text-xl font-bold text-white mb-4">After Scheduling</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>✓ You'll receive a confirmation email</p>
                  <p>✓ Calendar invite will be sent</p>
                  <p>✓ Reminder 1 hour before the call</p>
                  <p>✓ Meeting link will be provided</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}