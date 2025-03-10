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
export const Navbar: React.FC = () => {
  const menuItems = [
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/work" },
    { name: "SKILLS", path: "/skills" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-90 backdrop-blur-lg shadow-md flex items-center justify-between px-8 z-50">
      {/* Logo / Brand Name */}
      <div className="text-white text-xl font-bold">MyPortfolio</div>

      {/* Menu Items */}
      <div className="hidden md:flex gap-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-white text-lg hover:text-[#0040C1] transition-colors"
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
    </nav>
  );
};