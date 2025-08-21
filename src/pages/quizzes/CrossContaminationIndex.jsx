import { Link } from "react-router-dom";
import "../../crossContamination.css";

export default function CrossContaminationIndex() {
  return (
    <div className="cc-wrap">
      <h1 className="cc-title">Cross Contamination — Pick Your Level</h1>
      <p className="cc-sub">Start with Beginner. Standard and Challenge are placeholders for now (already routed, so the flow won’t break later).</p>

      <div className="cc-level-grid">
        <div className="cc-level-card">
          <h2>Beginner</h2>
          <p>Yes/No & multiple choice. Friendly intro to safe habits.</p>
          <Link to="/quizzes/cross-contamination/beginner" className="cc-btn">Start Beginner</Link>
        </div>

        <div className="cc-level-card cc-level-disabled" aria-disabled>
          <h2>Standard</h2>
          <p>Coming soon. Scenario-based questions.</p>
          <Link to="/quizzes/cross-contamination/standard" className="cc-btn cc-btn-disabled" onClick={(e)=>e.preventDefault()}>
            Coming Soon
          </Link>
        </div>

        <div className="cc-level-card cc-level-disabled" aria-disabled>
          <h2>Challenge</h2>
          <p>Coming soon. Label literacy & edge cases.</p>
          <Link to="/quizzes/cross-contamination/challenge" className="cc-btn cc-btn-disabled" onClick={(e)=>e.preventDefault()}>
            Coming Soon
          </Link>
        </div>
      </div>
    </div>
  )
}

