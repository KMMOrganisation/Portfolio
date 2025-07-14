import React from 'react';
import { Heart, Calendar, MapPin, Users } from 'lucide-react';

const Volunteering: React.FC = () => {
  const volunteerExperience = [
    {
      organization: 'Museum of Oxford (MOX)',
      role: 'General Volunteer',
      duration: 'April, 2025 - Present',
      location: 'Oxford, UK',
      description: 'Provided comprehensive visitor services including welcoming guests and delivering informational support to enhance the overall visitor experience. Supported diverse event programming for families, schools, and senior visitors, ensuring inclusive and engaging experiences for all demographics. Assisted with front-of-house operations and community outreach initiatives to strengthen organizational presence and accessibility. Provided dedicated support for community-focused events, fostering positive relationships and encouraging ongoing engagement with the organisation.',
      impact: 'Enhanced visitor satisfaction and accessibility by creating welcoming, informative experiences that encouraged repeat visits and positive word-of-mouth recommendations. Strengthened community connections through successful event programming and outreach initiatives, expanding the organisations reach and impact within the local community.',
      skills: ['Customer Service', 'Event Support', 'Community Outreach', 'Front-of-House Operations', 'Stakeholder Engagement']
    },
    {
      organization: 'Team4Tech',
      role: 'Cybersecurity consultant',
      duration: 'October, 2024',
      location: 'Remote',
      description: 'Collaborated with Team4Tech to develop solutions for critical cybersecurity issues faced by their education-focused non-profit partner, Pró-Saber. Employed a human-centered design process to develop prototypes for improved cybersecurity practices within the organization. Contributed to a collaborative team environment, honing problem-solving skills while making a positive impact on a global educational non-profit through enhanced digital security measures.',
      impact: 'Provided comprehensive security solutions and strategic next steps to strengthen Pró-Sabers cybersecurity posture, protecting them from future cyber threats and ensuring the safety and security of the children they serve through their educational programs.',
      skills: ['Cybersecurity', 'Human-Centered Design', 'Problem Solving', 'Team Collaboration', 'Non-Profit Consulting']
    }
  ];

  return (
    <section id="volunteering" className="py-12 px-6 lg:px-12 bg-neutral-50 section-divider">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Volunteer Experience</h2>
        
        <div className="space-y-8">
          {volunteerExperience.map((volunteer, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-rose-200">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{volunteer.role}</h3>
                      <h4 className="text-lg font-medium text-brand-600">{volunteer.organization}</h4>
                    </div>
                    <div className="flex items-center text-neutral-600 text-sm mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {volunteer.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-neutral-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {volunteer.location}
                  </div>
                  
                  <p className="text-neutral-700 mb-6 leading-relaxed">{volunteer.description}</p>
                  
                  <div className="bg-brand-50 p-4 rounded-lg mb-6 border border-brand-200">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-brand-700 mr-2" />
                      <span className="font-medium text-brand-800">Impact & Results</span>
                    </div>
                    <p className="text-brand-700 text-sm leading-relaxed">{volunteer.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {volunteer.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-rose-50 text-rose-700 rounded-md text-sm font-medium border border-rose-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;