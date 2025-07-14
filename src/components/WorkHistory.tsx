import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const WorkHistory: React.FC = () => {
  const workExperience = [
    {
      company: '1Password',
      position: 'CX Technical Representative',
      duration: 'Sep 2023 - Present',
      location: 'Remote',
      description: 'Provided Level 2 technical support across multiple platforms (browsers, Windows, macOS, Linux) while maintaining exceptional SLA performance and high daily ticket resolution rates. Collaborated with cross-functional teams to bridge communication between customers and developers, identifying feature requests and bugs through Productboard and GitLab. Created comprehensive internal documentation to address knowledge gaps and mentored team members. Built strong B2B and B2C customer relationships through empathetic, solution-focused support, translating complex technical concepts into accessible guidance. Demonstrated proactive learning and exceptional time management while contributing to broader company KPIs.',
      skills: ['Technical Troubleshooting', 'Customer Support', 'GitLab', 'Productboard', 'Documentation', 'HTML', 'CSS', 'JavaScript']
    },
    {
      company: 'The University of the West of England (UWE)',
      position: 'Customer Relations Assistant',
      duration: 'May 2023 - Sep 2023',
      location: 'Bristol, UK',
      description: 'Provided comprehensive multi-channel support (phone and email) to over 6,000 students, addressing academic, housing, emotional, and financial challenges while maintaining strong relationships with external building management and internal cross-functional teams. Managed complex student accommodation allocation processes using SQL databases (Kintetix) and Archibus to ensure optimal occupancy and student satisfaction. Developed strong interpersonal skills through effective communication with diverse stakeholders, building rapport and resolving conflicts. Demonstrated exceptional organizational capabilities by managing complex databases, coordinating calendars, and consistently meeting deadlines in a fast-paced environment.',
      skills: ['Customer Support', 'SQL', 'Kintetix', 'Archibus', 'Database Management']
    },
    {
      company: 'Coffee #1',
      position: 'Assistant Manager',
      duration: 'Jan 2023 - Apr 2023',
      location: 'Bristol, UK',
      description: 'Led and motivated team members to achieve sales targets while managing day-to-day operations of a fast-paced coffee shop. Recruited, hired, and trained new staff members, fostering a positive work environment that enhanced team performance and customer service quality. Analyzed financial performance and stock trends to identify improvement opportunities and implement strategies to enhance store performance. Ensured efficient staff scheduling and allocation while maintaining adequate service levels and high customer NPS. Delivered exceptional customer service while maintaining optimal inventory levels and implementing effective promotional strategies to increase sales and customer loyalty.',
      skills: ['Team Leadership', 'Staff Management', 'Financial Analysis', 'Customer Service', 'Inventory Management']
    },
    {
      company: 'Costa Coffee',
      position: 'Manager',
      duration: 'Jan 2022 - Oct 2022',
      location: 'Bristol, UK',
      description: 'Successfully managed and developed a high-performing team through effective recruiting, training, and continuous support, creating a positive work environment that drove sales and profit. Analyzed financial performance to identify trends and implement strategic initiatives that increased sales and improved operational efficiency. Ensured smooth daily operations in a high-volume environment through effective scheduling, inventory management, and collaboration with train station staff. Encouraged team focus on high NPS while adhering to key health and safety regulations and service quality standards.',
      skills: ['Team Management', 'Financial Analysis', 'Operations Management', 'Staff Development', 'Customer Experience']
    },
    {
      company: 'Education First (EF)',
      position: 'Activity Manager and Seasonal Activity Leader',
      duration: 'Jun 2017 - Aug 2021',
      location: 'Bristol, UK',
      description: 'Progressed from Activity Leader (2017-2020) to Activity Manager, successfully leading and training a diverse team of activity leaders while providing ongoing support and feedback to ensure high-quality, educational, and safe program delivery for international students. Adhered to strict government-enforced Covid-19 health and safety guidelines, ensuring safety of all staff and students. Developed and managed engaging activity programs that aligned with curriculum objectives to enhance overall student experience and cultural immersion. Built strong relationships with local businesses and organizations to create unique and enriching experiences for students, expanding the range of activities offered. Demonstrated strong organizational and planning skills by managing budgets, logistics, and resources to deliver high-quality activities within budgetary constraints.',
      skills: ['Team Leadership', 'Program Development', 'Budget Management', 'Stakeholder Relations', 'Health & Safety Compliance']
    }
  ];

  return (
    <section id="work" className="py-12 px-6 lg:px-12 section-divider">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-brand-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{job.position}</h3>
                      <h4 className="text-lg font-medium text-brand-600">{job.company}</h4>
                    </div>
                    <div className="flex items-center text-neutral-600 text-sm mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {job.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-neutral-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  
                  <p className="text-neutral-700 mb-6 leading-relaxed">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md text-sm font-medium border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;