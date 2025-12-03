import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCourses from "./components/HomeCourses";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import About from "./pages/About/About";
import CoursesPage from "./pages/Courses/Courses";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomeCourses />
                <Testimonials />
                <Pricing />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
