import React from 'react';
import { Code, Database, Palette, Cloud, Smartphone, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'JavaScript', icon: Code, category: 'Programming' },
    { name: 'TypeScript', icon: Code, category: 'Programming' },
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'Node.js', icon: Terminal, category: 'Backend' },
    { name: 'Python', icon: Code, category: 'Programming' },
    { name: 'PostgreSQL', icon: Database, category: 'Database' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'AWS', icon: Cloud, category: 'Cloud' },
    { name: 'Docker', icon: Cloud, category: 'DevOps' },
    { name: 'Figma', icon: Palette, category: 'Design' },
    { name: 'React Native', icon: Smartphone, category: 'Mobile' },
    { name: 'GraphQL', icon: Database, category: 'API' },
  ];

  const professionalSkills = [
    'Team Leadership',
    'Project Management',
    'Agile/Scrum',
    'Technical Mentoring',
    'Problem Solving',
    'Communication',
    'Code Review',
    'System Design',
    'Product Strategy',
    'Customer Support',
    'Documentation',
    'Testing & QA',
  ];

  return (
    <section id="skills" className="min-h-screen py-8 px-8 section-bg-secondary">
      <div className="max-w-6xl mx-auto pt-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group cursor-pointer transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-emerald-custom-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-custom-100 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-emerald-custom-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                  <p className="text-sm text-gray-600">{skill.category}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-emerald-custom-600 text-white rounded-full text-sm font-medium hover:bg-emerald-custom-700 transition-all duration-200 cursor-default shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;