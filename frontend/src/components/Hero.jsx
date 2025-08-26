import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '../mock';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Opportunities
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Veda Manaswini
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-medium">
                {profileData.title}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start text-slate-500">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{profileData.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('#projects')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center lg:justify-start pt-8">
              <button
                onClick={() => scrollToSection('#about')}
                className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full animate-spin-slow opacity-30 delay-75"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-100">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;