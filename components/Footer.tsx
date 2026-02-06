"use client";

import { Globe, Linkedin, Github, Twitter, Mail } from "lucide-react"

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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-500 transition-colors"
                 aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors"
                 aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-400 transition-colors"
                 aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:hello@indcode.com" 
                 className="text-gray-400 hover:text-red-400 transition-colors"
                 aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Indcode Technologies. All rights reserved.
          </div>
        </div>
      </footer>
  );
}