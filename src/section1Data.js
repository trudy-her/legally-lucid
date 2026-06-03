import { hasAnyTag } from './diagnosticTags.js'

export const S1_SECTION_HEADER =
  'Section: S1 — Business Foundation and Structure'

const S1_Q2_HIDE_Q3 = ['no_structure_chosen', 'informal_or_individual', 'not_sure']

export const s1q1 = {
  id: 'q1',
  field: 's1_q1_current_stage',
  question: 'Which best describes where you are right now?',
  required: true,
  options: [
    { value: 'idea_stage', label: 'I am still thinking through the idea' },
    {
      value: 'planning_not_operating',
      label: 'I am planning but have not started operating yet',
    },
    {
      value: 'already_operating',
      label: 'I am already operating, selling, fundraising, or accepting support',
    },
    {
      value: 'formed_cleaning_up_or_growing',
      label: 'I formed something and am now trying to clean up or grow',
    },
    {
      value: 'restructuring_or_expanding',
      label: 'I am restructuring, adding a new line, or changing direction',
    },
    { value: 'not_sure', label: 'I am not sure' },
  ],
}

export const s1q2 = {
  id: 'q2',
  field: 's1_q2_current_structure',
  question: 'What specific structure are you currently using, if any?',
  required: true,
  options: [
    {
      value: 'no_structure_chosen',
      label: 'I have not chosen a structure yet',
      baseStatus: 'Review recommended',
    },
    {
      value: 'informal_or_individual',
      label: 'I am operating as myself or informally',
      baseStatus: 'Review recommended',
    },
    { value: 'llc', label: 'I have an LLC', baseStatus: 'Indicated' },
    {
      value: 'corporation',
      label: 'I have a corporation',
      baseStatus: 'Indicated',
    },
    {
      value: 'nonprofit',
      label: 'I have a nonprofit corporation or nonprofit organization',
      baseStatus: 'Indicated',
    },
    {
      value: 'fiscal_sponsorship',
      label: 'I am operating under a fiscal sponsor',
      baseStatus: 'Review recommended',
    },
    {
      value: 'hybrid_structure',
      label: 'I have both for-profit and nonprofit or mission-driven pieces',
      baseStatus: 'Review recommended',
    },
    {
      value: 'multiple_entities_brands_projects',
      label: 'I have multiple entities, brands, or projects',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s1q3 = {
  id: 'q3',
  field: 's1_q3_foundational_formation_current_status_records',
  question:
    'Do you have the basic formation and organizing records for your structure?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_all',
      label: 'Some, but not all',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change (unless override applies)',
    },
  ],
}

export const s1q4 = {
  id: 'q4',
  field: 's1_q4_entity_or_person_receives_money_signs_owns',
  question:
    'Is it clear which person or entity receives money, signs agreements, and owns what the business or organization uses?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'mostly_with_gaps',
      label: 'Mostly, but there are some gaps',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change (unless override applies)',
    },
  ],
}

export const s1q5 = {
  id: 'q5',
  field: 's1_q5_ownership_founder_board_roles_documented',
  question:
    'Are ownership and key decision-maker roles documented clearly enough for your next step?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_consistently',
      label: 'Some, but not consistently',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change (unless override applies)',
    },
  ],
}

export const s1q6 = {
  id: 'q6',
  field: 's1_q6_separation_business_personal_related_projects',
  question:
    'Are your business, nonprofit, project, and personal accounts or records kept separate enough for your current stage?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_consistently',
      label: 'Some, but not consistently',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change (unless override applies)',
    },
  ],
}

export const s1q7 = {
  id: 'q7',
  field: 's1_q7_multiple_brands_entities_projects',
  question:
    'If you use multiple brands, entities, or public names, is it clear which one is responsible for each activity?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'mostly_with_gaps',
      label: 'Mostly, but there are some gaps',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change (unless override applies)',
    },
  ],
}

