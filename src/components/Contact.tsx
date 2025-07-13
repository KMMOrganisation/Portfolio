import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 px-6 lg:px-12 section-divider">
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors duration-200 ${
                    errors.name ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors duration-200 ${
                    errors.email ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors duration-200 resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-border'
                  }`}
                  placeholder="Tell me about your project or just say hello..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600">Email</p>
                    <p className="text-neutral-900 font-medium">john.doe@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600">Phone</p>
                    <p className="text-neutral-900 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600">Location</p>
                    <p className="text-neutral-900 font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Let's Connect</h3>
              
              <div className="flex gap-4">
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
              </div>
            </div>
            
            <div className="bg-brand-50 rounded-xl p-8 border border-brand-200">
              <h3 className="text-xl font-semibold text-brand-800 mb-4">Open to Opportunities</h3>
              <p className="text-brand-700 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on interesting projects, 
                or just having a conversation about technology and innovation. Don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;