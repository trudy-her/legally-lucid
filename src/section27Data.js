function includesAny(arr, values) {
  return values.some((v) => arr.includes(v))
}

export const S27_SECTION_HEADER =
  'S27 — Capital Raising, Investor Documentation, and Ownership Expectations'

const S27_SHOW_TAGS = [
  'MOVE_DEMO_DAY_PITCH_PRIZE_PROGRAM',
  'EVENT_ACCELERATOR_PRIZE_SAFE_PROGRAM_FUNDING',
  'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
]

const S27_FUNDING_NEXT_MOVES = [
  'raising_investment_business_funding',
  'seeking_donations_grants_sponsors',
  'demo_day_pitch_prize_program',
]

const S27_FUNDING_GROWTH_PATH = ['outside_capital', 'donor_grant_sponsor_growth']

const S27_Q2_STRONG_FUNDING_TYPES = [
  'safe',
  'convertible_note',
  'equity',
  'crowdfunding',
  'revenue_share',
  'prize_funding',
  'accelerator_incubator_funding',
]

const S27_Q7_ESCALATION_Q2_TYPES = [
  'safe',
  'equity',
  'convertible_note',
  'investor_money',
]

const S27_Q8_ESCALATION_Q2_TYPES = [
  'safe',
  'convertible_note',
  'equity',
  'revenue_share',
  'accelerator_incubator_funding',
  'prize_funding',
  'grant',
  'loan',
]

const S27_Q12_STRONG_ESCALATION_VALUES = [
  'ownership_cap_table_issue',
  'promise_issue',
  'funding_document_issue',
  'ip_contractor_ownership_issue',
]

const S27_Q12_SIGNAL_ESCALATION_VALUES = [
  'records_requested',
  'pitch_claim_proof_issue',
  'entity_structure_conversion_issue',
  'data_ai_privacy_technology_issue',
  'funding_use_reporting_restriction_issue',
  'not_sure',
]

const STATUS_TIER = {
  Indicated: 1,
  'Review recommended': 2,
  'Professional review strongly recommended': 3,
}

