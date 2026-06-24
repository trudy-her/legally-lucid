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
  resolveS6QuestionAnswer,
} from './section6Data.js'
import {
  computeS27StrongCapitalSignal,
  getS27QuestionById,
  getVisibleS27QuestionIds,
  isS27Triggered,
  resolveS27QuestionAnswer,
} from './section27Data.js'
import {
  computeS13DerivedFields,
  getS13QuestionById,
  getVisibleS13QuestionIds,
  isS13Triggered,
  resolveS13QuestionAnswer,
  shouldS13EarlyExit,
} from './section13Data.js'
import {
  computeS16DerivedFields,
  getS16QuestionById,
  getVisibleS16QuestionIds,
  isS16Triggered,
  resolveS16QuestionAnswer,
  shouldS16EarlyExit,
} from './section16Data.js'
import { buildDiagnosticContext } from './diagnosticTags.js'
import { getS1QuestionById, getVisibleS1QuestionIds } from './section1Data.js'
import { getS2QuestionById, getVisibleS2QuestionIds } from './section2Data.js'
import { getS3QuestionById, getVisibleS3QuestionIds } from './section3Data.js'
import { S1QuestionScreen, S1SectionCompleteScreen } from './S1Section.jsx'
import { S2QuestionScreen, S2SectionCompleteScreen } from './S2Section.jsx'
import { S3QuestionScreen, S3SectionCompleteScreen } from './S3Section.jsx'
import { S27QuestionScreen, S27SectionCompleteScreen } from './S27Section.jsx'
import { S13QuestionScreen, S13SectionCompleteScreen } from './S13Section.jsx'
import { S16QuestionScreen, S16SectionCompleteScreen } from './S16Section.jsx'
import { SectionIntro } from './SectionIntro.jsx'
import {
  ContinueError,
  MultiSelectHint,
  QuestionNav,
  useContinueValidation,
} from './QuestionNav.jsx'
import './App.css'

function Gate1Screen({ stage_v35, setStage_v35, onContinue }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
  const questionId = 'gate1-question'

  function handleSelect(value) {
    setStage_v35(value)
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(Boolean(stage_v35), onContinue)
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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav
        onNext={handleNext}
        canNext={hasSelection}
        showBack={false}
      />
    </main>
  )
}

