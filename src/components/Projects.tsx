import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Github, ExternalLink } from 'lucide-react';
import devpostIcon from '../../Devpost.png';

import betaTestingSurvey from '../Media/Beta_testing_survey_Overview.png';
import firstSuccess from '../Media/First_successful_plan_generation.png';
import helpMePlan from '../Media/Help_me_plan page.png';
import landgingPage from '../Media/Landing page.png';
import supriseMe from '../Media/Surprise_me_1.png';

import yhdChat from '../Media/YHD_Chat.png';
import yhdLanding from '../Media/YHD_Landing_Page.png';

import computeThinking from '../Media/compThinking.png';
import shaDom1 from '../Media/sd1.png';
import shaDom2 from '../Media/sd2.png';
import shaDom from '../Media/shaDom.pdf';

import ps1 from '../Media/ps1.png';
import ps2 from '../Media/ps2.png';
import gp1 from '../Media/gp1.png';
import gp2 from '../Media/gp2.png';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

const Projects: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{[key: number]: number}>({});
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const projects = [
    {
      id: 1,
      title: 'Day Weave - AI planning tool',
      media: [
        {
          type: 'video' as const,
          src: 'https://vimeo.com/1094460411', 
          alt: 'Day Weave demo video'
        },
        {
          type: 'image' as const,
          src: betaTestingSurvey,
          alt: 'Beta testing survey overview'
        },
        {
          type: 'image' as const,
          src: firstSuccess,
          alt: 'First time success with plan generation'
        },
        {
          type: 'image' as const,
          src: supriseMe,
          alt: 'Day Weave UI'
        },
        {
          type: 'image' as const,
          src: helpMePlan,
          alt: 'Day Weave UI'
        },
        {
          type: 'image' as const,
          src: landgingPage,
          alt: 'Day Weave UI'
        }
      ],
      overview: 'Developed full-stack AI-powered day planning application that transforms 3+ hours of planning into 30 seconds of serendipitous discovery. Built for Worlds Largest Hackathon, featuring innovative "Surprise Me!" mystery mode that creates progressive reveals of curated activities. Integrates multiple APIs with intelligent prompt engineering to generate personalised itineraries under 2 minutes, achieving 100% user satisfaction in beta testing.',
      tools: 'React, TypeScript, Supabase, Google Maps API, Google Gemini AI, OpenWeather API, Google Places API, Netlify, PostgreSQL, Edge Functions, Row-Level Security, IONOS Domain, Bolt.new',
      learned: 'Multi-API orchestration and server-side security implementation, AI prompt engineering for location-based recommendations, real-time data fusion combining weather and places APIs, progressive web app development with mobile-first responsive design, user experience design for reducing decision fatigue, secure authentication systems, and hackathon development under tight deadlines',
      github: 'https://github.com/KatieM00/DayWeave',
      demo: 'https://dayweave.com/'
    },
    {
      id: 2,
      title: 'Yuh Hear Dem - Parliamentary Intelligence System',
      media: [
        {
          type: 'video' as const,
          src: 'https://www.youtube.com/watch?v=kLPxpGwY6HQ',
          alt: 'Yuh Hear Dem demo video'
        },
        {
          type: 'image' as const,
          src: yhdLanding,
          alt: 'Landing page for Yuh Hear Dem'
        },
        {
          type: 'image' as const,
          src: yhdChat,
          alt: 'Example chat with Yuh Hear Dem'
        },
        {
          type: 'image' as const,
          src: yhdLanding,
          alt: 'Landing page for Yuh Hear Dem'
        }
      ],
      overview: 'Co-developed civic transparency tool using Googles Agent Development Kit (ADK) to make parliamentary proceedings searchable and accessible. Built to transform long, unstructured YouTube recordings from Barbados Parliament into conversational knowledge assistant. Implemented hybrid GraphRAG search combining knowledge graphs with vector embeddings to provide timestamped responses and follow-up questions. Applied educational design principles for user-friendly interface that makes civic engagement intuitive and natural.',
      tools: 'Python, Google ADK, MongoDB Atlas, Gemini Flash, Knowledge Graphs, Vector Embeddings, HTML/CSS/JavaScript, YouTube API, GraphRAG, LLM Integration',
      learned: 'Knowledge graph architecture design from messy real-world transcripts, hybrid search systems combining graph and vector databases, LLM prompt engineering for civic data processing, real-time AI chat interface development, transcript cleaning and entity extraction, collaborative remote development across time zones, and building production-grade AI tools grounded in structured data',
      github: 'https://github.com/KatieM00/YuhHearDem',
      demo: 'https://yuhheardem.com/'
    },
    {
      id: 3,
      title: 'Self-Directed Learning Documents',
      noSocial: true,
      media: [
        {
          type: 'image' as const,
          src: computeThinking,
          alt: 'What is computational thinking?'
        },
        {
          type: 'image' as const,
          src: shaDom1,
          alt: 'Shadow DOM explained Page 1'
        },
        {
          type: 'image' as const,
          src: shaDom2,
          alt: 'Shadow DOM explained Page 2'
        }
      ],
      overview: 'To support my development in my role at 1Password, I created a series of visual learning guides. Drawing on my background in teacher training, I designed these resources to help structure and reinforce new technical knowledge in a way that was both accessible and engaging. These documents not only aided my own understanding, but also reflect my ability to break down complex topics visually—an approach that aligns well with both learning and instructional design best practices.',
      tools: 'I only used Google Docs to create these. I have become a master at all the formatting tricks and shortcuts to make the most of this tool.',
      learned: 'Through this process, I developed a stronger ability to structure and communicate technical information in a visually accessible way. It reinforced my understanding of new concepts, improved my documentation skills, and demonstrated how self-directed learning can feed into broader team knowledge and internal resources.',
      documents: [
        { label: "Computational Thinking PNG", link: computeThinking},
        { label: "Shadow DOM PDF", link: shaDom }]
      },
    {
      id: 3,
      title: 'Internal Training Documents',
      noSocial: true,
      media: [
        {
          type: 'image' as const,
          src: gp1,
          alt: 'Example 1 of Group policies document'
        },
        {
          type: 'image' as const,
          src: gp2,
          alt: 'Example 2 of Group policies document'
        },
        {
          type: 'image' as const,
          src: ps1,
          alt: 'Example 1 of Page structure document'
        },
        {
          type: 'image' as const,
          src: ps2,
          alt: 'Example 2 of Page structure document'
        },
      ],
      overview: 'To support my development in my role at 1Password, I created a series of visual learning guides. Drawing on my background in teacher training, I designed these resources to help structure and reinforce new technical knowledge in a way that was both accessible and engaging. These documents not only aided my own understanding, but also reflect my ability to break down complex topics visually—an approach that aligns well with both learning and instructional design best practices.',
      tools: 'I only used Google Docs to create these. I have become a master at all the formatting tricks and shortcuts to make the most of this tool.',
      learned: 'Through this process, I developed a stronger ability to structure and communicate technical information in a visually accessible way. It reinforced my understanding of new concepts, improved my documentation skills, and demonstrated how self-directed learning can feed into broader team knowledge and internal resources.',
      documents: [
        { label: "How Group Policies and 1Password", link: gp1 },
        { label: "Understanding page structure for troubleshooting", link:  ps1 }
      ]
    },
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

  const renderMediaItem = (mediaItem: MediaItem, title: string, index: number) => {
    if (mediaItem.type === 'video') {
      // Check if it's a Vimeo URL
      if (mediaItem.src.includes('vimeo.com')) {
        const videoId = mediaItem.src.split('/').pop();
        return (
          <iframe
            key={index}
            src={`https://player.vimeo.com/video/${videoId}`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={mediaItem.alt || `${title} video ${index + 1}`}
          />
        );
      }
      
      // Check if it's a YouTube URL
      if (mediaItem.src.includes('youtube.com') || mediaItem.src.includes('youtu.be')) {
        let videoId;
        if (mediaItem.src.includes('youtube.com/watch?v=')) {
          videoId = mediaItem.src.split('v=')[1].split('&')[0];
        } else if (mediaItem.src.includes('youtu.be/')) {
          videoId = mediaItem.src.split('youtu.be/')[1].split('?')[0];
        }
        
        return (
          <iframe
            key={index}
            src={`https://www.youtube.com/embed/${videoId}`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={mediaItem.alt || `${title} video ${index + 1}`}
          />
        );
      }
      
      // For direct video files (MP4, WebM, etc.)
      return (
        <video
          key={index}
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          aria-label={mediaItem.alt || `${title} video ${index + 1}`}
        >
          <source src={mediaItem.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img
          key={index}
          src={mediaItem.src}
          alt={mediaItem.alt || `${title} screenshot ${index + 1}`}
          className="w-full h-full object-contain rounded-lg"
        />
      );
    }
  };

  return (
    <section id="projects" className="py-12 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        
        <div className="space-y-16">
          {projects.map((project) => {
            const currentImageIndex = activeImageIndex[project.id] || 0;
            
            return (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Media Carousel */}
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                      {renderMediaItem(project.media[currentImageIndex], project.title, currentImageIndex)}
                    </div>
                    
                    {/* Carousel Controls */}
                    <button
                      onClick={() => prevImage(project.id, project.media.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => nextImage(project.id, project.media.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-200"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Media Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                      {project.media.map((mediaItem, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(prev => ({ ...prev, [project.id]: index }))}
                          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                            index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                          title={mediaItem.type === 'video' ? 'Video' : 'Image'}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{project.title}</h3>
                    
                    {/* Overview Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(`${project.id}-overview`)}
                        className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                      >
                        <span className="font-semibold text-gray-800">Overview</span>
                        {expandedSections[`${project.id}-overview`] ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {expandedSections[`${project.id}-overview`] && (
                        <div className="p-4 text-gray-700 leading-relaxed border border-t-0 border-gray-200 rounded-b-lg bg-white">
                          {project.overview}
                        </div>
                      )}
                    </div>
                    
                    {/* Tools Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(`${project.id}-tools`)}
                        className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                      >
                        <span className="font-semibold text-gray-800">Tools Used / How it was Built</span>
                        {expandedSections[`${project.id}-tools`] ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {expandedSections[`${project.id}-tools`] && (
                        <div className="p-4 text-gray-700 leading-relaxed border border-t-0 border-gray-200 rounded-b-lg bg-white">
                          {project.tools}
                        </div>
                      )}
                    </div>
                    
                    {/* What I Learned Section */}
                    <div>
                      <button
                        onClick={() => toggleSection(`${project.id}-learned`)}
                        className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                      >
                        <span className="font-semibold text-gray-800">What I Learned</span>
                        {expandedSections[`${project.id}-learned`] ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      {expandedSections[`${project.id}-learned`] && (
                        <div className="p-4 text-gray-700 leading-relaxed border border-t-0 border-gray-200 rounded-b-lg bg-white">
                          {project.learned}
                        </div>
                      )}
                    </div>

                    {/* Documents Section */}
                    {project.documents && (
                     <div>
                      <button
                         onClick={() => toggleSection(`${project.id}-documents`)}
                         className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                      >
                         <span className="font-semibold text-gray-800">View Full Documents</span>
                         {expandedSections[`${project.id}-documents`] ? (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                      ) : (
                          <ChevronRight className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                         {expandedSections[`${project.id}-documents`] && (
                          <div className="p-4 text-gray-700 border border-t-0 border-gray-200 rounded-b-lg bg-white space-y-2">
                            {project.documents.map((doc, idx) => (
                              <a
                               key={idx}
                               href={doc.link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-blue-600 hover:underline block"
                              >
                               {doc.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Project Links */}
                    {!project.noSocial && (
                      <div className="flex gap-4 pt-6">
                        {project.github && (
                         <a
                           href={project.github}
                           className="flex items-center justify-center w-12 h-12 bg-gray-800 bg-opacity-10 text-gray-800 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200"
                           title="GitHub"
                          >

                           <Github className="w-6 h-6" />
                        </a>
                        )}

                       {project.demo && (
                         <a
                           href={project.demo}
                           className="flex items-center justify-center w-12 h-12 bg-blue-600 bg-opacity-10 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                           title="Live Demo"
                         >
                        
                          <ExternalLink className="w-6 h-6" />
                        </a>
                        )}

                        <a
                          href="https://devpost.com/katiemroberts00"
                          className="flex items-center justify-center w-12 h-12 bg-orange-600 bg-opacity-10 text-orange-600 rounded-full font-medium hover:bg-orange-600 hover:text-white transition-colors duration-200 group"
                          title="DevPost"
                         >

                          <img
                            src={devpostIcon}
                            alt="DevPost"
                            className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-all duration-200"
                          />
                       </a>
                     </div>
                    )}
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