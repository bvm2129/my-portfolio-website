import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Quote } from 'lucide-react';
import { profileData } from '../mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-100">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            What People Say About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Feedback from professors, mentors, and peers who have worked with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profileData.testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200 bg-white"
            >
              <CardContent className="p-8 text-center">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-slate-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-blue-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600 mb-1">{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.organization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Academic Recognition</h3>
            <p className="text-slate-600">Building strong relationships and earning trust through consistent performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">A+</div>
                <div className="text-sm text-slate-600">Average Grade</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-slate-600">Group Projects</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Assignment Completion</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-sm text-slate-600">Certifications</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-blue-100 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Ready to Work Together?</h3>
              <p className="text-slate-600 mb-6">
                I'm passionate about collaborating on projects that create meaningful impact. 
                Let's connect and explore how we can build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2">Available for Internships</Badge>
                <Badge className="bg-green-100 text-green-700 px-4 py-2">Open to Collaborations</Badge>
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2">Eager to Learn</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;