import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'University of Exeter ',
      degree: 'MSc Educational Research',
      duration: 'Oct 2022 - Feb 2024',
      location: 'Distance Learning',
      description: 'Conducted comprehensive research utilizing SPSS and Python for data analysis across core modules including The Nature of Educational Enquiry, Interpretive Methodologies, Scientific Methodologies, and Designing and Communicating Research. Completed final thesis exploring "University students perception of the effectiveness of their financial education in preparing them for life out of education," demonstrating advanced research capabilities and critical analysis of educational outcomes and student preparedness.',
      coursework: ['The Nature of Educational Enquiry', 'Qualitative Methods in Educational Research', 'Quantitative Methods in Educational Research', 'Designing and Communicating Research', 'Dissertation'],
      skills: ['Research Methods', 'Data Analysis', 'SPSS', 'Python', 'Academic Writing'],
      type: 'degree'
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2012 - 2016',
      location: 'Berkeley, CA',
      description: 'Graduated Magna Cum Laude with honors in Computer Science. Active member of Computer Science Honor Society and Programming Club. Led team project that won Best Innovation Award.',
      coursework: ['Data Structures', 'Computer Architecture', 'Operating Systems', 'Web Development', 'Discrete Mathematics'],
      skills: ['Research Methods', 'Data Analysis', 'SPSS', 'Python', 'Academic Writing'],
      type: 'degree'
    },
    {
      institution: 'AWS Certification',
      degree: 'AWS Certified Solutions Architect',
      duration: '2021',
      location: 'Online',
      description: 'Comprehensive certification covering cloud architecture, security, and deployment strategies. Demonstrates expertise in designing distributed systems on AWS.',
      coursework: ['Cloud Architecture', 'Security', 'Networking', 'Database Design', 'Cost Optimization'],
      skills: ['Research Methods', 'Data Analysis', 'SPSS', 'Python', 'Academic Writing'],
      type: 'certification'
    },
    {
      institution: 'Google Cloud Platform',
      degree: 'Professional Cloud Developer',
      duration: '2020',
      location: 'Online',
      description: 'Certification in cloud-native application development, demonstrating proficiency in GCP services and modern development practices.',
      coursework: ['Cloud Functions', 'Kubernetes', 'API Design', 'DevOps', 'Monitoring'],
      skills: ['Research Methods', 'Data Analysis', 'SPSS', 'Python', 'Academic Writing'],
      type: 'certification'
    }
  ];

  return (
    <section id="education" className="py-12 px-6 lg:px-12 bg-neutral-50 section-divider">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Education & Certifications</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {edu.type === 'certification' ? (
                    <Award className="w-6 h-6 text-brand-600" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-brand-600" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{edu.degree}</h3>
                      <h4 className="text-lg font-medium text-brand-600">{edu.institution}</h4>
                    </div>
                    <div className="flex items-center text-neutral-600 text-sm mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-neutral-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                  
                  <p className="text-neutral-700 mb-6 leading-relaxed">{edu.description}</p>
                  
                  <div>
                    <h5 className="font-medium text-neutral-800 mb-3">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-medium border border-brand-200"
                        >
                          {course}

                   <div>
                    <h5 className="font-medium text-neutral-800 mb-3">Skills Gained:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Education;