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
    <section id="volunteering" className="min-h-screen py-8 px-8 section-bg-secondary">
      <div className="max-w-4xl mx-auto pt-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Volunteer Experience</h2>
        
        <div className="space-y-6">
          {volunteerExperience.map((volunteer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {volunteer.organization} - {volunteer.role}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {volunteer.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {volunteer.location}
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{volunteer.description}</p>
                  
                  <div className="bg-emerald-custom-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-emerald-custom-700 mr-2" />
                      <span className="font-medium text-emerald-custom-800">Impact & Results</span>
                    </div>
                    <p className="text-emerald-custom-700 text-sm leading-relaxed">{volunteer.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {volunteer.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-rose-50 text-rose-700 rounded-md text-sm font-medium"
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