import { useState } from 'react'

export const MULTI_SELECT_HINT = 'Select all that apply'

export function MultiSelectHint() {
  return <p className="gate__multi-select-hint">{MULTI_SELECT_HINT}</p>
}

export function QuestionNav({
  onBack,
  onNext,
  canNext,
  showBack = true,
}) {
  return (
    <div className="gate__nav">
      {showBack ? (
        <button type="button" className="gate__back" onClick={onBack}>
          Back
        </button>
      ) : (
        <span className="gate__back gate__back--placeholder" aria-hidden="true" />
      )}
      <button
        type="button"
        className={`gate__next${canNext ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!canNext}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  )
}

export function useContinueValidation() {
  const [showContinueError, setShowContinueError] = useState(false)

  function validateAndContinue(canNext, onContinue) {
    if (!canNext) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  function clearContinueError() {
    setShowContinueError(false)
  }

  return { showContinueError, validateAndContinue, clearContinueError }
}

export function ContinueError({ show, canNext }) {
  if (!show || canNext) {
    return null
  }
  return (
    <p className="gate__helper" role="alert">
      Please choose an answer to continue.
    </p>
  )
}
