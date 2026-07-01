import { useState } from 'react'
import { S5_SECTION_HEADER } from './section5Data.js'
import {
  ContinueError,
  MultiSelectHint,
  QuestionNav,
  useContinueValidation,
} from './QuestionNav.jsx'

function OptionButton({ option, isSelected, onClick, role = 'button', ariaProps = {} }) {
  return (
    <button
      key={option.value}
      type="button"
      role={role}
      {...ariaProps}
      className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
      onClick={onClick}
    >
      <span className="gate__option-label">{option.label}</span>
    </button>
  )
}

function GroupedMultiOptions({ question, value, onToggle, questionId }) {
  const [moreExpanded, setMoreExpanded] = useState(false)
  const hasGroupedLayout = Boolean(question.primaryOptions)

  if (!hasGroupedLayout && question.optionGroups) {
    return (
      <div className="gate__options-stack">
        {question.optionGroups.map((group, index) => (
          <div key={group.id} className="gate__option-group">
            {index > 0 ? <div className="gate__option-group-divider" aria-hidden="true" /> : null}
            <div className="gate__options" role="group" aria-labelledby={questionId}>
              {group.options.map((option) => {
                const isSelected = value.includes(option.value)
                return (
                  <OptionButton
                    key={option.value}
                    option={option}
                    isSelected={isSelected}
                    ariaProps={{ 'aria-pressed': isSelected }}
                    onClick={() => onToggle(option.value)}
                  />
                )
              })}
            </div>
          </div>
        ))}
        {question.stickyOptions?.length ? (
          <div className="gate__sticky-options">
            <div className="gate__option-group-divider" aria-hidden="true" />
            <div className="gate__options" role="group" aria-labelledby={questionId}>
              {question.stickyOptions.map((option) => {
                const isSelected = value.includes(option.value)
                return (
                  <OptionButton
                    key={option.value}
                    option={option}
                    isSelected={isSelected}
                    ariaProps={{ 'aria-pressed': isSelected }}
                    onClick={() => onToggle(option.value)}
                  />
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    )
  }

  if (!hasGroupedLayout) {
    return (
      <div className="gate__options" role="group" aria-labelledby={questionId}>
        {question.options.map((option) => {
          const isSelected = value.includes(option.value)
          return (
            <OptionButton
              key={option.value}
              option={option}
              isSelected={isSelected}
              ariaProps={{ 'aria-pressed': isSelected }}
              onClick={() => onToggle(option.value)}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="gate__options-stack">
      <div className="gate__options" role="group" aria-labelledby={questionId}>
        {question.primaryOptions.map((option) => {
          const isSelected = value.includes(option.value)
          return (
            <OptionButton
              key={option.value}
              option={option}
              isSelected={isSelected}
              ariaProps={{ 'aria-pressed': isSelected }}
              onClick={() => onToggle(option.value)}
            />
          )
        })}
      </div>

      <button
        type="button"
        className="gate__expand-toggle"
        aria-expanded={moreExpanded}
        onClick={() => setMoreExpanded((prev) => !prev)}
      >
        {moreExpanded ? 'Fewer options' : question.moreLabel}
      </button>

      {moreExpanded ? (
        <div className="gate__options" role="group" aria-labelledby={questionId}>
          {question.moreOptions.map((option) => {
            const isSelected = value.includes(option.value)
            return (
              <OptionButton
                key={option.value}
                option={option}
                isSelected={isSelected}
                ariaProps={{ 'aria-pressed': isSelected }}
                onClick={() => onToggle(option.value)}
              />
            )
          })}
        </div>
      ) : null}

      {question.stickyOptions?.length ? (
        <div className="gate__sticky-options">
          <div className="gate__option-group-divider" aria-hidden="true" />
          <div className="gate__options" role="group" aria-labelledby={questionId}>
            {question.stickyOptions.map((option) => {
              const isSelected = value.includes(option.value)
              return (
                <OptionButton
                  key={option.value}
                  option={option}
                  isSelected={isSelected}
                  ariaProps={{ 'aria-pressed': isSelected }}
                  onClick={() => onToggle(option.value)}
                />
              )
            })}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export function S5QuestionScreen({
  question,
  value,
  onSelect,
  onToggle,
  onContinue,
  onBack,
}) {
  const questionId = `s5-${question.id}-question`
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
      <p className="gate__section-header">{S5_SECTION_HEADER}</p>

      <h1 id={questionId} className="gate__question">
        {question.question}
      </h1>

      {question.helper ? (
        <p className="gate__helper gate__question-helper">{question.helper}</p>
      ) : null}

      {isMulti ? <MultiSelectHint /> : null}

      {isMulti ? (
        <GroupedMultiOptions
          question={question}
          value={value}
          onToggle={handleToggle}
          questionId={questionId}
        />
      ) : (
        <div
          className="gate__options"
          role="radiogroup"
          aria-labelledby={questionId}
        >
          {question.options.map((option) => {
            const isSelected = value === option.value
            return (
              <OptionButton
                key={option.value}
                option={option}
                isSelected={isSelected}
                role="radio"
                ariaProps={{ 'aria-checked': isSelected }}
                onClick={() => handleSelect(option.value)}
              />
            )
          })}
        </div>
      )}

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

export function S5SectionCompleteScreen() {
  return (
    <main className="gate">
      <p className="gate__section-header">{S5_SECTION_HEADER}</p>
      <p className="gate__question">Section 5 complete.</p>
    </main>
  )
}
