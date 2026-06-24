import { hasAnyTag } from './diagnosticTags.js'

function includesAny(arr, values) {
  return values.some((v) => arr.includes(v))
}

export const S16_SECTION_HEADER =
  'S16 — AI, Automation, and Technology Transparency'

const S16_SHOW_TAGS = [
  'AI_WORK_PRODUCT',
  'AI_PRODUCT_BUILDER',
  'AI_CUSTOMER_FACING_PRODUCT',
  'AI_DECISION_HIGH_RISK',
  'MODEL_SAAS_SOFTWARE_AI',
  'MODEL_CONTENT_CREATOR',
  'MODEL_SERVICE',
  'MODEL_MARKETPLACE_PLATFORM',
  'MOVE_ENTERPRISE_CUSTOMERS',
  'TEAM_CONTRACTORS',
  'TEAM_EMPLOYEES',
]

const Q3_Q2_TRIGGERS = [
  'product_service_features',
  'chatbots_agents_assistants_automated_responses',
  'customer_client_donor_user_communications',
  'hiring_hr_worker_contractor_management',
  'pricing_eligibility_screening_scoring_approvals',
]

const Q4_Q2_TRIGGERS = [
  'customer_client_donor_user_communications',
  'product_service_features',
  'chatbots_agents_assistants_automated_responses',
  'hiring_hr_worker_contractor_management',
  'pricing_eligibility_screening_scoring_approvals',
  'funding_grant_investor_materials',
]

const STATUS_TIER = {
  Indicated: 1,
  'Review recommended': 2,
  'Professional review strongly recommended': 3,
}

