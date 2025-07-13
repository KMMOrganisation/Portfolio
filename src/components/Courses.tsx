import React from 'react';
import { BookOpen, Calendar, MapPin, Award } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Instructional Design Fundamentals',
      institution: 'Cambridge Institute of Continuing Education',
      duration: '2024',
      location: 'Online',
      description: 'A comprehensive 6-week course covering the theory and practice of creating effective learning and training content. Explored the ADDIE model (Analysis, Design, Development, Implementation, and Evaluation), learning domains and Blooms Taxonomy, and hands-on experience designing instructional content using storyboard approaches. Gained practical skills in audience analysis, writing effective learning objectives, and evaluating training effectiveness - directly applicable to creating user-centered technical documentation and training materials.',
      skills: ['Instructional Design', 'Audience Analysis', 'Learning Objectives', 'Content Storyboarding', 'Training Evaluation']
    },
    {
      title: 'Junior Data Science Degree',
      institution: 'Code First Girls',
      duration: '2023',
      location: 'Online',
      description: 'A comprehensive intensive program covering foundational data science and programming skills, sponsored by the Defence Science and Technology Laboratory (DSTL). Developed practical experience in data analysis, programming, and machine learning techniques with hands-on projects and mentorship support. Achieved Distinction grade while gaining exposure to real-world data science applications and industry best practices.',
      skills: ['Python Programming', 'SQL Database Management', 'JavaScript', 'Data Analysis', 'Machine Learning']
    },
    {
      title: 'Certificate Program in Learning and Development',
      institution: 'Udemy',
      duration: '2024',
      location: 'Online',
      description: 'A short course covering the strategic role of Learning and Development in business operations and how to transform L&D from a cost center to a strategic business partner. Explored the complete end-to-end L&D process including strategy building, learner engagement, intervention design, and measuring return on learning investment. Gained understanding of how to align training goals with business objectives and sustaining continuous learning in workplace environments.',
      skills: ['Learning Strategy Development', 'Training Design & Delivery', 'Learner Engagement', 'ROI Calculation', 'Business Alignment']
    },

  ];

  return (
    <section id="courses" className="py-12 px-6 lg:px-12 bg-neutral-50 section-divider">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Additional Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-900 leading-tight">{course.title}</h3>
                      <h4 className="text-base font-medium text-brand-600">{course.institution}</h4>
                    </div>
                    <div className="flex items-center text-neutral-600 text-sm mt-1 sm:mt-0 sm:ml-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-neutral-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {course.location}
                  </div>
                  
                  <p className="text-neutral-700 mb-4 leading-relaxed text-sm">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200"
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

export default Courses;