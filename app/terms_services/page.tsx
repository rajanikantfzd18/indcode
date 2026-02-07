import Link from 'next/link';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle, Scale } from 'lucide-react';

export default function TermsOfServicePage() {
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
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-gray-800/30 border border-gray-700 rounded-2xl p-8 md:p-12">
          <div className="space-y-10">
            {/* Agreement */}
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold">Agreement to Terms</h2>
              </div>
              <p className="text-gray-300">
                By accessing or using Indcode Technologies' website and services, you agree to be bound by these 
                Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Services Description</h2>
              <p className="text-gray-300 mb-4">
                Indcode Technologies provides web development, software solutions, consulting, and related 
                technology services ("Services"). We reserve the right to modify, suspend, or discontinue any 
                aspect of the Services at any time.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. User Responsibilities</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Accurate Information</h3>
                    <p className="text-gray-300 text-sm">Provide accurate and complete information when using our services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Compliance</h3>
                    <p className="text-gray-300 text-sm">Comply with all applicable laws and regulations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Account Security</h3>
                    <p className="text-gray-300 text-sm">Maintain security of your account credentials</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Prohibited Activities</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Illegal Use</h3>
                    <p className="text-gray-300 text-sm">Using services for any unlawful purpose</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Intellectual Property</h3>
                    <p className="text-gray-300 text-sm">Infringing on intellectual property rights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Security Breach</h3>
                    <p className="text-gray-300 text-sm">Attempting to breach security measures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Spam</h3>
                    <p className="text-gray-300 text-sm">Sending spam or malicious content</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payments & Refunds */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Scale className="w-5 h-5 mr-2 text-blue-400" />
                4. Payments, Fees & Refunds
              </h2>
              <div className="bg-gray-900/50 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3 text-blue-300">Payment Terms</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• All fees are quoted in USD unless specified</li>
                      <li>• Payment due as per agreed terms</li>
                      <li>• Late payments may incur additional charges</li>
                      <li>• Taxes not included unless specified</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 text-green-300">Refund Policy</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Custom development: No refunds after work begins</li>
                      <li>• Subscription services: Pro-rated refunds available</li>
                      <li>• Refund requests within 14 days of payment</li>
                      <li>• Contact billing@indcodetechnologies.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="font-bold mb-3 text-purple-300">Our Property</h3>
                  <p className="text-gray-300 text-sm">
                    All website content, trademarks, logos, and service marks are property of Indcode Technologies 
                    or its licensors.
                  </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="font-bold mb-3 text-green-300">Your Content</h3>
                  <p className="text-gray-300 text-sm">
                    You retain ownership of content you provide. By submitting content, you grant us license to use 
                    it for service delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-6">
                <p className="text-gray-300 mb-4">
                  Indcode Technologies shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Use or inability to use our services</li>
                  <li>Unauthorized access to your transmissions</li>
                  <li>Third-party conduct on our platform</li>
                  <li>Any other matter relating to our services</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
              <p className="text-gray-300">
                We may terminate or suspend your access immediately, without prior notice, for conduct that we 
                believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. We will provide notice of material changes 
                through our website or email.
              </p>
              <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-6">
                <p className="text-yellow-300">
                  Your continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <p className="text-gray-300">
                  These Terms shall be governed by the laws of [Your Country/State], without regard to its conflict 
                  of law provisions. Any disputes shall be resolved in the courts located in [Your City].
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-3">
                <p className="text-blue-300">
                  📧 Legal: <a href="mailto:indcodetechnologies@gmail.com" className="hover:text-blue-400">indcodetechnologies@gmail.com</a>
                </p>
                <p className="text-blue-300">
                    <a href='tel:+917505243833'>📞 Phone: +91 7505243833</a>      
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