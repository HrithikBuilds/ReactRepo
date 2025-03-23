import { useState } from "react";
import "../styles/navbar.css";
// import {BookOpen} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Nirmal Academy </h1>

        {/* Hamburger Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