export const s1q8 = {
  id: 'q8',
  field: 's1_q8_fiscal_sponsor_or_partner_structure',
  question:
    'If you operate through a fiscal sponsor, partner, host organization, or umbrella organization, are roles, money flow, approvals, and public-facing responsibilities documented?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_consistently',
      label: 'Some, but not consistently',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change (unless override applies)',
    },
  ],
}

export const s1q9 = {
  id: 'q9',
  field: 's1_q9_foundational_tax_finance_identifiers',
  question:
    'Do you have the basic tax, account, and administrative identifiers or records needed for how you are operating?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_all',
      label: 'Some, but not all',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change (unless override applies)',
    },
  ],
}

export const s1q10 = {
  id: 'q10',
  field: 's1_q10_foundation_ready_for_next_move',
  question:
    'Before your next major move, do you know which foundation items need to be cleaned up, documented, or reviewed?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_all',
      label: 'Some, but not all',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s1QuestionsById = {
  q1: s1q1,
  q2: s1q2,
  q3: s1q3,
  q4: s1q4,
  q5: s1q5,
  q6: s1q6,
  q7: s1q7,
  q8: s1q8,
  q9: s1q9,
  q10: s1q10,
}

function showUnlessBoundaryStopped(ctx) {
  return !ctx.diagnosticStoppedAtBoundary
}

function shouldShowS1Q3(ctx) {
  const q2 = ctx.s1_q2_current_structure
  if (!q2) {
    return false
  }
  return !S1_Q2_HIDE_Q3.includes(q2)
}

function shouldShowS1Q5(ctx) {
  return hasAnyTag(ctx, [
    'TEAM_COFOUNDER_PARTNER',
    'TEAM_ADVISORS_COMPENSATED',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
    'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'EVENT_MONEY_OWNERSHIP_CHANGE',
    'multiple_entities_brands_projects',
  ])
}

function shouldShowS1Q7(ctx) {
  return hasAnyTag(ctx, [
    'multiple_entities_brands_projects',
    'hybrid_structure',
    'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
    'MODEL_CONTENT_CREATOR',
    'MODEL_MARKETPLACE_PLATFORM',
    'MODEL_SERVICE',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  ])
}

function shouldShowS1Q8(ctx) {
  return hasAnyTag(ctx, [
    'fiscal_sponsorship',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  ])
}

function shouldShowS1Q9(ctx) {
  return hasAnyTag(ctx, [
    'already_operating',
    'formed_cleaning_up_or_growing',
    'restructuring_or_expanding',
    'llc',
    'corporation',
    'nonprofit',
    'fiscal_sponsorship',
    'hybrid_structure',
    'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'TEAM_CONTRACTORS',
    'TEAM_EMPLOYEES',
  ])
}

const s1ShowById = {
  q1: showUnlessBoundaryStopped,
  q2: showUnlessBoundaryStopped,
  q3: (ctx) => showUnlessBoundaryStopped(ctx) && shouldShowS1Q3(ctx),
  q4: showUnlessBoundaryStopped,
  q5: (ctx) => showUnlessBoundaryStopped(ctx) && shouldShowS1Q5(ctx),
  q6: showUnlessBoundaryStopped,
  q7: (ctx) => showUnlessBoundaryStopped(ctx) && shouldShowS1Q7(ctx),
  q8: (ctx) => showUnlessBoundaryStopped(ctx) && shouldShowS1Q8(ctx),
  q9: (ctx) => showUnlessBoundaryStopped(ctx) && shouldShowS1Q9(ctx),
  q10: showUnlessBoundaryStopped,
}

export function getVisibleS1QuestionIds(ctx) {
  const ids = []
  for (const id of ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']) {
    if (s1ShowById[id](ctx)) {
      ids.push(id)
    }
  }
  return ids
}

export function getS1QuestionById(id) {
  return s1QuestionsById[id]
}
