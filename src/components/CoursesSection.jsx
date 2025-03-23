import Card from "./uiComponents/Card";
import { BookOpenText } from "lucide-react";
import "../styles/courses.css";

export default function CoursesSection() {
  return (
    <section id="courses">
      <h2>Our Courses</h2>
      <div className="courses-grid">
        {["Mathematics", "Science", "English"].map((course, index) => (
          <Card key={index} className="course-card">
            <BookOpenText className="course-icon" />
            <h3>{course}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
}
