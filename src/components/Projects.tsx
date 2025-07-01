import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronRight as ChevronRightIcon, Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{[key: number]: number}>({});
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      images: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'
      ],
      overview: 'A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, and payment integration. Designed to handle high traffic with optimized performance and scalability.',
      tools: 'Built using React, Node.js, Express, PostgreSQL, Stripe API, AWS S3, and Docker. Implemented Redux for state management, JWT for authentication, and used Tailwind CSS for responsive design.',
      learned: 'Gained deep understanding of payment processing, inventory management, and user experience optimization. Learned to implement complex state management, real-time updates, and security best practices.',
      github: 'https://github.com/username/ecommerce-platform',
      demo: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      images: [
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
        'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
        'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg',
        'https://images.pexels.com/photos/3182816/pexels-photo-3182816.jpeg'
      ],
      overview: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking. Includes drag-and-drop functionality, deadline management, and progress visualization.',
      tools: 'Developed with React, TypeScript, Firebase, and Material-UI. Implemented real-time synchronization using Firebase Firestore, authentication with Firebase Auth, and deployed on Vercel.',
      learned: 'Mastered real-time data synchronization, complex UI interactions, and team collaboration features. Enhanced skills in TypeScript, Firebase ecosystem, and modern deployment practices.',
      github: 'https://github.com/username/task-manager',
      demo: 'https://task-manager-demo.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      images: [
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
        'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg',
        'https://images.pexels.com/photos/1441016/pexels-photo-1441016.jpeg',
        'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg'
      ],
      overview: 'A comprehensive weather dashboard with location-based forecasts, interactive maps, and historical data visualization. Features include severe weather alerts, air quality monitoring, and personalized weather recommendations.',
      tools: 'Created using React, D3.js for data visualization, OpenWeatherMap API, and Mapbox for interactive maps. Styled with Tailwind CSS and deployed using Netlify with automatic deployment.',
      learned: 'Developed expertise in data visualization, API integration, and geolocation services. Improved skills in creating responsive, data-driven interfaces and working with external APIs.',
      github: 'https://github.com/username/weather-dashboard',
      demo: 'https://weather-dashboard-demo.com'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      images: [
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
        'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
      ],
      overview: 'An analytics dashboard for social media performance tracking with automated reporting, sentiment analysis, and competitor comparison. Provides actionable insights through interactive charts and customizable reports.',
      tools: 'Built with React, Python Flask backend, PostgreSQL database, and Chart.js for visualizations. Integrated with Twitter and Instagram APIs, implemented machine learning for sentiment analysis using scikit-learn.',
      learned: 'Gained experience in full-stack development, API integration, and data analysis. Learned to implement machine learning algorithms and create meaningful data visualizations for business insights.',
      github: 'https://github.com/username/social-analytics',
      demo: 'https://social-analytics-demo.com'
    },
    {
      id: 5,
      title: 'Portfolio Website Builder',
      images: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
        'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
        'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg'
      ],
      overview: 'A drag-and-drop portfolio website builder that allows users to create professional portfolios without coding. Features customizable templates, content management, and one-click deployment.',
      tools: 'Developed using React, Node.js, MongoDB, and AWS S3. Implemented drag-and-drop functionality with react-beautiful-dnd, user authentication, and automated deployment pipeline.',
      learned: 'Mastered complex UI interactions, user experience design, and full-stack architecture. Enhanced understanding of content management systems and automated deployment processes.',
      github: 'https://github.com/username/portfolio-builder',
      demo: 'https://portfolio-builder-demo.com'
    }
  ];

  const nextImage = (projectId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <section id="projects" className="min-h-screen py-8 px-8 section-bg-primary">
      <div className="max-w-7xl mx-auto pt-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project) => {
            const currentImageIndex = activeImageIndex[project.id] || 0;
            
            return (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Image Carousel */}
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Carousel Controls */}
                    <button
                      onClick={() => prevImage(project.id, project.images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => nextImage(project.id, project.images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(prev => ({ ...prev, [project.id]: index }))}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-emerald-custom-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    
                    {/* Overview Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(`${project.id}-overview`)}
                        className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">Overview</span>
                        {expandedSections[`${project.id}-overview`] ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {expandedSections[`${project.id}-overview`] && (
                        <div className="p-4 text-gray-700 leading-relaxed">
                          {project.overview}
                        </div>
                      )}
                    </div>
                    
                    {/* Tools Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(`${project.id}-tools`)}
                        className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">Tools Used / How it was Built</span>
                        {expandedSections[`${project.id}-tools`] ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {expandedSections[`${project.id}-tools`] && (
                        <div className="p-4 text-gray-700 leading-relaxed">
                          {project.tools}
                        </div>
                      )}
                    </div>
                    
                    {/* What I Learned Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(`${project.id}-learned`)}
                        className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">What I Learned</span>
                        {expandedSections[`${project.id}-learned`] ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {expandedSections[`${project.id}-learned`] && (
                        <div className="p-4 text-gray-700 leading-relaxed">
                          {project.learned}
                        </div>
                      )}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center px-4 py-2 bg-emerald-custom-600 text-white rounded-lg hover:bg-emerald-custom-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;