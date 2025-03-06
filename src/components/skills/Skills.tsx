import React from 'react';

function App() {
  // List of technologies with their names and icon URLs
  const technologies = [
    { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'NPM', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Webpack', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'WordPress', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'GraphQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 " style={{paddingTop: "10px"}}>
      <div className="max-w-6xl w-full">
        {/* Title */}
        <h1 className="text-7xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            SKILLS
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-4xl text-white mb-16 text-center">
          The skills, tools and technologies I use:
        </h2>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center transition-transform hover:scale-110"
            >
              <img
                src={tech.url}
                alt={tech.name}
                className="w-16 h-16"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;