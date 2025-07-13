import React from 'react';
import { ExternalLink, Github, Linkedin, FileText } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-12 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">John Doe</h1>
          <h2 className="text-2xl text-brand-600 font-semibold mb-3">Full Stack Software Developer</h2>
          <p className="text-lg text-neutral-600 mb-8">San Francisco, CA</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              Passionate <span className="brand-text">full-stack developer</span> with 5+ years of experience building scalable web applications 
              and leading cross-functional teams. Specialized in React, Node.js, and cloud technologies. 
              I thrive on solving complex problems and creating intuitive user experiences that make a real 
              impact.
            </p>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              When I'm not coding, you'll find me mentoring junior developers, contributing to <span className="brand-text">open-source 
              projects</span>, or exploring the latest trends in artificial intelligence and machine learning.
            </p>
            
            <p className="text-neutral-700 leading-relaxed">
              My journey in tech started with a Computer Science degree from Stanford University, where I 
              discovered my love for both the logical problem-solving aspects of programming and the creative 
              possibilities of user interface design. Since then, I've worked with startups and established 
              companies alike, always focusing on delivering <span className="brand-text">high-quality, maintainable code</span> and fostering 
              collaborative team environments.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/johndoe"
            className="flex items-center px-4 py-2 bg-blue-600/10 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/johndoe"
            className="flex items-center px-4 py-2 bg-neutral-800/10 text-neutral-800 rounded-lg font-medium hover:bg-neutral-800 hover:text-white transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href="https://devpost.com/johndoe"
            className="flex items-center px-4 py-2 bg-orange-600/10 text-orange-600 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            DevPost
          </a>
          <a
            href="/john-doe-cv.pdf"
            className="btn-primary"
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