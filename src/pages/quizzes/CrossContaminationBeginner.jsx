// src/pages/quizzes/CrossContaminationBeginner.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CROSS_CONTAMINATION_BEGINNER } from "../../data/crossContaminationBeginner.js";
import QuizModal from "../../components/QuizModal";
import QuizProgress from "../../components/QuizProgress";

// pick n random items (Fisher–Yates shuffle then slice)
function pickRandom(arr, n) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export default function CrossContaminationBeginner() {
  // Build a randomized 10-question set on mount
  const questionSet = useMemo(
    () => pickRandom(CROSS_CONTAMINATION_BEGINNER, 10),
    []
  );

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null); // string label
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // modal (shadow pop-up) state
  const [modal, setModal] = useState({ open: false, title: "", body: null });

  const total = questionSet.length;
  const current = questionSet[index];

  // derive choices based on type
  const choices =
    current.type === "yn"
      ? ["Yes", "No"]
      : current.type === "tf"
      ? ["True", "False"]
      : current.choices;

  const isCorrect = (label) => String(label) === String(current.answer);

  // open modal with feedback
  const handleCheckAnswer = () => {
    if (selected === null) {
      setModal({
        open: true,
        title: "Pick an answer to continue",
        body: <p className="cc-modal-p">Please choose an option above.</p>,
      });
      return;
    }

    const correct = isCorrect(selected);
    if (correct) setScore((s) => s + 1);

    const body = (
      <>
        {!correct && (
          <p className="cc-modal-p">
            The correct answer is <strong>{String(current.answer)}</strong>.
          </p>
        )}
        {current.explanation && <p className="cc-muted">{current.explanation}</p>}
      </>
    );

    setModal({
      open: true,
      title: correct ? "🎉 Correct!" : "❌ Not quite",
      body,
    });
  };

  // close modal and advance
  const goNext = () => {
    setModal((m) => ({ ...m, open: false }));
    if (index + 1 < total) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    // easiest way to redraw a new random 10
    window.location.reload();
  };

  const progressed = finished ? total : index + 1;

  return (
    <div className="cc-wrap">
      <div className="cc-header">
        <h1 className="cc-title">Cross Contamination — Beginner</h1>
        <p className="cc-sub">
          Choose an answer and click <strong>Check Answer</strong>. Read the
          explanation, then click <strong>Next question</strong>. Click{" "}
          <strong>Restart</strong> to get a fresh set of 10 randomized
          questions.
        </p>

        {/* Gradient progress bar (shared component) */}
        <QuizProgress current={progressed} total={total} prefix="cc" />
      </div>

      {!finished ? (
        <div className="card cc-card">
          <div className="cc-q">{current.question}</div>

          <div className="cc-options">
            {choices.map((label, i) => (
              <button
                key={i}
                className={`cc-option ${selected === label ? "selected" : ""}`}
                onClick={() => setSelected(label)}
                disabled={modal.open}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="cc-actions">
            <button className="cc-btn" onClick={handleCheckAnswer}>
              Check Answer
            </button>
          </div>
        </div>
      ) : (
        <div className="card cc-card">
          <h2>All done!</h2>
          <p>
            You scored <strong>{score}</strong> out of <strong>{total}</strong>.
          </p>
          <div className="cc-actions">
            <button className="cc-btn" onClick={handleRestart}>
              Restart (New 10)
            </button>
            <Link className="cc-btn cc-btn-alt" to="/quizzes/cross-contamination">
              Back to Levels
            </Link>
          </div>
        </div>
      )}

      {/* Shadow pop-up modal */}
      <QuizModal
        open={modal.open}
        title={modal.title}
        body={modal.body}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
        onNext={goNext}
      />
    </div>
  );
}
