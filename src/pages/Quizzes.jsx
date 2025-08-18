import { Link } from 'react-router-dom'

export default function Quizzes() {
  return (
    <div className="stack gap-md">
      <h1>Educational Quizzes</h1>
      <p>Pick a quiz to start learning and practicing:</p>

      <div className="grid">
        <div className="card">
          <h3>Cross Contamination Quiz</h3>
          <p>Practice real-life scenarios to avoid cross-contact.</p>
          <Link className="btn" to="/quizzes/cross-contamination">Start quiz</Link>
        </div>

        <div className="card">
          <h3>Gluten-Free Label Proficiency Quiz</h3>
          <p>Test your label literacy and certification logo recognition.</p>
          <Link className="btn" to="/quizzes/label-proficiency">Start quiz</Link>
        </div>

        <div className="card">
          <h3>Celiac Disease General Knowledge Quiz</h3>
          <p>Check your understanding of core concepts and medical basics.</p>
          <Link className="btn" to="/quizzes/general-knowledge">Start quiz</Link>
        </div>
      </div>
    </div>
  )
}
