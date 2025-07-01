import React from 'react';
import { User, Code, Briefcase, GraduationCap, FolderOpen, Heart, Mail } from 'lucide-react';

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
    { id: 'volunteering', label: 'Volunteering', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-xl flex flex-col border-r border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-custom-600 to-emerald-custom-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="Profile"
            className="w-18 h-18 rounded-full object-cover border-2 border-white"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 text-center">John Doe</h2>
        <p className="text-sm text-emerald-custom-600 text-center font-medium">Software Developer</p>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <li key={section.id}>
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 text-left font-medium ${
                    activeSection === section.id
                      ? 'bg-emerald-custom-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-emerald-custom-50 hover:text-emerald-custom-700'
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
      
      <div className="p-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          © 2024 Portfolio
        </p>
      </div>
    </div>
  );
};

export default Sidebar;