import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Target, Users, Lightbulb } from 'lucide-react';
import { profileData } from '../mock';

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Dual Degree Pursuit",
      description: "BSC from BITS Pilani & MS from Woolf University",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Creating technology that makes a meaningful difference",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Strong teamwork and communication skills",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Quick adaptation to new technologies",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-100">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Passionate About Technology & Innovation
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Combining academic excellence with practical application to build solutions that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Journey</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {profileData.about.summary}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {profileData.about.mission}
              </p>
            </div>

            {/* Current Focus */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Current Focus Areas</h4>
              <div className="space-y-2">
                {profileData.about.currentFocus.map((focus, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-slate-600">{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Quick View */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Education</h4>
              <div className="space-y-3">
                {profileData.education.slice(0, 2).map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-4">
                    <h5 className="font-medium text-slate-800">{edu.degree}</h5>
                    <p className="text-sm text-slate-600">{edu.institution}</p>
                    <p className="text-xs text-slate-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-slate-200"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${highlight.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">2+</div>
            <div className="text-sm text-slate-600">Degrees Pursuing</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">3+</div>
            <div className="text-sm text-slate-600">Programming Languages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-sm text-slate-600">Technical Skills</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">1</div>
            <div className="text-sm text-slate-600">Year Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;