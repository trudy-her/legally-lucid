function includesAny(arr, values) {
  return values.some((v) => arr.includes(v))
}

export const s6q1 = {
  id: 'q1',
  field: 's6_q1_informal_commitments_documented',
  mode: 'single',
  question:
    'Do you clearly document important commitments, even when they start informally?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'some_not_consistently', label: 'Some, but not consistently' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q2 = {
  id: 'q2',
  field: 's6_q2_avoids_written_agreements',
  mode: 'single',
  question:
    'Do you ever avoid written agreements because the relationship feels too new, too small, or too awkward to formalize?',
  options: [
    { value: 'no', label: 'No' },
    { value: 'sometimes', label: 'Sometimes' },
    { value: 'yes', label: 'Yes' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q3 = {
  id: 'q3',
  field: 's6_q3_agreement_source',
  mode: 'multi',
  question: 'Where do your important agreements usually come from? Select all that apply.',
  options: [
    {
      value: 'professional_prepared_or_reviewed',
      label:
        'Attorney or qualified professional prepared or reviewed them',
    },
    {
      value: 'trusted_template_professional_reviewed',
      label:
        'Trusted template, reviewed by an attorney or qualified professional for my specific use',
    },
    {
      value: 'trusted_template_self_reviewed',
      label: 'Trusted template, reviewed for fit by me or my team',
    },
    { value: 'ai_generated_draft', label: 'AI-generated draft' },
    {
      value: 'copied_or_adapted',
      label:
        'Copied or adapted from another business, website, or old agreement',
    },
    { value: 'other_party_form', label: 'Provided by the other party' },
    {
      value: 'platform_vendor_funder_terms',
      label:
        'Platform, app store, marketplace, payment processor, fiscal sponsor, grantor, sponsor, or vendor terms',
    },
    {
      value: 'informal_written_summary',
      label:
        'Email, proposal, invoice, checkout page, or informal written summary',
    },
    {
      value: 'mostly_oral_handshake',
      label: 'Mostly oral or handshake understandings',
    },
    { value: 'not_sure', label: 'I am not sure' },
  ],
}

export const s6q4 = {
  id: 'q4',
  field: 's6_q4_scope_responsibilities_deliverables',
  mode: 'single',
  question:
    'Do your important agreements include written scope, responsibilities, deliverables, timing, and exclusions?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'some_not_consistently', label: 'Some, but not consistently' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q5 = {
  id: 'q5',
  field: 's6_q5_ownership_use_sharing_work_product',
  mode: 'single',
  question:
    'Do your agreements explain who owns, can use, or can share the content, code, data, creative work, or other output created in the relationship?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q6 = {
  id: 'q6',
  field: 's6_q6_confidentiality_data_sensitive_info',
  mode: 'single',
  question:
    'Do your agreements include confidentiality, data-use, and sensitive-information protections that match how information actually flows in the relationship?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q7 = {
  id: 'q7',
  field: 's6_q7_responsibility_if_something_goes_wrong',
  mode: 'single',
  question:
    'Do your important agreements explain who is responsible if something goes wrong, including limits on liability, indemnity, and insurance requirements?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q8 = {
  id: 'q8',
  field: 's6_q8_payment_refunds_cancellation_termination',
  mode: 'single',
  question:
    'Do your agreements clearly explain payment, refunds, cancellation, termination, and what happens to ongoing obligations when the relationship ends?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q9 = {
  id: 'q9',
  field: 's6_q9_supplier_vendor_platform_terms',
  mode: 'single',
  question:
    'If you rely on suppliers, manufacturers, vendors, platforms, distributors, or channel partners, do you understand the key terms that control those relationships?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

export const s6q10 = {
  id: 'q10',
  field: 's6_q10_grants_sponsorships_fiscal_sponsors_donor_commitments',
  mode: 'single',
  question:
    'If you seek or accept donations, grants, sponsorships, restricted funds, or fiscal sponsor support, are the commitments, restrictions, reporting requirements, and fund-use rules clearly documented?',
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'Not applicable' },
  ],
}

const s6StandardSingleOptions = [
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
    baseStatus: 'No status change unless override applies',
  },
]

export const s6q11 = {
  id: 'q11',
  field: 's6_q11_signature_authority_approval',
  mode: 'single',
  question:
    'Do you know who is allowed to approve, sign, or commit the business or organization to important agreements?',
  required: true,
  options: s6StandardSingleOptions,
}

export const s6q12 = {
  id: 'q12',
  field: 's6_q12_renewal_notice_deadline_tracking',
  mode: 'single',
  question:
    'Do you track renewal dates, cancellation windows, notice periods, reporting dates, and other deadlines in one reliable place?',
  required: true,
  options: s6StandardSingleOptions,
}

export const s6q13 = {
  id: 'q13',
  field: 's6_q13_final_versions_storage',
  mode: 'single',
  question:
    'Can you quickly find the final signed version of each important agreement and its related changes?',
  required: true,
  options: s6StandardSingleOptions,
}

export const s6q14 = {
  id: 'q14',
  field: 's6_q14_changes_side_promises_documented',
  mode: 'single',
  question:
    'When an agreement changes after it starts, do you document the change instead of relying on memory, side conversations, or scattered messages?',
  required: true,
  options: s6StandardSingleOptions,
}

export const s6q15 = {
  id: 'q15',
  field: 's6_q15_agreement_related_issues',
  mode: 'multi',
  question:
    'Have any agreement-related issues already come up with customers, clients, vendors, contractors, sponsors, donors, grantors, fiscal sponsors, platforms, partners, or team members?',
  required: true,
  options: [
    { value: 'no_known_issues', label: 'No known issues', baseStatus: 'Indicated' },
    {
      value: 'payment_chargeback_issue',
      label: 'Missed payment or chargeback issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'customer_client_participant_complaint',
      label: 'Customer, client, or participant complaint',
      baseStatus: 'Review recommended',
    },
    {
      value: 'vendor_supplier_platform_issue',
      label: 'Vendor, supplier, or platform issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'team_contractor_advisor_dispute',
      label: 'Contractor, advisor, founder, or team dispute',
      baseStatus: 'Review recommended',
    },
    {
      value: 'donor_grant_sponsor_fiscal_sponsor_issue',
      label: 'Donor, grant, sponsor, or fiscal sponsor issue',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'ownership_confidentiality_data_work_product_concern',
      label: 'Ownership, confidentiality, data, or work-product concern',
      baseStatus: 'Review recommended',
    },
    {
      value: 'legal_letter_platform_warning_account_restriction',
      label: 'Legal letter, platform warning, or account restriction',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s6QuestionsById = {
  q1: s6q1,
  q2: s6q2,
  q3: s6q3,
  q4: s6q4,
  q5: s6q5,
  q6: s6q6,
  q7: s6q7,
  q8: s6q8,
  q9: s6q9,
  q10: s6q10,
  q11: s6q11,
  q12: s6q12,
  q13: s6q13,
  q14: s6q14,
  q15: s6q15,
}

const STATUS_TIER = {
  'No status change unless override applies': 0,
  'No status change': 0,
  Indicated: 1,
  'Review recommended': 2,
  'Professional review strongly recommended': 3,
}

const TIER_STATUS = {
  0: 'No status change unless override applies',
  1: 'Indicated',
  2: 'Review recommended',
  3: 'Professional review strongly recommended',
}

const S6_REVIEW_PRIORITY_VALUES = ['some_not_consistently', 'no', 'not_sure']

const S6_Q11_NOT_APPLICABLE_OVERRIDE_TAGS = [
  'TEAM_COFOUNDER_PARTNER',
  'TEAM_ADVISORS_COMPENSATED',
  'TEAM_CONTRACTORS',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
  'MOVE_SIGNING_AGREEMENT',
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
]

const S6_Q11_SPECIFIC_ESCALATION_TAGS = [
  'TEAM_COFOUNDER_PARTNER',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
  'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'MOVE_ENTERPRISE_CUSTOMERS',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
]

const S6_Q12_NOT_APPLICABLE_OVERRIDE_TAGS = [
  'MODEL_SAAS_SOFTWARE_AI',
  'MODEL_ECOMM_PHYSICAL',
  'MODEL_MARKETPLACE_PLATFORM',
  'MODEL_SERVICE',
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_PLATFORM_CHANNEL_SALES',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
]

const S6_Q12_SPECIFIC_ESCALATION_TAGS = [
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
  'EVENT_WARNING_LEGAL_PLATFORM',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
]

const S6_Q13_NOT_APPLICABLE_OVERRIDE_TAGS = [
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'EVENT_WARNING_LEGAL_PLATFORM',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
  'TEAM_COFOUNDER_PARTNER',
  'TEAM_CONTRACTORS',
  'TEAM_ADVISORS_COMPENSATED',
]

const S6_Q13_SPECIFIC_ESCALATION_TAGS = [
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'EVENT_WARNING_LEGAL_PLATFORM',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
]

const S6_Q14_NOT_APPLICABLE_OVERRIDE_TAGS = [
  'MODEL_SERVICE',
  'MODEL_CONTENT_CREATOR',
  'MODEL_SAAS_SOFTWARE_AI',
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'TEAM_COFOUNDER_PARTNER',
  'TEAM_CONTRACTORS',
  'TEAM_ADVISORS_COMPENSATED',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
  'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
]

const S6_Q14_SPECIFIC_ESCALATION_TAGS = [
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
  'EVENT_WARNING_LEGAL_PLATFORM',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
]

const S6_Q15_SPECIFIC_ESCALATION_TAGS = [
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
  'MODEL_SAAS_SOFTWARE_AI',
  'MODEL_ECOMM_PHYSICAL',
  'MODEL_HARDWARE_CONNECTED',
  'MODEL_MARKETPLACE_PLATFORM',
  'AI_CUSTOMER_FACING_PRODUCT',
  'AI_DECISION_HIGH_RISK',
  'EVENT_WARNING_LEGAL_PLATFORM',
  'EVENT_DATA_SECURITY_CONCERN',
  'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
  'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  'EVENT_MONEY_OWNERSHIP_CHANGE',
]

function hasAnyTag(tags, tagList) {
  return tagList.some((tag) => tags.has(tag))
}

function getOptionBaseStatus(question, value) {
  return question.options.find((option) => option.value === value)?.baseStatus ?? null
}

function escalateStatusOneTier(status) {
  if (status == null || STATUS_TIER[status] === 0) {
    return status
  }

  const tier = STATUS_TIER[status]
  if (tier == null || tier >= 3) {
    return status
  }

  return TIER_STATUS[tier + 1]
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

function isReviewPrioritySingleAnswer(selectedValue, notApplicableOverrideApplied) {
  return (
    S6_REVIEW_PRIORITY_VALUES.includes(selectedValue) ||
    (selectedValue === 'not_applicable' && notApplicableOverrideApplied)
  )
}

function resolveS6SingleSelectAnswer(
  question,
  selectedValue,
  tags,
  { notApplicableOverrideTags, specificEscalationTags, behaviorAvoidanceFlag = false },
) {
  const baseStatus = getOptionBaseStatus(question, selectedValue)

  let notApplicableOverrideApplied = false
  let specificEscalationApplied = false
  let behaviorFlagEscalationApplied = false
  let universalEscalationApplied = false

  let resolvedStatus = baseStatus

  if (
    selectedValue === 'not_applicable' &&
    hasAnyTag(tags, notApplicableOverrideTags)
  ) {
    resolvedStatus = 'Review recommended'
    notApplicableOverrideApplied = true
  }

  if (
    S6_REVIEW_PRIORITY_VALUES.includes(selectedValue) &&
    hasAnyTag(tags, specificEscalationTags)
  ) {
    resolvedStatus = 'Professional review strongly recommended'
    specificEscalationApplied = true
  }

  if (
    behaviorAvoidanceFlag &&
    resolvedStatus !== 'Indicated' &&
    isReviewPrioritySingleAnswer(selectedValue, notApplicableOverrideApplied)
  ) {
    const beforeBehavior = resolvedStatus
    resolvedStatus = escalateStatusOneTier(resolvedStatus)
    behaviorFlagEscalationApplied = resolvedStatus !== beforeBehavior
  }

  if (tags.has('EVENT_SIGNED_WITHOUT_REVIEW')) {
    const beforeUniversal = resolvedStatus
    resolvedStatus = escalateStatusOneTier(resolvedStatus)
    universalEscalationApplied = resolvedStatus !== beforeUniversal
  }

  return {
    value: selectedValue,
    baseStatus,
    resolvedStatus,
    notApplicableOverrideApplied,
    specificEscalationApplied,
    behaviorFlagEscalationApplied,
    universalEscalationApplied,
  }
}

function resolveS6Q15Answer(question, selectedValues, tags) {
  const optionBaseStatuses = selectedValues.map((value) =>
    getOptionBaseStatus(question, value),
  )
  const baseStatus = highestStatus(optionBaseStatuses)

  let specificEscalationApplied = false
  let universalEscalationApplied = false

  const resolvedStatuses = selectedValues.map((value) => {
    let status = getOptionBaseStatus(question, value)

    if (
      value !== 'no_known_issues' &&
      hasAnyTag(tags, S6_Q15_SPECIFIC_ESCALATION_TAGS)
    ) {
      status = 'Professional review strongly recommended'
      specificEscalationApplied = true
    }

    return status
  })

  let resolvedStatus = highestStatus(resolvedStatuses)

  if (tags.has('EVENT_SIGNED_WITHOUT_REVIEW')) {
    const beforeUniversal = resolvedStatus
    resolvedStatus = escalateStatusOneTier(resolvedStatus)
    universalEscalationApplied = resolvedStatus !== beforeUniversal
  }

  return {
    value: selectedValues,
    baseStatus,
    resolvedStatus,
    notApplicableOverrideApplied: false,
    specificEscalationApplied,
    behaviorFlagEscalationApplied: false,
    universalEscalationApplied,
  }
}

export function resolveS6QuestionAnswer(
  questionId,
  answerValue,
  tags,
  behaviorAvoidanceFlag = false,
) {
  const question = s6QuestionsById[questionId]
  if (!question) {
    return null
  }

  switch (questionId) {
    case 'q11':
      return resolveS6SingleSelectAnswer(question, answerValue, tags, {
        notApplicableOverrideTags: S6_Q11_NOT_APPLICABLE_OVERRIDE_TAGS,
        specificEscalationTags: S6_Q11_SPECIFIC_ESCALATION_TAGS,
      })
    case 'q12':
      return resolveS6SingleSelectAnswer(question, answerValue, tags, {
        notApplicableOverrideTags: S6_Q12_NOT_APPLICABLE_OVERRIDE_TAGS,
        specificEscalationTags: S6_Q12_SPECIFIC_ESCALATION_TAGS,
      })
    case 'q13':
      return resolveS6SingleSelectAnswer(question, answerValue, tags, {
        notApplicableOverrideTags: S6_Q13_NOT_APPLICABLE_OVERRIDE_TAGS,
        specificEscalationTags: S6_Q13_SPECIFIC_ESCALATION_TAGS,
      })
    case 'q14':
      return resolveS6SingleSelectAnswer(question, answerValue, tags, {
        notApplicableOverrideTags: S6_Q14_NOT_APPLICABLE_OVERRIDE_TAGS,
        specificEscalationTags: S6_Q14_SPECIFIC_ESCALATION_TAGS,
        behaviorAvoidanceFlag,
      })
    case 'q15':
      return resolveS6Q15Answer(question, answerValue, tags)
    default:
      return null
  }
}

export function computeSignedWithoutReview(recent_events_12mo) {
  return recent_events_12mo.includes('signed_without_review')
}

export function computeS6BehaviorAvoidanceFlag(s6_q2_avoids_written_agreements) {
  if (!s6_q2_avoids_written_agreements) {
    return false
  }
  if (
    s6_q2_avoids_written_agreements === 'no' ||
    s6_q2_avoids_written_agreements === 'not_applicable'
  ) {
    return false
  }
  return ['sometimes', 'yes', 'not_sure'].includes(
    s6_q2_avoids_written_agreements,
  )
}

export function shouldShowS6Q5(gates) {
  const {
    business_models,
    team_structure,
    ai_use,
    recent_events_12mo,
    structure_orientation,
  } = gates

  return (
    includesAny(business_models, [
      'content_creator',
      'saas_software_ai',
      'marketplace_platform',
      'hardware_connected',
    ]) ||
    includesAny(team_structure, [
      'contractors',
      'overseas',
      'compensated_advisors',
      'cofounder_partner',
    ]) ||
    includesAny(ai_use, ['work_product', 'product_builder']) ||
    includesAny(recent_events_12mo, [
      'key_person_change',
      'money_ownership_change',
    ]) ||
    includesAny(structure_orientation, [
      'nonprofit',
      'fiscal_sponsorship',
      'hybrid_for_profit_nonprofit',
    ])
  )
}

export function shouldShowS6Q8(gates) {
  const {
    business_models,
    next_moves,
    recent_events_12mo,
    structure_orientation,
  } = gates

  return (
    includesAny(business_models, [
      'service',
      'content_creator',
      'ecomm_physical',
      'marketplace_platform',
      'saas_software_ai',
      'hardware_connected',
    ]) ||
    includesAny(next_moves, ['signing_agreement', 'platform_channel_sales']) ||
    includesAny(recent_events_12mo, [
      'customer_payment_service_issue',
      'donor_grant_sponsor_issue',
    ]) ||
    includesAny(structure_orientation, [
      'nonprofit',
      'fiscal_sponsorship',
      'hybrid_for_profit_nonprofit',
    ])
  )
}

export function shouldShowS6Q9(gates) {
  const {
    business_models,
    next_moves,
    team_structure,
    recent_events_12mo,
  } = gates

  return (
    includesAny(business_models, [
      'ecomm_physical',
      'hardware_connected',
      'marketplace_platform',
    ]) ||
    includesAny(next_moves, ['platform_channel_sales']) ||
    includesAny(team_structure, ['overseas']) ||
    includesAny(recent_events_12mo, [
      'warning_legal_platform',
      'signed_without_review',
    ])
  )
}

export function shouldShowS6Q10(gates) {
  const {
    structure_orientation,
    next_moves,
    growth_path,
    recent_events_12mo,
  } = gates

  return (
    includesAny(structure_orientation, [
      'nonprofit',
      'fiscal_sponsorship',
      'hybrid_for_profit_nonprofit',
    ]) ||
    includesAny(next_moves, ['seeking_donations_grants_sponsors']) ||
    includesAny(growth_path, [
      'donor_grant_sponsor_growth',
      'nonprofit_mission_expansion',
    ]) ||
    includesAny(recent_events_12mo, ['donor_grant_sponsor_issue'])
  )
}

export function getVisibleS6QuestionIds(gates) {
  const ids = ['q1', 'q2', 'q3', 'q4']
  if (shouldShowS6Q5(gates)) ids.push('q5')
  ids.push('q6', 'q7')
  if (shouldShowS6Q8(gates)) ids.push('q8')
  if (shouldShowS6Q9(gates)) ids.push('q9')
  if (shouldShowS6Q10(gates)) ids.push('q10')
  ids.push('q11', 'q12', 'q13', 'q14', 'q15')
  return ids
}

export function getS6QuestionById(id) {
  return s6QuestionsById[id]
}
