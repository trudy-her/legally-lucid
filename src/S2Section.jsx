import { S2_SECTION_HEADER, getS2GroupLabel } from './section2Data.js'

export function S2QuestionScreen({
  question,
  value,
  onSelect,
  onToggle,
  onContinue,
}) {
  const questionId = `s2-${question.id}-question`
  const groupLabel = getS2GroupLabel(question.id)
  const isMulti = question.mode === 'multi'

  function handleSelect(optionValue) {
    onSelect(optionValue)
  }

  function handleToggle(optionValue) {
    onToggle(optionValue)
  }

  function handleNext() {
    onContinue()
  }

  const hasSelection = isMulti ? value.length > 0 : Boolean(value)

  return (
    <main className="gate">
      <p className="gate__section-header">{S2_SECTION_HEADER}</p>

      {groupLabel ? (
        <p className="gate__group-header">{groupLabel}</p>
      ) : null}

      <h1 id={questionId} className="gate__question">
        {question.question}
      </h1>

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

      {isMulti ? (
        <button
          type="button"
          className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
          aria-disabled={!hasSelection}
          onClick={handleNext}
        >
          Next
        </button>
      ) : null}
    </main>
  )
}

export function S2SectionCompleteScreen() {
  return (
    <main className="gate">
      <p className="gate__section-header">{S2_SECTION_HEADER}</p>
      <p className="gate__question">Section 2 complete.</p>
    </main>
  )
}
