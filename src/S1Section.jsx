import { S1_SECTION_HEADER } from './section1Data.js'

export function S1QuestionScreen({ question, value, onSelect }) {
  const questionId = `s1-${question.id}-question`

  function handleSelect(optionValue) {
    onSelect(optionValue)
  }

  return (
    <main className="gate">
      <p className="gate__section-header">{S1_SECTION_HEADER}</p>

      <h1 id={questionId} className="gate__question">
        {question.question}
      </h1>

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
    </main>
  )
}

export function S1SectionCompleteScreen() {
  return (
    <main className="gate">
      <p className="gate__section-header">{S1_SECTION_HEADER}</p>
      <p className="gate__question">Section 1 complete.</p>
    </main>
  )
}
