import React from 'react';
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for routing

export const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'ABOUT', path: '/about' },
    { name: 'WORK', path: '/work' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-48 flex flex-col justify-between p-8 z-40">
      {/* Menu Items */}
      <div className="space-y-6" style={{ marginTop: '70px' }}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block text-lg hover:text-[#0040C1] transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <MessageSquare className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};