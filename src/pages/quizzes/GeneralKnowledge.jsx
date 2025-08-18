// src/pages/quizzes/GeneralKnowledge.jsx
import React from "react";
import { GENERAL_QUESTIONS } from "../../data/generalQuestions.js";
import "../../quiz-general.css";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function normalize(v) {
  return String(v).trim().toLowerCase();
}

function Choice({ label, selected, onClick }) {
  return (
    <label className={`gq-option ${selected ? "selected" : ""}`} onClick={onClick}>
      <input type="radio" checked={!!selected} readOnly />
      <span>{label}</span>
    </label>
  );
}

function Modal({ open, title, children, onClose, primaryLabel = "Next", onPrimary }) {
  if (!open) return null;
  return (
    <div className="gq-modal-overlay" role="dialog" aria-modal="true">
      <div className="card gq-modal">
        <h3 className="gq-modal-title">{title}</h3>
        <div className="gq-modal-body">{children}</div>
        <div className="gq-modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>Close</button>
          <button className="btn" onClick={onPrimary || onClose}>{primaryLabel}</button>
        </div>
      </div>
    </div>
  );
}

export default function GeneralKnowledge() {
  const [quizQuestions, setQuizQuestions] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalBody, setModalBody] = React.useState(null);
  const [finished, setFinished] = React.useState(false);

  // Build a 10-question randomized quiz on mount
  React.useEffect(() => {
    const selected = shuffle(GENERAL_QUESTIONS).slice(0, 10);
    setQuizQuestions(selected);
    setIndex(0);
    setAnswers({});
    setFinished(false);
  }, []);

  const current = quizQuestions[index];

  const handleAnswer = (choice) => {
    if (!current) return;
    const correct = normalize(choice) === normalize(current.answer);
    setAnswers((prev) => ({ ...prev, [current.id]: choice }));

    setModalTitle(correct ? "🎉 Correct!" : "❌ Not quite");
    setModalBody(
      <div>
        <p className="gq-modal-p">
          {correct
            ? "Great job — that’s right!"
            : <>The correct answer is <strong>{current.answer}</strong>.</>}
        </p>
        {current.explanation && <p className="gq-muted">{current.explanation}</p>}
      </div>
    );
    setShowModal(true);
  };

  const nextQuestion = () => {
    setShowModal(false);
    if (index < quizQuestions.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const prev = () => setIndex((i) => Math.max(0, i - 1));

  const restart = () => {
    const selected = shuffle(GENERAL_QUESTIONS).slice(0, 10);
    setQuizQuestions(selected);
    setIndex(0);
    setAnswers({});
    setFinished(false);
    setShowModal(false);
  };

  const score = React.useMemo(() => {
    let s = 0;
    for (const q of quizQuestions) {
      if (normalize(answers[q.id]) === normalize(q.answer)) s += 1;
    }
    return s;
  }, [answers, quizQuestions]);

  const renderChoices = () => {
    if (!current) return null;

    if (current.type === "mcq") {
      return current.choices.map((c) => (
        <Choice
          key={c}
          label={c}
          selected={answers[current.id] === c}
          onClick={() => handleAnswer(c)}
        />
      ));
    }

    if (current.type === "tf") {
      return ["True", "False"].map((c) => (
        <Choice
          key={c}
          label={c}
          selected={answers[current.id] === c}
          onClick={() => handleAnswer(c)}
        />
      ));
    }

    if (current.type === "yn") {
      return ["Yes", "No"].map((c) => (
        <Choice
          key={c}
          label={c}
          selected={answers[current.id] === c}
          onClick={() => handleAnswer(c)}
        />
      ));
    }

    return null;
  };

  if (finished) {
    return (
      <div className="container">
        <div className="card results">
          <h1>Celiac Disease General Knowledge — Results</h1>
          <p>score: {score} / {quizQuestions.length}</p>

          {quizQuestions.map((q) => {
            const user = answers[q.id];
            const correct = normalize(user) === normalize(q.answer);
            return (
              <div key={q.id} className="gq-item">
                <div className="question">{q.question}</div>
                <div className={`answer ${correct ? "ok" : "bad"}`}>
                  your answer: <strong>{user ?? "(no answer)"}</strong>
                  {!correct && <> — correct: <strong>{q.answer}</strong></>}
                </div>
                {q.explanation && <div className="small">{q.explanation}</div>}
              </div>
            );
          })}

          <div className="footer">
            <button className="btn btn-secondary" onClick={() => history.back()}>back</button>
            <button className="btn" onClick={restart}>new random quiz</button>
          </div>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="container">
      <div className="card">
        <div className="footer top">
          <span className="small">question {index + 1} / {quizQuestions.length || 10}</span>
          <span className="badge">{(current.type || "").toUpperCase()}</span>
        </div>

        <h1>Celiac Disease General Knowledge Quiz</h1>
        <div className="question">{current.question}</div>
        <div className="gq-row">{renderChoices()}</div>

        <div className="footer">
          <button className="btn btn-secondary" onClick={prev} disabled={index === 0}>prev</button>
          <button
            className="btn"
            onClick={() => {
              if (!answers[current.id]) {
                setModalTitle("Pick an answer to continue");
                setModalBody(<p className="gq-modal-p">Please choose an option above.</p>);
                setShowModal(true);
                return;
              }
              nextQuestion();
            }}
          >
            {index < (quizQuestions.length || 10) - 1 ? "next" : "finish"}
          </button>
        </div>
      </div>

      <Modal
        open={showModal}
        title={modalTitle}
        onClose={() => setShowModal(false)}
        primaryLabel={index < (quizQuestions.length || 10) - 1 ? "Next question" : "See results"}
        onPrimary={nextQuestion}
      >
        {modalBody}
      </Modal>
    </div>
  );
}
