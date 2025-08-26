import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { profileData } from '../mock';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Full-Stack', 'Educational Tool'];
  
  const statusIcons = {
    'In Development': { icon: Clock, color: 'text-blue-600 bg-blue-100' },
    'Planning Phase': { icon: AlertCircle, color: 'text-orange-600 bg-orange-100' },
    'Concept': { icon: AlertCircle, color: 'text-slate-600 bg-slate-100' },
    'Completed': { icon: CheckCircle, color: 'text-green-600 bg-green-100' }
  };

  const filteredProjects = filter === 'All' 
    ? profileData.projects 
    : profileData.projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-100">
            My Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Building Solutions That Matter
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Exploring ideas and creating projects that combine technology with real-world impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`transition-all duration-200 ${
                filter === category 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const StatusIcon = statusIcons[project.status]?.icon || Clock;
            const statusColor = statusIcons[project.status]?.color || 'text-slate-600 bg-slate-100';
            
            return (
              <Card 
                key={project.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge className={`${statusColor} flex items-center gap-1 text-xs`}>
                      <StatusIcon className="w-3 h-3" />
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs border-blue-200 text-blue-600">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-slate-700">Key Features:</h5>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="text-xs text-slate-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs"
                      disabled={project.status === 'Concept'}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {project.status === 'Concept' ? 'Coming Soon' : 'View Project'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-slate-300 text-slate-600 hover:bg-slate-50 text-xs"
                      disabled={project.status === 'Concept'}
                    >
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-blue-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Want to Collaborate?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative projects that can make a real difference. 
                Whether you have an idea or want to contribute to existing projects, let's connect!
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Work Together
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;