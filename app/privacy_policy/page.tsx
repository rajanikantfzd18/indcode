import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-gray-800/30 border border-gray-700 rounded-2xl p-8 md:p-12">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-blue-400" />
                1. Introduction
              </h2>
              <p className="text-gray-300">
                At Indcode Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2 text-green-400" />
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Company/organization information</li>
                  <li>Payment information for services</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data through cookies</li>
                  <li>Referring website/source</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h4 className="font-bold mb-2 text-blue-300">Service Delivery</h4>
                  <p className="text-gray-300 text-sm">
                    To provide, maintain, and improve our services, process transactions, and send administrative information.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h4 className="font-bold mb-2 text-green-300">Communication</h4>
                  <p className="text-gray-300 text-sm">
                    To respond to inquiries, provide customer support, and send updates about our services.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h4 className="font-bold mb-2 text-purple-300">Analytics</h4>
                  <p className="text-gray-300 text-sm">
                    To analyze usage patterns, optimize website performance, and enhance user experience.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h4 className="font-bold mb-2 text-yellow-300">Marketing</h4>
                  <p className="text-gray-300 text-sm">
                    To send promotional materials (with consent) and inform about new products or features.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
                <li>During business transfers (mergers, acquisitions)</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information.
              </p>
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <h4 className="font-bold mb-3">Cookie Types We Use:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-300">Essential</h5>
                    <p className="text-gray-300 text-sm">Required for basic website functionality</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-300">Performance</h5>
                    <p className="text-gray-300 text-sm">Help understand how visitors interact</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-300">Functional</h5>
                    <p className="text-gray-300 text-sm">Remember preferences and settings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-green-400" />
                7. Your Data Protection Rights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-300">Right to Access</h4>
                  <p className="text-gray-300 text-sm">Request copies of your personal data</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-300">Right to Rectification</h4>
                  <p className="text-gray-300 text-sm">Request correction of inaccurate data</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-300">Right to Erasure</h4>
                  <p className="text-gray-300 text-sm">Request deletion of your personal data</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-300">Right to Restrict</h4>
                  <p className="text-gray-300 text-sm">Request restriction of processing</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have questions about this Privacy Policy or wish to exercise your data protection rights, 
                please contact us at:
              </p>
              <div className="space-y-3">
                <p className="text-blue-300">
                  📧 Email: <a href="mailto:indcodetechnologies@gmail.com" className="hover:text-blue-400">indcodetechnologies@gmail.com</a>
                </p>
                <p className="text-blue-300">
                  📍 Address: Indcode Technologies, Lucknow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}