import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import EnrollPage from "./components/EnrollPage";
import Footer from "./components/Footer";
import "./styles/global.css";
import ContactPage from "./components/ContactPage";

export default function AcademyLandingPage() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <CoursesSection />
              <TestimonialsSection />
              <ContactSection />
              <Footer />
            </>
          } />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
