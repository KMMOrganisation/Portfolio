import React from 'react';
import {Github, Linkedin} from 'lucide-react';
import devpostIcon from '../../Devpost.png'; 
import CV_icon from '../../CV_icon.png'; 
import cv from '../Katie_Roberts.pdf';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-12 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">Katie Roberts</h1>
          <p className="text-lg text-neutral-600 mb-8">Europe</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              I’m a versatile and people-focused professional with over six years experience across customer support, internal documentation, and team leadership.
              Currently working at 1Password as a CX Technical Representative, I provide empathetic technical support, resolve complex multi-platform issues,
              and contribute to knowledge-sharing through internal documentation and training materials.
            </p>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
             My background spans the education, SaaS, and service sectors, giving me a well-rounded approach to problem-solving, communication, and collaboration.
             I have a particular strength in breaking down complex information into clear, accessible resources, whether for customers, colleagues, or wider teams.
             This is supported by my academic grounding in educational research, as well as practical experience in instructional design and content creation.
            </p>
            
            <p className="text-neutral-700 leading-relaxed">
              Whether I’m supporting customers, coordinating a team, or writing documentation,
              I bring an analytical mindset, strong communication skills,
              and a genuine commitment to improving experiences, for users and teams alike.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/katieroberts00/"
            className="flex items-center justify-center w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/KatieM00"
            className="flex items-center justify-center w-12 h-12 bg-neutral-800/10 text-neutral-800 rounded-full font-medium hover:bg-neutral-800 hover:text-white transition-colors duration-200"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://devpost.com/katiemroberts00?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav&_gl=1*1sm5mr3*_ga*OTg0NTIwMzg4LjE3NTI1MDMxMjQ."
            className="flex items-center justify-center w-12 h-12 bg-orange-600/10 text-orange-600 rounded-full font-medium hover:bg-orange-600 hover:text-white transition-colors duration-200 group"
            title="DevPost"
          >
            <img src={devpostIcon} alt="DevPost" className="w-10 h-10 group-hover:brightness-0 group-hover:invert transition-all duration-200" />
          </a>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-yellow-600/10 text-yellow-600 rounded-full font-medium hover:bg-neutral-600 hover:text-white transition-colors duration-200 group"
            title="View CV"
          >
            <img src={CV_icon} alt="CV" className="w-12 h-10 group-hover:brightness-0 group-hover:invert transition-all duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;