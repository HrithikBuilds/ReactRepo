import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contactpage.css";
import Button from "./uiComponents/Button";

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    }, 1000);
  };

  return (
    <div className="contact-page-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Have questions? Fill out the form below, and we'll get back to you soon!
      </p>

      {submitted ? (
        <div className="success-message-container">
        <p className="success-message">Thank you! We'll contact you shortly.</p>
        <button className="back-home-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Full Name</label> */}
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Please Enter your Full Name"/>

          {/* <label htmlFor="email">Email</label> */}
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Please Enter your Email"/>

          {/* <label htmlFor="message">Message</label> */}
          <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}placeholder="Start writing your message..."></textarea>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? <span className="loader"></span> : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
