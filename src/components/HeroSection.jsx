import { motion } from "framer-motion";
import Button from "./uiComponents/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/hero.css"; // Importing the CSS file

export default function HeroSection() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    setLoading(true); // Show loading animation
    setTimeout(() => {
      navigate("/enroll"); // Navigate after delay
    }, 300); // Adjust delay as needed
  }; 
  return (
    <section className="hero">
      <h1 className="hero-title">
        Unlock Your Potential at <span className="highlight">Nirmal Academy</span>
      </h1>
      <p className="hero-description">
        Quality education for school and high school students with expert teachers and engaging courses.
      </p>
      {loading ? (
        <div className="loading-spinner"></div> // ✅ Loading Animation
      ) : (
        <Button className="enroll-button" onClick={handleEnrollClick}>
          Enroll Now
        </Button>
      )}
    </section>
  );
}
