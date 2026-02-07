import Link from 'next/link';
import { ArrowLeft, Calendar, Users, GraduationCap, Briefcase, DollarSign, Clock, CheckCircle } from 'lucide-react';

const internshipPrograms = [
  {
    id: 1,
    title: "Software Dev Intern",
    department: "Engineering",
    duration: "3-6 Months",
    type: "Full-time/Part-time",
    stipend: "Competitive",
    description: "Work on real-world projects using modern technologies.",
    skills: ["JavaScript/TypeScript", "React/Next.js", "Node.js", "Git"],
    openings: 5
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    department: "Design",
    duration: "3-6 Months",
    type: "Full-time",
    stipend: "Competitive",
    description: "Design user interfaces and experiences for web and mobile applications.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    openings: 3
  },
  {
    id: 3,
    title: "Marketing Intern",
    department: "Marketing",
    duration: "3-6 Months",
    type: "Part-time",
    stipend: "Stipend Provided",
    description: "Help create marketing campaigns, content, and social media strategies.",
    skills: ["Content Writing", "SEO", "Social Media", "Analytics"],
    openings: 4
  },
  {
    id: 4,
    title: "DevOps Intern",
    department: "Operations",
    duration: "6 Months",
    type: "Full-time",
    stipend: "Competitive",
    description: "Learn about cloud infrastructure, CI/CD pipelines, and deployment strategies.",
    skills: ["AWS/Azure", "Docker", "Kubernetes", "Linux"],
    openings: 2
  },
  {
    id: 5,
    title: "Data Science Intern",
    department: "Analytics",
    duration: "3-6 Months",
    type: "Full-time",
    stipend: "Competitive",
    description: "Work with data analysis, machine learning models, and business insights.",
    skills: ["Python", "SQL", "Machine Learning", "Data Visualization"],
    openings: 3
  },
  {
    id: 6,
    title: "Business Dev Intern",
    department: "Sales",
    duration: "3 Months",
    type: "Part-time",
    stipend: "Performance-based",
    description: "Assist in client acquisition, market research, and partnership development.",
    skills: ["Communication", "Market Research", "CRM", "Negotiation"],
    openings: 3
  }
];

const benefits = [
  "Hands-on project experience",
  "Mentorship from industry experts",
  "Flexible work hours",
  "Certificate of completion",
  "Letter of recommendation",
  "Potential full-time offer",
  "Networking opportunities",
  "Skill development workshops"
];

export default function InternshipsPage() {
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full mb-6">
            <GraduationCap className="w-5 h-5 mr-2" />
            Internship Program 2024
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your Career with Our <span className="text-blue-400">Internship Program</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Gain real-world experience, learn from industry experts, and kickstart your professional journey.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Program <span className="text-blue-400">Benefits</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Positions */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Available <span className="text-blue-400">Positions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPrograms.map((program) => (
              <div 
                key={program.id} 
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full mb-3">
                      {program.department}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">{program.openings}</div>
                    <div className="text-sm text-gray-400">Openings</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">{program.type}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">Stipend: {program.stipend}</span>
                  </div>
                </div>
                
                {/* Skills */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Apply Button */}
                <Link 
                  href={`/apply-internship/${program.id}`}
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-center transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Application <span className="text-blue-400">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-blue-400">1</div>
              </div>
              <h3 className="font-bold mb-2">Apply Online</h3>
              <p className="text-gray-400 text-sm">Submit your application through our portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-blue-400">2</div>
              </div>
              <h3 className="font-bold mb-2">Screening</h3>
              <p className="text-gray-400 text-sm">Resume review and initial assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-blue-400">3</div>
              </div>
              <h3 className="font-bold mb-2">Interview</h3>
              <p className="text-gray-400 text-sm">Technical and HR interview rounds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-blue-400">4</div>
              </div>
              <h3 className="font-bold mb-2">Onboarding</h3>
              <p className="text-gray-400 text-sm">Welcome to the team and project allocation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Applications are accepted on a rolling basis. Early applications have higher chances.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/general_application">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 cursor-pointer">
                Apply for Internship
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}