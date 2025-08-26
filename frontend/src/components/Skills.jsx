import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Code, Palette, Users2, TrendingUp, Trophy, Brain } from 'lucide-react';
import { profileData } from '../mock';

const Skills = () => {
  const categoryIcons = {
    "Programming & Development": Code,
    "Design & Styling": Palette,
    "Soft Skills": Users2
  };

  const categoryColors = {
    "Programming & Development": "bg-blue-50 border-blue-200",
    "Design & Styling": "bg-green-50 border-green-200",
    "Soft Skills": "bg-purple-50 border-purple-200"
  };

  const achievementIcons = {
    "Trophy": Trophy,
    "Palette": Palette,
    "Brain": Brain,
    "Code": Code
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-600 hover:bg-blue-100">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Technical Proficiencies & Core Competencies
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Continuously expanding my skill set to build impactful solutions in design, development, and beyond
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {profileData.skills.map((category, categoryIndex) => {
            const IconComponent = categoryIcons[category.category];
            const cardColor = categoryColors[category.category];

            return (
              <Card key={categoryIndex} className={`${cardColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <IconComponent className="w-6 h-6 text-slate-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-800">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-xs text-slate-600">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Achievements Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-50 text-yellow-600 hover:bg-yellow-100">
              Key Achievements
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
              Milestones & Recognition
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Celebrating key accomplishments that showcase growth, leadership, and technical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.achievements.map((achievement) => {
              const IconComponent = achievementIcons[achievement.icon];
              
              return (
                <Card key={achievement.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">{achievement.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">{achievement.description}</p>
                    <Badge variant="outline" className="text-xs border-slate-300 text-slate-500">
                      {achievement.category}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Certifications & Workshops</h3>
            <p className="text-slate-600">Recognition for continuous learning and participation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {profileData.certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-1">{cert.name}</h4>
                      <p className="text-sm text-slate-600 mb-2">{cert.issuer} • {cert.year}</p>
                      <p className="text-xs text-slate-500">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Learning Journey */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-slate-50 border-blue-100">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Continuous Learning Journey</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                I believe in lifelong learning and staying updated with the latest technologies. 
                Currently focusing on strengthening my foundation while exploring advanced concepts in UI/UX design and web development.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Python', 'UI/UX Design', 'React', 'JavaScript', 'Tailwind CSS', 'Git Workflows', 'Problem Solving'].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;