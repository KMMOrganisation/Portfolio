import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      duration: '2016 - 2018',
      location: 'Stanford, CA',
      description: 'Specialized in Machine Learning and Human-Computer Interaction. Thesis: "Improving User Experience through Predictive Interface Design." Maintained 3.8 GPA.',
      coursework: ['Advanced Algorithms', 'Machine Learning', 'Database Systems', 'Software Engineering', 'HCI Research']
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2012 - 2016',
      location: 'Berkeley, CA',
      description: 'Graduated Magna Cum Laude with honors in Computer Science. Active member of Computer Science Honor Society and Programming Club. Led team project that won Best Innovation Award.',
      coursework: ['Data Structures', 'Computer Architecture', 'Operating Systems', 'Web Development', 'Discrete Mathematics']
    },
    {
      institution: 'AWS Certification',
      degree: 'AWS Certified Solutions Architect',
      duration: '2021',
      location: 'Online',
      description: 'Comprehensive certification covering cloud architecture, security, and deployment strategies. Demonstrates expertise in designing distributed systems on AWS.',
      coursework: ['Cloud Architecture', 'Security', 'Networking', 'Database Design', 'Cost Optimization']
    },
    {
      institution: 'Google Cloud Platform',
      degree: 'Professional Cloud Developer',
      duration: '2020',
      location: 'Online',
      description: 'Certification in cloud-native application development, demonstrating proficiency in GCP services and modern development practices.',
      coursework: ['Cloud Functions', 'Kubernetes', 'API Design', 'DevOps', 'Monitoring']
    }
  ];

  return (
    <section id="education" className="min-h-screen py-8 px-8 section-bg-secondary">
      <div className="max-w-4xl mx-auto pt-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Education & Certifications</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-custom-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {edu.degree.includes('Certified') || edu.degree.includes('Professional') ? (
                    <Award className="w-6 h-6 text-emerald-custom-600" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-emerald-custom-600" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-emerald-custom-600 mb-2">{edu.institution}</h4>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>
                  
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-emerald-custom-50 text-emerald-custom-700 rounded-md text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education;