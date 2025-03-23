import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/enroll.css";

export default function EnrollPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment successful!");
    // TODO: Add backend API call here

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
    });
    
  };

  return (
    <div className="enroll-container">
      
      <h2 className="enroll-title">Enroll Now</h2>
      <p className="enroll-description">Fill out the form below to join our academy.</p>
      
      <form className="enroll-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Full Name</label> */}
        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name"/>

        {/* <label htmlFor="email">Email</label> */}
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email"/>

        {/* <label htmlFor="phone">Phone Number</label> */}
        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone"/>

        {/* <label htmlFor="course">Select Course</label> */}
        <select id="course" name="course" required value={formData.course} onChange={handleChange}>
          <option value="">Choose a course</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>

        <button type="submit" className="enroll-button">Submit</button>
        <button className="enroll-button" id="back-home-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </form>
    </div>
  );
}
