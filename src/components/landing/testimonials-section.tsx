
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechStart Inc.',
      content: 'Achilleas delivered an exceptional fintech solution that exceeded our expectations. His technical expertise and attention to detail are outstanding.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager, InnovateCorp',
      content: 'Working with Achilleas was a game-changer. He not only built our platform but also provided valuable insights that improved our entire business process.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Founder, HealthTech Solutions',
      content: 'The healthcare management system Achilleas built for us has transformed how we operate. Professional, reliable, and incredibly skilled.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      position: 'CEO, PropTech Ventures',
      content: 'Achilleas understood our vision perfectly and delivered a real estate platform that our clients love. Highly recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Wang',
      position: 'Operations Director, LogiFlow',
      content: 'The logistics dashboard has given us real-time visibility into our operations. Achilleas\'s expertise in complex systems is impressive.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      position: 'Founder, EduNext',
      content: 'Our educational platform wouldn\'t be where it is today without Achilleas. His technical skills and project management are top-notch.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about 
              their experience working with me.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-slate-200 group hover:-translate-y-2">
                <CardContent className="p-0">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-slate-600 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">5.0</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
