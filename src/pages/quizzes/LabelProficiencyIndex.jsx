import { Link } from "react-router-dom";
import "../../quiz-label.css";

export default function LabelProficiencyIndex() {
  return (
    <div className="container">
      <div className="card">
        <h1>Gluten-Free Label Proficiency</h1>
        <p>Choose your level to begin:</p>

        <div className="lp-levels">
          <div className="lp-level card">
            <h3>Easy — Designed for Kids</h3>
            <p>Friendly logo recognition and simple label clues with pictures.</p>
            <Link className="btn" to="/quizzes/label-proficiency/easy">Start Easy</Link>
          </div>

          <div className="lp-level card">
            <h3>Standard</h3>
            <p>Advanced label literacy, tricky ingredients, global certifications.</p>
            <Link className="btn btn-secondary" to="/quizzes/label-proficiency/standard">Start Standard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
