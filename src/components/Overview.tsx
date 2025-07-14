import React from 'react';
import {Github, Linkedin} from 'lucide-react';
import devpostIcon from '../../Devpost.png'; 
import CV_icon from '../../CV_icon.png'; 

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-12 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6">Katie Roberts</h1>
          <p className="text-lg text-neutral-600 mb-8">Europe</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              As a multifaceted professional with a strong background in technical writing, customer experience, and education,
              I excel in creating user-centered documentation and fostering cross-functional collaboration. Currently serving as a CX Technical Representative at 1Password,
              I play an integral role in identifying knowledge gaps, creating comprehensive internal documentation, and simplifying complex technical issues for diverse audiences.
              My experience spans various sectors, including education, customer service, and product support, allowing me to develop a well-rounded approach to problem-solving and team leadership.
            </p>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              I bring a unique blend of technical writing expertise, instructional design knowledge, and customer success experience.
              From creating clear and accessible technical documentation at 1Password to leveraging educational methodologies to design user-friendly resources,
              I am passionate about translating complex ideas into practical, easy-to-understand content.
              With hands-on experience in mentoring teams, driving customer success, and managing product support processes, I thrive in environments that demand empathy, precision, and collaboration.
            </p>
            
            <p className="text-neutral-700 leading-relaxed">
              My educational background, including an MSc in Educational Research, enhances my approach to content creation, enabling me to design structured,
              evidence-based materials that improve learning and development outcomes. Whether its developing training documentation, supporting cross-functional teams,
              or facilitating customer relationships, I bring an analytical and empathetic mindset to every project.
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
            href="/john-doe-cv.pdf"
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