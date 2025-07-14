import React from 'react';
import { User, Code, Briefcase, GraduationCap, FolderOpen, BookOpen, Heart, Mail } from 'lucide-react';
import profilePicture from '../../profile_picture.jpg';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionClick }) => {
  const sections = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'work', label: 'Work History', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'volunteering', label: 'Volunteering', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-border flex flex-col sticky top-0">
      <div className="p-6 border-b border-border">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <h2 className="text-lg font-semibold text-neutral-900 text-center">Katie Roberts</h2>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <li key={section.id}>
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors duration-200 text-left font-medium ${
                    activeSection === section.id
                      ? 'bg-brand-50 text-brand-700 border-l-4 border-brand-600'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <p className="text-xs text-neutral-500 text-center">
          © 2024 Portfolio
        </p>
      </div>
    </div>
  );
};

export default Sidebar;