export const s27q1 = {
  id: 'q1',
  field: 's27_q1_capital_funding_plans',
  mode: 'single',
  question:
    'Are you currently planning to raise money, accept funding, apply for prize funding, or discuss investment for the business?',
  helper:
    'Choose the answer that best describes your current situation. This includes investor conversations, prize funding, grants, friends-and-family money, SAFE or note discussions, Demo Day preparation, or other funding conversations.',
  required: true,
  options: [
    {
      value: 'yes_active_capital_activity',
      label: 'Yes, we are actively doing this now',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'preparing_capital_activity',
      label: 'We are preparing to do this soon',
      baseStatus: 'Review recommended',
    },
    {
      value: 'exploring_capital_activity',
      label: 'We are exploring it, but not ready yet',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_current_capital_activity',
      label: 'No, not right now',
      baseStatus: 'Indicated',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q2 = {
  id: 'q2',
  field: 's27_q2_funding_type',
  mode: 'multi',
  question: 'What type of funding or support are you considering or pursuing?',
  helper:
    'Select all that apply. You do not need to list names, amounts, percentages, or deal terms.',
  required: true,
  options: [
    { value: 'investor_money', label: 'Investor money', baseStatus: 'Review recommended' },
    { value: 'safe', label: 'SAFE', baseStatus: 'Professional review strongly recommended' },
    {
      value: 'convertible_note',
      label: 'Convertible note',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'equity', label: 'Equity', baseStatus: 'Professional review strongly recommended' },
    { value: 'loan', label: 'Loan', baseStatus: 'Review recommended' },
    { value: 'grant', label: 'Grant', baseStatus: 'Review recommended' },
    { value: 'prize_funding', label: 'Prize funding', baseStatus: 'Review recommended' },
    {
      value: 'accelerator_incubator_funding',
      label: 'Accelerator or incubator funding',
      baseStatus: 'Review recommended',
    },
    {
      value: 'crowdfunding',
      label: 'Crowdfunding',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'revenue_share',
      label: 'Revenue share',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'friends_family_money',
      label: 'Friends-and-family money',
      baseStatus: 'Review recommended',
    },
    {
      value: 'sponsor_donor_funding',
      label: 'Sponsor or donor funding',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q3 = {
  id: 'q3',
  field: 's27_q3_value_already_exchanged',
  mode: 'single',
  question:
    'Has anyone already given money, promised money, or provided value for future ownership, repayment, revenue share, or other benefits?',
  helper:
    'This includes cash, services, discounts, credits, special access, future ownership, revenue share, repayment, or other benefits connected to the business.',
  required: true,
  options: [
    {
      value: 'yes_value_exchanged',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'no_value_exchanged',
      label: 'No, nothing like this has happened',
      baseStatus: 'Indicated',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q4 = {
  id: 'q4',
  field: 's27_q4_promises_documented',
  mode: 'single',
  question:
    'Do you have a clear record of what anyone who gave money, helped fund the business, or supported the business was promised in return?',
  helper:
    'This may include repayment, ownership, revenue share, discounts, credits, early access, special status, advisory rights, or other expectations.',
  required: true,
  options: [
    {
      value: 'yes_promises_documented',
      label: 'Yes, the promises are clearly documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_promises_documented',
      label: 'Some are documented, but not all',
      baseStatus: 'Review recommended',
    },
    { value: 'no_promises_documented', label: 'No', baseStatus: 'Professional review strongly recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q5 = {
  id: 'q5',
  field: 's27_q5_ownership_records_match_funding_statements',
  mode: 'single',
  question:
    'Are your ownership records current and consistent with what you are telling investors, prize programs, accelerators, lenders, sponsors, or other funding sources?',
  helper:
    'Think about operating agreements, ownership summaries, cap table summaries, founder promises, advisor promises, and what appears in pitch or application materials.',
  required: true,
  options: [
    {
      value: 'yes_ownership_records_consistent',
      label: 'Yes',
      baseStatus: 'Indicated',
    },
    {
      value: 'mostly_ownership_records_consistent',
      label: 'Mostly, but some records may need updates',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_ownership_records_consistent',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q6 = {
  id: 'q6',
  field: 's27_q6_expectations_documented_for_funding',
  mode: 'single',
  question:
    'If cofounders, advisors, contractors, contributors, or others expect equity, commissions, repayment, revenue share, or future compensation, is that documented for funding conversations?',
  helper:
    'This question is about promises or expectations that could come up during funding, diligence, accelerator review, or investor conversations.',
  required: true,
  options: [
    {
      value: 'yes_expectations_documented',
      label: 'Yes, these expectations are documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_expectations_documented',
      label: 'Some are documented, but not all',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_expectations_documented',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'no_expectations_exist',
      label: 'No one expects anything like this',
      baseStatus: 'Indicated',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q7 = {
  id: 'q7',
  field: 's27_q7_entity_structure_funding_alignment',
  mode: 'single',
  question:
    'Is your entity structure aligned with your funding plans, or have you been told you may need to form or convert to a corporation before equity financing?',
  helper:
    'This is a prompt to gather questions for a qualified professional. It does not tell you what entity structure to use.',
  required: true,
  options: [
    {
      value: 'yes_structure_reviewed_for_funding',
      label: 'Yes, we have reviewed this for our funding plans',
      baseStatus: 'Indicated',
    },
    {
      value: 'told_structure_conversion_may_matter',
      label: 'We have been told structure or conversion may matter',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_structure_not_reviewed_for_funding',
      label: 'No, we have not reviewed this',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q8 = {
  id: 'q8',
  field: 's27_q8_funding_documents_signed_or_reviewed',
  mode: 'single',
  question:
    'Have you signed or reviewed any funding document, such as a SAFE, note, equity agreement, loan, grant, prize, accelerator, or revenue-share agreement?',
  helper:
    'This also includes side letters, funding-use restrictions, reporting obligations, or documents someone asked you to sign or review.',
  required: true,
  options: [
    {
      value: 'yes_signed_funding_document',
      label: 'Yes, signed',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'yes_received_reviewed_not_signed',
      label: 'Yes, received or reviewed but not signed',
      baseStatus: 'Review recommended',
    },
    { value: 'no_funding_document', label: 'No', baseStatus: 'Indicated' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q9 = {
  id: 'q9',
  field: 's27_q9_program_participation_obligations',
  mode: 'single',
  question:
    'Have you participated in an accelerator, incubator, prize program, pitch competition, or founder cohort that provided funding, took equity, or created obligations?',
  helper:
    'This may include program documents, Demo Day requirements, pitch rights, funding terms, SAFE terms, reporting obligations, rights to use your materials, or other commitments.',
  required: true,
  options: [
    { value: 'yes_program_obligations', label: 'Yes', baseStatus: 'Review recommended' },
    { value: 'no_program_obligations', label: 'No', baseStatus: 'Indicated' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q10 = {
  id: 'q10',
  field: 's27_q10_fundraising_materials_accuracy',
  mode: 'single',
  question:
    'Are your pitch deck, investor materials, demo materials, prize applications, website, or fundraising communications accurate about what exists today, what is planned, and what proof supports your claims?',
  helper:
    'Think about product status, traction, testimonials, user counts, research claims, AI functionality, projections, partnerships, and current-versus-future features.',
  required: true,
  options: [
    {
      value: 'yes_materials_accurate_supported',
      label: 'Yes',
      baseStatus: 'Indicated',
    },
    {
      value: 'mostly_materials_accurate_supported',
      label: 'Mostly, but some materials may need updates',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_materials_not_accurate_supported',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q11 = {
  id: 'q11',
  field: 's27_q11_diligence_records_available',
  mode: 'single',
  question:
    'Can you quickly gather the records a serious funder, investor, accelerator, prize program, or professional reviewer would likely ask to see?',
  helper:
    'This may include formation records, ownership records, contracts, IP records, founder agreements, contractor agreements, privacy or terms documents, pitch materials, funding documents, basic financial records, and platform or vendor records.',
  required: true,
  options: [
    { value: 'yes_records_gatherable', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_records_gatherable',
      label: 'Some records are ready, but not all',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_records_not_gatherable',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27q12 = {
  id: 'q12',
  field: 's27_q12_capital_diligence_issues',
  mode: 'multi',
  question:
    'Have any funding, ownership, investor, prize, accelerator, Demo Day, or diligence-related issues already come up?',
  helper:
    'Select all that apply. Choose "No known issues" only if none of the other options apply.',
  required: true,
  options: [
    { value: 'no_known_issues', label: 'No known issues', baseStatus: 'Indicated' },
    {
      value: 'records_requested',
      label: 'Investor, funder, accelerator, or prize program asked for records',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ownership_cap_table_issue',
      label: 'Ownership or cap table issue',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'promise_issue',
      label: 'Founder, advisor, contractor, or contributor promise issue',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'funding_document_issue',
      label:
        'SAFE, note, loan, equity, grant, prize, revenue-share, or accelerator document issue',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'pitch_claim_proof_issue',
      label: 'Pitch deck, traction, claim, or proof issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ip_contractor_ownership_issue',
      label: 'IP, contractor, or ownership issue',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'entity_structure_conversion_issue',
      label: 'Entity structure or conversion issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'data_ai_privacy_technology_issue',
      label: 'Data, AI, privacy, or technology diligence issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'funding_use_reporting_restriction_issue',
      label: 'Funding-use, reporting, or restriction issue',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s27QuestionsById = {
  q1: s27q1,
  q2: s27q2,
  q3: s27q3,
  q4: s27q4,
  q5: s27q5,
  q6: s27q6,
  q7: s27q7,
  q8: s27q8,
  q9: s27q9,
  q10: s27q10,
  q11: s27q11,
  q12: s27q12,
}

function hasAnyTag(tags, tagList) {
  return tagList.some((tag) => tags.has(tag))
}

function getOptionBaseStatus(question, value) {
  return question.options.find((option) => option.value === value)?.baseStatus ?? null
}

function highestStatus(statuses) {
  return statuses.reduce((highest, status) => {
    if (status == null) {
      return highest
    }

    const tier = STATUS_TIER[status] ?? 0
    const highestTier = highest == null ? -1 : (STATUS_TIER[highest] ?? 0)
    return tier > highestTier ? status : highest
  }, null)
}

function applyMinimumStatus(currentStatus, minimumStatus) {
  const currentTier = STATUS_TIER[currentStatus] ?? 0
  const minimumTier = STATUS_TIER[minimumStatus] ?? 0
  return minimumTier > currentTier ? minimumStatus : currentStatus
}

export function isS27Triggered(state, tags) {
  if (hasAnyTag(tags, S27_SHOW_TAGS)) {
    return true
  }

  if (includesAny(state.next_moves ?? [], S27_FUNDING_NEXT_MOVES)) {
    return true
  }

  if (includesAny(state.growth_path ?? [], S27_FUNDING_GROWTH_PATH)) {
    return true
  }

  return false
}

export function computeS27StrongCapitalSignal(state, tags) {
  if (state.s27_q1_capital_funding_plans === 'yes_active_capital_activity') {
    return true
  }

  const q2 = state.s27_q2_funding_type ?? []
  if (q2.some((value) => S27_Q2_STRONG_FUNDING_TYPES.includes(value))) {
    return true
  }

  if (state.s27_q3_value_already_exchanged === 'yes_value_exchanged') {
    return true
  }

  if (
    state.s27_q5_ownership_records_match_funding_statements ===
    'no_ownership_records_consistent'
  ) {
    return true
  }

  const q8 = state.s27_q8_funding_documents_signed_or_reviewed
  if (
    q8 === 'yes_signed_funding_document' ||
    q8 === 'yes_received_reviewed_not_signed'
  ) {
    return true
  }

  if (state.s27_q9_program_participation_obligations === 'yes_program_obligations') {
    return true
  }

  if (
    state.s27_q10_fundraising_materials_accuracy === 'no_materials_not_accurate_supported'
  ) {
    return true
  }

  const q12 = state.s27_q12_capital_diligence_issues ?? []
  if (q12.some((value) => value !== 'no_known_issues')) {
    return true
  }

  if (
    tags.has('MOVE_DEMO_DAY_PITCH_PRIZE_PROGRAM') ||
    tags.has('EVENT_ACCELERATOR_PRIZE_SAFE_PROGRAM_FUNDING')
  ) {
    return true
  }

  return false
}

export function getVisibleS27QuestionIds(state) {
  const q1 = state.s27_q1_capital_funding_plans
  const q3 = state.s27_q3_value_already_exchanged
  const ids = ['q1']

  if (q1 == null) {
    return ids
  }

  if (q1 !== 'no_current_capital_activity') {
    ids.push('q2')
  }

  ids.push('q3')

  if (q3 == null) {
    return ids
  }

  if (q3 !== 'no_value_exchanged') {
    ids.push('q4')
  }

  ids.push('q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12')
  return ids
}

function q12HasActiveIssue(selectedValues) {
  return selectedValues.some((value) => value !== 'no_known_issues')
}

function resolveS27SingleAnswer(question, selectedValue, state, tags) {
  const baseStatus = getOptionBaseStatus(question, selectedValue)
  let resolvedStatus = baseStatus
  let q7EscalationApplied = false
  let q8EscalationApplied = false
  let q9EscalationApplied = false
  let q10EscalationApplied = false
  let q11EscalationApplied = false
  let strongCapitalSignalEscalationApplied = false

  const q2 = state.s27_q2_funding_type ?? []
  const strongCapitalSignal = computeS27StrongCapitalSignal(state, tags)

  if (question.id === 'q7') {
    if (
      includesAny(q2, S27_Q7_ESCALATION_Q2_TYPES) &&
      (selectedValue === 'no_structure_not_reviewed_for_funding' ||
        selectedValue === 'not_sure')
    ) {
      resolvedStatus = 'Professional review strongly recommended'
      q7EscalationApplied = true
    }
  }

  if (question.id === 'q8') {
    if (
      selectedValue === 'not_sure' &&
      includesAny(q2, S27_Q8_ESCALATION_Q2_TYPES)
    ) {
      resolvedStatus = applyMinimumStatus(resolvedStatus, 'Review recommended')
      q8EscalationApplied = true
    }
  }

  if (question.id === 'q9') {
    const q8 = state.s27_q8_funding_documents_signed_or_reviewed
    if (
      selectedValue === 'yes_program_obligations' &&
      (q8 === 'yes_signed_funding_document' || q8 === 'yes_received_reviewed_not_signed')
    ) {
      resolvedStatus = applyMinimumStatus(resolvedStatus, 'Review recommended')
      q9EscalationApplied = true
    }

    const q12 = state.s27_q12_capital_diligence_issues ?? []
    if (selectedValue === 'yes_program_obligations' && q12HasActiveIssue(q12)) {
      resolvedStatus = 'Professional review strongly recommended'
      q9EscalationApplied = true
    }
  }

  if (question.id === 'q10') {
    if (
      selectedValue === 'no_materials_not_accurate_supported' &&
      (state.s27_q1_capital_funding_plans === 'yes_active_capital_activity' ||
        state.s27_q9_program_participation_obligations === 'yes_program_obligations')
    ) {
      resolvedStatus = 'Professional review strongly recommended'
      q10EscalationApplied = true
    }
  }

  if (question.id === 'q11') {
    if (
      (selectedValue === 'no_records_not_gatherable' || selectedValue === 'not_sure') &&
      strongCapitalSignal
    ) {
      resolvedStatus = 'Professional review strongly recommended'
      q11EscalationApplied = true
    }
  }

  return {
    value: selectedValue,
    baseStatus,
    resolvedStatus,
    q7EscalationApplied,
    q8EscalationApplied,
    q9EscalationApplied,
    q10EscalationApplied,
    q11EscalationApplied,
    strongCapitalSignalEscalationApplied,
  }
}

function resolveS27MultiAnswer(question, selectedValues, state, tags) {
  const optionBaseStatuses = selectedValues.map((value) =>
    getOptionBaseStatus(question, value),
  )
  const baseStatus = highestStatus(optionBaseStatuses)
  let resolvedStatus = baseStatus
  let strongCapitalSignalEscalationApplied = false

  if (question.id === 'q2') {
    resolvedStatus = highestStatus(optionBaseStatuses)
  }

  if (question.id === 'q12') {
    resolvedStatus = highestStatus(optionBaseStatuses)

    if (
      selectedValues.some((value) => S27_Q12_STRONG_ESCALATION_VALUES.includes(value))
    ) {
      resolvedStatus = 'Professional review strongly recommended'
    }

    const strongCapitalSignal = computeS27StrongCapitalSignal(state, tags)
    if (
      strongCapitalSignal &&
      selectedValues.some((value) => S27_Q12_SIGNAL_ESCALATION_VALUES.includes(value))
    ) {
      resolvedStatus = 'Professional review strongly recommended'
      strongCapitalSignalEscalationApplied = true
    }
  }

  return {
    value: selectedValues,
    baseStatus,
    resolvedStatus,
    q7EscalationApplied: false,
    q8EscalationApplied: false,
    q9EscalationApplied: false,
    q10EscalationApplied: false,
    q11EscalationApplied: false,
    strongCapitalSignalEscalationApplied,
  }
}

export function resolveS27QuestionAnswer(questionId, state, tags) {
  const question = s27QuestionsById[questionId]
  if (!question) {
    return null
  }

  const fieldValue = state[question.field]
  if (question.mode === 'multi') {
    return resolveS27MultiAnswer(question, fieldValue ?? [], state, tags)
  }

  return resolveS27SingleAnswer(question, fieldValue, state, tags)
}

export function getS27QuestionById(id) {
  return s27QuestionsById[id]
}