function Gate2Screen({ business_models, setBusiness_models, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(business_models.length > 0, onContinue)
  }

  const hasSelection = business_models.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate2.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate2.helper}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate2AScreen({
  business_models,
  primary_model,
  setPrimary_model,
  onContinue,
  onBack,
}) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(Boolean(primary_model), onContinue)
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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate2BScreen({
  structure_orientation,
  setStructure_orientation,
  onContinue,
  onBack,
}) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(structure_orientation.length > 0, onContinue)
  }

  const hasSelection = structure_orientation.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate2b.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate2b.helper}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate4Screen({ geography, setGeography, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(geography.length > 0, onContinue)
  }

  const hasSelection = geography.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate4.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate4.helper}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate5Screen({ ai_use, setAi_use, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(ai_use.length > 0, onContinue)
  }

  const hasSelection = ai_use.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate5.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate5.helper}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate6Screen({ next_moves, setNext_moves, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(next_moves.length > 0, onContinue)
  }

  const hasSelection = next_moves.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate6.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate6.helper}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate7Screen({ sensitive_claims, setSensitive_claims, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
  const questionId = 'gate7-question'

  function handleSelect(value) {
    setSensitive_claims(value)
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(Boolean(sensitive_claims), onContinue)
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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate8Screen({ growth_path, setGrowth_path, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(growth_path.length > 0, onContinue)
  }

  const hasSelection = growth_path.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate8.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate8.helper}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate9Screen({ annual_revenue_range, setAnnual_revenue_range, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
  const questionId = 'gate9-question'

  function handleSelect(value) {
    setAnnual_revenue_range(value)
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(Boolean(annual_revenue_range), onContinue)
  }

  const hasSelection = Boolean(annual_revenue_range)

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate10Screen({ recent_events_12mo, setRecent_events_12mo, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(recent_events_12mo.length > 0, onContinue)
  }

  const hasSelection = recent_events_12mo.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate10.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate10.helper}</p>
      <p className="gate__helper gate__optional-label">{gate10.optionalLabel}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
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

function S6QuestionScreen({ question, mode, value, setValue, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
  const questionId = `s6-${question.id}-question`

  function handleSelect(optionValue) {
    setValue(optionValue)
    clearContinueError()
  }

  function handleToggle(optionValue) {
    setValue((prev) => {
      if (question.id === 'q3') {
        if (optionValue === 'not_sure') {
          return prev.includes('not_sure') ? [] : ['not_sure']
        }

        const withoutNotSure = prev.filter((v) => v !== 'not_sure')
        if (withoutNotSure.includes(optionValue)) {
          return withoutNotSure.filter((v) => v !== optionValue)
        }
        return [...withoutNotSure, optionValue]
      }

      if (question.id === 'q15') {
        if (optionValue === 'no_known_issues') {
          return prev.includes('no_known_issues') ? [] : ['no_known_issues']
        }

        const withoutNoKnownIssues = prev.filter((v) => v !== 'no_known_issues')
        if (withoutNoKnownIssues.includes(optionValue)) {
          return withoutNoKnownIssues.filter((v) => v !== optionValue)
        }
        return [...withoutNoKnownIssues, optionValue]
      }

      if (prev.includes(optionValue)) {
        return prev.filter((v) => v !== optionValue)
      }
      return [...prev, optionValue]
    })
    clearContinueError()
  }

  function handleNext() {
    const hasSelection =
      mode === 'multi' ? value.length > 0 : Boolean(value)
    validateAndContinue(hasSelection, onContinue)
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

      {mode === 'multi' ? <MultiSelectHint /> : null}

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
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

function Gate3Screen({ team_structure, setTeam_structure, onContinue, onBack }) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
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
    clearContinueError()
  }

  function handleNext() {
    validateAndContinue(team_structure.length > 0, onContinue)
  }

  const hasSelection = team_structure.length > 0

  return (
    <main className="gate">
      <h1 id={questionId} className="gate__question">
        {gate3.question}
      </h1>
      <p className="gate__helper gate__question-helper">{gate3.helper}</p>
      <MultiSelectHint />

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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function Gate2CScreen({
  regulated_financial_activity,
  setRegulated_financial_activity,
  onShowBoundary,
  onContinue,
  onBack,
}) {
  const { showContinueError, validateAndContinue, clearContinueError } =
    useContinueValidation()
  const questionId = 'gate2c-question'

  function handleSelect(value) {
    setRegulated_financial_activity(value)
    clearContinueError()
  }

  function handleNext() {
    if (!regulated_financial_activity) {
      validateAndContinue(false, () => {})
      return
    }
    clearContinueError()
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

      <ContinueError show={showContinueError} canNext={hasSelection} />

      <QuestionNav onBack={onBack} onNext={handleNext} canNext={hasSelection} />
    </main>
  )
}

function FinancialBoundaryScreen({ onContinue, onStop, onBack }) {
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

      {onBack ? (
        <div className="gate__nav gate__nav--boundary">
          <button type="button" className="gate__back" onClick={onBack}>
            Back
          </button>
        </div>
      ) : null}
    </main>
  )
}

function App() {
  const [currentGate, setCurrentGate] = useState('s0-intro')
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
  const [s2Step, setS2Step] = useState(0)
  const [
    s2_q1_public_names_brands_products_programs,
    setS2_q1_public_names_brands_products_programs,
  ] = useState(null)
  const [s2_q2_similar_name_search_awareness, setS2_q2_similar_name_search_awareness] =
    useState(null)
  const [s2_q3_trademark_registration_records, setS2_q3_trademark_registration_records] =
    useState(null)
  const [s2_q4_domains_handles_accounts_access, setS2_q4_domains_handles_accounts_access] =
    useState(null)
  const [s2_q5_creator_source_awareness, setS2_q5_creator_source_awareness] =
    useState(null)
  const [
    s2_q6_creator_rights_permissions_documented,
    setS2_q6_creator_rights_permissions_documented,
  ] = useState(null)
  const [
    s2_q7_pre_existing_contributor_work_documented,
    setS2_q7_pre_existing_contributor_work_documented,
  ] = useState(null)
  const [s2_q8_original_content_methods_toolkits, setS2_q8_original_content_methods_toolkits] =
    useState(null)
  const [s2_q9_ai_generated_or_assisted_assets, setS2_q9_ai_generated_or_assisted_assets] =
    useState(null)
  const [
    s2_q10_third_party_content_templates_media_research,
    setS2_q10_third_party_content_templates_media_research,
  ] = useState(null)
  const [s2_q11_technical_assets_sources, setS2_q11_technical_assets_sources] =
    useState(null)
  const [
    s2_q12_data_training_prompts_model_outputs_user_data,
    setS2_q12_data_training_prompts_model_outputs_user_data,
  ] = useState(null)
  const [s2_q13_public_proof_media_permissions, setS2_q13_public_proof_media_permissions] =
    useState(null)
  const [s2_q14_licensing_others_to_use_assets, setS2_q14_licensing_others_to_use_assets] =
    useState(null)
  const [s2_q15_using_licensed_or_partner_assets, setS2_q15_using_licensed_or_partner_assets] =
    useState(null)
  const [s2_q16_asset_inventory_storage, setS2_q16_asset_inventory_storage] = useState(null)
  const [
    s2_q17_rights_records_needed_for_next_move,
    setS2_q17_rights_records_needed_for_next_move,
  ] = useState(null)
  const [
    s2_q18_active_brand_asset_content_platform_issues,
    setS2_q18_active_brand_asset_content_platform_issues,
  ] = useState([])
  const [s2_q19_post_relationship_asset_use, setS2_q19_post_relationship_asset_use] =
    useState(null)
  const [s3Step, setS3Step] = useState(0)
  const [s3_q1_offer_type, setS3_q1_offer_type] = useState([])
  const [s3_q2_primary_audience_or_recipient, setS3_q2_primary_audience_or_recipient] =
    useState([])
  const [s3_q3_offer_description_integrity, setS3_q3_offer_description_integrity] =
    useState(null)
  const [s3_q4_deliverables_scope_and_limits, setS3_q4_deliverables_scope_and_limits] =
    useState(null)
  const [s3_q5_results_claims_outcomes_promises, setS3_q5_results_claims_outcomes_promises] =
    useState(null)
  const [s3_q6_paid_free_beta_pilot_trial_status, setS3_q6_paid_free_beta_pilot_trial_status] =
    useState([])
  const [
    s3_q7_payment_access_refund_cancellation_terms,
    setS3_q7_payment_access_refund_cancellation_terms,
  ] = useState(null)
  const [s3_q8_delivery_dependencies_and_constraints, setS3_q8_delivery_dependencies_and_constraints] =
    useState(null)
  const [
    s3_q9_human_support_service_level_and_response_expectations,
    setS3_q9_human_support_service_level_and_response_expectations,
  ] = useState(null)
  const [
    s3_q10_licensed_regulated_or_high_scrutiny_offer,
    setS3_q10_licensed_regulated_or_high_scrutiny_offer,
  ] = useState(null)
  const [
    s3_q11_partner_sponsor_affiliate_or_third_party_delivery,
    setS3_q11_partner_sponsor_affiliate_or_third_party_delivery,
  ] = useState(null)
  const [s3_q12_offer_records_for_diligence_or_review, setS3_q12_offer_records_for_diligence_or_review] =
    useState(null)
  const [s3_q13_active_offer_related_issues, setS3_q13_active_offer_related_issues] =
    useState([])
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
  const [s6_q11_signature_authority_approval, setS6_q11_signature_authority_approval] =
    useState(null)
  const [
    s6_q12_renewal_notice_deadline_tracking,
    setS6_q12_renewal_notice_deadline_tracking,
  ] = useState(null)
  const [s6_q13_final_versions_storage, setS6_q13_final_versions_storage] =
    useState(null)
  const [
    s6_q14_changes_side_promises_documented,
    setS6_q14_changes_side_promises_documented,
  ] = useState(null)
  const [s6_q15_agreement_related_issues, setS6_q15_agreement_related_issues] =
    useState([])
  const [s6AnswerEscalation, setS6AnswerEscalation] = useState({})
  const [s27Step, setS27Step] = useState(0)
  const [s27_q1_capital_funding_plans, setS27_q1_capital_funding_plans] =
    useState(null)
  const [s27_q2_funding_type, setS27_q2_funding_type] = useState([])
  const [s27_q3_value_already_exchanged, setS27_q3_value_already_exchanged] =
    useState(null)
  const [s27_q4_promises_documented, setS27_q4_promises_documented] =
    useState(null)
  const [
    s27_q5_ownership_records_match_funding_statements,
    setS27_q5_ownership_records_match_funding_statements,
  ] = useState(null)
  const [
    s27_q6_expectations_documented_for_funding,
    setS27_q6_expectations_documented_for_funding,
  ] = useState(null)
  const [
    s27_q7_entity_structure_funding_alignment,
    setS27_q7_entity_structure_funding_alignment,
  ] = useState(null)
  const [
    s27_q8_funding_documents_signed_or_reviewed,
    setS27_q8_funding_documents_signed_or_reviewed,
  ] = useState(null)
  const [
    s27_q9_program_participation_obligations,
    setS27_q9_program_participation_obligations,
  ] = useState(null)
  const [s27_q10_fundraising_materials_accuracy, setS27_q10_fundraising_materials_accuracy] =
    useState(null)
  const [s27_q11_diligence_records_available, setS27_q11_diligence_records_available] =
    useState(null)
  const [s27_q12_capital_diligence_issues, setS27_q12_capital_diligence_issues] =
    useState([])
  const [s27AnswerEscalation, setS27AnswerEscalation] = useState({})
  const [s13Step, setS13Step] = useState(0)
  const [s13_q1_data_collection_status, setS13_q1_data_collection_status] =
    useState(null)
  const [s13_q2_data_types_collected, setS13_q2_data_types_collected] = useState([])
  const [s13_q3_data_subject_groups, setS13_q3_data_subject_groups] = useState([])
  const [s13_q4_collection_channels, setS13_q4_collection_channels] = useState([])
  const [s13_q5_storage_and_access_awareness, setS13_q5_storage_and_access_awareness] =
    useState(null)
  const [
    s13_q6_data_access_by_tools_vendors_team,
    setS13_q6_data_access_by_tools_vendors_team,
  ] = useState(null)
  const [s13_q7_public_privacy_language_exists, setS13_q7_public_privacy_language_exists] =
    useState(null)
  const [
    s13_q8_privacy_language_matches_practice,
    setS13_q8_privacy_language_matches_practice,
  ] = useState(null)
  const [
    s13_q9_terms_platform_data_user_content_alignment,
    setS13_q9_terms_platform_data_user_content_alignment,
  ] = useState(null)
  const [s13_q10_data_use_transparency, setS13_q10_data_use_transparency] =
    useState(null)
  const [s13_q11_tracking_technologies, setS13_q11_tracking_technologies] =
    useState(null)
  const [s13_q12_secondary_data_uses, setS13_q12_secondary_data_uses] = useState(null)
  const [
    s13_q13_data_sharing_transfer_third_parties,
    setS13_q13_data_sharing_transfer_third_parties,
  ] = useState(null)
  const [s13_q14_sensitive_information_collected, setS13_q14_sensitive_information_collected] =
    useState(null)
  const [
    s13_q15_health_wellness_body_related_information,
    setS13_q15_health_wellness_body_related_information,
  ] = useState(null)
  const [
    s13_q16_dataset_ai_product_training_data,
    setS13_q16_dataset_ai_product_training_data,
  ] = useState(null)
  const [
    s13_q17_vendor_tool_data_handling_awareness,
    setS13_q17_vendor_tool_data_handling_awareness,
  ] = useState(null)
  const [
    s13_q18_cross_border_multistate_data_presence,
    setS13_q18_cross_border_multistate_data_presence,
  ] = useState(null)
  const [s13_q19_data_request_process, setS13_q19_data_request_process] =
    useState(null)
  const [s13_q20_internal_data_rules, setS13_q20_internal_data_rules] = useState(null)
  const [s13_q21_privacy_data_active_issues, setS13_q21_privacy_data_active_issues] =
    useState([])
  const [s13AnswerEscalation, setS13AnswerEscalation] = useState({})
  const [s16Step, setS16Step] = useState(0)
  const [s16_q1_ai_use_status, setS16_q1_ai_use_status] = useState(null)
  const [s16_q2_ai_use_cases, setS16_q2_ai_use_cases] = useState([])
  const [s16_q3_direct_ai_interaction, setS16_q3_direct_ai_interaction] = useState(null)
  const [s16_q4_ai_transparency_to_people, setS16_q4_ai_transparency_to_people] =
    useState(null)
  const [s16_q5_human_review_of_ai_outputs, setS16_q5_human_review_of_ai_outputs] =
    useState(null)
  const [s16_q6_ai_for_high_stakes_documents, setS16_q6_ai_for_high_stakes_documents] =
    useState(null)
  const [
    s16_q7_sensitive_or_confidential_data_in_ai,
    setS16_q7_sensitive_or_confidential_data_in_ai,
  ] = useState(null)
  const [
    s16_q8_ai_vendors_plugins_agents_integrations,
    setS16_q8_ai_vendors_plugins_agents_integrations,
  ] = useState(null)
  const [s16_q9_ai_vendor_terms_understood, setS16_q9_ai_vendor_terms_understood] =
    useState(null)
  const [
    s16_q10_ai_privacy_security_settings_configured,
    setS16_q10_ai_privacy_security_settings_configured,
  ] = useState(null)
  const [
    s16_q11_ai_access_to_confidential_systems_data,
    setS16_q11_ai_access_to_confidential_systems_data,
  ] = useState(null)
  const [
    s16_q12_ai_outputs_in_public_or_funding_materials,
    setS16_q12_ai_outputs_in_public_or_funding_materials,
  ] = useState(null)
  const [s16_q13_ai_decisions_about_people, setS16_q13_ai_decisions_about_people] =
    useState(null)
  const [s16_q14_ai_high_impact_contexts, setS16_q14_ai_high_impact_contexts] =
    useState(null)
  const [
    s16_q15_ai_use_in_contracts_and_commitments,
    setS16_q15_ai_use_in_contracts_and_commitments,
  ] = useState(null)
  const [
    s16_q16_team_ai_guidelines_and_expectations,
    setS16_q16_team_ai_guidelines_and_expectations,
  ] = useState(null)
  const [s16_q17_ai_active_issues, setS16_q17_ai_active_issues] = useState([])
  const [s16AnswerEscalation, setS16AnswerEscalation] = useState({})

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

  function buildDiagnosticState(overrides = {}) {
    const baseState = {
      business_models,
      team_structure,
      structure_orientation,
      next_moves,
      growth_path,
      recent_events_12mo,
      ai_use,
      s1_q1_current_stage,
      s1_q2_current_structure,
      s2_q1_public_names_brands_products_programs,
      s2_q2_similar_name_search_awareness,
      s2_q3_trademark_registration_records,
      s2_q4_domains_handles_accounts_access,
      s2_q5_creator_source_awareness,
      s2_q6_creator_rights_permissions_documented,
      s2_q7_pre_existing_contributor_work_documented,
      s2_q8_original_content_methods_toolkits,
      s2_q9_ai_generated_or_assisted_assets,
      s2_q10_third_party_content_templates_media_research,
      s2_q11_technical_assets_sources,
      s2_q12_data_training_prompts_model_outputs_user_data,
      s2_q13_public_proof_media_permissions,
      s2_q14_licensing_others_to_use_assets,
      s2_q15_using_licensed_or_partner_assets,
      s3_q1_offer_type,
      s3_q2_primary_audience_or_recipient,
      s3_q6_paid_free_beta_pilot_trial_status,
      s6_q1_informal_commitments_documented,
      s6_q2_avoids_written_agreements,
      s6_q3_agreement_source,
      s6_q4_scope_responsibilities_deliverables,
      s6_q5_ownership_use_sharing_work_product,
      s6_q6_confidentiality_data_sensitive_info,
      s6_q7_responsibility_if_something_goes_wrong,
      s6_q8_payment_refunds_cancellation_termination,
      s6_q9_supplier_vendor_platform_terms,
      s6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments,
      s6_q11_signature_authority_approval,
      s6_q12_renewal_notice_deadline_tracking,
      s6_q13_final_versions_storage,
      s6_q14_changes_side_promises_documented,
      s6_q15_agreement_related_issues,
      s6AnswerEscalation,
      s27_q1_capital_funding_plans,
      s27_q2_funding_type,
      s27_q3_value_already_exchanged,
      s27_q4_promises_documented,
      s27_q5_ownership_records_match_funding_statements,
      s27_q6_expectations_documented_for_funding,
      s27_q7_entity_structure_funding_alignment,
      s27_q8_funding_documents_signed_or_reviewed,
      s27_q9_program_participation_obligations,
      s27_q10_fundraising_materials_accuracy,
      s27_q11_diligence_records_available,
      s27_q12_capital_diligence_issues,
      s27AnswerEscalation,
      s13_q1_data_collection_status,
      s13_q2_data_types_collected,
      s13_q3_data_subject_groups,
      s13_q4_collection_channels,
      s13_q5_storage_and_access_awareness,
      s13_q6_data_access_by_tools_vendors_team,
      s13_q7_public_privacy_language_exists,
      s13_q8_privacy_language_matches_practice,
      s13_q9_terms_platform_data_user_content_alignment,
      s13_q10_data_use_transparency,
      s13_q11_tracking_technologies,
      s13_q12_secondary_data_uses,
      s13_q13_data_sharing_transfer_third_parties,
      s13_q14_sensitive_information_collected,
      s13_q15_health_wellness_body_related_information,
      s13_q16_dataset_ai_product_training_data,
      s13_q17_vendor_tool_data_handling_awareness,
      s13_q18_cross_border_multistate_data_presence,
      s13_q19_data_request_process,
      s13_q20_internal_data_rules,
      s13_q21_privacy_data_active_issues,
      s13AnswerEscalation,
      s16_q1_ai_use_status,
      s16_q2_ai_use_cases,
      s16_q3_direct_ai_interaction,
      s16_q4_ai_transparency_to_people,
      s16_q5_human_review_of_ai_outputs,
      s16_q6_ai_for_high_stakes_documents,
      s16_q7_sensitive_or_confidential_data_in_ai,
      s16_q8_ai_vendors_plugins_agents_integrations,
      s16_q9_ai_vendor_terms_understood,
      s16_q10_ai_privacy_security_settings_configured,
      s16_q11_ai_access_to_confidential_systems_data,
      s16_q12_ai_outputs_in_public_or_funding_materials,
      s16_q13_ai_decisions_about_people,
      s16_q14_ai_high_impact_contexts,
      s16_q15_ai_use_in_contracts_and_commitments,
      s16_q16_team_ai_guidelines_and_expectations,
      s16_q17_ai_active_issues,
      s16AnswerEscalation,
      diagnosticStoppedAtBoundary: false,
      ...overrides,
    }

    const tags = buildDiagnosticContext(baseState).tags
    const s16Derived = computeS16DerivedFields(baseState, tags)
    const s13Derived = computeS13DerivedFields(baseState, tags)

    return {
      ...baseState,
      ...s16Derived,
      ...s13Derived,
      s13_inherited_ai_data_use_signal: s16Derived.s16_q7_sensitive_data_flag,
      s27_strong_capital_signal: computeS27StrongCapitalSignal(baseState, tags),
    }
  }

  const diagnosticState = useMemo(
    () => buildDiagnosticState(),
    [
      business_models,
      team_structure,
      structure_orientation,
      next_moves,
      growth_path,
      recent_events_12mo,
      ai_use,
      s1_q1_current_stage,
      s1_q2_current_structure,
      s2_q1_public_names_brands_products_programs,
      s2_q2_similar_name_search_awareness,
      s2_q3_trademark_registration_records,
      s2_q4_domains_handles_accounts_access,
      s2_q5_creator_source_awareness,
      s2_q6_creator_rights_permissions_documented,
      s2_q7_pre_existing_contributor_work_documented,
      s2_q8_original_content_methods_toolkits,
      s2_q9_ai_generated_or_assisted_assets,
      s2_q10_third_party_content_templates_media_research,
      s2_q11_technical_assets_sources,
      s2_q12_data_training_prompts_model_outputs_user_data,
      s2_q13_public_proof_media_permissions,
      s2_q14_licensing_others_to_use_assets,
      s2_q15_using_licensed_or_partner_assets,
      s3_q1_offer_type,
      s3_q2_primary_audience_or_recipient,
      s3_q6_paid_free_beta_pilot_trial_status,
      s6_q1_informal_commitments_documented,
      s6_q2_avoids_written_agreements,
      s6_q3_agreement_source,
      s6_q4_scope_responsibilities_deliverables,
      s6_q5_ownership_use_sharing_work_product,
      s6_q6_confidentiality_data_sensitive_info,
      s6_q7_responsibility_if_something_goes_wrong,
      s6_q8_payment_refunds_cancellation_termination,
      s6_q9_supplier_vendor_platform_terms,
      s6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments,
      s6_q11_signature_authority_approval,
      s6_q12_renewal_notice_deadline_tracking,
      s6_q13_final_versions_storage,
      s6_q14_changes_side_promises_documented,
      s6_q15_agreement_related_issues,
      s6AnswerEscalation,
      s27_q1_capital_funding_plans,
      s27_q2_funding_type,
      s27_q3_value_already_exchanged,
      s27_q4_promises_documented,
      s27_q5_ownership_records_match_funding_statements,
      s27_q6_expectations_documented_for_funding,
      s27_q7_entity_structure_funding_alignment,
      s27_q8_funding_documents_signed_or_reviewed,
      s27_q9_program_participation_obligations,
      s27_q10_fundraising_materials_accuracy,
      s27_q11_diligence_records_available,
      s27_q12_capital_diligence_issues,
      s27AnswerEscalation,
      s13_q1_data_collection_status,
      s13_q2_data_types_collected,
      s13_q3_data_subject_groups,
      s13_q4_collection_channels,
      s13_q5_storage_and_access_awareness,
      s13_q6_data_access_by_tools_vendors_team,
      s13_q7_public_privacy_language_exists,
      s13_q8_privacy_language_matches_practice,
      s13_q9_terms_platform_data_user_content_alignment,
      s13_q10_data_use_transparency,
      s13_q11_tracking_technologies,
      s13_q12_secondary_data_uses,
      s13_q13_data_sharing_transfer_third_parties,
      s13_q14_sensitive_information_collected,
      s13_q15_health_wellness_body_related_information,
      s13_q16_dataset_ai_product_training_data,
      s13_q17_vendor_tool_data_handling_awareness,
      s13_q18_cross_border_multistate_data_presence,
      s13_q19_data_request_process,
      s13_q20_internal_data_rules,
      s13_q21_privacy_data_active_issues,
      s13AnswerEscalation,
      s16_q1_ai_use_status,
      s16_q2_ai_use_cases,
      s16_q3_direct_ai_interaction,
      s16_q4_ai_transparency_to_people,
      s16_q5_human_review_of_ai_outputs,
      s16_q6_ai_for_high_stakes_documents,
      s16_q7_sensitive_or_confidential_data_in_ai,
      s16_q8_ai_vendors_plugins_agents_integrations,
      s16_q9_ai_vendor_terms_understood,
      s16_q10_ai_privacy_security_settings_configured,
      s16_q11_ai_access_to_confidential_systems_data,
      s16_q12_ai_outputs_in_public_or_funding_materials,
      s16_q13_ai_decisions_about_people,
      s16_q14_ai_high_impact_contexts,
      s16_q15_ai_use_in_contracts_and_commitments,
      s16_q16_team_ai_guidelines_and_expectations,
      s16_q17_ai_active_issues,
      s16AnswerEscalation,
    ],
  )

  const diagnosticContext = useMemo(
    () => buildDiagnosticContext(diagnosticState),
    [diagnosticState],
  )

  const visibleS1QuestionIds = useMemo(
    () => getVisibleS1QuestionIds(diagnosticContext),
    [diagnosticContext],
  )

  const visibleS2QuestionIds = useMemo(
    () => getVisibleS2QuestionIds(diagnosticContext),
    [diagnosticContext],
  )

  const visibleS3QuestionIds = useMemo(
    () => getVisibleS3QuestionIds(diagnosticContext),
    [diagnosticContext],
  )

  const visibleS6QuestionIds = useMemo(
    () => getVisibleS6QuestionIds(gateContext),
    [gateContext],
  )

  const s27Triggered = useMemo(
    () => isS27Triggered(diagnosticState, diagnosticContext.tags),
    [diagnosticState, diagnosticContext.tags],
  )

  const visibleS27QuestionIds = useMemo(
    () => getVisibleS27QuestionIds(diagnosticState),
    [diagnosticState],
  )

  const s13Triggered = useMemo(
    () => isS13Triggered(diagnosticState, diagnosticContext.tags),
    [diagnosticState, diagnosticContext.tags],
  )

  const visibleS13QuestionIds = useMemo(
    () => getVisibleS13QuestionIds(diagnosticState, diagnosticContext.tags),
    [diagnosticState, diagnosticContext.tags],
  )

  const s16Triggered = useMemo(
    () => isS16Triggered(diagnosticState, diagnosticContext.tags),
    [diagnosticState, diagnosticContext.tags],
  )

  const visibleS16QuestionIds = useMemo(
    () => getVisibleS16QuestionIds(diagnosticState, diagnosticContext.tags),
    [diagnosticState, diagnosticContext.tags],
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
    setS2Step(0)
    setS2_q1_public_names_brands_products_programs(null)
    setS2_q2_similar_name_search_awareness(null)
    setS2_q3_trademark_registration_records(null)
    setS2_q4_domains_handles_accounts_access(null)
    setS2_q5_creator_source_awareness(null)
    setS2_q6_creator_rights_permissions_documented(null)
    setS2_q7_pre_existing_contributor_work_documented(null)
    setS2_q8_original_content_methods_toolkits(null)
    setS2_q9_ai_generated_or_assisted_assets(null)
    setS2_q10_third_party_content_templates_media_research(null)
    setS2_q11_technical_assets_sources(null)
    setS2_q12_data_training_prompts_model_outputs_user_data(null)
    setS2_q13_public_proof_media_permissions(null)
    setS2_q14_licensing_others_to_use_assets(null)
    setS2_q15_using_licensed_or_partner_assets(null)
    setS2_q16_asset_inventory_storage(null)
    setS2_q17_rights_records_needed_for_next_move(null)
    setS2_q18_active_brand_asset_content_platform_issues([])
    setS2_q19_post_relationship_asset_use(null)
    setS3Step(0)
    setS3_q1_offer_type([])
    setS3_q2_primary_audience_or_recipient([])
    setS3_q3_offer_description_integrity(null)
    setS3_q4_deliverables_scope_and_limits(null)
    setS3_q5_results_claims_outcomes_promises(null)
    setS3_q6_paid_free_beta_pilot_trial_status([])
    setS3_q7_payment_access_refund_cancellation_terms(null)
    setS3_q8_delivery_dependencies_and_constraints(null)
    setS3_q9_human_support_service_level_and_response_expectations(null)
    setS3_q10_licensed_regulated_or_high_scrutiny_offer(null)
    setS3_q11_partner_sponsor_affiliate_or_third_party_delivery(null)
    setS3_q12_offer_records_for_diligence_or_review(null)
    setS3_q13_active_offer_related_issues([])
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
    setS6_q11_signature_authority_approval(null)
    setS6_q12_renewal_notice_deadline_tracking(null)
    setS6_q13_final_versions_storage(null)
    setS6_q14_changes_side_promises_documented(null)
    setS6_q15_agreement_related_issues([])
    setS6AnswerEscalation({})
    setS27Step(0)
    setS27_q1_capital_funding_plans(null)
    setS27_q2_funding_type([])
    setS27_q3_value_already_exchanged(null)
    setS27_q4_promises_documented(null)
    setS27_q5_ownership_records_match_funding_statements(null)
    setS27_q6_expectations_documented_for_funding(null)
    setS27_q7_entity_structure_funding_alignment(null)
    setS27_q8_funding_documents_signed_or_reviewed(null)
    setS27_q9_program_participation_obligations(null)
    setS27_q10_fundraising_materials_accuracy(null)
    setS27_q11_diligence_records_available(null)
    setS27_q12_capital_diligence_issues([])
    setS27AnswerEscalation({})
    setS13Step(0)
    setS13_q1_data_collection_status(null)
    setS13_q2_data_types_collected([])
    setS13_q3_data_subject_groups([])
    setS13_q4_collection_channels([])
    setS13_q5_storage_and_access_awareness(null)
    setS13_q6_data_access_by_tools_vendors_team(null)
    setS13_q7_public_privacy_language_exists(null)
    setS13_q8_privacy_language_matches_practice(null)
    setS13_q9_terms_platform_data_user_content_alignment(null)
    setS13_q10_data_use_transparency(null)
    setS13_q11_tracking_technologies(null)
    setS13_q12_secondary_data_uses(null)
    setS13_q13_data_sharing_transfer_third_parties(null)
    setS13_q14_sensitive_information_collected(null)
    setS13_q15_health_wellness_body_related_information(null)
    setS13_q16_dataset_ai_product_training_data(null)
    setS13_q17_vendor_tool_data_handling_awareness(null)
    setS13_q18_cross_border_multistate_data_presence(null)
    setS13_q19_data_request_process(null)
    setS13_q20_internal_data_rules(null)
    setS13_q21_privacy_data_active_issues([])
    setS13AnswerEscalation({})
    setS16Step(0)
    setS16_q1_ai_use_status(null)
    setS16_q2_ai_use_cases([])
    setS16_q3_direct_ai_interaction(null)
    setS16_q4_ai_transparency_to_people(null)
    setS16_q5_human_review_of_ai_outputs(null)
    setS16_q6_ai_for_high_stakes_documents(null)
    setS16_q7_sensitive_or_confidential_data_in_ai(null)
    setS16_q8_ai_vendors_plugins_agents_integrations(null)
    setS16_q9_ai_vendor_terms_understood(null)
    setS16_q10_ai_privacy_security_settings_configured(null)
    setS16_q11_ai_access_to_confidential_systems_data(null)
    setS16_q12_ai_outputs_in_public_or_funding_materials(null)
    setS16_q13_ai_decisions_about_people(null)
    setS16_q14_ai_high_impact_contexts(null)
    setS16_q15_ai_use_in_contracts_and_commitments(null)
    setS16_q16_team_ai_guidelines_and_expectations(null)
    setS16_q17_ai_active_issues([])
    setS16AnswerEscalation({})
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

  function handleS1Select(questionId, optionValue) {
    const binding = getS1QuestionBinding(questionId)
    if (!binding) {
      return
    }
    binding.setValue(optionValue)
  }

  function handleS1Continue(questionId) {
    const binding = getS1QuestionBinding(questionId)
    const question = getS1QuestionById(questionId)
    if (!binding || !question || !binding.value) {
      return
    }

    const nextDiagnosticContext = buildDiagnosticContext(
      buildDiagnosticState({ [question.field]: binding.value }),
    )
    const nextVisibleIds = getVisibleS1QuestionIds(nextDiagnosticContext)

    if (s1Step < nextVisibleIds.length - 1) {
      setS1Step((prev) => prev + 1)
      return
    }
    setS2Step(0)
    setCurrentGate('s2-intro')
  }

  function goBackFromS1() {
    if (s1Step > 0) {
      setS1Step((prev) => prev - 1)
      return
    }
    setCurrentGate('s1-intro')
  }

  function goBackFromS2() {
    if (s2Step > 0) {
      setS2Step((prev) => prev - 1)
      return
    }
    setCurrentGate('s2-intro')
  }

  function goBackFromS3() {
    if (s3Step > 0) {
      setS3Step((prev) => prev - 1)
      return
    }
    setCurrentGate('s3-intro')
  }

  function goBackFromS6() {
    if (s6Step > 0) {
      setS6Step((prev) => prev - 1)
      return
    }
    setCurrentGate('s6-intro')
  }

  function goBackFromS27() {
    if (s27Step > 0) {
      setS27Step((prev) => prev - 1)
      return
    }
    setCurrentGate('s27-intro')
  }

  function advanceToS27Intro() {
    setS27Step(0)
    setCurrentGate('s27-intro')
  }

  function advanceToS13Intro() {
    setS13Step(0)
    setCurrentGate('s13-intro')
  }

  function advanceToS16Intro() {
    setS16Step(0)
    setCurrentGate('s16-intro')
  }

  function goBackFromS13() {
    if (s13Step > 0) {
      setS13Step((prev) => prev - 1)
      return
    }
    setCurrentGate('s13-intro')
  }

  function goBackFromS16() {
    if (s16Step > 0) {
      setS16Step((prev) => prev - 1)
      return
    }
    setCurrentGate('s16-intro')
  }

  function goBackFromGate() {
    switch (currentGate) {
      case 2:
        setCurrentGate(1)
        break
      case '2a':
        setCurrentGate(2)
        break
      case '2b':
        setCurrentGate(shouldShowGate2A(business_models) ? '2a' : 2)
        break
      case '2c':
        setCurrentGate('2b')
        break
      case 'financial-boundary':
        setCurrentGate('2c')
        break
      case 3:
        setCurrentGate('2c')
        break
      case 4:
        setCurrentGate(3)
        break
      case 5:
        setCurrentGate(4)
        break
      case 6:
        setCurrentGate(5)
        break
      case 7:
        setCurrentGate(6)
        break
      case 8:
        setCurrentGate(7)
        break
      case 9:
        setCurrentGate(8)
        break
      case 10:
        setCurrentGate(9)
        break
      default:
        break
    }
  }

  function getS2QuestionBinding(questionId) {
    switch (questionId) {
      case 'q1':
        return {
          value: s2_q1_public_names_brands_products_programs,
          setValue: setS2_q1_public_names_brands_products_programs,
          mode: 'single',
        }
      case 'q2':
        return {
          value: s2_q2_similar_name_search_awareness,
          setValue: setS2_q2_similar_name_search_awareness,
          mode: 'single',
        }
      case 'q3':
        return {
          value: s2_q3_trademark_registration_records,
          setValue: setS2_q3_trademark_registration_records,
          mode: 'single',
        }
      case 'q4':
        return {
          value: s2_q4_domains_handles_accounts_access,
          setValue: setS2_q4_domains_handles_accounts_access,
          mode: 'single',
        }
      case 'q5':
        return {
          value: s2_q5_creator_source_awareness,
          setValue: setS2_q5_creator_source_awareness,
          mode: 'single',
        }
      case 'q6':
        return {
          value: s2_q6_creator_rights_permissions_documented,
          setValue: setS2_q6_creator_rights_permissions_documented,
          mode: 'single',
        }
      case 'q7':
        return {
          value: s2_q7_pre_existing_contributor_work_documented,
          setValue: setS2_q7_pre_existing_contributor_work_documented,
          mode: 'single',
        }
      case 'q8':
        return {
          value: s2_q8_original_content_methods_toolkits,
          setValue: setS2_q8_original_content_methods_toolkits,
          mode: 'single',
        }
      case 'q9':
        return {
          value: s2_q9_ai_generated_or_assisted_assets,
          setValue: setS2_q9_ai_generated_or_assisted_assets,
          mode: 'single',
        }
      case 'q10':
        return {
          value: s2_q10_third_party_content_templates_media_research,
          setValue: setS2_q10_third_party_content_templates_media_research,
          mode: 'single',
        }
      case 'q11':
        return {
          value: s2_q11_technical_assets_sources,
          setValue: setS2_q11_technical_assets_sources,
          mode: 'single',
        }
      case 'q12':
        return {
          value: s2_q12_data_training_prompts_model_outputs_user_data,
          setValue: setS2_q12_data_training_prompts_model_outputs_user_data,
          mode: 'single',
        }
      case 'q13':
        return {
          value: s2_q13_public_proof_media_permissions,
          setValue: setS2_q13_public_proof_media_permissions,
          mode: 'single',
        }
      case 'q14':
        return {
          value: s2_q14_licensing_others_to_use_assets,
          setValue: setS2_q14_licensing_others_to_use_assets,
          mode: 'single',
        }
      case 'q15':
        return {
          value: s2_q15_using_licensed_or_partner_assets,
          setValue: setS2_q15_using_licensed_or_partner_assets,
          mode: 'single',
        }
      case 'q16':
        return {
          value: s2_q16_asset_inventory_storage,
          setValue: setS2_q16_asset_inventory_storage,
          mode: 'single',
        }
      case 'q17':
        return {
          value: s2_q17_rights_records_needed_for_next_move,
          setValue: setS2_q17_rights_records_needed_for_next_move,
          mode: 'single',
        }
      case 'q18':
        return {
          value: s2_q18_active_brand_asset_content_platform_issues,
          setValue: setS2_q18_active_brand_asset_content_platform_issues,
          mode: 'multi',
        }
      case 'q19':
        return {
          value: s2_q19_post_relationship_asset_use,
          setValue: setS2_q19_post_relationship_asset_use,
          mode: 'single',
        }
      default:
        return null
    }
  }

  function advanceAfterS2Answer(question, answerOverride) {
    const nextDiagnosticContext = buildDiagnosticContext(
      buildDiagnosticState({ [question.field]: answerOverride }),
    )
    const nextVisibleIds = getVisibleS2QuestionIds(nextDiagnosticContext)

    if (s2Step < nextVisibleIds.length - 1) {
      setS2Step((prev) => prev + 1)
      return
    }
    setS3Step(0)
    setCurrentGate('s3-intro')
  }

  function getS3QuestionBinding(questionId) {
    switch (questionId) {
      case 'q1':
        return { value: s3_q1_offer_type, setValue: setS3_q1_offer_type, mode: 'multi' }
      case 'q2':
        return {
          value: s3_q2_primary_audience_or_recipient,
          setValue: setS3_q2_primary_audience_or_recipient,
          mode: 'multi',
        }
      case 'q3':
        return {
          value: s3_q3_offer_description_integrity,
          setValue: setS3_q3_offer_description_integrity,
          mode: 'single',
        }
      case 'q4':
        return {
          value: s3_q4_deliverables_scope_and_limits,
          setValue: setS3_q4_deliverables_scope_and_limits,
          mode: 'single',
        }
      case 'q5':
        return {
          value: s3_q5_results_claims_outcomes_promises,
          setValue: setS3_q5_results_claims_outcomes_promises,
          mode: 'single',
        }
      case 'q6':
        return {
          value: s3_q6_paid_free_beta_pilot_trial_status,
          setValue: setS3_q6_paid_free_beta_pilot_trial_status,
          mode: 'multi',
        }
      case 'q7':
        return {
          value: s3_q7_payment_access_refund_cancellation_terms,
          setValue: setS3_q7_payment_access_refund_cancellation_terms,
          mode: 'single',
        }
      case 'q8':
        return {
          value: s3_q8_delivery_dependencies_and_constraints,
          setValue: setS3_q8_delivery_dependencies_and_constraints,
          mode: 'single',
        }
      case 'q9':
        return {
          value: s3_q9_human_support_service_level_and_response_expectations,
          setValue: setS3_q9_human_support_service_level_and_response_expectations,
          mode: 'single',
        }
      case 'q10':
        return {
          value: s3_q10_licensed_regulated_or_high_scrutiny_offer,
          setValue: setS3_q10_licensed_regulated_or_high_scrutiny_offer,
          mode: 'single',
        }
      case 'q11':
        return {
          value: s3_q11_partner_sponsor_affiliate_or_third_party_delivery,
          setValue: setS3_q11_partner_sponsor_affiliate_or_third_party_delivery,
          mode: 'single',
        }
      case 'q12':
        return {
          value: s3_q12_offer_records_for_diligence_or_review,
          setValue: setS3_q12_offer_records_for_diligence_or_review,
          mode: 'single',
        }
      case 'q13':
        return {
          value: s3_q13_active_offer_related_issues,
          setValue: setS3_q13_active_offer_related_issues,
          mode: 'multi',
        }
      default:
        return null
    }
  }

  function advanceAfterS3Answer(question, answerOverride) {
    const nextDiagnosticContext = buildDiagnosticContext(
      buildDiagnosticState({ [question.field]: answerOverride }),
    )
    const nextVisibleIds = getVisibleS3QuestionIds(nextDiagnosticContext)

    if (s3Step < nextVisibleIds.length - 1) {
      setS3Step((prev) => prev + 1)
      return
    }
    if (s6Triggered) {
      setS6Step(0)
      setCurrentGate('s6-intro')
      return
    }
    if (s27Triggered) {
      advanceToS27Intro()
      return
    }
    if (s13Triggered) {
      advanceToS13Intro()
      return
    }
    if (s16Triggered) {
      advanceToS16Intro()
      return
    }
    setCurrentGate('s3-complete')
  }

  function handleS3Select(questionId, optionValue) {
    const binding = getS3QuestionBinding(questionId)
    const question = getS3QuestionById(questionId)
    if (!binding || !question || binding.mode !== 'single') {
      return
    }

    binding.setValue(optionValue)
  }

  function handleS3Toggle(questionId, optionValue) {
    const binding = getS3QuestionBinding(questionId)
    if (!binding || binding.mode !== 'multi') {
      return
    }

    binding.setValue((prev) => {
      if (questionId === 'q6') {
        if (optionValue === 'standard_paid_offers_only') {
          return prev.includes('standard_paid_offers_only')
            ? []
            : ['standard_paid_offers_only']
        }

        const withoutStandardPaid = prev.filter((v) => v !== 'standard_paid_offers_only')
        if (withoutStandardPaid.includes(optionValue)) {
          return withoutStandardPaid.filter((v) => v !== optionValue)
        }
        return [...withoutStandardPaid, optionValue]
      }

      if (questionId === 'q13') {
        if (optionValue === 'no_known_issues') {
          return prev.includes('no_known_issues') ? [] : ['no_known_issues']
        }

        if (optionValue === 'not_sure') {
          return prev.includes('not_sure') ? [] : ['not_sure']
        }

        const withoutExclusive = prev.filter(
          (v) => v !== 'no_known_issues' && v !== 'not_sure',
        )
        if (withoutExclusive.includes(optionValue)) {
          return withoutExclusive.filter((v) => v !== optionValue)
        }
        return [...withoutExclusive, optionValue]
      }

      if (prev.includes(optionValue)) {
        return prev.filter((v) => v !== optionValue)
      }
      return [...prev, optionValue]
    })
  }

  function handleS3Continue(questionId) {
    const binding = getS3QuestionBinding(questionId)
    const question = getS3QuestionById(questionId)
    if (!binding || !question) {
      return
    }

    if (binding.mode === 'multi') {
      if (binding.value.length === 0) {
        return
      }
    } else if (!binding.value) {
      return
    }

    advanceAfterS3Answer(question, binding.value)
  }

  function handleS2Select(questionId, optionValue) {
    const binding = getS2QuestionBinding(questionId)
    const question = getS2QuestionById(questionId)
    if (!binding || !question || binding.mode !== 'single') {
      return
    }

    binding.setValue(optionValue)
  }

  function handleS2Toggle(questionId, optionValue) {
    const binding = getS2QuestionBinding(questionId)
    if (!binding || binding.mode !== 'multi') {
      return
    }

    binding.setValue((prev) => {
      if (optionValue === 'no_known_issues') {
        return prev.includes('no_known_issues') ? [] : ['no_known_issues']
      }

      if (optionValue === 'not_sure') {
        return prev.includes('not_sure') ? [] : ['not_sure']
      }

      const withoutExclusive = prev.filter(
        (v) => v !== 'no_known_issues' && v !== 'not_sure',
      )
      if (withoutExclusive.includes(optionValue)) {
        return withoutExclusive.filter((v) => v !== optionValue)
      }
      return [...withoutExclusive, optionValue]
    })
  }

  function handleS2Continue(questionId) {
    const binding = getS2QuestionBinding(questionId)
    const question = getS2QuestionById(questionId)
    if (!binding || !question) {
      return
    }

    if (binding.mode === 'multi') {
      if (binding.value.length === 0) {
        return
      }
    } else if (!binding.value) {
      return
    }

    advanceAfterS2Answer(question, binding.value)
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
      case 'q11':
        return {
          value: s6_q11_signature_authority_approval,
          setValue: setS6_q11_signature_authority_approval,
          mode: 'single',
        }
      case 'q12':
        return {
          value: s6_q12_renewal_notice_deadline_tracking,
          setValue: setS6_q12_renewal_notice_deadline_tracking,
          mode: 'single',
        }
      case 'q13':
        return {
          value: s6_q13_final_versions_storage,
          setValue: setS6_q13_final_versions_storage,
          mode: 'single',
        }
      case 'q14':
        return {
          value: s6_q14_changes_side_promises_documented,
          setValue: setS6_q14_changes_side_promises_documented,
          mode: 'single',
        }
      case 'q15':
        return {
          value: s6_q15_agreement_related_issues,
          setValue: setS6_q15_agreement_related_issues,
          mode: 'multi',
        }
      default:
        return null
    }
  }

  function handleS6Continue() {
    const currentQuestionId = visibleS6QuestionIds[s6Step]
    const question = getS6QuestionById(currentQuestionId)
    const binding = getS6QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return
    }

    if (binding.mode === 'multi') {
      if (binding.value.length === 0) {
        return
      }
    } else if (!binding.value) {
      return
    }

    if (['q11', 'q12', 'q13', 'q14', 'q15'].includes(currentQuestionId)) {
      const escalation = resolveS6QuestionAnswer(
        currentQuestionId,
        binding.value,
        diagnosticContext.tags,
        S6_BEHAVIOR_AVOIDANCE_FLAG,
      )

      if (escalation) {
        setS6AnswerEscalation((prev) => ({
          ...prev,
          [question.field]: escalation,
        }))
      }
    }

    advanceS6()
  }

  function advanceS6() {
    if (s6Step < visibleS6QuestionIds.length - 1) {
      setS6Step((prev) => prev + 1)
      return
    }
    if (s27Triggered) {
      advanceToS27Intro()
      return
    }
    if (s13Triggered) {
      advanceToS13Intro()
      return
    }
    if (s16Triggered) {
      advanceToS16Intro()
      return
    }
    setCurrentGate('s6-complete')
  }

  function getS27QuestionBinding(questionId) {
    switch (questionId) {
      case 'q1':
        return {
          value: s27_q1_capital_funding_plans,
          setValue: setS27_q1_capital_funding_plans,
          mode: 'single',
        }
      case 'q2':
        return {
          value: s27_q2_funding_type,
          setValue: setS27_q2_funding_type,
          mode: 'multi',
        }
      case 'q3':
        return {
          value: s27_q3_value_already_exchanged,
          setValue: setS27_q3_value_already_exchanged,
          mode: 'single',
        }
      case 'q4':
        return {
          value: s27_q4_promises_documented,
          setValue: setS27_q4_promises_documented,
          mode: 'single',
        }
      case 'q5':
        return {
          value: s27_q5_ownership_records_match_funding_statements,
          setValue: setS27_q5_ownership_records_match_funding_statements,
          mode: 'single',
        }
      case 'q6':
        return {
          value: s27_q6_expectations_documented_for_funding,
          setValue: setS27_q6_expectations_documented_for_funding,
          mode: 'single',
        }
      case 'q7':
        return {
          value: s27_q7_entity_structure_funding_alignment,
          setValue: setS27_q7_entity_structure_funding_alignment,
          mode: 'single',
        }
      case 'q8':
        return {
          value: s27_q8_funding_documents_signed_or_reviewed,
          setValue: setS27_q8_funding_documents_signed_or_reviewed,
          mode: 'single',
        }
      case 'q9':
        return {
          value: s27_q9_program_participation_obligations,
          setValue: setS27_q9_program_participation_obligations,
          mode: 'single',
        }
      case 'q10':
        return {
          value: s27_q10_fundraising_materials_accuracy,
          setValue: setS27_q10_fundraising_materials_accuracy,
          mode: 'single',
        }
      case 'q11':
        return {
          value: s27_q11_diligence_records_available,
          setValue: setS27_q11_diligence_records_available,
          mode: 'single',
        }
      case 'q12':
        return {
          value: s27_q12_capital_diligence_issues,
          setValue: setS27_q12_capital_diligence_issues,
          mode: 'multi',
        }
      default:
        return null
    }
  }

  function handleS27Select(questionId, optionValue) {
    const binding = getS27QuestionBinding(questionId)
    if (!binding || binding.mode !== 'single') {
      return
    }
    binding.setValue(optionValue)
  }

  function handleS27Toggle(questionId, optionValue) {
    const binding = getS27QuestionBinding(questionId)
    if (!binding || binding.mode !== 'multi') {
      return
    }

    binding.setValue((prev) => {
      if (questionId === 'q12') {
        if (optionValue === 'no_known_issues') {
          return prev.includes('no_known_issues') ? [] : ['no_known_issues']
        }

        const withoutNoKnownIssues = prev.filter((v) => v !== 'no_known_issues')
        if (withoutNoKnownIssues.includes(optionValue)) {
          return withoutNoKnownIssues.filter((v) => v !== optionValue)
        }
        return [...withoutNoKnownIssues, optionValue]
      }

      if (prev.includes(optionValue)) {
        return prev.filter((v) => v !== optionValue)
      }
      return [...prev, optionValue]
    })
  }

  function handleS27Continue() {
    const currentQuestionId = visibleS27QuestionIds[s27Step]
    const question = getS27QuestionById(currentQuestionId)
    const binding = getS27QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return
    }

    if (binding.mode === 'multi') {
      if (binding.value.length === 0) {
        return
      }
    } else if (!binding.value) {
      return
    }

    const nextState = buildDiagnosticState({ [question.field]: binding.value })
    const nextTags = buildDiagnosticContext(nextState).tags
    const escalation = resolveS27QuestionAnswer(currentQuestionId, nextState, nextTags)

    if (escalation) {
      setS27AnswerEscalation((prev) => ({
        ...prev,
        [question.field]: escalation,
      }))
    }

    if (currentQuestionId === 'q12') {
      const q9Question = getS27QuestionById('q9')
      const q9Escalation = resolveS27QuestionAnswer('q9', nextState, nextTags)
      if (q9Question && q9Escalation) {
        setS27AnswerEscalation((prev) => ({
          ...prev,
          [q9Question.field]: q9Escalation,
        }))
      }
    }

    const nextVisibleIds = getVisibleS27QuestionIds(nextState)
    if (s27Step < nextVisibleIds.length - 1) {
      setS27Step((prev) => prev + 1)
      return
    }

    if (isS13Triggered(nextState, nextTags)) {
      advanceToS13Intro()
      return
    }

    if (isS16Triggered(nextState, nextTags)) {
      advanceToS16Intro()
      return
    }

    setCurrentGate('s27-complete')
  }

  function getS13QuestionBinding(questionId) {
    switch (questionId) {
      case 'q1':
        return {
          value: s13_q1_data_collection_status,
          setValue: setS13_q1_data_collection_status,
          mode: 'single',
        }
      case 'q2':
        return {
          value: s13_q2_data_types_collected,
          setValue: setS13_q2_data_types_collected,
          mode: 'multi',
        }
      case 'q3':
        return {
          value: s13_q3_data_subject_groups,
          setValue: setS13_q3_data_subject_groups,
          mode: 'multi',
        }
      case 'q4':
        return {
          value: s13_q4_collection_channels,
          setValue: setS13_q4_collection_channels,
          mode: 'multi',
        }
      case 'q5':
        return {
          value: s13_q5_storage_and_access_awareness,
          setValue: setS13_q5_storage_and_access_awareness,
          mode: 'single',
        }
      case 'q6':
        return {
          value: s13_q6_data_access_by_tools_vendors_team,
          setValue: setS13_q6_data_access_by_tools_vendors_team,
          mode: 'single',
        }
      case 'q7':
        return {
          value: s13_q7_public_privacy_language_exists,
          setValue: setS13_q7_public_privacy_language_exists,
          mode: 'single',
        }
      case 'q8':
        return {
          value: s13_q8_privacy_language_matches_practice,
          setValue: setS13_q8_privacy_language_matches_practice,
          mode: 'single',
        }
      case 'q9':
        return {
          value: s13_q9_terms_platform_data_user_content_alignment,
          setValue: setS13_q9_terms_platform_data_user_content_alignment,
          mode: 'single',
        }
      case 'q10':
        return {
          value: s13_q10_data_use_transparency,
          setValue: setS13_q10_data_use_transparency,
          mode: 'single',
        }
      case 'q11':
        return {
          value: s13_q11_tracking_technologies,
          setValue: setS13_q11_tracking_technologies,
          mode: 'single',
        }
      case 'q12':
        return {
          value: s13_q12_secondary_data_uses,
          setValue: setS13_q12_secondary_data_uses,
          mode: 'single',
        }
      case 'q13':
        return {
          value: s13_q13_data_sharing_transfer_third_parties,
          setValue: setS13_q13_data_sharing_transfer_third_parties,
          mode: 'single',
        }
      case 'q14':
        return {
          value: s13_q14_sensitive_information_collected,
          setValue: setS13_q14_sensitive_information_collected,
          mode: 'single',
        }
      case 'q15':
        return {
          value: s13_q15_health_wellness_body_related_information,
          setValue: setS13_q15_health_wellness_body_related_information,
          mode: 'single',
        }
      case 'q16':
        return {
          value: s13_q16_dataset_ai_product_training_data,
          setValue: setS13_q16_dataset_ai_product_training_data,
          mode: 'single',
        }
      case 'q17':
        return {
          value: s13_q17_vendor_tool_data_handling_awareness,
          setValue: setS13_q17_vendor_tool_data_handling_awareness,
          mode: 'single',
        }
      case 'q18':
        return {
          value: s13_q18_cross_border_multistate_data_presence,
          setValue: setS13_q18_cross_border_multistate_data_presence,
          mode: 'single',
        }
      case 'q19':
        return {
          value: s13_q19_data_request_process,
          setValue: setS13_q19_data_request_process,
          mode: 'single',
        }
      case 'q20':
        return {
          value: s13_q20_internal_data_rules,
          setValue: setS13_q20_internal_data_rules,
          mode: 'single',
        }
      case 'q21':
        return {
          value: s13_q21_privacy_data_active_issues,
          setValue: setS13_q21_privacy_data_active_issues,
          mode: 'multi',
        }
      default:
        return null
    }
  }

  function handleS13Select(questionId, optionValue) {
    const binding = getS13QuestionBinding(questionId)
    if (!binding || binding.mode !== 'single') {
      return
    }
    binding.setValue(optionValue)
  }

  function handleS13Toggle(questionId, optionValue) {
    const binding = getS13QuestionBinding(questionId)
    if (!binding || binding.mode !== 'multi') {
      return
    }

    binding.setValue((prev) => {
      if (questionId === 'q2' || questionId === 'q3' || questionId === 'q4') {
        if (optionValue === 'not_sure') {
          return prev.includes('not_sure') ? [] : ['not_sure']
        }

        const withoutNotSure = prev.filter((v) => v !== 'not_sure')
        if (withoutNotSure.includes(optionValue)) {
          return withoutNotSure.filter((v) => v !== optionValue)
        }
        return [...withoutNotSure, optionValue]
      }

      if (questionId === 'q21') {
        if (optionValue === 'no_known_issues') {
          return prev.includes('no_known_issues') ? [] : ['no_known_issues']
        }

        const withoutNoKnownIssues = prev.filter((v) => v !== 'no_known_issues')
        if (withoutNoKnownIssues.includes(optionValue)) {
          return withoutNoKnownIssues.filter((v) => v !== optionValue)
        }
        return [...withoutNoKnownIssues, optionValue]
      }

      if (prev.includes(optionValue)) {
        return prev.filter((v) => v !== optionValue)
      }
      return [...prev, optionValue]
    })
  }

  function handleS13Continue() {
    const currentQuestionId = visibleS13QuestionIds[s13Step]
    const question = getS13QuestionById(currentQuestionId)
    const binding = getS13QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return
    }

    if (binding.mode === 'multi') {
      if (binding.value.length === 0) {
        return
      }
    } else if (!binding.value) {
      return
    }

    const nextState = buildDiagnosticState({ [question.field]: binding.value })
    const nextTags = buildDiagnosticContext(nextState).tags
    const escalation = resolveS13QuestionAnswer(currentQuestionId, nextState)

    if (escalation) {
      setS13AnswerEscalation((prev) => ({
        ...prev,
        [question.field]: escalation,
      }))
    }

    if (currentQuestionId === 'q1' && shouldS13EarlyExit(nextState, nextTags)) {
      if (isS16Triggered(nextState, nextTags)) {
        advanceToS16Intro()
        return
      }
      setCurrentGate('s13-complete')
      return
    }

    const nextVisibleIds = getVisibleS13QuestionIds(nextState, nextTags)
    if (s13Step < nextVisibleIds.length - 1) {
      setS13Step((prev) => prev + 1)
      return
    }

    if (isS16Triggered(nextState, nextTags)) {
      advanceToS16Intro()
      return
    }

    setCurrentGate('s13-complete')
  }

  function getS16QuestionBinding(questionId) {
    switch (questionId) {
      case 'q1':
        return {
          value: s16_q1_ai_use_status,
          setValue: setS16_q1_ai_use_status,
          mode: 'single',
        }
      case 'q2':
        return {
          value: s16_q2_ai_use_cases,
          setValue: setS16_q2_ai_use_cases,
          mode: 'multi',
        }
      case 'q3':
        return {
          value: s16_q3_direct_ai_interaction,
          setValue: setS16_q3_direct_ai_interaction,
          mode: 'single',
        }
      case 'q4':
        return {
          value: s16_q4_ai_transparency_to_people,
          setValue: setS16_q4_ai_transparency_to_people,
          mode: 'single',
        }
      case 'q5':
        return {
          value: s16_q5_human_review_of_ai_outputs,
          setValue: setS16_q5_human_review_of_ai_outputs,
          mode: 'single',
        }
      case 'q6':
        return {
          value: s16_q6_ai_for_high_stakes_documents,
          setValue: setS16_q6_ai_for_high_stakes_documents,
          mode: 'single',
        }
      case 'q7':
        return {
          value: s16_q7_sensitive_or_confidential_data_in_ai,
          setValue: setS16_q7_sensitive_or_confidential_data_in_ai,
          mode: 'single',
        }
      case 'q8':
        return {
          value: s16_q8_ai_vendors_plugins_agents_integrations,
          setValue: setS16_q8_ai_vendors_plugins_agents_integrations,
          mode: 'single',
        }
      case 'q9':
        return {
          value: s16_q9_ai_vendor_terms_understood,
          setValue: setS16_q9_ai_vendor_terms_understood,
          mode: 'single',
        }
      case 'q10':
        return {
          value: s16_q10_ai_privacy_security_settings_configured,
          setValue: setS16_q10_ai_privacy_security_settings_configured,
          mode: 'single',
        }
      case 'q11':
        return {
          value: s16_q11_ai_access_to_confidential_systems_data,
          setValue: setS16_q11_ai_access_to_confidential_systems_data,
          mode: 'single',
        }
      case 'q12':
        return {
          value: s16_q12_ai_outputs_in_public_or_funding_materials,
          setValue: setS16_q12_ai_outputs_in_public_or_funding_materials,
          mode: 'single',
        }
      case 'q13':
        return {
          value: s16_q13_ai_decisions_about_people,
          setValue: setS16_q13_ai_decisions_about_people,
          mode: 'single',
        }
      case 'q14':
        return {
          value: s16_q14_ai_high_impact_contexts,
          setValue: setS16_q14_ai_high_impact_contexts,
          mode: 'single',
        }
      case 'q15':
        return {
          value: s16_q15_ai_use_in_contracts_and_commitments,
          setValue: setS16_q15_ai_use_in_contracts_and_commitments,
          mode: 'single',
        }
      case 'q16':
        return {
          value: s16_q16_team_ai_guidelines_and_expectations,
          setValue: setS16_q16_team_ai_guidelines_and_expectations,
          mode: 'single',
        }
      case 'q17':
        return {
          value: s16_q17_ai_active_issues,
          setValue: setS16_q17_ai_active_issues,
          mode: 'multi',
        }
      default:
        return null
    }
  }

  function handleS16Select(questionId, optionValue) {
    const binding = getS16QuestionBinding(questionId)
    if (!binding || binding.mode !== 'single') {
      return
    }
    binding.setValue(optionValue)
  }

  function handleS16Toggle(questionId, optionValue) {
    const binding = getS16QuestionBinding(questionId)
    if (!binding || binding.mode !== 'multi') {
      return
    }

    binding.setValue((prev) => {
      if (questionId === 'q2') {
        if (optionValue === 'not_sure') {
          return prev.includes('not_sure') ? [] : ['not_sure']
        }

        const withoutNotSure = prev.filter((v) => v !== 'not_sure')
        if (withoutNotSure.includes(optionValue)) {
          return withoutNotSure.filter((v) => v !== optionValue)
        }
        return [...withoutNotSure, optionValue]
      }

      if (questionId === 'q17') {
        if (optionValue === 'no_known_issues') {
          return prev.includes('no_known_issues') ? [] : ['no_known_issues']
        }

        const withoutNoKnownIssues = prev.filter((v) => v !== 'no_known_issues')
        if (withoutNoKnownIssues.includes(optionValue)) {
          return withoutNoKnownIssues.filter((v) => v !== optionValue)
        }
        return [...withoutNoKnownIssues, optionValue]
      }

      if (prev.includes(optionValue)) {
        return prev.filter((v) => v !== optionValue)
      }
      return [...prev, optionValue]
    })
  }

  function handleS16Continue() {
    const currentQuestionId = visibleS16QuestionIds[s16Step]
    const question = getS16QuestionById(currentQuestionId)
    const binding = getS16QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return
    }

    if (binding.mode === 'multi') {
      if (binding.value.length === 0) {
        return
      }
    } else if (!binding.value) {
      return
    }

    const nextState = buildDiagnosticState({ [question.field]: binding.value })
    const nextTags = buildDiagnosticContext(nextState).tags
    const escalation = resolveS16QuestionAnswer(currentQuestionId, nextState)

    if (escalation) {
      setS16AnswerEscalation((prev) => ({
        ...prev,
        [question.field]: escalation,
      }))
    }

    if (currentQuestionId === 'q1' && shouldS16EarlyExit(nextState, nextTags)) {
      setCurrentGate('s16-complete')
      return
    }

    const nextVisibleIds = getVisibleS16QuestionIds(nextState, nextTags)
    if (s16Step < nextVisibleIds.length - 1) {
      setS16Step((prev) => prev + 1)
      return
    }

    setCurrentGate('s16-complete')
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

  if (currentGate === 's0-intro') {
    return (
      <SectionIntro
        sectionId="S0"
        onBegin={() => setCurrentGate(1)}
      />
    )
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
        onBack={goBackFromGate}
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
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === '2b') {
    return (
      <Gate2BScreen
        structure_orientation={structure_orientation}
        setStructure_orientation={setStructure_orientation}
        onContinue={() => setCurrentGate('2c')}
        onBack={goBackFromGate}
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
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 'financial-boundary') {
    return (
      <FinancialBoundaryScreen
        onContinue={advanceToGate3}
        onStop={resetAllState}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 3) {
    return (
      <Gate3Screen
        team_structure={team_structure}
        setTeam_structure={setTeam_structure}
        onContinue={() => setCurrentGate(4)}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 4) {
    return (
      <Gate4Screen
        geography={geography}
        setGeography={setGeography}
        onContinue={() => setCurrentGate(5)}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 5) {
    return (
      <Gate5Screen
        ai_use={ai_use}
        setAi_use={setAi_use}
        onContinue={() => setCurrentGate(6)}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 6) {
    return (
      <Gate6Screen
        next_moves={next_moves}
        setNext_moves={setNext_moves}
        onContinue={() => setCurrentGate(7)}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 7) {
    return (
      <Gate7Screen
        sensitive_claims={sensitive_claims}
        setSensitive_claims={setSensitive_claims}
        onContinue={() => setCurrentGate(8)}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 8) {
    return (
      <Gate8Screen
        growth_path={growth_path}
        setGrowth_path={setGrowth_path}
        onContinue={() => setCurrentGate(9)}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 9) {
    return (
      <Gate9Screen
        annual_revenue_range={annual_revenue_range}
        setAnnual_revenue_range={setAnnual_revenue_range}
        onContinue={() => setCurrentGate(10)}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 10) {
    return (
      <Gate10Screen
        recent_events_12mo={recent_events_12mo}
        setRecent_events_12mo={setRecent_events_12mo}
        onContinue={() => setCurrentGate('complete')}
        onBack={goBackFromGate}
      />
    )
  }

  if (currentGate === 'complete') {
    return (
      <CompletionScreen
        onContinueToS1={() => {
          setS1Step(0)
          setCurrentGate('s1-intro')
        }}
      />
    )
  }

  if (currentGate === 's1-intro') {
    return (
      <SectionIntro
        sectionId="S1"
        onBegin={() => {
          setS1Step(0)
          setCurrentGate('s1')
        }}
      />
    )
  }

  if (currentGate === 's2-intro') {
    return (
      <SectionIntro
        sectionId="S2"
        onBegin={() => {
          setS2Step(0)
          setCurrentGate('s2')
        }}
      />
    )
  }

  if (currentGate === 's3-intro') {
    return (
      <SectionIntro
        sectionId="S3"
        onBegin={() => {
          setS3Step(0)
          setCurrentGate('s3')
        }}
      />
    )
  }

  if (currentGate === 's6-intro') {
    return (
      <SectionIntro
        sectionId="S6"
        onBegin={() => {
          setS6Step(0)
          setCurrentGate('s6')
        }}
      />
    )
  }

  if (currentGate === 's27-intro') {
    return (
      <SectionIntro
        sectionId="S27"
        onBegin={() => {
          setS27Step(0)
          setCurrentGate('s27')
        }}
      />
    )
  }

  if (currentGate === 's13-intro') {
    return (
      <SectionIntro
        sectionId="S13"
        onBegin={() => {
          setS13Step(0)
          setCurrentGate('s13')
        }}
      />
    )
  }

  if (currentGate === 's16-intro') {
    return (
      <SectionIntro
        sectionId="S16"
        onBegin={() => {
          setS16Step(0)
          setCurrentGate('s16')
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
        onSelect={(optionValue) => handleS1Select(currentQuestionId, optionValue)}
        onContinue={() => handleS1Continue(currentQuestionId)}
        onBack={goBackFromS1}
      />
    )
  }

  if (currentGate === 's1-complete') {
    return <S1SectionCompleteScreen />
  }

  if (currentGate === 's2') {
    const currentQuestionId = visibleS2QuestionIds[s2Step]
    const question = getS2QuestionById(currentQuestionId)
    const binding = getS2QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return null
    }

    return (
      <S2QuestionScreen
        question={question}
        value={binding.value}
        onSelect={(optionValue) => handleS2Select(currentQuestionId, optionValue)}
        onToggle={(optionValue) => handleS2Toggle(currentQuestionId, optionValue)}
        onContinue={() => handleS2Continue(currentQuestionId)}
        onBack={goBackFromS2}
      />
    )
  }

  if (currentGate === 's2-complete') {
    return <S2SectionCompleteScreen />
  }

  if (currentGate === 's3') {
    const currentQuestionId = visibleS3QuestionIds[s3Step]
    const question = getS3QuestionById(currentQuestionId)
    const binding = getS3QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return null
    }

    return (
      <S3QuestionScreen
        question={question}
        value={binding.value}
        onSelect={(optionValue) => handleS3Select(currentQuestionId, optionValue)}
        onToggle={(optionValue) => handleS3Toggle(currentQuestionId, optionValue)}
        onContinue={() => handleS3Continue(currentQuestionId)}
        onBack={goBackFromS3}
      />
    )
  }

  if (currentGate === 's3-complete') {
    return <S3SectionCompleteScreen />
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
        onContinue={handleS6Continue}
        onBack={goBackFromS6}
      />
    )
  }

  if (currentGate === 's6-complete') {
    return <S6SectionCompleteScreen />
  }

  if (currentGate === 's27') {
    const currentQuestionId = visibleS27QuestionIds[s27Step]
    const question = getS27QuestionById(currentQuestionId)
    const binding = getS27QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return null
    }

    return (
      <S27QuestionScreen
        question={question}
        value={binding.value}
        onSelect={(optionValue) => handleS27Select(currentQuestionId, optionValue)}
        onToggle={(optionValue) => handleS27Toggle(currentQuestionId, optionValue)}
        onContinue={handleS27Continue}
        onBack={goBackFromS27}
      />
    )
  }

  if (currentGate === 's27-complete') {
    return <S27SectionCompleteScreen />
  }

  if (currentGate === 's13') {
    const currentQuestionId = visibleS13QuestionIds[s13Step]
    const question = getS13QuestionById(currentQuestionId)
    const binding = getS13QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return null
    }

    return (
      <S13QuestionScreen
        question={question}
        value={binding.value}
        onSelect={(optionValue) => handleS13Select(currentQuestionId, optionValue)}
        onToggle={(optionValue) => handleS13Toggle(currentQuestionId, optionValue)}
        onContinue={handleS13Continue}
        onBack={goBackFromS13}
      />
    )
  }

  if (currentGate === 's13-complete') {
    return <S13SectionCompleteScreen />
  }

  if (currentGate === 's16') {
    const currentQuestionId = visibleS16QuestionIds[s16Step]
    const question = getS16QuestionById(currentQuestionId)
    const binding = getS16QuestionBinding(currentQuestionId)

    if (!question || !binding) {
      return null
    }

    return (
      <S16QuestionScreen
        question={question}
        value={binding.value}
        onSelect={(optionValue) => handleS16Select(currentQuestionId, optionValue)}
        onToggle={(optionValue) => handleS16Toggle(currentQuestionId, optionValue)}
        onContinue={handleS16Continue}
        onBack={goBackFromS16}
      />
    )
  }

  if (currentGate === 's16-complete') {
    return <S16SectionCompleteScreen />
  }

  return null
}

export default App
