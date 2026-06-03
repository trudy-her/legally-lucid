function includesAny(arr, values) {
  return values.some((v) => arr.includes(v))
}

const NEXT_MOVE_TAG_MAP = {
  raising_investment_business_funding: 'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
  signing_agreement: 'MOVE_SIGNING_AGREEMENT',
  seeking_donations_grants_sponsors: 'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  enterprise_customers: 'MOVE_ENTERPRISE_CUSTOMERS',
}

const TEAM_TAG_MAP = {
  cofounder_partner: 'TEAM_COFOUNDER_PARTNER',
  compensated_advisors: 'TEAM_ADVISORS_COMPENSATED',
  contractors: 'TEAM_CONTRACTORS',
  employees: 'TEAM_EMPLOYEES',
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
}

const EVENT_TAG_MAP = {
  money_ownership_change: 'EVENT_MONEY_OWNERSHIP_CHANGE',
  donor_grant_sponsor_issue: 'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
  warning_legal_platform: 'EVENT_WARNING_LEGAL_PLATFORM',
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
 * Builds routing tags from gate answers and S1 answers for show-condition checks.
 */
export function buildDiagnosticContext(state) {
  const tags = new Set()

  addMappedTags(tags, state.next_moves ?? [], NEXT_MOVE_TAG_MAP)
  addMappedTags(tags, state.team_structure ?? [], TEAM_TAG_MAP)
  addMappedTags(tags, state.structure_orientation ?? [], STRUCTURE_TAG_MAP)
  addMappedTags(tags, state.business_models ?? [], MODEL_TAG_MAP)
  addMappedTags(tags, state.recent_events_12mo ?? [], EVENT_TAG_MAP)

  if (state.s1_q1_current_stage) {
    tags.add(state.s1_q1_current_stage)
  }
  if (state.s1_q2_current_structure) {
    tags.add(state.s1_q2_current_structure)
  }

  return {
    tags,
    diagnosticStoppedAtBoundary: Boolean(state.diagnosticStoppedAtBoundary),
    s1_q2_current_structure: state.s1_q2_current_structure ?? null,
  }
}

export function hasTag(ctx, tag) {
  return ctx.tags.has(tag)
}

export function hasAnyTag(ctx, tagList) {
  return tagList.some((tag) => ctx.tags.has(tag))
}

export { includesAny }
