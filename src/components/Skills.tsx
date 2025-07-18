import React from 'react';
import {Code, Database, File, Calendar, Shield, Users, MessageCircle, Notebook, Headset, Layout, Bot, FileText, Palette, Github, Gitlab, Laptop} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Okta', icon: Shield, level: 'M' },
    { name: 'Dayforce', icon: Users, level: 'H' },
    { name: 'Kinetic', icon: Database, level: 'H' },
    { name: 'Cerb', icon: Headset, level: 'H' },
    { name: 'Trello', icon: Notebook, level: 'H' },
    { name: 'Zoom', icon: Headset, level: 'H' },
    { name: 'Calendly', icon: Calendar, level: 'H' },
    { name: 'Microsoft Office', icon: File, level: 'H' },
    { name: 'Productboard', icon: File, level: 'H' },
    { name: 'CleanShot X', icon: Laptop, level: 'M' },
    { name: 'Parallels', icon: Laptop, level: 'H' },
    { name: 'Notion', icon: File, level: 'H' },
    { name: 'Canva', icon: Database, level: 'H' },
    { name: 'GitHub', icon: Github, level: 'M' },
    { name: 'GitLab', icon: Gitlab, level: 'M' },
    { name: 'SPSS', icon: Database, level: 'L' },
    { name: 'My SQL', icon: Database, level: 'L' },
    { name: 'Supabase', icon: Database, level: 'L', isLearning: true },
    { name: 'Netlify', icon: Code, Level: 'M', isLearning: true },
    { name: 'HTML', icon: Code, level: 'M', isLearning: true },
    { name: 'Javascript', icon: Code, level: 'L', isLearning: true },
    { name: 'CSS', icon: Code, level: 'L', isLearning: true },
    { name: 'Typescript', icon: Code, level: 'L', isLearning: true },
    { name: 'React', icon: Code, level: 'L', isLearning: true },
  ];

  const professionalSkills = [
    'Communication', 'Critical Thinking', 'Team Training', 'Strategic Thinking',
    'Problem Solving', 'Team Leadership', 'Customer Support', 'Empathy',
    'Adaptability', 'Collaboration', 'Documentation',
    'Learning Agility', 'Organisation', 'Conflict Resolution',
  ];

  const getIconColor = (level: string) => {
    switch (level) {
      case 'L': return 'text-amber-600';
      case 'M': return 'text-blue-600';
      case 'H': return 'text-emerald-600';
      default: return 'text-neutral-600';
    }
  };

  const getLevelColors = (level: string) => {
    return { pill: 'bg-brand-600' };
  };

  const getLevelDots = (level: string) => {
    const dotCount = level === 'L' ? 1 : level === 'M' ? 2 : 3;
    const colors = getLevelColors(level);
    return (
      <div className="flex gap-1 mt-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i < dotCount ? colors.pill : 'bg-neutral-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-12 px-6 lg:px-12 bg-neutral-50 section-divider">
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Skills & Tools</h2>

        <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Tools</h3>

        {/* Regular Skills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {technicalSkills.filter(skill => !skill.isLearning).map((skill, index) => {
            const Icon = skill.icon;
            const level = skill.level;
            const dotCount = level === 'L' ? 1 : level === 'M' ? 2 : 3;

            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-neutral-800 border border-emerald-100 rounded-full text-sm shadow-sm"
              >
                <Icon className={`w-4 h-4 ${getIconColor(level)}`} />
                <span className="font-medium">{skill.name}</span>
                <div className="flex gap-0.5 ml-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < dotCount ? 'bg-brand-600' : 'bg-neutral-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning */}
        {technicalSkills.some(skill => skill.isLearning) && (
          <>
            <h4 className="text-xl font-semibold text-neutral-700 mb-4">Currently Learning</h4>
            <div className="flex flex-wrap gap-3 mb-12">
              {technicalSkills.filter(skill => skill.isLearning).map((skill, index) => {
                const Icon = skill.icon;
                const level = skill.level;
                const dotCount = level === 'L' ? 1 : level === 'M' ? 2 : 3;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-50 text-neutral-800 border border-violet-200 rounded-full text-sm shadow-sm"
                  >
                    <Icon className={`w-4 h-4 ${getIconColor(level)}`} />
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex gap-0.5 ml-1">
                      {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < dotCount ? 'bg-brand-600' : 'bg-neutral-300'
                      }`}
                    />
                 ))}
            </div>
          </div>
        );
      })}
    </div>
  </>
)}

        {/* Professional Skills */}
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
