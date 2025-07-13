import React from 'react';
import { Heart, Calendar, MapPin, Users } from 'lucide-react';

const Volunteering: React.FC = () => {
  const volunteerExperience = [
    {
      organization: 'Code for Good',
      role: 'Lead Developer & Mentor',
      duration: '2020 - Present',
      location: 'San Francisco, CA',
      description: 'Lead a team of volunteer developers building web applications for local nonprofits. Mentor junior developers and organize monthly hackathons focused on social impact. Successfully delivered 8+ projects that improved operational efficiency for community organizations.',
      impact: 'Helped 5 local nonprofits modernize their digital presence, resulting in 40% increase in volunteer engagement and 25% improvement in donation processing efficiency.',
      skills: ['Team Leadership', 'Project Management', 'Full-Stack Development', 'Community Outreach']
    },
    {
      organization: 'Girls Who Code',
      role: 'Technical Instructor',
      duration: '2019 - Present',
      location: 'Bay Area, CA',
      description: 'Teach programming fundamentals to high school girls through hands-on workshops and mentorship programs. Develop curriculum for web development and mobile app creation. Support students in building their first coding projects and preparing for tech careers.',
      impact: 'Directly mentored 50+ students, with 80% continuing to pursue computer science or related fields. Contributed to curriculum used by 100+ students annually.',
      skills: ['Teaching', 'Curriculum Development', 'Mentorship', 'Public Speaking']
    },
    {
      organization: 'Tech Literacy for Seniors',
      role: 'Volunteer Instructor',
      duration: '2018 - 2022',
      location: 'San Francisco, CA',
      description: 'Provided one-on-one and group instruction to senior citizens learning to use computers, smartphones, and internet services. Focused on practical skills like online banking, video calling, and digital safety. Created easy-to-follow guides and resources.',
      impact: 'Taught 200+ seniors essential digital skills, helping them stay connected with family and access important services during the pandemic.',
      skills: ['Patient Teaching', 'Technical Documentation', 'Cross-generational Communication']
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