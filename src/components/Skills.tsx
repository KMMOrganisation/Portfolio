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
    <section id="skills" className="py-12 px-6 lg:px-12 bg-neutral-50 section-divider">
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Skills & Expertise</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-8">Technical Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="card p-4 text-center group cursor-pointer aspect-square flex flex-col justify-center"
                >
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800 mb-1 leading-tight">{skill.name}</h4>
                    <p className="text-xs text-neutral-600">{skill.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-8">Professional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-brand-600 text-white rounded-full text-sm font-medium hover:bg-brand-700 transition-colors duration-200 cursor-default"
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