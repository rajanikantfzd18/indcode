"use client";

import { Globe, Linkedin, Github, Twitter, Instagram, Facebook, Mail } from "lucide-react"
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">Indcode</span>
              </div>
              <p className="text-gray-400 mt-2">Building the future, one line at a time.</p>
            </div>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/indcodetechnologies/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-500 transition-colors"
                 aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/indcodetechnologies" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors"
                 aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/indcodetech" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-colors"
                 aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/indcodetechnologies" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-pink-400 transition-colors"
                 aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/indcodetechnologies" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-600 transition-colors"
                 aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="mailto:indcodetechnologies@gmail.com" 
                 className="text-gray-400 hover:text-red-400 transition-colors"
                 aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy_policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms_services" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Indcode Technologies. All rights reserved.
          </div>
        </div>
      </footer>
  );
}