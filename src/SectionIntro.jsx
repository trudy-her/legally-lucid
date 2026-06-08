import { getSectionIntro } from './sectionIntros.js'

const S0_CALLOUT_MARKER = 'Please do not enter'
const S0_CALLOUT_TITLE = 'Before you begin.'

function splitIntroParagraphs(intro) {
  return intro.split(/\n\n+/).filter((paragraph) => paragraph.trim().length > 0)
}

function renderS0Content(intro) {
  const paragraphs = splitIntroParagraphs(intro)
  const elements = []

  paragraphs.forEach((paragraph, index) => {
    const calloutIndex = paragraph.indexOf(S0_CALLOUT_MARKER)

    if (calloutIndex === -1) {
      elements.push(
        <p key={`p-${index}`} className="section-intro__paragraph">
          {paragraph}
        </p>,
      )
      return
    }

    const beforeCallout = paragraph.slice(0, calloutIndex).trim()
    const calloutText = paragraph.slice(calloutIndex).trim()

    if (beforeCallout) {
      elements.push(
        <p key={`p-${index}-before`} className="section-intro__paragraph">
          {beforeCallout}
        </p>,
      )
    }

    if (calloutText) {
      elements.push(
        <aside key={`callout-${index}`} className="section-intro__callout">
          <p className="section-intro__callout-title">{S0_CALLOUT_TITLE}</p>
          <p className="section-intro__callout-text">{calloutText}</p>
        </aside>,
      )
    }
  })

  return elements
}

export function SectionIntro({ sectionId, onBegin }) {
  const entry = getSectionIntro(sectionId)

  if (!entry) {
    return null
  }

  const bodyContent =
    sectionId === 'S0'
      ? renderS0Content(entry.intro)
      : splitIntroParagraphs(entry.intro).map((paragraph, index) => (
          <p key={`p-${index}`} className="section-intro__paragraph">
            {paragraph}
          </p>
        ))

  return (
    <main className="gate section-intro">
      <p className="section-intro__eyebrow">{entry.name}</p>

      <div className="section-intro__body">{bodyContent}</div>

      <button
        type="button"
        className="gate__next gate__next--active section-intro__begin"
        onClick={onBegin}
      >
        Begin
      </button>
    </main>
  )
}
