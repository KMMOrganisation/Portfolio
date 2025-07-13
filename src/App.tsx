import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';
import { smoothScrollTo } from './utils/smoothScroll';

const sectionIds = ['overview', 'skills', 'work', 'education', 'projects', 'courses', 'volunteering', 'contact'];

function App() {
  const activeSection = useScrollSpy(sectionIds);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-brand-600 text-white p-2 rounded-lg hover:bg-brand-700 transition-colors duration-200"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <div className={`fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Main Content */}
      <div className="flex-1">
        <main className="relative">
          <Overview />
          <Skills />
          <WorkHistory />
          <Education />
          <Projects />
          <Courses />
          <Volunteering />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;