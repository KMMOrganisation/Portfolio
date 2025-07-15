import React from 'react';
import { Code, Database, File, Calendar, Shield, Users, MessageCircle, Notebook, Headset, Layout, Bot, FileText, Palette, Github, Gitlab, Laptop} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Okta', icon: Shield, level: 'M' },
    { name: 'Dayforce', icon: Users, level: 'H' },
    { name: 'Kinetic', icon: Database, level: 'H' },
    { name: 'Cerb', icon: Headset, level: 'H' },
    { name: 'Monday.com', icon: Users, level: 'M' },
    { name: 'Trello', icon: Notebook, level: 'H' },
    { name: 'Zoom', icon: Headset, level: 'H' },
    { name: 'Calendly', icon: Calendar, level: 'H' },
    { name: 'Slack', icon: MessageCircle, level: 'H' },
    { name: 'Microsoft Office', icon: File, level: 'H' },
    { name: 'Google Workspace', icon: File, level: 'H' },
    { name: 'Squarespace', icon: Layout, level: 'M' },
    { name: 'Productboard', icon: File, level: 'H' },
    { name: 'Text Expander', icon: FileText, level: 'H' },
    { name: 'CleanShot X', icon: Laptop, level: 'M' },
    { name: 'Parallels', icon: Laptop, level: 'H' },
    { name: 'Notion', icon: File, level: 'H' },
    { name: 'Articulate 360', icon: Notebook, level: 'L' },
    { name: 'Canva', icon: Database, level: 'H' },
    { name: 'Powtoon', icon: Palette, level: 'M' },
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
    { name: 'Bolt.new', icon: Bot, level: 'M', isLearning: true }
  ];

  const professionalSkills = [
   'Communication',
   'Critical Thinking',
   'Attention to Detail',
   'Multitasking',
   'Interpersonal Skills',
   'Coaching',
   'Strategic Thinking',
   'Creativity',
   'Problem Solving',
   'Team Leadership',
   'Customer Support',
   'Mentoring',
   'Empathy',
   'Adaptability',
   'Time Management',
   'Collaboration',
   'Research & Analysis',
   'Documentation',
   'Learning Agility',
   'Relationship Building',
   'Organisation',
   'Conflict Resolution',
  ];

  const getIconColor = (level: string) => {
    switch (level) {
      case 'L':
        return 'text-amber-600';
      case 'M':
        return 'text-blue-600';
      case 'H':
        return 'text-emerald-600';
      default:
        return 'text-neutral-600';
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
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-8">Tools</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              const colors = getLevelColors(skill.level);
              return (
                <div
                  key={index}
                  className="card p-4 text-center group cursor-pointer aspect-square flex flex-col justify-center"
                >
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors duration-200">
                    <Icon className={`w-5 h-5 ${getIconColor(skill.level)}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-800 mb-1 leading-tight">{skill.name}</h4>
                    <p className="text-xs text-neutral-600">{skill.category}</p>
                    {getLevelDots(skill.level)}
                    {skill.isLearning && (
                        <div className="mt-2">
                          <span className="text-xs font-medium text-purple-600">Learning</span>
                        </div>
                      )}
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