import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Red Rose Landscaping",
    category: "WEBSITE DESIGN",
    description: "Offering Professional Landscaping Services in Pennsylvania",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    title: "OnSpot Repairs",
    category: "WEBSITE DESIGN",
    description: "What can we fix for you today?",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    title: "Repair Shack",
    category: "WEBSITE DESIGN",
    description: "Professional Phone Repair Experts in UK",
    image: "https://images.unsplash.com/photo-1563884072864-dc2c44701243?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 4,
    title: "Digital Solutions Consults",
    category: "WEBSITE DESIGN",
    description: "Take the next step towards excellence in your career",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 5,
    title: "Booge Chauffeur",
    category: "WEBSITE DESIGN",
    description: "Welcome to BOOGE, a company at the forefront of professional transport",
    image: "https://images.unsplash.com/photo-1562783837-7f4cf6ef0a10?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 6,
    title: "Next LVL Landscaping",
    category: "WEB DESIGNING",
    description: "Taking homes and offices to the Next LVL",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  }
];

function App() {
  return (
    <div className="min-h-screen text-white p-8">
      <header className="mb-16">
        <div className="flex items-center justify-center gap-6">
          <div className="w-12 h-12 relative">
            
          </div>
          <h1 className="text-6xl font-bold tracking-tight">My Projects</h1>
          <div className="w-12 h-12 relative">
            
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__slideInDown">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[0.98] bg-zinc-900"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/90 transition-opacity duration-500" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-sm font-medium text-gray-400 mb-2 tracking-wider">
                  {project.category}
                </p>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="bg-white/10 rounded-full p-2 backdrop-blur-sm">
                    <ArrowUpRight className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;