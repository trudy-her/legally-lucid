import { useEffect, useMemo, useState } from 'react'
import {
  gate1,
  gate2,
  gate2a,
  gate2b,
  gate2c,
  gate3,
  gate4,
  gate5,
  gate6,
  gate7,
  gate8,
  gate9,
  gate10,
  getGate2aOptions,
  shouldShowGate2A,
} from './gateData.js'
import {
  computeS6BehaviorAvoidanceFlag,
  computeSignedWithoutReview,
  getS6QuestionById,
  getVisibleS6QuestionIds,
} from './section6Data.js'
import { buildDiagnosticContext } from './diagnosticTags.js'
import { getS1QuestionById, getVisibleS1QuestionIds } from './section1Data.js'
import { S1QuestionScreen, S1SectionCompleteScreen } from './S1Section.jsx'
import './App.css'

function Gate1Screen({ stage_v35, setStage_v35, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate1-question'

  function handleSelect(value) {
    setStage_v35(value)
    setShowContinueError(false)
  }

  function handleNext() {
    if (!stage_v35) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = Boolean(stage_v35)

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate1.question}
      </h1>

      <div
        className="gate__options"
        role="radiogroup"
        aria-labelledby={questionId}
      >
        {gate1.options.map((option) => {
          const isSelected = stage_v35 === option.value
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
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && !stage_v35 ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate2Screen({ business_models, setBusiness_models, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate2-question'

  function handleToggle(value) {
    setBusiness_models((prev) => {
      if (value === 'unknown') {
        return prev.includes('unknown') ? [] : ['unknown']
      }

      const withoutUnknown = prev.filter((v) => v !== 'unknown')
      if (withoutUnknown.includes(value)) {
        return withoutUnknown.filter((v) => v !== value)
      }
      return [...withoutUnknown, value]
    })
    setShowContinueError(false)
  }

  function handleNext() {
    if (business_models.length === 0) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = business_models.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate2.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate2.helper}</p>

      <div
        className="gate__options"
        role="group"
        aria-labelledby={questionId}
      >
        {gate2.options.map((option) => {
          const isSelected = business_models.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && business_models.length === 0 ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate2AScreen({
  business_models,
  primary_model,
  setPrimary_model,
  onContinue,
}) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate2a-question'
  const options = getGate2aOptions(business_models)

  useEffect(() => {
    const validValues = getGate2aOptions(business_models).map(
      (option) => option.value,
    )
    if (primary_model && !validValues.includes(primary_model)) {
      setPrimary_model(null)
    }
  }, [business_models, primary_model, setPrimary_model])

  function handleSelect(value) {
    setPrimary_model(value)
    setShowContinueError(false)
  }

  function handleNext() {
    if (!primary_model) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = Boolean(primary_model)

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate2a.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate2a.helper}</p>

      <div
        className="gate__options"
        role="radiogroup"
        aria-labelledby={questionId}
      >
        {options.map((option) => {
          const isSelected = primary_model === option.value
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
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && !primary_model ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate2BScreen({
  structure_orientation,
  setStructure_orientation,
  onContinue,
}) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate2b-question'

  function handleToggle(value) {
    setStructure_orientation((prev) => {
      if (value === 'not_sure') {
        return prev.includes('not_sure') ? [] : ['not_sure']
      }

      const withoutNotSure = prev.filter((v) => v !== 'not_sure')
      if (withoutNotSure.includes(value)) {
        return withoutNotSure.filter((v) => v !== value)
      }
      return [...withoutNotSure, value]
    })
    setShowContinueError(false)
  }

  function handleNext() {
    if (structure_orientation.length === 0) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = structure_orientation.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate2b.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate2b.helper}</p>

      <div
        className="gate__options"
        role="group"
        aria-labelledby={questionId}
      >
        {gate2b.options.map((option) => {
          const isSelected = structure_orientation.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && structure_orientation.length === 0 ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate4Screen({ geography, setGeography, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate4-question'

  function handleToggle(value) {
    setGeography((prev) => {
      if (value === 'unknown') {
        return prev.includes('unknown') ? [] : ['unknown']
      }
      if (value === 'not_reviewed') {
        return prev.includes('not_reviewed') ? [] : ['not_reviewed']
      }
      const withoutExclusive = prev.filter(
        (v) => v !== 'unknown' && v !== 'not_reviewed',
      )
      if (withoutExclusive.includes(value)) {
        return withoutExclusive.filter((v) => v !== value)
      }
      return [...withoutExclusive, value]
    })
    setShowContinueError(false)
  }

  function handleNext() {
    if (geography.length === 0) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = geography.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate4.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate4.helper}</p>

      <div
        className="gate__options"
        role="group"
        aria-labelledby={questionId}
      >
        {gate4.options.map((option) => {
          const isSelected = geography.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && geography.length === 0 ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate5Screen({ ai_use, setAi_use, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate5-question'

  function handleToggle(value) {
    setAi_use((prev) => {
      if (value === 'none') {
        return prev.includes('none') ? [] : ['none']
      }
      if (value === 'unknown') {
        return prev.includes('unknown') ? [] : ['unknown']
      }

      const withoutExclusive = prev.filter((v) => v !== 'none' && v !== 'unknown')
      if (withoutExclusive.includes(value)) {
        return withoutExclusive.filter((v) => v !== value)
      }
      return [...withoutExclusive, value]
    })
    setShowContinueError(false)
  }

  function handleNext() {
    if (ai_use.length === 0) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = ai_use.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate5.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate5.helper}</p>

      <div className="gate__options" role="group" aria-labelledby={questionId}>
        {gate5.options.map((option) => {
          const isSelected = ai_use.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && ai_use.length === 0 ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate6Screen({ next_moves, setNext_moves, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate6-question'

  function handleToggle(value) {
    setNext_moves((prev) => {
      if (value === 'general_scan') {
        return prev.includes('general_scan') ? [] : ['general_scan']
      }

      const withoutGeneralScan = prev.filter((v) => v !== 'general_scan')
      if (withoutGeneralScan.includes(value)) {
        return withoutGeneralScan.filter((v) => v !== value)
      }
      return [...withoutGeneralScan, value]
    })
    setShowContinueError(false)
  }

  function handleNext() {
    if (next_moves.length === 0) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = next_moves.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate6.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate6.helper}</p>

      <div className="gate__options" role="group" aria-labelledby={questionId}>
        {gate6.options.map((option) => {
          const isSelected = next_moves.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && next_moves.length === 0 ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate7Screen({ sensitive_claims, setSensitive_claims, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate7-question'

  function handleSelect(value) {
    setSensitive_claims(value)
    setShowContinueError(false)
  }

  function handleNext() {
    if (!sensitive_claims) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = Boolean(sensitive_claims)

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate7.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate7.helper}</p>

      <div
        className="gate__options"
        role="radiogroup"
        aria-labelledby={questionId}
      >
        {gate7.options.map((option) => {
          const isSelected = sensitive_claims === option.value
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
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && !sensitive_claims ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate8Screen({ growth_path, setGrowth_path, onContinue }) {
  const questionId = 'gate8-question'

  function handleToggle(value) {
    setGrowth_path((prev) => {
      if (value === 'not_sure') {
        return prev.includes('not_sure') ? [] : ['not_sure']
      }

      const withoutNotSure = prev.filter((v) => v !== 'not_sure')
      if (withoutNotSure.includes(value)) {
        return withoutNotSure.filter((v) => v !== value)
      }
      return [...withoutNotSure, value]
    })
  }

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate8.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate8.helper}</p>

      <div className="gate__options" role="group" aria-labelledby={questionId}>
        {gate8.options.map((option) => {
          const isSelected = growth_path.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        className="gate__next gate__next--active"
        aria-disabled={false}
        onClick={onContinue}
      >
        Next
      </button>
    </main>
  )
}

function Gate9Screen({ annual_revenue_range, setAnnual_revenue_range, onContinue }) {
  const questionId = 'gate9-question'

  function handleSelect(value) {
    setAnnual_revenue_range((prev) => (prev === value ? null : value))
  }

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate9.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate9.helper}</p>

      <div
        className="gate__options"
        role="radiogroup"
        aria-labelledby={questionId}
      >
        {gate9.options.map((option) => {
          const isSelected = annual_revenue_range === option.value
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
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        className="gate__next gate__next--active"
        aria-disabled={false}
        onClick={onContinue}
      >
        Next
      </button>
    </main>
  )
}

function Gate10Screen({ recent_events_12mo, setRecent_events_12mo, onContinue }) {
  const questionId = 'gate10-question'

  function handleToggle(value) {
    setRecent_events_12mo((prev) => {
      if (value === 'none') {
        return prev.includes('none') ? [] : ['none']
      }
      if (value === 'not_sure') {
        return prev.includes('not_sure') ? [] : ['not_sure']
      }

      const withoutExclusive = prev.filter(
        (v) => v !== 'none' && v !== 'not_sure',
      )
      if (withoutExclusive.includes(value)) {
        return withoutExclusive.filter((v) => v !== value)
      }
      return [...withoutExclusive, value]
    })
  }

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate10.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate10.helper}</p>
      <p className="gate__helper gate__optional-label">{gate10.optionalLabel}</p>

      <div className="gate__options" role="group" aria-labelledby={questionId}>
        {gate10.options.map((option) => {
          const isSelected = recent_events_12mo.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        className="gate__next gate__next--active"
        aria-disabled={false}
        onClick={onContinue}
      >
        Next
      </button>
    </main>
  )
}

function CompletionScreen({ onContinueToS1 }) {
  return (
    <main className="gate">
      <p className="gate__question">
        Your profile is saved. The Diagnostic is ready to begin.
      </p>
      <button
        type="button"
        className="gate__next gate__next--active"
        aria-disabled={false}
        onClick={onContinueToS1}
      >
        Continue to Section 1
      </button>
    </main>
  )
}

function S6QuestionScreen({ question, mode, value, setValue, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = `s6-${question.id}-question`

  function handleSelect(optionValue) {
    setValue(optionValue)
    setShowContinueError(false)
  }

  function handleToggle(optionValue) {
    setValue((prev) => {
      if (prev.includes(optionValue)) {
        return prev.filter((v) => v !== optionValue)
      }
      return [...prev, optionValue]
    })
    setShowContinueError(false)
  }

  function handleNext() {
    const hasSelection =
      mode === 'multi' ? value.length > 0 : Boolean(value)
    if (!hasSelection) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = mode === 'multi' ? value.length > 0 : Boolean(value)

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {question.question}
      </h1>
      {question.helper ? (
        <p className="gate__helper gate__question-helper">{question.helper}</p>
      ) : null}

      {mode === 'multi' ? (
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
                {option.helper ? (
                  <span className="gate__helper">{option.helper}</span>
                ) : null}
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
                {option.helper ? (
                  <span className="gate__helper">{option.helper}</span>
                ) : null}
              </button>
            )
          })}
        </div>
      )}

      {showContinueError && !hasSelection ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function S6SectionCompleteScreen() {
  return (
    <main className="gate">
      <p className="gate__question">Section 6 complete.</p>
    </main>
  )
}

function Gate3Screen({ team_structure, setTeam_structure, onContinue }) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate3-question'

  function handleToggle(value) {
    setTeam_structure((prev) => {
      if (value === 'solo') {
        return prev.includes('solo') ? [] : ['solo']
      }

      const withoutSolo = prev.filter((v) => v !== 'solo')
      if (withoutSolo.includes(value)) {
        return withoutSolo.filter((v) => v !== value)
      }
      return [...withoutSolo, value]
    })
    setShowContinueError(false)
  }

  function handleNext() {
    if (team_structure.length === 0) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    onContinue()
  }

  const hasSelection = team_structure.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate3.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate3.helper}</p>

      <div
        className="gate__options"
        role="group"
        aria-labelledby={questionId}
      >
        {gate3.options.map((option) => {
          const isSelected = team_structure.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              className={`gate__option${isSelected ? ' gate__option--selected' : ''}`}
              onClick={() => handleToggle(option.value)}
            >
              <span className="gate__option-label">{option.label}</span>
              {option.helper ? (
                <span className="gate__helper">{option.helper}</span>
              ) : null}
            </button>
          )
        })}
      </div>

      {showContinueError && team_structure.length === 0 ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function Gate2CScreen({
  regulated_financial_activity,
  setRegulated_financial_activity,
  onShowBoundary,
  onContinue,
}) {
  const [showContinueError, setShowContinueError] = useState(false)
  const questionId = 'gate2c-question'

  function handleSelect(value) {
    setRegulated_financial_activity(value)
    setShowContinueError(false)
  }

  function handleNext() {
    if (!regulated_financial_activity) {
      setShowContinueError(true)
      return
    }
    setShowContinueError(false)
    if (
      regulated_financial_activity === 'yes' ||
      regulated_financial_activity === 'not_sure'
    ) {
      onShowBoundary()
      return
    }
    onContinue()
  }

  const hasSelection = Boolean(regulated_financial_activity)

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate2c.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate2c.helper}</p>

      <div
        className="gate__options"
        role="radiogroup"
        aria-labelledby={questionId}
      >
        {gate2c.options.map((option) => {
          const isSelected = regulated_financial_activity === option.value
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

      {showContinueError && !regulated_financial_activity ? (
        <p className="gate__helper" role="alert">
          Please choose an answer to continue.
        </p>
      ) : null}

      <button
        type="button"
        className={`gate__next${hasSelection ? ' gate__next--active' : ' gate__next--inactive'}`}
        aria-disabled={!hasSelection}
        onClick={handleNext}
      >
        Next
      </button>
    </main>
  )
}

function FinancialBoundaryScreen({ onContinue, onStop }) {
  const [acknowledged, setAcknowledged] = useState(false)
  const checkboxId = 'financial-boundary-ack'

  function handleContinue() {
    if (!acknowledged) return
    onContinue()
  }

  return (
    <main className="gate">
      <h1 className="gate__question">{gate2c.boundary.headline}</h1>
      <p className="gate__boundary-body">{gate2c.boundary.body}</p>

      <label className="gate__checkbox" htmlFor={checkboxId}>
        <input
          id={checkboxId}
          type="checkbox"
          checked={acknowledged}
          onChange={(e) => setAcknowledged(e.target.checked)}
        />
        <span className="gate__checkbox-label">{gate2c.boundary.checkboxLabel}</span>
      </label>

      <div className="gate__actions">
        <button
          type="button"
          className={`gate__next${acknowledged ? ' gate__next--active' : ' gate__next--inactive'}`}
          aria-disabled={!acknowledged}
          onClick={handleContinue}
        >
          Continue
        </button>
        <button type="button" className="gate__stop" onClick={onStop}>
          Stop here
        </button>
      </div>
    </main>
  )
}

function App() {
  const [currentGate, setCurrentGate] = useState(1)
  const [stage_v35, setStage_v35] = useState(null)
  const [business_models, setBusiness_models] = useState([])
  const [primary_model, setPrimary_model] = useState(null)
  const [structure_orientation, setStructure_orientation] = useState([])
  const [regulated_financial_activity, setRegulated_financial_activity] =
    useState(null)
  const [team_structure, setTeam_structure] = useState([])
  const [geography, setGeography] = useState([])
  const [ai_use, setAi_use] = useState([])
  const [next_moves, setNext_moves] = useState([])
  const [sensitive_claims, setSensitive_claims] = useState(null)
  const [growth_path, setGrowth_path] = useState([])
  const [annual_revenue_range, setAnnual_revenue_range] = useState(null)
  const [recent_events_12mo, setRecent_events_12mo] = useState([])
  const [s1Step, setS1Step] = useState(0)
  const [s1_q1_current_stage, setS1_q1_current_stage] = useState(null)
  const [s1_q2_current_structure, setS1_q2_current_structure] = useState(null)
  const [
    s1_q3_foundational_formation_current_status_records,
    setS1_q3_foundational_formation_current_status_records,
  ] = useState(null)
  const [
    s1_q4_entity_or_person_receives_money_signs_owns,
    setS1_q4_entity_or_person_receives_money_signs_owns,
  ] = useState(null)
  const [
    s1_q5_ownership_founder_board_roles_documented,
    setS1_q5_ownership_founder_board_roles_documented,
  ] = useState(null)
  const [
    s1_q6_separation_business_personal_related_projects,
    setS1_q6_separation_business_personal_related_projects,
  ] = useState(null)
  const [
    s1_q7_multiple_brands_entities_projects,
    setS1_q7_multiple_brands_entities_projects,
  ] = useState(null)
  const [
    s1_q8_fiscal_sponsor_or_partner_structure,
    setS1_q8_fiscal_sponsor_or_partner_structure,
  ] = useState(null)
  const [
    s1_q9_foundational_tax_finance_identifiers,
    setS1_q9_foundational_tax_finance_identifiers,
  ] = useState(null)
  const [
    s1_q10_foundation_ready_for_next_move,
    setS1_q10_foundation_ready_for_next_move,
  ] = useState(null)
  const [s6Step, setS6Step] = useState(0)
  const [s6_q1_informal_commitments_documented, setS6_q1_informal_commitments_documented] =
    useState(null)
  const [s6_q2_avoids_written_agreements, setS6_q2_avoids_written_agreements] =
    useState(null)
  const [s6_q3_agreement_source, setS6_q3_agreement_source] = useState([])
  const [
    s6_q4_scope_responsibilities_deliverables,
    setS6_q4_scope_responsibilities_deliverables,
  ] = useState(null)
  const [
    s6_q5_ownership_use_sharing_work_product,
    setS6_q5_ownership_use_sharing_work_product,
  ] = useState(null)
  const [
    s6_q6_confidentiality_data_sensitive_info,
    setS6_q6_confidentiality_data_sensitive_info,
  ] = useState(null)
  const [
    s6_q7_responsibility_if_something_goes_wrong,
    setS6_q7_responsibility_if_something_goes_wrong,
  ] = useState(null)
  const [
    s6_q8_payment_refunds_cancellation_termination,
    setS6_q8_payment_refunds_cancellation_termination,
  ] = useState(null)
  const [s6_q9_supplier_vendor_platform_terms, setS6_q9_supplier_vendor_platform_terms] =
    useState(null)
  const [
    s6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments,
    setS6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments,
  ] = useState(null)

  const gateContext = useMemo(
    () => ({
      business_models,
      team_structure,
      ai_use,
      recent_events_12mo,
      structure_orientation,
      next_moves,
      growth_path,
    }),
    [
      business_models,
      team_structure,
      ai_use,
      recent_events_12mo,
      structure_orientation,
      next_moves,
      growth_path,
    ],
  )

  const diagnosticContext = useMemo(
    () =>
      buildDiagnosticContext({
        business_models,
        team_structure,
        structure_orientation,
        next_moves,
        recent_events_12mo,
        s1_q1_current_stage,
        s1_q2_current_structure,
        diagnosticStoppedAtBoundary: false,
      }),
    [
      business_models,
      team_structure,
      structure_orientation,
      next_moves,
      recent_events_12mo,
      s1_q1_current_stage,
      s1_q2_current_structure,
    ],
  )

  const visibleS1QuestionIds = useMemo(
    () => getVisibleS1QuestionIds(diagnosticContext),
    [diagnosticContext],
  )

  const visibleS6QuestionIds = useMemo(
    () => getVisibleS6QuestionIds(gateContext),
    [gateContext],
  )

  const signedWithoutReview = useMemo(
    () => computeSignedWithoutReview(recent_events_12mo),
    [recent_events_12mo],
  )

  const S6_BEHAVIOR_AVOIDANCE_FLAG = useMemo(
    () => computeS6BehaviorAvoidanceFlag(s6_q2_avoids_written_agreements),
    [s6_q2_avoids_written_agreements],
  )

  const s6Triggered = useMemo(() => {
    const includesAny = (arr, values) => values.some((v) => arr.includes(v))

    return (
      includesAny(next_moves, [
        'signing_agreement',
        'seeking_donations_grants_sponsors',
      ]) ||
      includesAny(recent_events_12mo, [
        'signed_without_review',
        'donor_grant_sponsor_issue',
      ]) ||
      includesAny(business_models, [
        'service',
        'ecomm_physical',
        'saas_software_ai',
        'content_creator',
        'marketplace_platform',
        'hardware_connected',
      ]) ||
      includesAny(team_structure, [
        'contractors',
        'cofounder_partner',
        'compensated_advisors',
      ]) ||
      includesAny(structure_orientation, [
        'nonprofit',
        'fiscal_sponsorship',
        'hybrid_for_profit_nonprofit',
      ])
    )
  }, [
    business_models,
    next_moves,
    recent_events_12mo,
    structure_orientation,
    team_structure,
  ])

  function resetAllState() {
    setStage_v35(null)
    setBusiness_models([])
    setPrimary_model(null)
    setStructure_orientation([])
    setRegulated_financial_activity(null)
    setTeam_structure([])
    setGeography([])
    setAi_use([])
    setNext_moves([])
    setSensitive_claims(null)
    setGrowth_path([])
    setAnnual_revenue_range(null)
    setRecent_events_12mo([])
    setS1Step(0)
    setS1_q1_current_stage(null)
    setS1_q2_current_structure(null)
    setS1_q3_foundational_formation_current_status_records(null)
    setS1_q4_entity_or_person_receives_money_signs_owns(null)
    setS1_q5_ownership_founder_board_roles_documented(null)
    setS1_q6_separation_business_personal_related_projects(null)
    setS1_q7_multiple_brands_entities_projects(null)
    setS1_q8_fiscal_sponsor_or_partner_structure(null)
    setS1_q9_foundational_tax_finance_identifiers(null)
    setS1_q10_foundation_ready_for_next_move(null)
    setS6Step(0)
    setS6_q1_informal_commitments_documented(null)
    setS6_q2_avoids_written_agreements(null)
    setS6_q3_agreement_source([])
    setS6_q4_scope_responsibilities_deliverables(null)
    setS6_q5_ownership_use_sharing_work_product(null)
    setS6_q6_confidentiality_data_sensitive_info(null)
    setS6_q7_responsibility_if_something_goes_wrong(null)
    setS6_q8_payment_refunds_cancellation_termination(null)
    setS6_q9_supplier_vendor_platform_terms(null)
    setS6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments(null)
    setCurrentGate(1)
  }

  function getS1QuestionBinding(questionId) {
    switch (questionId) {
      case 'q1':
        return {
          value: s1_q1_current_stage,
          setValue: setS1_q1_current_stage,
        }
      case 'q2':
        return {
          value: s1_q2_current_structure,
          setValue: setS1_q2_current_structure,
        }
      case 'q3':
        return {
          value: s1_q3_foundational_formation_current_status_records,
          setValue: setS1_q3_foundational_formation_current_status_records,
        }
      case 'q4':
        return {
          value: s1_q4_entity_or_person_receives_money_signs_owns,
          setValue: setS1_q4_entity_or_person_receives_money_signs_owns,
        }
      case 'q5':
        return {
          value: s1_q5_ownership_founder_board_roles_documented,
          setValue: setS1_q5_ownership_founder_board_roles_documented,
        }
      case 'q6':
        return {
          value: s1_q6_separation_business_personal_related_projects,
          setValue: setS1_q6_separation_business_personal_related_projects,
        }
      case 'q7':
        return {
          value: s1_q7_multiple_brands_entities_projects,
          setValue: setS1_q7_multiple_brands_entities_projects,
        }
      case 'q8':
        return {
          value: s1_q8_fiscal_sponsor_or_partner_structure,
          setValue: setS1_q8_fiscal_sponsor_or_partner_structure,
        }
      case 'q9':
        return {
          value: s1_q9_foundational_tax_finance_identifiers,
          setValue: setS1_q9_foundational_tax_finance_identifiers,
        }
      case 'q10':
        return {
          value: s1_q10_foundation_ready_for_next_move,
          setValue: setS1_q10_foundation_ready_for_next_move,
        }
      default:
        return null
    }
  }

  function handleS1Answer(questionId, optionValue) {
    const binding = getS1QuestionBinding(questionId)
    const question = getS1QuestionById(questionId)
    if (!binding || !question) {
      return
    }

    binding.setValue(optionValue)

    const nextDiagnosticContext = buildDiagnosticContext({
      business_models,
      team_structure,
      structure_orientation,
      next_moves,
      recent_events_12mo,
      s1_q1_current_stage,
      s1_q2_current_structure,
      diagnosticStoppedAtBoundary: false,
      [question.field]: optionValue,
    })
    const nextVisibleIds = getVisibleS1QuestionIds(nextDiagnosticContext)

    if (s1Step < nextVisibleIds.length - 1) {
      setS1Step((prev) => prev + 1)
      return
    }
    if (s6Triggered) {
      setS6Step(0)
      setCurrentGate('s6')
      return
    }
    setCurrentGate('s1-complete')
  }

  function getS6QuestionBinding(questionId) {
    switch (questionId) {
      case 'q1':
        return {
          value: s6_q1_informal_commitments_documented,
          setValue: setS6_q1_informal_commitments_documented,
          mode: 'single',
        }
      case 'q2':
        return {
          value: s6_q2_avoids_written_agreements,
          setValue: setS6_q2_avoids_written_agreements,
          mode: 'single',
        }
      case 'q3':
        return {
          value: s6_q3_agreement_source,
          setValue: setS6_q3_agreement_source,
          mode: 'multi',
        }
      case 'q4':
        return {
          value: s6_q4_scope_responsibilities_deliverables,
          setValue: setS6_q4_scope_responsibilities_deliverables,
          mode: 'single',
        }
      case 'q5':
        return {
          value: s6_q5_ownership_use_sharing_work_product,
          setValue: setS6_q5_ownership_use_sharing_work_product,
          mode: 'single',
        }
      case 'q6':
        return {
          value: s6_q6_confidentiality_data_sensitive_info,
          setValue: setS6_q6_confidentiality_data_sensitive_info,
          mode: 'single',
        }
      case 'q7':
        return {
          value: s6_q7_responsibility_if_something_goes_wrong,
          setValue: setS6_q7_responsibility_if_something_goes_wrong,
          mode: 'single',
        }
      case 'q8':
        return {
          value: s6_q8_payment_refunds_cancellation_termination,
          setValue: setS6_q8_payment_refunds_cancellation_termination,
          mode: 'single',
        }
      case 'q9':
        return {
          value: s6_q9_supplier_vendor_platform_terms,
          setValue: setS6_q9_supplier_vendor_platform_terms,
          mode: 'single',
        }
      case 'q10':
        return {
          value: s6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments,
          setValue: setS6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments,
          mode: 'single',
        }
      default:
        return null
    }
  }

  function advanceS6() {
    if (s6Step < visibleS6QuestionIds.length - 1) {
      setS6Step((prev) => prev + 1)
      return
    }
    setCurrentGate('s6-complete')
  }

  function advanceToGate3() {
    setCurrentGate(3)
  }

  function advanceFromGate2() {
    if (shouldShowGate2A(business_models)) {
      setCurrentGate('2a')
      return
    }
    setPrimary_model(null)
    setCurrentGate('2b')
  }

  if (currentGate === 1) {
    return (
      <Gate1Screen
        stage_v35={stage_v35}
        setStage_v35={setStage_v35}
        onContinue={() => setCurrentGate(2)}
      />
    )
  }

  if (currentGate === 2) {
    return (
      <Gate2Screen
        business_models={business_models}
        setBusiness_models={setBusiness_models}
        onContinue={advanceFromGate2}
      />
    )
  }

  if (currentGate === '2a') {
    return (
      <Gate2AScreen
        business_models={business_models}
        primary_model={primary_model}
        setPrimary_model={setPrimary_model}
        onContinue={() => setCurrentGate('2b')}
      />
    )
  }

  if (currentGate === '2b') {
    return (
      <Gate2BScreen
        structure_orientation={structure_orientation}
        setStructure_orientation={setStructure_orientation}
        onContinue={() => setCurrentGate('2c')}
      />
    )
  }

  if (currentGate === '2c') {
    return (
      <Gate2CScreen
        regulated_financial_activity={regulated_financial_activity}
        setRegulated_financial_activity={setRegulated_financial_activity}
        onShowBoundary={() => setCurrentGate('financial-boundary')}
        onContinue={advanceToGate3}
      />
    )
  }

  if (currentGate === 'financial-boundary') {
    return (
      <FinancialBoundaryScreen
        onContinue={advanceToGate3}
        onStop={resetAllState}
      />
    )
  }

  if (currentGate === 3) {
    return (
      <Gate3Screen
        team_structure={team_structure}
        setTeam_structure={setTeam_structure}
        onContinue={() => setCurrentGate(4)}
      />
    )
  }

  if (currentGate === 4) {
    return (
      <Gate4Screen
        geography={geography}
        setGeography={setGeography}
        onContinue={() => setCurrentGate(5)}
      />
    )
  }

  if (currentGate === 5) {
    return (
      <Gate5Screen
        ai_use={ai_use}
        setAi_use={setAi_use}
        onContinue={() => setCurrentGate(6)}
      />
    )
  }

  if (currentGate === 6) {
    return (
      <Gate6Screen
        next_moves={next_moves}
        setNext_moves={setNext_moves}
        onContinue={() => setCurrentGate(7)}
      />
    )
  }

  if (currentGate === 7) {
    return (
      <Gate7Screen
        sensitive_claims={sensitive_claims}
        setSensitive_claims={setSensitive_claims}
        onContinue={() => setCurrentGate(8)}
      />
    )
  }

  if (currentGate === 8) {
    return (
      <Gate8Screen
        growth_path={growth_path}
        setGrowth_path={setGrowth_path}
        onContinue={() => setCurrentGate(9)}
      />
    )
  }

  if (currentGate === 9) {
    return (
      <Gate9Screen
        annual_revenue_range={annual_revenue_range}
        setAnnual_revenue_range={setAnnual_revenue_range}
        onContinue={() => setCurrentGate(10)}
      />
    )
  }

  if (currentGate === 10) {
    return (
      <Gate10Screen
        recent_events_12mo={recent_events_12mo}
        setRecent_events_12mo={setRecent_events_12mo}
        onContinue={() => setCurrentGate('complete')}
      />
    )
  }

  if (currentGate === 'complete') {
    return (
      <CompletionScreen
        onContinueToS1={() => {
          setS1Step(0)
          setCurrentGate('s1')
        }}
      />
    )
  }

  if (currentGate === 's1') {
    const currentQuestionId = visibleS1QuestionIds[s1Step]
    const question = getS1QuestionById(currentQuestionId)
    const binding = getS1QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return null
    }

    return (
      <S1QuestionScreen
        question={question}
        value={binding.value}
        onSelect={(optionValue) => handleS1Answer(currentQuestionId, optionValue)}
      />
    )
  }

  if (currentGate === 's1-complete') {
    return <S1SectionCompleteScreen />
  }

  if (currentGate === 's6') {
    const currentQuestionId = visibleS6QuestionIds[s6Step]
    const question = getS6QuestionById(currentQuestionId)
    const binding = getS6QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return null
    }

    return (
      <S6QuestionScreen
        question={question}
        mode={binding.mode}
        value={binding.value}
        setValue={binding.setValue}
        onContinue={advanceS6}
      />
    )
  }

  if (currentGate === 's6-complete') {
    return <S6SectionCompleteScreen />
  }

  return null
}

export default App
