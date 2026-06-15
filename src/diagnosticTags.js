function includesAny(arr, values) {
  return values.some((v) => arr.includes(v))
}

const NEXT_MOVE_TAG_MAP = {
  raising_investment_business_funding: 'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  signing_agreement: 'MOVE_SIGNING_AGREEMENT',
  seeking_donations_grants_sponsors: 'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  demo_day_pitch_prize_program: 'MOVE_DEMO_DAY_PITCH_PRIZE_PROGRAM',
  enterprise_customers: 'MOVE_ENTERPRISE_CUSTOMERS',
  platform_channel_sales: 'MOVE_PLATFORM_CHANNEL_SALES',
}

const TEAM_TAG_MAP = {
  cofounder_partner: 'TEAM_COFOUNDER_PARTNER',
  compensated_advisors: 'TEAM_ADVISORS_COMPENSATED',
  contractors: 'TEAM_CONTRACTORS',
  employees: 'TEAM_EMPLOYEES',
  unpaid_helpers: 'TEAM_INTERNS',
  overseas: 'TEAM_OVERSEAS',
}

const STRUCTURE_TAG_MAP = {
  nonprofit: 'STRUCTURE_NONPROFIT',
  fiscal_sponsorship: 'STRUCTURE_FISCAL_SPONSORSHIP',
  hybrid_for_profit_nonprofit: 'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
}

const MODEL_TAG_MAP = {
  service: 'MODEL_SERVICE',
  saas_software_ai: 'MODEL_SAAS_SOFTWARE_AI',
  ecomm_physical: 'MODEL_ECOMM_PHYSICAL',
  marketplace_platform: 'MODEL_MARKETPLACE_PLATFORM',
  content_creator: 'MODEL_CONTENT_CREATOR',
  hardware_connected: 'MODEL_HARDWARE_CONNECTED',
  high_scrutiny: 'MODEL_HIGH_SCRUTINY',
}

const AI_TAG_MAP = {
  work_product: 'AI_WORK_PRODUCT',
  customer_facing_product: 'AI_CUSTOMER_FACING_PRODUCT',
  decision_high_risk: 'AI_DECISION_HIGH_RISK',
  product_builder: 'AI_PRODUCT_BUILDER',
}

const EVENT_TAG_MAP = {
  money_ownership_change: 'EVENT_MONEY_OWNERSHIP_CHANGE',
  donor_grant_sponsor_issue: 'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  warning_legal_platform: 'EVENT_WARNING_LEGAL_PLATFORM',
  data_security_concern: 'EVENT_DATA_SECURITY_CONCERN',
  key_person_change: 'EVENT_KEY_PERSON_CHANGE',
  signed_without_review: 'EVENT_SIGNED_WITHOUT_REVIEW',
  customer_payment_service_issue: 'EVENT_CUSTOMER_PAYMENT_SERVICE_ISSUE',
  accelerator_prize_safe_program_funding:
    'EVENT_ACCELERATOR_PRIZE_SAFE_PROGRAM_FUNDING',
}

function addMappedTags(tags, values, map) {
  for (const value of values) {
    const tag = map[value]
    if (tag) {
      tags.add(tag)
    }
  }
}

/**
 * Builds routing tags from gate answers and section answers for show-condition checks.
 */
export function buildDiagnosticContext(state) {
  const tags = new Set()

  addMappedTags(tags, state.next_moves ?? [], NEXT_MOVE_TAG_MAP)
  addMappedTags(tags, state.team_structure ?? [], TEAM_TAG_MAP)
  addMappedTags(tags, state.structure_orientation ?? [], STRUCTURE_TAG_MAP)
  addMappedTags(tags, state.business_models ?? [], MODEL_TAG_MAP)
  addMappedTags(tags, state.recent_events_12mo ?? [], EVENT_TAG_MAP)
  addMappedTags(tags, state.ai_use ?? [], AI_TAG_MAP)

  if (state.s1_q1_current_stage) {
    tags.add(state.s1_q1_current_stage)
  }
  if (state.s1_q2_current_structure) {
    tags.add(state.s1_q2_current_structure)
  }

  const s3_q1 = state.s3_q1_offer_type ?? []
  const s3_q6 = state.s3_q6_paid_free_beta_pilot_trial_status ?? []
  for (const value of s3_q1) {
    tags.add(value)
  }
  for (const value of s3_q6) {
    tags.add(value)
  }

  return {
    tags,
    diagnosticStoppedAtBoundary: Boolean(state.diagnosticStoppedAtBoundary),
    s1_q2_current_structure: state.s1_q2_current_structure ?? null,
    s3_q1_offer_type: s3_q1,
    s3_q6_paid_free_beta_pilot_trial_status: s3_q6,
    s2_q1_public_names_brands_products_programs:
      state.s2_q1_public_names_brands_products_programs ?? null,
    s2_q5_creator_source_awareness: state.s2_q5_creator_source_awareness ?? null,
    s2_q6_creator_rights_permissions_documented:
      state.s2_q6_creator_rights_permissions_documented ?? null,
    s2_q8_original_content_methods_toolkits:
      state.s2_q8_original_content_methods_toolkits ?? null,
    s2_q14_licensing_others_to_use_assets:
      state.s2_q14_licensing_others_to_use_assets ?? null,
    s2AnswersQ1ThroughQ15: {
      s2_q1_public_names_brands_products_programs:
        state.s2_q1_public_names_brands_products_programs ?? null,
      s2_q2_similar_name_search_awareness:
        state.s2_q2_similar_name_search_awareness ?? null,
      s2_q3_trademark_registration_records:
        state.s2_q3_trademark_registration_records ?? null,
      s2_q4_domains_handles_accounts_access:
        state.s2_q4_domains_handles_accounts_access ?? null,
      s2_q5_creator_source_awareness: state.s2_q5_creator_source_awareness ?? null,
      s2_q6_creator_rights_permissions_documented:
        state.s2_q6_creator_rights_permissions_documented ?? null,
      s2_q7_pre_existing_contributor_work_documented:
        state.s2_q7_pre_existing_contributor_work_documented ?? null,
      s2_q8_original_content_methods_toolkits:
        state.s2_q8_original_content_methods_toolkits ?? null,
      s2_q9_ai_generated_or_assisted_assets:
        state.s2_q9_ai_generated_or_assisted_assets ?? null,
      s2_q10_third_party_content_templates_media_research:
        state.s2_q10_third_party_content_templates_media_research ?? null,
      s2_q11_technical_assets_sources: state.s2_q11_technical_assets_sources ?? null,
      s2_q12_data_training_prompts_model_outputs_user_data:
        state.s2_q12_data_training_prompts_model_outputs_user_data ?? null,
      s2_q13_public_proof_media_permissions:
        state.s2_q13_public_proof_media_permissions ?? null,
      s2_q14_licensing_others_to_use_assets:
        state.s2_q14_licensing_others_to_use_assets ?? null,
      s2_q15_using_licensed_or_partner_assets:
        state.s2_q15_using_licensed_or_partner_assets ?? null,
    },
  }
}

export function hasTag(ctx, tag) {
  return ctx.tags.has(tag)
}

export function hasAnyTag(ctx, tagList) {
  return tagList.some((tag) => ctx.tags.has(tag))
}

export { includesAny }
