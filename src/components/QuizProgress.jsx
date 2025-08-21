import React from "react";

/**
 * Gradient progress bar.
 * prefix lets it reuse your existing CSS:
 *  - "gq" (General Knowledge)
 *  - "lp" (Label Proficiency)
 *  - "cc" (Cross Contamination)
 */
export default function QuizProgress({ current, total, prefix = "gq" }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  const clamp = Math.max(0, Math.min(100, pct));
  return (
    <div className={`${prefix}-progress-wrap`} aria-label="quiz progress">
      <div
        className={`${prefix}-progress`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamp}
      >
        <div className={`${prefix}-progress-bar`} style={{ width: `${clamp}%` }} />
      </div>
      <div className={`${prefix}-progress-meta`}>{current} / {total}</div>
    </div>
  );
}
