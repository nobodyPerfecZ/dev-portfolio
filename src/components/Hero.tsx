import React from 'react';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Profile Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              👨‍💻
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I create beautiful, functional, and user-friendly web applications 
              using modern technologies and best practices.
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </span>
            </a>
          </div>
          
          {/* Skills Preview */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'MongoDB'].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-white text-gray-700 border border-gray-200 rounded-full hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
