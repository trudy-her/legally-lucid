import { S16_SECTION_HEADER } from './section16Data.js'
import {
  ContinueError,
  MultiSelectHint,
  QuestionNav,
  useContinueValidation,
} from './QuestionNav.jsx'

export function S16QuestionScreen({
  question,
  value,
  onSelect,
  onToggle,
  onContinue,
  onBack,
}) {
  const questionId = `s16-${question.id}-question`
  const isMulti = question.mode === 'multi'
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
  const hasSelection = isMulti ? value.length > 0 : Boolean(value)

  function handleSelect(optionValue) {
    onSelect(optionValue)
    clearContinueError()
  }

  function handleToggle(optionValue) {
    onToggle(optionValue)
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(hasSelection, onContinue)
  }

  return (
    <main className="gate">
      <p className="gate__section-header">{S16_SECTION_HEADER}</p>

      <h1 id={questionId} className="gate__question">
        {question.question}
      </h1>

      {question.helper ? (
        <p className="gate__helper gate__question-helper">{question.helper}</p>
      ) : null}

      {isMulti ? <MultiSelectHint /> : null}

      {isMulti ? (
        <div className="gate__options" role="group" aria-labelledby={questionId}>
          {question.options.map((option) => {
            const isSelected = value.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isSelected}
                className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
                onClick={() => handleToggle(option.value)}
              >
                <span className="gate__option-label">{option.label}</span>
              </button>
            )
          })}
        </div>
      ) : (
        <div
          className="gate__options"
          role="radiogroup"
          aria-labelledby={questionId}
        >
          {question.options.map((option) => {
            const isSelected = value === option.value
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
                onClick={() => handleSelect(option.value)}
              >
                <span className="gate__option-label">{option.label}</span>
              </button>
            )
          })}
        </div>
      )}

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

export function S16SectionCompleteScreen() {
  return (
    <main className="gate">
      <p className="gate__section-header">{S16_SECTION_HEADER}</p>
      <p className="gate__question">Section 16 complete.</p>
    </main>
  )
}
