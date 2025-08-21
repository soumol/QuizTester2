import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CROSS_CONTAMINATION_BEGINNER } from '../../data/crossContaminationBeginner.js'

// pick n random items (Fisher–Yates shuffle then slice)
function pickRandom(arr, n) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a.slice(0, n)
}

export default function CrossContaminationBeginner() {
  // Build a randomized 10-question set on mount
  const questionSet = useMemo(() => pickRandom(CROSS_CONTAMINATION_BEGINNER, 10), [])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null) // string label
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const total = questionSet.length
  const current = questionSet[index]

  // derive choices based on type
  const choices =
    current.type === 'yn' ? ['Yes', 'No']
    : current.type === 'tf' ? ['True', 'False']
    : current.choices

  const isCorrect = (label) => String(label) === String(current.answer)

  const handleSubmit = () => {
    if (selected === null) return
    setShowFeedback(true)
    if (isCorrect(selected)) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (index + 1 < total) {
      setIndex(index + 1)
      setSelected(null)
      setShowFeedback(false)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    // easiest way to redraw a new random 10
    window.location.reload()
  }

  return (
    <div className="cc-wrap">
      <div className="cc-header">
        <h1 className="cc-title">Cross Contamination — Beginner</h1>
        <p className="cc-sub">
          Choose an answer and click <strong>Check Answer</strong>. Read the explanation, then click <strong>Next</strong>.
          Click <strong>Restart</strong> to get a fresh set of 10 randomized questions.
        </p>
        <div className="cc-progress">
          <div
            className="cc-progress-bar"
            style={{ width: `${((index + (finished ? 1 : 0)) / total) * 100}%` }}
          />
          <div className="cc-progress-meta">
            {finished ? total : index + 1} / {total} · Score: {score}
          </div>
        </div>
      </div>

      {!finished ? (
        <div className="card cc-card">
          <div className="cc-q">{current.question}</div>

          <div className="cc-options">
            {choices.map((label, i) => (
              <button
                key={i}
                className={`cc-option ${selected === label ? 'selected' : ''}`}
                onClick={() => setSelected(label)}
                disabled={showFeedback}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="cc-actions">
            {!showFeedback ? (
              <button className="cc-btn" onClick={handleSubmit} disabled={selected === null}>
                Check Answer
              </button>
            ) : (
              <>
                <div className={`cc-feedback ${isCorrect(selected) ? 'correct' : 'incorrect'}`}>
                  {isCorrect(selected) ? 'Correct!' : 'Not quite.'}
                  <div className="cc-note">
                    <strong>Explanation:</strong> {current.explanation}
                  </div>
                </div>
                <button className="cc-btn" onClick={handleNext}>Next</button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="card cc-card">
          <h2>All done!</h2>
          <p>You scored <strong>{score}</strong> out of <strong>{total}</strong>.</p>
          <div className="cc-actions">
            <button className="cc-btn" onClick={handleRestart}>Restart (New 10)</button>
            <Link className="cc-btn cc-btn-alt" to="/quizzes/cross-contamination">Back to Levels</Link>
          </div>
        </div>
      )}
    </div>
  )
}
