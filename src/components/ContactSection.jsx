import "../styles/contact.css";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function ContactSection() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    setLoading(true); // Show loading animation
    setTimeout(() => {
      navigate("/contact"); // Navigate after delay
    }, 300); // Adjust delay as needed
  }; 
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p className="contact-description">
        Have questions? Reach out to us for more information about our courses and enrollment process.
      </p>
      {loading ? (
        <div className="loading-spinner"></div> // ✅ Loading Animation
      ) : (
        <button className="contact-button" onClick={handleEnrollClick}>
        <Mail /> Email Us
      </button>
      )}
    </section>
  );
}
