import React from 'react';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Heart, Mail, Linkedin, ArrowUp } from 'lucide-react';
import { profileData, socialLinks } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand/Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Veda Manaswini Vustepalle</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              {profileData.tagline}
            </p>
            <div className="flex items-center text-slate-400 mb-4">
              <span className="text-sm">{profileData.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-900 text-green-300 hover:bg-green-800">
                Available for opportunities
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
              <a
                href={`https://${profileData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.slice(0, 2).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  {social.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                  {social.name === 'Email' && <Mail className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-slate-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Veda Manaswini Vustepalle. Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>and dedication to innovation.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-slate-400 hover:text-white transition-all duration-200 text-sm group"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="text-center">
            <p className="text-slate-400 text-xs mb-2">
              Currently pursuing dual degrees and actively learning new technologies
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Python', 'AI/ML', 'Full-Stack Development', 'Problem Solving'].map((skill, index) => (
                <Badge key={index} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;