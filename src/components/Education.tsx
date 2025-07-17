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
      coursework: ['The Nature of Educational Enquiry', 'Scientific Methodologies', 'Interpretive Methodologies', 'Qualitative and Quantitative Methods', 'Designing and Communicating Research', 'Dissertation'],
      skills: ['Qualitative Research Methods', 'Quantitative Research Methods', 'Data Analysis', 'SPSS', 'Python', 'Communication', 'Data visualisation', 'Educational research'],
      type: 'degree'
    },
    {
      institution: 'The University of the West of England - (UWE)',
      degree: 'BA (hons) Studies in Education',
      duration: 'Sep 2018 - Jun 2022',
      location: 'Bristol, UK',
      description: 'Developed a strong foundation in educational theory and practice with a focus on primary education (KS1 and KS2). Conducted independent research on the impact of statutory assessments on primary-aged children, demonstrating advanced research and analytical skills. Gained extensive practical experience through professional placements, emphasizing inclusive teaching and learning approaches. Completed additional trainee teacher role (Feb 2019 - Nov 2021), gaining hands-on teaching experience across KS1 and KS2 while developing strong classroom management and differentiation skills with a commitment to inclusive education.',
      coursework: ['Inclusive Practice', 'Professional Practice', 'Pedagogy developement', 'Educational Theory', 'Dissertation'],
      skills: ['Primary Education', 'Inclusive Teaching', 'Lesson Planning', 'Classroom Management', 'Digital Learning'],
      type: 'degree'
    },
    {
      institution: 'South Devon College ',
      degree: 'Access to HE Social Sciences',
      duration: '2Sep 2016 - Jun 2017',
      location: 'Paignton, UK',
      description: 'Developed a strong foundation in social sciences, including sociology, psychology, and criminology. Demonstrated leadership and interpersonal skills as a peer-elected student representative. Explored key sociological concepts such as family, media, education, and crime and deviance, developing critical thinking and analytical skills through comprehensive study of social structures and human behavior.',
      coursework: ['Sociology', 'Psychology', 'Criminology'],
      skills: ['Social Research', 'Critical Analysis', 'Leadership', 'Interpersonal Skills', 'Student Representation'],
      type: 'College degree'
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
                  
                  <div className="mb-6">
                    <h5 className="font-medium text-neutral-800 mb-3">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-medium border border-brand-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-neutral-800 mb-3">Skills:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-200"
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