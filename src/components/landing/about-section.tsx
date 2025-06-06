
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 
    'Docker', 'Kubernetes', 'GraphQL', 'REST APIs', 'Microservices', 'CI/CD'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Crafting Digital Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With over 8 years of experience in software engineering, I specialize in building 
              robust, scalable applications that drive business growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Passionate Problem Solver
              </h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-slate-600 leading-relaxed">
                  I'm a Cyprus-based Senior Software Engineer with a passion for creating innovative 
                  digital solutions. My expertise spans full-stack development, fintech applications, 
                  and technical consulting.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  I believe in writing clean, maintainable code and following best practices to 
                  deliver exceptional user experiences. My approach combines technical excellence 
                  with business understanding to create solutions that truly matter.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Technical Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Icons Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Frontend Development</h4>
                  <p className="text-sm text-slate-600">Modern React applications with TypeScript</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Backend Development</h4>
                  <p className="text-sm text-slate-600">Scalable APIs and microservices</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cloud Solutions</h4>
                  <p className="text-sm text-slate-600">AWS, Docker, and DevOps practices</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Mobile Development</h4>
                  <p className="text-sm text-slate-600">Cross-platform mobile solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
