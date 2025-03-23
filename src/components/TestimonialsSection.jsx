import Card from "./uiComponents/Card";
import { Star } from "lucide-react";
import "../styles/testimonials.css";

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonials-grid">
        {["This academy helped me excel in my exams!", "Amazing teachers and great learning experience!","This academy helped me excel in my exams!", "Amazing teachers and great learning experience!","This academy helped me excel in my exams!", "Amazing teachers and great learning experience!"].map((review, index) => (
          <Card key={index} className="testimonial-card">
            <Star className="testimonial-icon" />
            <p>{review}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
