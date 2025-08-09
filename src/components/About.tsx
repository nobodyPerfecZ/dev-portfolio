import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience 
                creating web applications that solve real-world problems. I love turning 
                complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                My expertise lies in building scalable web applications using modern 
                technologies like React, TypeScript, Node.js, and cloud platforms. 
                I'm always eager to learn new technologies and stay up-to-date with 
                the latest trends in web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                blog posts and tutorials.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-white text-6xl font-bold">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
