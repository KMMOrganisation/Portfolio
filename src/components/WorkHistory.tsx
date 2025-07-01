import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const WorkHistory: React.FC = () => {
  const workExperience = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of enterprise-scale web applications serving 100K+ users. Architected and implemented microservices infrastructure using Node.js and AWS. Mentored junior developers and established code review processes that improved team productivity by 40%.',
      skills: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'TypeScript']
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'Mountain View, CA',
      description: 'Built and maintained multiple client-facing applications from concept to deployment. Collaborated directly with product managers and designers to deliver features that increased user engagement by 60%. Implemented CI/CD pipelines and automated testing.',
      skills: ['React', 'Python', 'MongoDB', 'Firebase', 'React Native', 'GraphQL']
    },
    {
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      duration: '2019 - 2020',
      location: 'San Jose, CA',
      description: 'Developed responsive web applications for diverse clients including e-commerce platforms and corporate websites. Worked closely with UX/UI designers to implement pixel-perfect designs and ensure cross-browser compatibility.',
      skills: ['JavaScript', 'React', 'SCSS', 'Webpack', 'Figma']
    },
    {
      company: 'InnovateTech',
      position: 'Junior Developer',
      duration: '2018 - 2019',
      location: 'Palo Alto, CA',
      description: 'Started career contributing to internal tools and customer-facing features. Participated in agile development processes and gained experience in modern web development practices. Contributed to open-source projects and technical documentation.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'REST APIs']
    }
  ];

  return (
    <section id="work" className="min-h-screen py-8 px-8 section-bg-primary">
      <div className="max-w-4xl mx-auto pt-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Work Experience</h2>
        
        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-custom-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-emerald-custom-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.company} - {job.position}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
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

export default WorkHistory;