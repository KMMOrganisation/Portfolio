import React from 'react';
import { ExternalLink, Github, Linkedin, FileText } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="min-h-screen py-8 px-8 section-bg-primary">
      <div className="max-w-4xl mx-auto pt-4">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-inter">John Doe</h1>
          <h2 className="text-2xl text-emerald-custom-600 font-semibold mb-2">Full Stack Software Developer</h2>
          <p className="text-lg text-gray-600 mb-6">San Francisco, CA</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Passionate full-stack developer with 5+ years of experience building scalable web applications 
              and leading cross-functional teams. Specialized in React, Node.js, and cloud technologies. 
              I thrive on solving complex problems and creating intuitive user experiences that make a real 
              impact. When I'm not coding, you'll find me mentoring junior developers, contributing to open-source 
              projects, or exploring the latest trends in artificial intelligence and machine learning.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey in tech started with a Computer Science degree from Stanford University, where I 
              discovered my love for both the logical problem-solving aspects of programming and the creative 
              possibilities of user interface design. Since then, I've worked with startups and established 
              companies alike, always focusing on delivering high-quality, maintainable code and fostering 
              collaborative team environments.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/johndoe"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/johndoe"
            className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href="https://devpost.com/johndoe"
            className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            DevPost
          </a>
          <a
            href="/john-doe-cv.pdf"
            className="flex items-center px-6 py-3 bg-emerald-custom-600 text-white rounded-lg hover:bg-emerald-custom-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <FileText className="w-5 h-5 mr-2" />
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;