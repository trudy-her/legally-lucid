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
  return ids
}

export function getS6QuestionById(id) {
  return s6QuestionsById[id]
}