export const s16q1 = {
  id: 'q1',
  field: 's16_q1_ai_use_status',
  mode: 'single',
  question: 'Are you currently using AI or automation in the business or organization?',
  required: true,
  options: [
    { value: 'yes_regularly', label: 'Yes, regularly', baseStatus: 'Review recommended' },
    { value: 'yes_occasionally', label: 'Yes, occasionally', baseStatus: 'Review recommended' },
    {
      value: 'testing_or_planning',
      label: 'We are testing or planning to use it',
      baseStatus: 'Review recommended',
    },
    { value: 'no_not_currently', label: 'No, not currently', baseStatus: 'Indicated' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q2 = {
  id: 'q2',
  field: 's16_q2_ai_use_cases',
  mode: 'multi',
  question: 'What are you using AI or automation for?',
  helper: 'Select all that apply.',
  required: true,
  options: [
    {
      value: 'drafting_contracts_policies_business_documents',
      label: 'Drafting contracts, policies, or business documents',
      baseStatus: 'Review recommended',
    },
    {
      value: 'marketing_sales_public_content',
      label: 'Website copy, marketing, social media, or sales content',
      baseStatus: 'Review recommended',
    },
    {
      value: 'funding_grant_investor_materials',
      label: 'Pitch decks, grant applications, investor materials, or business plans',
      baseStatus: 'Review recommended',
    },
    {
      value: 'customer_client_donor_user_communications',
      label: 'Customer, client, donor, or user communications',
      baseStatus: 'Review recommended',
    },
    {
      value: 'summaries_research_analysis_decision_support',
      label: 'Summaries, research, analysis, or decision support',
      baseStatus: 'Review recommended',
    },
    {
      value: 'product_service_features',
      label: 'Product or service features',
      baseStatus: 'Review recommended',
    },
    {
      value: 'chatbots_agents_assistants_automated_responses',
      label: 'Chatbots, agents, assistants, or automated responses',
      baseStatus: 'Review recommended',
    },
    {
      value: 'hiring_hr_worker_contractor_management',
      label: 'Hiring, HR, worker management, or contractor management',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'pricing_eligibility_screening_scoring_approvals',
      label: 'Pricing, eligibility, screening, scoring, recommendations, or approvals',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'coding_software_product_design_technical_workflows',
      label: 'Coding, software development, product design, or technical workflows',
      baseStatus: 'Review recommended',
    },
    {
      value: 'creative_assets',
      label: 'Images, video, audio, branding, or creative assets',
      baseStatus: 'Review recommended',
    },
    {
      value: 'internal_operations_admin_workflow',
      label: 'Internal operations, admin, scheduling, or workflow automation',
      baseStatus: 'Indicated',
    },
    {
      value: 'data_analysis_analytics_reporting',
      label: 'Data analysis, analytics, or reporting',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q3 = {
  id: 'q3',
  field: 's16_q3_direct_ai_interaction',
  mode: 'single',
  question:
    'Are customers, clients, donors, employees, or others interacting directly with AI responses, chatbots, agents, or automated decisions?',
  required: true,
  options: [
    { value: 'yes_direct_interaction', label: 'Yes', baseStatus: 'Review recommended' },
    { value: 'no_direct_interaction', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'planning_testing_direct_interaction',
      label: 'We are planning or testing this',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q4 = {
  id: 'q4',
  field: 's16_q4_ai_transparency_to_people',
  mode: 'single',
  question:
    'Are people told when AI or automation is part of the product, service, communication, decision, report, recommendation, or experience?',
  required: true,
  options: [
    {
      value: 'yes_clear_transparency',
      label: 'Yes, we tell people clearly',
      baseStatus: 'Indicated',
    },
    {
      value: 'somewhat_inconsistent_transparency',
      label: 'Somewhat, but it may not be consistent',
      baseStatus: 'Review recommended',
    },
    { value: 'no_transparency', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q5 = {
  id: 'q5',
  field: 's16_q5_human_review_of_ai_outputs',
  mode: 'single',
  question:
    'Do you review AI-generated content, recommendations, summaries, reports, code, contracts, policies, or customer-facing outputs before using or sharing them?',
  required: true,
  options: [
    {
      value: 'yes_consistent_human_review',
      label: 'Yes, consistently',
      baseStatus: 'Indicated',
    },
    { value: 'sometimes_human_review', label: 'Sometimes', baseStatus: 'Review recommended' },
    { value: 'no_human_review', label: 'No', baseStatus: 'Review recommended' },
    { value: 'depends_on_use', label: 'It depends on the use', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q6 = {
  id: 'q6',
  field: 's16_q6_ai_for_high_stakes_documents',
  mode: 'single',
  question:
    'Are you using AI to create or revise contracts, policies, legal documents, privacy language, terms, disclaimers, investor materials, grant applications, or other high-stakes business documents?',
  required: true,
  options: [
    { value: 'yes_ai_high_stakes_documents', label: 'Yes', baseStatus: 'Review recommended' },
    { value: 'no_ai_high_stakes_documents', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'testing_considering_ai_high_stakes_documents',
      label: 'We are testing or considering this',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q7 = {
  id: 'q7',
  field: 's16_q7_sensitive_or_confidential_data_in_ai',
  mode: 'single',
  question:
    'Are you entering confidential, customer, donor, employee, health, financial, or other sensitive information into AI tools?',
  required: true,
  options: [
    {
      value: 'yes_sensitive_confidential_data_in_ai',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'no_sensitive_confidential_data_in_ai',
      label: 'No',
      baseStatus: 'Indicated',
    },
    {
      value: 'limited_non_sensitive_information_only',
      label: 'Only limited or non-sensitive information',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q8 = {
  id: 'q8',
  field: 's16_q8_ai_vendors_plugins_agents_integrations',
  mode: 'single',
  question:
    'Are you using AI vendors, plugins, agents, extensions, integrations, or automation platforms in the business?',
  required: true,
  options: [
    {
      value: 'yes_ai_vendors_plugins_agents_integrations',
      label: 'Yes',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_ai_vendors_plugins_agents_integrations',
      label: 'No',
      baseStatus: 'Indicated',
    },
    {
      value: 'testing_planning_ai_vendors_plugins_agents_integrations',
      label: 'We are testing or planning this',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q9 = {
  id: 'q9',
  field: 's16_q9_ai_vendor_terms_understood',
  mode: 'single',
  question:
    'Do you know the key terms for your AI tools, including whether they can store, train on, share, or reuse your information?',
  required: true,
  options: [
    {
      value: 'yes_terms_reviewed',
      label: 'Yes, we have reviewed the key terms',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_terms_reviewed',
      label: 'Somewhat, but not for every tool',
      baseStatus: 'Review recommended',
    },
    { value: 'no_terms_not_reviewed', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q10 = {
  id: 'q10',
  field: 's16_q10_ai_privacy_security_settings_configured',
  mode: 'single',
  question:
    'Have you reviewed and set the strongest privacy, security, data-sharing, training, and retention settings for your AI tools?',
  required: true,
  options: [
    {
      value: 'yes_settings_reviewed_adjusted',
      label: 'Yes, we reviewed and adjusted the settings',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_settings_reviewed_adjusted',
      label: 'Some settings, but not all tools',
      baseStatus: 'Review recommended',
    },
    { value: 'no_settings_not_reviewed', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q11 = {
  id: 'q11',
  field: 's16_q11_ai_access_to_confidential_systems_data',
  mode: 'single',
  question:
    'Do any AI tools, agents, plugins, automations, or integrations have access to confidential files, emails, cloud drives, CRMs, payment tools, customer records, donor records, employee records, client materials, third-party data, or business-sensitive information?',
  required: true,
  options: [
    {
      value: 'yes_ai_access_confidential_systems_data',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'no_ai_access_confidential_systems_data',
      label: 'No',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_ai_access_possible',
      label: 'Some tools may have access',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q12 = {
  id: 'q12',
  field: 's16_q12_ai_outputs_in_public_or_funding_materials',
  mode: 'single',
  question:
    'Are you using AI outputs in public claims, marketing, pitch decks, proposals, reports, customer deliverables, grant applications, investor materials, or fundraising communications?',
  required: true,
  options: [
    {
      value: 'yes_ai_outputs_public_funding_materials',
      label: 'Yes',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_ai_outputs_public_funding_materials',
      label: 'No',
      baseStatus: 'Indicated',
    },
    {
      value: 'testing_considering_ai_outputs_public_funding_materials',
      label: 'We are testing or considering this',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q13 = {
  id: 'q13',
  field: 's16_q13_ai_decisions_about_people',
  mode: 'single',
  question:
    'Are you using AI to make, assist, or influence decisions about people, such as hiring, firing, promotion, pay, scheduling, eligibility, pricing, access, approvals, screening, scoring, recommendations, benefits, services, or opportunities?',
  required: true,
  options: [
    {
      value: 'yes_ai_decisions_about_people',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'no_ai_decisions_about_people', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'testing_considering_ai_decisions_about_people',
      label: 'We are testing or considering this',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q14 = {
  id: 'q14',
  field: 's16_q14_ai_high_impact_contexts',
  mode: 'single',
  question:
    'Are you using AI in areas where mistakes could affect health, wellness, money, employment, education, legal rights, housing, insurance, credit, safety, children, vulnerable populations, or access to important services?',
  required: true,
  options: [
    {
      value: 'yes_ai_high_impact_contexts',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'no_ai_high_impact_contexts', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'testing_considering_ai_high_impact_contexts',
      label: 'We are testing or considering this',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q15 = {
  id: 'q15',
  field: 's16_q15_ai_use_in_contracts_and_commitments',
  mode: 'single',
  question:
    'Do your customer, client, donor, user, employee, contractor, vendor, or partner agreements say anything about AI use, automated tools, data use, confidentiality, ownership, review, or responsibility?',
  required: true,
  options: [
    { value: 'yes_agreements_address_ai', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_agreements_address_ai',
      label: 'Some do, but not all',
      baseStatus: 'Review recommended',
    },
    { value: 'no_agreements_address_ai', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q16 = {
  id: 'q16',
  field: 's16_q16_team_ai_guidelines_and_expectations',
  mode: 'single',
  question:
    'Do contractors, employees, advisors, volunteers, vendors, or other team members who use AI on behalf of the business operate under documented guidelines or expectations?',
  required: true,
  options: [
    {
      value: 'yes_team_ai_guidelines_documented',
      label: 'Yes, documented guidelines or expectations are in place',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_team_ai_guidelines_informal',
      label: 'Some expectations exist, but they are incomplete or informal',
      baseStatus: 'Review recommended',
    },
    { value: 'no_team_ai_guidelines', label: 'No', baseStatus: 'Review recommended' },
    {
      value: 'no_team_ai_use',
      label: 'No one else uses AI on behalf of the business',
      baseStatus: 'Indicated',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16q17 = {
  id: 'q17',
  field: 's16_q17_ai_active_issues',
  mode: 'multi',
  question:
    'Have any AI, automation, data, privacy, accuracy, bias, or public-claim issues already come up?',
  helper: 'Select all that apply.',
  required: true,
  options: [
    { value: 'no_known_issues', label: 'No known issues', baseStatus: 'Indicated' },
    {
      value: 'inaccurate_misleading_incomplete_output',
      label: 'AI gave an inaccurate, misleading, or incomplete output',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_output_used_before_review',
      label: 'AI output was used before review',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'customer_user_donor_client_complaint',
      label: 'Customer, user, donor, or client complained about AI use',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'worker_concern',
      label: 'Employee, contractor, applicant, or worker concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'privacy_confidentiality_data_concern',
      label: 'Privacy, confidentiality, or data concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'ai_access_confidential_files_data_concern',
      label: 'AI tool, agent, plugin, integration, or automation had access to confidential files or data',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'public_claim_pitch_citation_research_marketing_concern',
      label: 'Public claim, pitch, citation, research, or marketing concern',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_vendor_tool_plugin_platform_concern',
      label: 'AI vendor, tool, plugin, or platform concern',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ownership_ip_copyright_content_concern',
      label: 'Ownership, IP, copyright, or content concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'bias_fairness_access_eligibility_screening_concern',
      label: 'Bias, fairness, access, eligibility, or screening concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'safety_health_wellness_financial_legal_high_impact_concern',
      label: 'Safety, health, wellness, financial, legal, or high-impact concern',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s16QuestionsById = {
  q1: s16q1,
  q2: s16q2,
  q3: s16q3,
  q4: s16q4,
  q5: s16q5,
  q6: s16q6,
  q7: s16q7,
  q8: s16q8,
  q9: s16q9,
  q10: s16q10,
  q11: s16q11,
  q12: s16q12,
  q13: s16q13,
  q14: s16q14,
  q15: s16q15,
  q16: s16q16,
  q17: s16q17,
}

const S16_QUESTION_ORDER = [
  'q1',
  'q2',
  'q3',
  'q4',
  'q5',
  'q6',
  'q7',
  'q8',
  'q9',
  'q10',
  'q11',
  'q12',
  'q13',
  'q14',
  'q15',
  'q16',
  'q17',
]

function q1IndicatesAiUse(q1) {
  return q1 != null && q1 !== 'no_not_currently'
}

export function hasGateAiUse(state) {
  const aiUse = (state.ai_use ?? []).filter((value) => value !== 'none')
  return aiUse.length > 0
}

export function hasPriorAiSignal(state, tags) {
  if (hasAnyTag({ tags }, S16_SHOW_TAGS)) {
    return true
  }
  if (hasGateAiUse(state)) {
    return true
  }
  if ((state.recent_events_12mo ?? []).includes('ai_sensitive_documents')) {
    return true
  }
  return false
}

export function isS16Triggered(state, tags) {
  if (hasAnyTag({ tags }, S16_SHOW_TAGS)) {
    return true
  }
  return hasGateAiUse(state)
}

export function shouldS16EarlyExit(state, tags) {
  return (
    state.s16_q1_ai_use_status === 'no_not_currently' && !hasPriorAiSignal(state, tags)
  )
}

function q2OnlyInternalAdminNoExternal(q2) {
  if (q2.length === 0) {
    return false
  }
  if (q2.includes('not_sure')) {
    return false
  }
  const withoutInternal = q2.filter((v) => v !== 'internal_operations_admin_workflow')
  return withoutInternal.length === 0 && q2.includes('internal_operations_admin_workflow')
}

function isInternalOnlyLowSensitivityAi(state) {
  const q2 = state.s16_q2_ai_use_cases ?? []
  if (!q2OnlyInternalAdminNoExternal(q2)) {
    return false
  }
  const q3 = state.s16_q3_direct_ai_interaction
  return q3 === 'no_direct_interaction' || q3 == null
}

function hasAiVendorUse(state) {
  const q8 = state.s16_q8_ai_vendors_plugins_agents_integrations
  return (
    q8 === 'yes_ai_vendors_plugins_agents_integrations' ||
    q8 === 'testing_planning_ai_vendors_plugins_agents_integrations' ||
    q8 === 'not_sure'
  )
}

function hasAiConcernSignal(state, tags) {
  if (shouldS16EarlyExit(state, tags)) {
    return false
  }
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  if (hasPriorAiSignal(state, tags)) {
    return true
  }
  const q1 = state.s16_q1_ai_use_status
  if (q1 === 'not_sure' || q1 === 'testing_or_planning') {
    return true
  }
  return (state.s16_q2_ai_use_cases ?? []).length > 0
}

function shouldShowS16Q2(state, tags) {
  return q1IndicatesAiUse(state.s16_q1_ai_use_status) || hasPriorAiSignal(state, tags)
}

function shouldShowS16Q3(state) {
  if (q2OnlyInternalAdminNoExternal(state.s16_q2_ai_use_cases ?? [])) {
    return false
  }
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], Q3_Q2_TRIGGERS)
}

function shouldShowS16Q4(state) {
  if (isInternalOnlyLowSensitivityAi(state)) {
    return false
  }

  const q3 = state.s16_q3_direct_ai_interaction
  if (
    q3 === 'yes_direct_interaction' ||
    q3 === 'planning_testing_direct_interaction' ||
    q3 === 'not_sure'
  ) {
    return true
  }

  return includesAny(state.s16_q2_ai_use_cases ?? [], Q4_Q2_TRIGGERS)
}

function shouldShowS16Q5(state) {
  return q1IndicatesAiUse(state.s16_q1_ai_use_status)
}

function shouldShowS16Q6(state) {
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'drafting_contracts_policies_business_documents',
    'funding_grant_investor_materials',
  ])
}

function shouldShowS16Q7(state) {
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'customer_client_donor_user_communications',
    'summaries_research_analysis_decision_support',
    'product_service_features',
    'chatbots_agents_assistants_automated_responses',
    'hiring_hr_worker_contractor_management',
    'pricing_eligibility_screening_scoring_approvals',
    'data_analysis_analytics_reporting',
    'internal_operations_admin_workflow',
  ])
}

function shouldShowS16Q8(state) {
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'chatbots_agents_assistants_automated_responses',
    'product_service_features',
    'internal_operations_admin_workflow',
    'coding_software_product_design_technical_workflows',
    'data_analysis_analytics_reporting',
    'customer_client_donor_user_communications',
    'summaries_research_analysis_decision_support',
  ])
}

function shouldShowS16Q9(state) {
  const q8 = state.s16_q8_ai_vendors_plugins_agents_integrations
  if (
    q8 === 'yes_ai_vendors_plugins_agents_integrations' ||
    q8 === 'testing_planning_ai_vendors_plugins_agents_integrations' ||
    q8 === 'not_sure'
  ) {
    return true
  }
  const q1 = state.s16_q1_ai_use_status
  return (
    q1 === 'yes_regularly' ||
    q1 === 'yes_occasionally' ||
    q1 === 'testing_or_planning' ||
    q1 === 'not_sure'
  )
}

function shouldShowS16Q10(state) {
  const q1 = state.s16_q1_ai_use_status
  if (
    q1 === 'yes_regularly' ||
    q1 === 'yes_occasionally' ||
    q1 === 'testing_or_planning' ||
    q1 === 'not_sure'
  ) {
    return true
  }
  const q8 = state.s16_q8_ai_vendors_plugins_agents_integrations
  return (
    q8 === 'yes_ai_vendors_plugins_agents_integrations' ||
    q8 === 'testing_planning_ai_vendors_plugins_agents_integrations' ||
    q8 === 'not_sure'
  )
}

function shouldShowS16Q11(state) {
  if (!hasAiVendorUse(state)) {
    const q2 = state.s16_q2_ai_use_cases ?? []
    if (
      !includesAny(q2, [
        'internal_operations_admin_workflow',
        'customer_client_donor_user_communications',
        'data_analysis_analytics_reporting',
        'product_service_features',
        'chatbots_agents_assistants_automated_responses',
        'coding_software_product_design_technical_workflows',
        'summaries_research_analysis_decision_support',
      ])
    ) {
      return false
    }
  }

  if (hasAiVendorUse(state)) {
    return true
  }

  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'internal_operations_admin_workflow',
    'customer_client_donor_user_communications',
    'data_analysis_analytics_reporting',
    'product_service_features',
    'chatbots_agents_assistants_automated_responses',
    'coding_software_product_design_technical_workflows',
    'summaries_research_analysis_decision_support',
  ])
}

function shouldShowS16Q12(state) {
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'marketing_sales_public_content',
    'funding_grant_investor_materials',
    'summaries_research_analysis_decision_support',
    'customer_client_donor_user_communications',
    'data_analysis_analytics_reporting',
    'creative_assets',
  ])
}

function shouldShowS16Q13(state) {
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'hiring_hr_worker_contractor_management',
    'pricing_eligibility_screening_scoring_approvals',
    'summaries_research_analysis_decision_support',
    'data_analysis_analytics_reporting',
    'product_service_features',
    'customer_client_donor_user_communications',
  ])
}

function shouldShowS16Q14(state) {
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'product_service_features',
    'customer_client_donor_user_communications',
    'hiring_hr_worker_contractor_management',
    'pricing_eligibility_screening_scoring_approvals',
    'summaries_research_analysis_decision_support',
    'data_analysis_analytics_reporting',
    'chatbots_agents_assistants_automated_responses',
  ])
}

function shouldShowS16Q15(state) {
  if (isInternalOnlyLowSensitivityAi(state)) {
    return false
  }

  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }

  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'customer_client_donor_user_communications',
    'product_service_features',
    'chatbots_agents_assistants_automated_responses',
    'hiring_hr_worker_contractor_management',
    'coding_software_product_design_technical_workflows',
    'data_analysis_analytics_reporting',
    'drafting_contracts_policies_business_documents',
    'funding_grant_investor_materials',
  ])
}

function shouldShowS16Q16(state) {
  if (q1IndicatesAiUse(state.s16_q1_ai_use_status)) {
    return true
  }
  return includesAny(state.s16_q2_ai_use_cases ?? [], [
    'hiring_hr_worker_contractor_management',
    'coding_software_product_design_technical_workflows',
    'customer_client_donor_user_communications',
    'drafting_contracts_policies_business_documents',
    'internal_operations_admin_workflow',
    'marketing_sales_public_content',
    'funding_grant_investor_materials',
    'data_analysis_analytics_reporting',
    'creative_assets',
    'product_service_features',
    'chatbots_agents_assistants_automated_responses',
  ])
}

function shouldShowS16Q17(state, tags) {
  return hasAiConcernSignal(state, tags)
}

const S16_SHOW_CHECKERS = {
  q1: () => true,
  q2: shouldShowS16Q2,
  q3: shouldShowS16Q3,
  q4: shouldShowS16Q4,
  q5: shouldShowS16Q5,
  q6: shouldShowS16Q6,
  q7: shouldShowS16Q7,
  q8: shouldShowS16Q8,
  q9: shouldShowS16Q9,
  q10: shouldShowS16Q10,
  q11: shouldShowS16Q11,
  q12: shouldShowS16Q12,
  q13: shouldShowS16Q13,
  q14: shouldShowS16Q14,
  q15: shouldShowS16Q15,
  q16: shouldShowS16Q16,
  q17: shouldShowS16Q17,
}

export function getVisibleS16QuestionIds(state, tags) {
  if (state.s16_q1_ai_use_status == null) {
    return ['q1']
  }

  if (shouldS16EarlyExit(state, tags)) {
    return ['q1']
  }

  return S16_QUESTION_ORDER.filter((questionId) => {
    const checker = S16_SHOW_CHECKERS[questionId]
    if (!checker) {
      return false
    }
    return checker(state, tags)
  })
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

export function computeS16Q7SensitiveDataFlag(state) {
  const q7 = state.s16_q7_sensitive_or_confidential_data_in_ai
  return q7 === 'yes_sensitive_confidential_data_in_ai' || q7 === 'not_sure'
}

export function computeS16DerivedFields(state, tags) {
  return {
    s16_early_exit: shouldS16EarlyExit(state, tags),
    s16_q7_sensitive_data_flag: computeS16Q7SensitiveDataFlag(state),
  }
}

export function resolveS16QuestionAnswer(questionId, state) {
  const question = s16QuestionsById[questionId]
  if (!question) {
    return null
  }

  const fieldValue = state[question.field]

  if (question.mode === 'multi') {
    const selectedValues = fieldValue ?? []
    const baseStatus = highestStatus(
      selectedValues.map((value) => getOptionBaseStatus(question, value)),
    )
    return {
      value: selectedValues,
      baseStatus,
      resolvedStatus: baseStatus,
    }
  }

  const baseStatus = getOptionBaseStatus(question, fieldValue)
  return {
    value: fieldValue,
    baseStatus,
    resolvedStatus: baseStatus,
  }
}

export function getS16QuestionById(id) {
  return s16QuestionsById[id]
}
