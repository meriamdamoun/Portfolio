import React from 'react';
import { FileDown, Box } from 'lucide-react';
import { Link } from "react-router-dom"; // Import Link for routing


function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="relative">
        {/* Floating cubes */}
       
      

        {/* Main content */}
        <div className="space-y-8 ">
          <h1 className="text-6xl font-bold text-white mb-12 animate__animated animate__fadeInUpBig">
            Hi, I'm Meriam Damoun
          </h1>

          <div className="text-lg text-gray-300 space-y-6 animate__animated animate__fadeInUp">
            <p>
              I'm Meriam from Casablanca. I have more than{' '}
              <span className="text-green-400">2 years' experience</span> in
              HTML/CSS/Javascript. I love creating user interfaces which are
              intuitive, convenient and beautiful.
            </p>
            <p>
              Of course, I'm paying attention to performance and accessibility
              that I consider to be highly important.
            </p>
          </div>

          {/* Download CV button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e2330] text-white rounded-lg hover:bg-[#262b3a] transition-colors mt-8 group"
          >
            <FileDown className="w-5 h-5 text-green-400 group-hover:text-green-300" />
            <span className="font-medium">DOWNLOAD CV</span>
            <span className="text-gray-500 text-sm">(pdf 66kb)</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;