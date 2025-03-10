import React, { useState } from "react";
import { Github, Linkedin, MessageSquare, Menu } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/work" },
    { name: "SKILLS", path: "/skills" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16  flex items-center justify-between px-8 z-50">
      {/* Logo / Brand Name */}
      <div className="text-xl font-mono">
        <span className="text-gray-500">&lt;</span>
        <Link  className="text-white" to="/" >
        PORTFOLIO
        </Link>
        <span className="text-gray-500">/&gt;</span>
      </div>
      {/* Desktop Menu */}
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
      <div className="hidden md:flex gap-4">
        <a href="https://your-messaging-link.com" className="text-gray-400 hover:text-white transition-colors">
          <MessageSquare className="w-5 h-5" />
        </a>
        <a href="https://github.com/yourprofile" className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4 flex flex-col items-center space-y-4 md:hidden">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white text-lg hover:text-[#0040C1] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://your-messaging-link.com" className="text-gray-400 hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="https://github.com/yourprofile" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
