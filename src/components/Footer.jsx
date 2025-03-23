import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© {new Date().getFullYear()} Nirmal Academy. All rights reserved.</p>
        <div className="footer-links">
          <a href="#contact">Contact Us</a>
          <a href="#about">About Us</a>
          <a href="#courses">Courses</a>
          <a href="https://youtube.com" target="new">QuickLinks</a>
        </div>
      </div>
    </footer>
  );
}
