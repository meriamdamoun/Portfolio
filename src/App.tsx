import React, { useState } from "react";
import { Navbar } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import FloatingCircles from "./components/FloatingCircles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import "animate.css";

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

        <Navbar />

        <div className="flex relative z-10">
          <main className="flex-1 p-20 pt-32">
            <Routes>
              {/* Default route (home) */}
              <Route
                path="/"
                element={
                  <div className="max-w-3xl ">
                    <h1 className="text-6xl font-bold mb-6 animate__animated animate__fadeInDown">
                      I'm "MERIAM DAMOUN"
                      <br />
                      Front-end developer
                    </h1>
                    <div className="animate__animated animate__fadeInDown animate__delay-2s">
                      <p className="text-gray-200 text-xl mb-8 ">
                        I don't like to define myself by the work I've done. I
                        define myself by the work I want to do.
                      </p>
                    </div>
                    <Link to="/contact" className="border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-[#0040C1] transition-colors" >
                      HIRE ME
                    </Link>

                    {/* <div className="animate__animated animate__fadeOutDownBig animate__delay-2s">
                    test
                  </div> */}
                  </div>

                  
                }
              />

              {/* About route */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/work" element={<Work />} />

              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
