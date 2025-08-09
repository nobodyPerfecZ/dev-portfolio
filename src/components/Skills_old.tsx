import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
  { name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨' },
  { name: 'HTML/CSS', level: 90, category: 'frontend', icon: '🎨' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend', icon: '💨' },
  { name: 'Vue.js', level: 75, category: 'frontend', icon: '💚' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { name: 'Python', level: 80, category: 'backend', icon: '🐍' },
  { name: 'Express.js', level: 85, category: 'backend', icon: '🚂' },
  { name: 'MongoDB', level: 75, category: 'backend', icon: '🍃' },
  { name: 'PostgreSQL', level: 70, category: 'backend', icon: '🐘' },
  { name: 'REST APIs', level: 90, category: 'backend', icon: '🔗' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools', icon: '🌿' },
  { name: 'Docker', level: 70, category: 'tools', icon: '🐳' },
  { name: 'AWS', level: 65, category: 'tools', icon: '☁️' },
  { name: 'Vite', level: 85, category: 'tools', icon: '⚡' },
  { name: 'Webpack', level: 75, category: 'tools', icon: '📦' },
  { name: 'Jest', level: 80, category: 'tools', icon: '🃏' },
];

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isVisible }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out ${isVisible ? '' : 'w-0'}`}
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const categoryConfig = [
    {
      key: 'frontend' as const,
      title: 'Frontend',
      icon: '🎨',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      key: 'backend' as const,
      title: 'Backend',
      icon: '⚙️',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      key: 'tools' as const,
      title: 'Tools & Others',
      icon: '🛠️',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={skillsRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I use to bring ideas to life and create 
            amazing digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categoryConfig.map((category) => (
            <div
              key={category.key}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-8">
                <div className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
              </div>
              
              <div className="space-y-4">
                {categories[category.key].map((skill) => (
                  <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '50+', icon: '🚀' },
              { label: 'Years Experience', value: '3+', icon: '⏱️' },
              { label: 'Technologies', value: '18+', icon: '💻' },
              { label: 'Happy Clients', value: '20+', icon: '😊' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, isVisible }) => {
  return (
    <div className="mb-6 animate-slide-up">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-primary-600">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress transition-all duration-1000 ease-out ${isVisible ? '' : 'w-0'}`}
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  const categoryConfig = [
    {
      key: 'frontend' as const,
      title: 'Frontend',
      icon: '🎨',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      key: 'backend' as const,
      title: 'Backend',
      icon: '⚙️',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      key: 'tools' as const,
      title: 'Tools & Others',
      icon: '🛠️',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={skillsRef}>
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I use to bring ideas to life and create 
            amazing digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categoryConfig.map((category, categoryIndex) => (
            <div
              key={category.key}
              className="card p-8 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="mb-8">
                <div className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mb-4 mx-auto lg:mx-0`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                  {category.title}
                </h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${category.gradient} rounded-full mx-auto lg:mx-0 mt-3`}></div>
              </div>
              
              <div className="space-y-4">
                {categories[category.key].map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <SkillBar skill={skill} isVisible={isVisible} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '50+', icon: '🚀' },
              { label: 'Years Experience', value: '3+', icon: '⏱️' },
              { label: 'Technologies', value: '18+', icon: '💻' },
              { label: 'Happy Clients', value: '20+', icon: '😊' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
