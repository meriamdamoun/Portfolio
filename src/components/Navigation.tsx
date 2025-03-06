import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for routing


interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50">
      <div className="text-xl font-mono">
        <span className="text-gray-500">&lt;</span>
        <Link  className="text-white" to="/" >
        PORTFOLIO
        </Link>
        <span className="text-gray-500">/&gt;</span>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </nav>
  );
};