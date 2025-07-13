import React from 'react';
import { BookOpen, Calendar, MapPin, Award } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Advanced React Patterns',
      institution: 'Frontend Masters',
      duration: '2023',
      location: 'Online',
      description: 'Deep dive into advanced React patterns including render props, higher-order components, compound components, and custom hooks. Learned performance optimization techniques and state management patterns.',
      skills: ['React Patterns', 'Performance Optimization', 'Custom Hooks', 'State Management']
    },
    {
      title: 'System Design Interview',
      institution: 'Educative',
      duration: '2023',
      location: 'Online',
      description: 'Comprehensive course covering scalable system design principles, distributed systems, microservices architecture, and database design. Practiced designing systems like Twitter, Netflix, and Uber.',
      skills: ['System Design', 'Distributed Systems', 'Microservices', 'Database Design']
    },
    {
      title: 'Docker & Kubernetes',
      institution: 'Udemy',
      duration: '2022',
      location: 'Online',
      description: 'Hands-on course covering containerization with Docker, orchestration with Kubernetes, and deployment strategies. Built and deployed multiple applications using container technologies.',
      skills: ['Docker', 'Kubernetes', 'DevOps', 'Container Orchestration']
    },
    {
      title: 'Machine Learning Fundamentals',
      institution: 'Coursera (Stanford)',
      duration: '2022',
      location: 'Online',
      description: 'Introduction to machine learning algorithms, supervised and unsupervised learning, neural networks, and practical applications. Completed projects using Python and scikit-learn.',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Neural Networks']
    },
    {
      title: 'GraphQL with React',
      institution: 'Pluralsight',
      duration: '2021',
      location: 'Online',
      description: 'Complete guide to building applications with GraphQL and React. Covered Apollo Client, schema design, mutations, subscriptions, and performance optimization.',
      skills: ['GraphQL', 'Apollo Client', 'React', 'API Design']
    },
    {
      title: 'AWS Solutions Architect',
      institution: 'A Cloud Guru',
      duration: '2021',
      location: 'Online',
      description: 'Comprehensive preparation for AWS Solutions Architect certification. Covered EC2, S3, RDS, Lambda, VPC, and other core AWS services with hands-on labs.',
      skills: ['AWS', 'Cloud Architecture', 'Infrastructure', 'Security']
    }
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