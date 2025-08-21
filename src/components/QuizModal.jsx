import React from "react";

/** Shadow pop-up modal used for answer feedback. */
export default function QuizModal({ open, title, body, onClose, onNext }) {
  if (!open) return null;
  return (
    <div className="cc-modal-overlay" onClick={onClose}>
      <div className="cc-modal" onClick={(e)=>e.stopPropagation()}>
        <div className="cc-card">
          <h3 className="cc-modal-title">{title}</h3>
          <div className="cc-modal-body">
            {typeof body === "string" ? <p className="cc-modal-p">{body}</p> : body}
          </div>
          <div className="cc-modal-actions">
            <button className="cc-btn-alt" type="button" onClick={onClose}>Close</button>
            {onNext && (
              <button className="cc-btn" type="button" onClick={onNext}>
                Next question
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
