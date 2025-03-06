import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import FloatingCircles from "./components/FloatingCircles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Skills from "./components/skills/Skills";


function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          isDark ? "bg-[#0f1624]" : "bg-gray-100"
        } text-white relative overflow-hidden font-['Montserrat']`}
      >
        {/* Floating Circles */}
        <FloatingCircles />

        <Navigation isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

        <div className="flex relative z-10">
          <div className="w-48">
            <Sidebar />
          </div>

          <main className="flex-1 p-20 pt-32">
            <Routes>
              {/* Default route (home) */}
              <Route
                path="/"
                element={
                  <div className="max-w-3xl">
                    <h1 className="text-6xl font-bold mb-6">
                      I'm "MERIAM DAMOUN"
                      <br />
                      Front-end developer
                    </h1>
                    <p className="text-gray-200 text-xl mb-8">
                      I don't like to define myself by the work I've done. I
                      define myself by the work I want to do.
                    </p>
                    <button className="border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-[#0040C1] transition-colors">
                      HIRE ME
                    </button>
                  </div>
                }
              />

              {/* About route */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/skills" element={<Skills/>} />

              {/* Add more routes here as needed */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;