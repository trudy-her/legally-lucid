import { hasAnyTag } from './diagnosticTags.js'

function includesAny(arr, values) {
  return values.some((v) => arr.includes(v))
}

export const S5_SECTION_HEADER =
  'S5 — Public Claims, Marketing Language, and Fundraising Language'

const S5_SHOW_TAGS = [
  'MODEL_SERVICE',
  'MODEL_CONTENT_CREATOR',
  'MODEL_ECOMM_PHYSICAL',
  'MODEL_SAAS_SOFTWARE_AI',
  'MODEL_MARKETPLACE_PLATFORM',
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'AI_CUSTOMER_FACING_PRODUCT',
  'AI_WORK_PRODUCT',
  'TEAM_CONTRACTORS',
  'MOVE_PLATFORM_CHANNEL_SALES',
]

const STATUS_TIER = {
  'Foundations in place': 1,
  'Review recommended': 2,
  'Professional review strongly recommended': 3,
}

const PATH_CAPS = {
  no_public_claims: 1,
  basic_public_presence: 5,
  money_fundraising_sponsor_claims: 8,
  results_testimonial_outcome_claims: 8,
  ai_privacy_security_tech_claims: 7,
  health_wellness_safety_claims: 7,
  credentials_partnership_authority_claims: 7,
}

const PATH_QUESTION_ORDER = {
  no_public_claims: ['q1'],
  basic_public_presence: ['q1', 'q2', 'q3', 'q4', 'q13', 'q16', 'q15', 'q12'],
  money_fundraising_sponsor_claims: [
    'q1',
    'q2',
    'q3',
    'q4',
    'q8',
    'q9',
    'q7',
    'q15',
    'q16',
    'q13',
    'q14',
    'q10',
    'q12',
  ],
  results_testimonial_outcome_claims: [
    'q1',
    'q2',
    'q3',
    'q4',
    'q5',
    'q6',
    'q14',
    'q15',
    'q16',
    'q13',
    'q12',
  ],
  ai_privacy_security_tech_claims: [
    'q1',
    'q2',
    'q3',
    'q4',
    'q10',
    'q14',
    'q15',
    'q16',
    'q13',
    'q12',
  ],
  health_wellness_safety_claims: [
    'q1',
    'q2',
    'q3',
    'q4',
    'q11',
    'q5',
    'q15',
    'q16',
    'q13',
    'q12',
  ],
  credentials_partnership_authority_claims: [
    'q1',
    'q2',
    'q3',
    'q4',
    'q7',
    'q9',
    'q15',
    'q16',
    'q13',
    'q12',
  ],
  active_public_issue: [
    'q1',
    'q16',
    'q3',
    'q4',
    'q15',
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
  ],
}

export const DEFAULT_S30_INHERITED_SIGNALS = {
  has_donor_grant_sponsor_funding: false,
  has_public_claims_or_impact_statements: false,
  has_people_or_program_delivery_signal: false,
}

export const DEFAULT_S16_INHERITED_SIGNALS = {
  has_ai_public_content_signal: false,
  has_ai_content_creation_signal: false,
}

export const DEFAULT_S10_INHERITED_SIGNALS = {
  has_public_technology_or_security_claim_signal: false,
  has_ai_tool_or_automation_signal: false,
}

export const DEFAULT_S20_INHERITED_SIGNALS = {
  has_program_event_service_signal: false,
}

export function getS30InheritedSignals(state) {
  return {
    ...DEFAULT_S30_INHERITED_SIGNALS,
    ...(state.s30_inherited_signals ?? {}),
  }
}

export function getS16InheritedSignals(state) {
  return {
    ...DEFAULT_S16_INHERITED_SIGNALS,
    ...(state.s16_inherited_signals ?? {}),
  }
}

export function getS10InheritedSignals(state) {
  return {
    ...DEFAULT_S10_INHERITED_SIGNALS,
    ...(state.s10_inherited_signals ?? {}),
  }
}

export function getS20InheritedSignals(state) {
  return {
    ...DEFAULT_S20_INHERITED_SIGNALS,
    ...(state.s20_inherited_signals ?? {}),
  }
}

export function gatingHasAiAssistedPublicContentSignal(state) {
  const aiUse = (state.ai_use ?? []).filter((value) => value !== 'none')
  return aiUse.length > 0
}

function q1HasSubstantiveChannel(q1) {
  return (q1 ?? []).some((value) => value !== 'not_applicable' && value !== 'not_sure')
}

function q1IsNotApplicableOnly(q1) {
  return (q1 ?? []).length === 1 && q1[0] === 'not_applicable'
}

export function hasGatePublicFacingChannelSignal(state) {
  if (state.sensitive_claims === 'yes' || state.sensitive_claims === 'not_sure') {
    return true
  }

  if (
    includesAny(state.next_moves ?? [], [
      'launching',
      'seeking_donations_grants_sponsors',
      'demo_day_pitch_prize_program',
      'platform_channel_sales',
      'raising_investment_business_funding',
    ])
  ) {
    return true
  }

  if (
    includesAny(state.growth_path ?? [], [
      'donor_grant_sponsor_growth',
      'nonprofit_mission_expansion',
      'platform_marketplace',
      'outside_capital',
    ])
  ) {
    return true
  }

  return gatingHasAiAssistedPublicContentSignal(state)
}

export function isS5Triggered(state, tags) {
  if (hasAnyTag({ tags }, S5_SHOW_TAGS)) {
    return true
  }
  return hasGatePublicFacingChannelSignal(state)
}

export function entersS5ThroughActivePublicIssue(state) {
  if (
    includesAny(state.recent_events_12mo ?? [], [
      'warning_legal_platform',
      'customer_payment_service_issue',
      'donor_grant_sponsor_issue',
    ])
  ) {
    return true
  }
  return (state.next_moves ?? []).includes('handling_problem')
}

export const s5q1 = {
  id: 'q1',
  field: 's5_q1_public_facing_channels',
  mode: 'multi',
  question:
    'Where does your business, organization, project, or program publish public-facing language?',
  helper:
    'Select broad categories only. Do not paste copy, screenshots, links, posts, ads, or documents.',
  required: true,
  moreLabel: 'More channels',
  primaryOptions: [
    { value: 'website_or_landing_pages', label: 'Website or landing pages' },
    { value: 'social_media', label: 'Social media posts or profiles' },
    { value: 'email_or_newsletter', label: 'Email newsletter or public email campaigns' },
    { value: 'sales_offer_checkout_pages', label: 'Sales pages, offer pages, or checkout pages' },
    {
      value: 'pitch_sponsor_grant_funder_materials',
      label: 'Pitch decks, sponsor decks, grant materials, or investor/funder materials',
    },
    {
      value: 'donation_fundraising_impact_pages',
      label: 'Donation pages, fundraising pages, or impact pages',
    },
    {
      value: 'events_webinars_podcasts_videos',
      label: 'Public events, webinars, podcasts, videos, or interviews',
    },
    {
      value: 'testimonials_reviews_case_studies',
      label: 'Testimonials, reviews, case studies, or client/customer stories',
    },
  ],
  moreOptions: [
    {
      value: 'app_marketplace_directory_listing',
      label: 'App store, marketplace, directory, or platform listing',
    },
    {
      value: 'ads_paid_campaigns_affiliate_pages',
      label: 'Ads, boosted posts, paid campaigns, or affiliate pages',
    },
    {
      value: 'press_awards_media_bio',
      label: 'Press, awards, media, speaker bio, or public biography',
    },
    {
      value: 'proposals_rfp_sponsor_partnership_packets',
      label: 'Proposals, public RFP responses, sponsor packets, or partnership packets',
    },
  ],
  stickyOptions: [
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'This does not apply right now' },
  ],
}

export const s5q2 = {
  id: 'q2',
  field: 's5_q2_public_statement_types',
  mode: 'multi',
  question: 'What kinds of public statements do you make or plan to make?',
  helper: 'Select broad categories only. Do not paste the statements.',
  required: true,
  moreLabel: 'More statement types',
  primaryOptions: [
    {
      value: 'product_service_offer_statements',
      label: 'What we do, sell, offer, teach, build, or provide',
    },
    {
      value: 'results_outcomes_performance_statements',
      label: 'Results, outcomes, growth, savings, performance, or success stories',
    },
    {
      value: 'testimonial_case_study_statements',
      label: 'Testimonials, reviews, endorsements, case studies, or client/customer stories',
    },
    {
      value: 'credentials_authority_statements',
      label: 'Credentials, expertise, certifications, awards, rankings, media, or authority',
    },
    {
      value: 'partner_sponsor_funder_affiliation_statements',
      label: 'Partners, sponsors, funders, affiliations, customers, clients, or logos',
    },
    {
      value: 'pricing_refund_guarantee_payment_statements',
      label: 'Pricing, discounts, refunds, guarantees, subscriptions, or payment terms',
    },
    {
      value: 'donation_grant_sponsor_impact_statements',
      label: 'Donations, grants, sponsorships, fundraising, impact, or how money is used',
    },
    {
      value: 'ai_privacy_security_technology_statements',
      label: 'AI, automation, privacy, security, confidentiality, data, or technology',
    },
  ],
  moreOptions: [
    {
      value: 'health_wellness_safety_statements',
      label: 'Health, wellness, safety, accessibility, prevention, treatment, healing, or care',
    },
    {
      value: 'availability_timeline_capacity_statements',
      label: 'Availability, timelines, launch dates, waitlists, spots, capacity, or deadlines',
    },
    {
      value: 'comparison_category_leadership_statements',
      label: 'Comparisons, first, only, best, leading, or category leadership',
    },
  ],
  stickyOptions: [
    { value: 'not_sure', label: 'I am not sure' },
    { value: 'not_applicable', label: 'This does not apply right now' },
  ],
}

export const s5q3 = {
  id: 'q3',
  field: 's5_q3_review_process',
  mode: 'single',
  question:
    'Is there a process for reviewing important public-facing language before it is published, sent, posted, pitched, or reused?',
  helper:
    'This can be simple. The question is whether someone checks major statements before they go out.',
  required: true,
  options: [
    {
      value: 'public_language_review_process_exists',
      label: 'Yes, important public language is reviewed before it goes out',
      baseStatus: 'Foundations in place',
    },
    {
      value: 'review_process_inconsistent',
      label: 'Some public language is reviewed, but not consistently',
      baseStatus: 'Review recommended',
    },
    {
      value: 'different_people_publish_without_shared_process',
      label: 'Different people publish or reuse language without a shared process',
      baseStatus: 'Review recommended',
    },
    {
      value: 'publish_first_review_later',
      label: 'We usually publish quickly and review later if needed',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_review_process',
      label: 'There is no regular review process',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q4 = {
  id: 'q4',
  field: 's5_q4_claim_support_records',
  mode: 'single',
  question: 'Can you find records supporting your major public statements?',
  helper:
    'Think about records behind results, testimonials, credentials, sponsor language, impact statements, pricing, refunds, AI claims, privacy claims, security claims, health or wellness claims, and program claims. Do not upload records here.',
  required: true,
  options: [
    {
      value: 'claim_support_records_organized',
      label: 'Yes, records supporting major public statements are organized enough to review',
      baseStatus: 'Foundations in place',
    },
    {
      value: 'claim_support_records_scattered',
      label: 'Some records exist, but they may be scattered',
      baseStatus: 'Review recommended',
    },
    {
      value: 'public_statements_may_need_support',
      label: 'Some public statements may need records to support them',
      baseStatus: 'Review recommended',
    },
    {
      value: 'public_statements_may_be_outdated',
      label: 'Some public statements may be outdated or reused from earlier materials',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_claim_support_record_process',
      label: 'We do not have a clear process for keeping support records',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q5 = {
  id: 'q5',
  field: 's5_q5_results_outcome_statements',
  mode: 'multi',
  question:
    'Do you make public statements about results, outcomes, growth, savings, performance, revenue, impact, before-and-after changes, or success?',
  helper: 'Select broad categories only. Do not paste examples or numbers.',
  required: true,
  options: [
    {
      value: 'describes_results_or_outcomes',
      label: 'We describe client, customer, participant, donor, funder, or program results',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_savings_revenue_growth_performance',
      label: 'We describe savings, revenue, growth, performance, efficiency, or business improvement',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_impact_or_mission_results',
      label: 'We describe impact, community benefit, outcomes, or mission results',
      baseStatus: 'Review recommended',
    },
    {
      value: 'uses_before_after_or_progress_stories',
      label: 'We use before-and-after, transformation, comparison, or progress stories',
      baseStatus: 'Review recommended',
    },
    {
      value: 'uses_high_confidence_or_comparison_words',
      label: 'We use words like proven, guaranteed, best, first, only, leading, or no risk',
      baseStatus: 'Review recommended',
    },
    {
      value: 'results_may_need_support',
      label: 'Some results or outcomes may be hard to support with records',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q6 = {
  id: 'q6',
  field: 's5_q6_testimonials_social_proof',
  mode: 'multi',
  question:
    'Do you use testimonials, reviews, endorsements, client stories, customer stories, donor stories, participant stories, case studies, screenshots, ratings, or social proof?',
  helper:
    'Select broad categories only. Do not paste testimonials, screenshots, names, or stories.',
  required: true,
  options: [
    {
      value: 'uses_testimonials_reviews_endorsements',
      label: 'We use testimonials, reviews, endorsements, or ratings',
      baseStatus: 'Review recommended',
    },
    {
      value: 'uses_case_studies_or_stories',
      label: 'We use case studies, client stories, customer stories, donor stories, or participant stories',
      baseStatus: 'Review recommended',
    },
    {
      value: 'uses_screenshots_social_proof_comments',
      label: 'We use screenshots, social proof, comments, messages, or public praise',
      baseStatus: 'Review recommended',
    },
    {
      value: 'uses_before_after_or_personal_outcome_stories',
      label: 'We use before-and-after examples or personal outcome stories',
      baseStatus: 'Review recommended',
    },
    {
      value: 'testimonials_reused_across_channels',
      label: 'Testimonials or stories may be reused across different channels',
      baseStatus: 'Review recommended',
    },
    {
      value: 'permission_context_currentness_unclear',
      label: 'Permission, context, or currentness may be unclear',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q7 = {
  id: 'q7',
  field: 's5_q7_credentials_authority_affiliations',
  mode: 'multi',
  question:
    'Do you make public statements about credentials, expertise, certifications, awards, rankings, press, partners, sponsors, funders, clients, customers, affiliations, or logos?',
  helper: 'Select broad categories only. Do not enter names or upload credentials.',
  required: true,
  options: [
    {
      value: 'mentions_credentials_training_expertise',
      label: 'We mention credentials, training, expertise, certifications, licenses, or qualifications',
      baseStatus: 'Review recommended',
    },
    {
      value: 'mentions_awards_rankings_press_recognition',
      label: 'We mention awards, rankings, media, press, speaking, or recognition',
      baseStatus: 'Review recommended',
    },
    {
      value: 'uses_authority_or_category_words',
      label: 'We use words like certified, official, approved, expert, leading, first, only, or best',
      baseStatus: 'Review recommended',
    },
    {
      value: 'mentions_partners_sponsors_funders_clients',
      label: 'We mention partners, sponsors, funders, clients, customers, or affiliations',
      baseStatus: 'Review recommended',
    },
    {
      value: 'uses_logos_badges_or_marks',
      label: 'We use logos, badges, seals, partner marks, sponsor marks, client logos, or media logos',
      baseStatus: 'Review recommended',
    },
    {
      value: 'affiliation_permission_currentness_unclear',
      label: 'Some affiliation, permission, or currentness records may be unclear',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q8 = {
  id: 'q8',
  field: 's5_q8_money_pricing_fundraising_statements',
  mode: 'multi',
  question:
    'Do you make public statements about pricing, discounts, subscriptions, refunds, guarantees, donations, grants, sponsorships, tax-deductible support, impact, or how money will be used?',
  helper:
    'Select broad categories only. Do not enter prices, amounts, donor names, sponsor names, funder names, or private terms.',
  required: true,
  options: [
    {
      value: 'describes_pricing_discounts_subscriptions_fees',
      label: 'We describe pricing, discounts, subscriptions, payment plans, or fees',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_refunds_cancellations_guarantees',
      label: 'We describe refunds, cancellations, guarantees, free trials, no risk, or satisfaction language',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_donations_grants_sponsorships_support',
      label: 'We describe donations, grants, sponsorships, fundraising, memberships, or support',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_tax_deductible_status_or_fiscal_sponsor',
      label: 'We describe tax-deductible donations, nonprofit status, fiscal sponsor status, or funder support',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_fund_use_restriction_matching_allocation',
      label: 'We describe how funds will be used, restricted, matched, allocated, or directed',
      baseStatus: 'Review recommended',
    },
    {
      value: 'money_or_fund_language_may_need_records',
      label: 'Some money, pricing, refund, donation, sponsor, or fund-use language may need records',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q9 = {
  id: 'q9',
  field: 's5_q9_sponsor_funder_recognition',
  mode: 'multi',
  question:
    'Are there public promises or expectations about naming, thanking, featuring, recognizing, or publicly acknowledging sponsors, funders, donors, members, partners, clients, customers, or grantmakers?',
  helper: 'Do not enter names, amounts, private terms, or recognition language.',
  required: true,
  options: [
    {
      value: 'recognition_records_clear',
      label: 'Recognition records are clear',
      baseStatus: 'Foundations in place',
    },
    {
      value: 'recognition_promised_publicly',
      label: 'Recognition has been promised publicly',
      baseStatus: 'Review recommended',
    },
    {
      value: 'names_logos_marks_used_publicly',
      label: 'Names, logos, badges, marks, or affiliations are used publicly',
      baseStatus: 'Review recommended',
    },
    {
      value: 'recognition_terms_scattered',
      label: 'Recognition terms may be scattered',
      baseStatus: 'Review recommended',
    },
    {
      value: 'recognition_language_or_records_may_need_review',
      label: 'Recognition language or records may need review',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q10 = {
  id: 'q10',
  field: 's5_q10_ai_privacy_security_tech_statements',
  mode: 'multi',
  question:
    'Do you make public statements about AI, automation, privacy, confidentiality, security, encryption, data protection, bias, accuracy, compliance, audits, certifications, platforms, tools, or technology?',
  helper:
    'Select broad categories only. Do not paste policies, screenshots, prompts, outputs, or technical records.',
  required: true,
  options: [
    {
      value: 'describes_ai_automation_or_model_use',
      label: 'We describe AI, automation, model use, or AI-generated outputs',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_accuracy_reliability_bias_or_human_review',
      label: 'We describe accuracy, reliability, bias, fairness, human review, or decision support',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_privacy_confidentiality_or_data_handling',
      label: 'We describe privacy, confidentiality, data protection, or how information is handled',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_security_encryption_audits_or_certifications',
      label: 'We describe security, encryption, secure storage, access controls, audits, or certifications',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_platforms_vendors_or_tools',
      label: 'We describe integrations, platforms, vendors, dashboards, portals, or tools',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_privacy_security_tech_claims_may_need_records',
      label: 'Some AI, privacy, security, or technology statements may need records',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q11 = {
  id: 'q11',
  field: 's5_q11_health_wellness_safety_statements',
  mode: 'multi',
  question:
    'Do you make public statements about health, wellness, safety, accessibility, or the outcomes of your programs?',
  helper:
    'Select broad categories only. Do not enter health details, participant details, client stories, or program records.',
  required: true,
  options: [
    {
      value: 'describes_health_wellness_healing_or_care',
      label: 'We describe health, wellness, healing, recovery, treatment, prevention, diagnosis, or care',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_personal_or_wellness_outcomes',
      label: 'We describe emotional, physical, mental, behavioral, spiritual, or personal outcomes',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_safety_accessibility_or_support',
      label: 'We describe safety, accessibility, inclusion, trauma-informed practices, accommodations, or participant support',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_program_event_or_service_outcomes',
      label: 'We describe program, event, retreat, class, cohort, or service outcomes',
      baseStatus: 'Review recommended',
    },
    {
      value: 'health_wellness_safety_claims_may_need_records',
      label: 'Some health, wellness, safety, or program statements may need records',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q12 = {
  id: 'q12',
  field: 's5_q12_availability_timeline_statements',
  mode: 'multi',
  question:
    'Do you make public statements about launch dates, waitlists, availability, limited spots, capacity, deadlines, product readiness, service readiness, or delivery timelines?',
  helper: 'Select broad categories only. Do not enter private launch plans or internal timelines.',
  required: true,
  options: [
    {
      value: 'describes_launch_timeline_deadline_availability',
      label: 'We describe launch dates, timelines, deadlines, or availability',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_capacity_waitlists_or_enrollment',
      label: 'We describe limited spots, capacity, waitlists, cohorts, or enrollment windows',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_product_service_program_readiness',
      label: 'We describe product, service, program, or platform readiness',
      baseStatus: 'Review recommended',
    },
    {
      value: 'describes_delivery_timing_or_response_time',
      label: 'We describe delivery timing, turnaround time, onboarding, implementation, or response time',
      baseStatus: 'Review recommended',
    },
    {
      value: 'availability_readiness_timeline_may_need_review',
      label: 'Some availability, readiness, or timeline language may need review',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q13 = {
  id: 'q13',
  field: 's5_q13_language_reuse_across_channels',
  mode: 'single',
  question:
    'Is public-facing language reused across websites, decks, emails, social media, ads, proposals, sponsor packets, grant materials, or platform listings?',
  helper: 'This helps identify whether older language may keep circulating. Do not paste the language.',
  required: true,
  options: [
    {
      value: 'reused_language_reviewed',
      label: 'Yes, and reused language is reviewed when updated or republished',
      baseStatus: 'Foundations in place',
    },
    {
      value: 'reused_language_updates_may_be_inconsistent',
      label: 'Yes, but updates may not happen everywhere',
      baseStatus: 'Review recommended',
    },
    {
      value: 'older_language_may_still_appear',
      label: 'Yes, older language may still appear in some places',
      baseStatus: 'Review recommended',
    },
    {
      value: 'language_not_usually_reused',
      label: 'We do not usually reuse public language',
      baseStatus: 'Foundations in place',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q14 = {
  id: 'q14',
  field: 's5_q14_ai_assisted_public_content',
  mode: 'multi',
  question:
    'Does anyone use AI tools to draft, summarize, edit, repurpose, or create public-facing content?',
  helper:
    'Do not paste prompts, outputs, private records, customer information, donor information, testimonial text, or confidential content.',
  required: true,
  options: [
    {
      value: 'ai_drafts_public_marketing_copy',
      label: 'AI helps draft or edit website, social, email, ad, or sales copy',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_drafts_fundraising_grant_sponsor_impact_content',
      label: 'AI helps draft fundraising, grant, sponsor, donor, or impact content',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_repurposes_testimonials_stories_or_reports',
      label: 'AI helps repurpose testimonials, stories, summaries, reports, or case studies',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_creates_claims_about_results_privacy_security_or_ai',
      label: 'AI helps create claims about results, outcomes, privacy, security, technology, or AI itself',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_content_reviewed_before_publication',
      label: 'AI-assisted content is reviewed before publication',
      baseStatus: 'Foundations in place',
    },
    {
      value: 'ai_public_content_review_unclear',
      label: 'The review process for AI-assisted public content is unclear',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q15 = {
  id: 'q15',
  field: 's5_q15_who_publishes_approves',
  mode: 'multi',
  question:
    'Who is involved in creating, approving, publishing, or reusing public-facing language?',
  helper: 'Select broad categories only. Do not enter names.',
  required: true,
  options: [
    {
      value: 'founder_owner_or_senior_leader',
      label: 'Founder, owner, executive director, CEO, or senior leader',
      baseStatus: 'Foundations in place',
    },
    {
      value: 'marketing_sales_fundraising_or_content_team',
      label: 'Marketing, communications, development, fundraising, sales, or content team',
      baseStatus: 'Foundations in place',
    },
    {
      value: 'contractor_agency_vendor_or_assistant',
      label: 'Contractor, agency, consultant, freelancer, vendor, or assistant',
      baseStatus: 'Review recommended',
    },
    {
      value: 'partner_sponsor_affiliate_ambassador_or_chapter',
      label: 'Partner, sponsor, funder, affiliate, ambassador, influencer, or chapter leader',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_or_automation_involved',
      label: 'AI tool or automation helps create or repurpose content',
      baseStatus: 'Review recommended',
    },
    {
      value: 'approval_responsibility_unclear',
      label: 'Approval responsibility is unclear',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'This does not apply right now',
      baseStatus: 'Foundations in place',
    },
  ],
}

export const s5q16 = {
  id: 'q16',
  field: 's5_q16_active_public_issue',
  mode: 'multi',
  question:
    'Has any current or recent issue come up involving public statements, marketing language, fundraising language, testimonials, endorsements, sponsor recognition, public claims, AI-assisted content, privacy or security statements, health or wellness statements, pricing, refunds, or public-facing materials?',
  helper:
    'Select only broad categories. Do not describe the issue here. You may want to gather records before responding, changing public statements, contacting others, taking down content, republishing, or making new commitments.',
  required: true,
  optionGroups: [
    {
      id: 'public_statement',
      options: [
        {
          value: 'public_statement_questioned',
          label: 'Someone questioned a public statement, claim, post, page, deck, ad, or campaign',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'public_statement_needs_review_or_update',
          label: 'A public statement may need to be changed, removed, corrected, or reviewed',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'statement_may_not_match_current_reality',
          label: 'A statement may not match current services, programs, pricing, results, or operations',
          baseStatus: 'Professional review strongly recommended',
        },
      ],
    },
    {
      id: 'stakeholder',
      options: [
        {
          value: 'stakeholder_question_or_concern',
          label: 'Customer, client, donor, sponsor, funder, member, partner, or platform asked a question or raised a concern',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'recognition_or_affiliation_issue',
          label: 'Sponsor, funder, donor, partner, client, customer, or affiliate recognition issue came up',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'fundraising_impact_or_fund_use_issue',
          label: 'Grant, sponsor, fundraising, donation, impact, or fund-use statement issue came up',
          baseStatus: 'Professional review strongly recommended',
        },
      ],
    },
    {
      id: 'testimonial',
      options: [
        {
          value: 'testimonial_endorsement_story_issue',
          label: 'Testimonial, review, endorsement, case study, story, screenshot, rating, or social proof issue came up',
          baseStatus: 'Professional review strongly recommended',
        },
      ],
    },
    {
      id: 'ai_privacy_health',
      options: [
        {
          value: 'ai_public_content_issue',
          label: 'AI-assisted content or AI-related public statement issue came up',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'privacy_security_technology_statement_issue',
          label: 'Privacy, confidentiality, data, security, technology, platform, or tool statement issue came up',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'health_wellness_safety_statement_issue',
          label: 'Health, wellness, safety, accessibility, care, program, or participant-support statement issue came up',
          baseStatus: 'Professional review strongly recommended',
        },
      ],
    },
    {
      id: 'notice_platform',
      options: [
        {
          value: 'platform_payment_or_account_issue',
          label: 'Platform, payment processor, ad account, marketplace, app store, or host raised an issue',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'notice_or_inquiry_received',
          label: 'Government agency, regulator, public funder, funder, sponsor, partner, or other organization sent a notice or inquiry',
          baseStatus: 'Professional review strongly recommended',
        },
        {
          value: 'claim_support_records_hard_to_find',
          label: 'Records supporting a public statement may be hard to find',
          baseStatus: 'Review recommended',
        },
      ],
    },
  ],
  stickyOptions: [
    { value: 'no_known_issues', label: 'No known issues', baseStatus: 'Foundations in place' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s5QuestionsById = {
  q1: s5q1,
  q2: s5q2,
  q3: s5q3,
  q4: s5q4,
  q5: s5q5,
  q6: s5q6,
  q7: s5q7,
  q8: s5q8,
  q9: s5q9,
  q10: s5q10,
  q11: s5q11,
  q12: s5q12,
  q13: s5q13,
  q14: s5q14,
  q15: s5q15,
  q16: s5q16,
}

function flattenQuestionOptions(question) {
  if (question.options) {
    return question.options
  }

  const grouped = (question.optionGroups ?? []).flatMap((group) => group.options)
  return [...grouped, ...(question.stickyOptions ?? [])]
}

function getOptionBaseStatus(question, value) {
  return flattenQuestionOptions(question).find((option) => option.value === value)?.baseStatus ?? null
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

function countSubstantiveQ1Channels(q1) {
  return (q1 ?? []).filter((value) => value !== 'not_applicable' && value !== 'not_sure').length
}

export function computeHasPublicFacingLanguage(state) {
  return q1HasSubstantiveChannel(state.s5_q1_public_facing_channels)
}

export function computeHasResultsOutcomeClaims(state) {
  const q2 = state.s5_q2_public_statement_types ?? []
  const q5 = state.s5_q5_results_outcome_statements ?? []

  if (
    includesAny(q2, [
      'results_outcomes_performance_statements',
      'comparison_category_leadership_statements',
      'donation_grant_sponsor_impact_statements',
      'health_wellness_safety_statements',
      'not_sure',
    ])
  ) {
    return true
  }

  return includesAny(q5, [
    'uses_before_after_or_progress_stories',
    'uses_high_confidence_or_comparison_words',
    'describes_results_or_outcomes',
    'describes_savings_revenue_growth_performance',
    'describes_impact_or_mission_results',
    'not_sure',
  ])
}

export function computeHasTestimonialOrCaseStudySignal(state) {
  return includesAny(state.s5_q6_testimonials_social_proof ?? [], [
    'uses_testimonials_reviews_endorsements',
    'uses_case_studies_or_stories',
    'uses_screenshots_social_proof_comments',
    'uses_before_after_or_personal_outcome_stories',
  ])
}

export function computeHasCredentialsAuthoritySignal(state) {
  return includesAny(state.s5_q7_credentials_authority_affiliations ?? [], [
    'mentions_credentials_training_expertise',
    'mentions_awards_rankings_press_recognition',
    'uses_authority_or_category_words',
    'mentions_partners_sponsors_funders_clients',
    'uses_logos_badges_or_marks',
  ])
}

export function computeHasMoneyFundraisingSponsorSignal(state) {
  const q8 = state.s5_q8_money_pricing_fundraising_statements ?? []
  const q9 = state.s5_q9_sponsor_funder_recognition ?? []

  if (
    includesAny(q8, [
      'describes_pricing_discounts_subscriptions_fees',
      'describes_refunds_cancellations_guarantees',
      'describes_donations_grants_sponsorships_support',
      'describes_tax_deductible_status_or_fiscal_sponsor',
      'describes_fund_use_restriction_matching_allocation',
    ])
  ) {
    return true
  }

  return includesAny(q9, [
    'recognition_promised_publicly',
    'names_logos_marks_used_publicly',
    'recognition_terms_scattered',
  ])
}

export function computeHasAiPrivacySecurityTechSignal(state) {
  const q10 = state.s5_q10_ai_privacy_security_tech_statements ?? []
  const q14 = state.s5_q14_ai_assisted_public_content ?? []

  if (
    includesAny(q10, [
      'describes_ai_automation_or_model_use',
      'describes_accuracy_reliability_bias_or_human_review',
      'describes_privacy_confidentiality_or_data_handling',
      'describes_security_encryption_audits_or_certifications',
    ])
  ) {
    return true
  }

  return includesAny(q14, [
    'ai_drafts_public_marketing_copy',
    'ai_drafts_fundraising_grant_sponsor_impact_content',
    'ai_repurposes_testimonials_stories_or_reports',
    'ai_creates_claims_about_results_privacy_security_or_ai',
  ])
}

export function computeHasHealthWellnessSafetySignal(state) {
  return includesAny(state.s5_q11_health_wellness_safety_statements ?? [], [
    'describes_health_wellness_healing_or_care',
    'describes_personal_or_wellness_outcomes',
    'describes_safety_accessibility_or_support',
    'describes_program_event_or_service_outcomes',
  ])
}

export function computeHasReviewProcessGap(state) {
  const q3 = state.s5_q3_review_process
  return (
    q3 === 'review_process_inconsistent' ||
    q3 === 'different_people_publish_without_shared_process' ||
    q3 === 'publish_first_review_later' ||
    q3 === 'no_review_process' ||
    q3 === 'not_sure'
  )
}

export function computeHasRecordSupportGap(state) {
  const q4 = state.s5_q4_claim_support_records
  return (
    q4 === 'claim_support_records_scattered' ||
    q4 === 'public_statements_may_need_support' ||
    q4 === 'public_statements_may_be_outdated' ||
    q4 === 'no_claim_support_record_process' ||
    q4 === 'not_sure'
  )
}

export function computeHasAiAssistedPublicContent(state) {
  return includesAny(state.s5_q14_ai_assisted_public_content ?? [], [
    'ai_drafts_public_marketing_copy',
    'ai_drafts_fundraising_grant_sponsor_impact_content',
    'ai_repurposes_testimonials_stories_or_reports',
    'ai_creates_claims_about_results_privacy_security_or_ai',
  ])
}

export function computeHasActiveS5Issue(state) {
  const q16 = state.s5_q16_active_public_issue ?? []
  if (q16.length === 0) {
    return false
  }
  return q16.some((value) => value !== 'no_known_issues' && value !== 'not_applicable')
}

export function computeS5PathType(state) {
  const q16 = state.s5_q16_active_public_issue ?? []
  if (q16.some((value) => value !== 'no_known_issues' && value !== 'not_sure')) {
    return 'active_public_issue'
  }

  const q1 = state.s5_q1_public_facing_channels ?? []
  if (q1IsNotApplicableOnly(q1)) {
    return 'no_public_claims'
  }

  const q2 = state.s5_q2_public_statement_types ?? []
  const s30 = getS30InheritedSignals(state)

  if (
    includesAny(q2, [
      'pricing_refund_guarantee_payment_statements',
      'donation_grant_sponsor_impact_statements',
      'partner_sponsor_funder_affiliation_statements',
    ]) ||
    s30.has_donor_grant_sponsor_funding
  ) {
    return 'money_fundraising_sponsor_claims'
  }

  if (
    includesAny(q2, [
      'results_outcomes_performance_statements',
      'testimonial_case_study_statements',
    ])
  ) {
    return 'results_testimonial_outcome_claims'
  }

  if (includesAny(q2, ['ai_privacy_security_technology_statements'])) {
    return 'ai_privacy_security_tech_claims'
  }

  if (includesAny(q2, ['health_wellness_safety_statements'])) {
    return 'health_wellness_safety_claims'
  }

  if (
    includesAny(q2, [
      'credentials_authority_statements',
      'partner_sponsor_funder_affiliation_statements',
    ])
  ) {
    return 'credentials_partnership_authority_claims'
  }

  if (q1HasSubstantiveChannel(q1)) {
    return 'basic_public_presence'
  }

  return 'basic_public_presence'
}

export function computeHasHighImpactPublicClaimPath(state) {
  const pathType = computeS5PathType(state)
  return (
    pathType === 'active_public_issue' ||
    pathType === 'money_fundraising_sponsor_claims' ||
    pathType === 'results_testimonial_outcome_claims' ||
    pathType === 'ai_privacy_security_tech_claims' ||
    pathType === 'health_wellness_safety_claims'
  )
}

function shouldShowS5Q2(state) {
  return q1HasSubstantiveChannel(state.s5_q1_public_facing_channels)
}

function shouldShowS5Q3(state) {
  return q1HasSubstantiveChannel(state.s5_q1_public_facing_channels)
}

function shouldShowS5Q4(state) {
  return q1HasSubstantiveChannel(state.s5_q1_public_facing_channels)
}

function shouldShowS5Q5(state) {
  const q2 = state.s5_q2_public_statement_types ?? []
  return includesAny(q2, [
    'results_outcomes_performance_statements',
    'comparison_category_leadership_statements',
    'donation_grant_sponsor_impact_statements',
    'health_wellness_safety_statements',
    'not_sure',
  ])
}

function shouldShowS5Q6(state) {
  const q1 = state.s5_q1_public_facing_channels ?? []
  const q2 = state.s5_q2_public_statement_types ?? []
  return (
    includesAny(q2, ['testimonial_case_study_statements']) ||
    q1.includes('testimonials_reviews_case_studies') ||
    q2.includes('not_sure')
  )
}

function shouldShowS5Q7(state) {
  const q1 = state.s5_q1_public_facing_channels ?? []
  const q2 = state.s5_q2_public_statement_types ?? []
  return (
    includesAny(q2, [
      'credentials_authority_statements',
      'partner_sponsor_funder_affiliation_statements',
      'comparison_category_leadership_statements',
      'not_sure',
    ]) ||
    q1.includes('press_awards_media_bio') ||
    q1.includes('proposals_rfp_sponsor_partnership_packets')
  )
}

function shouldShowS5Q8(state) {
  const q2 = state.s5_q2_public_statement_types ?? []
  const s30 = getS30InheritedSignals(state)
  return (
    includesAny(q2, [
      'pricing_refund_guarantee_payment_statements',
      'donation_grant_sponsor_impact_statements',
      'partner_sponsor_funder_affiliation_statements',
    ]) || s30.has_donor_grant_sponsor_funding
  )
}

function shouldShowS5Q9(state) {
  const q7 = state.s5_q7_credentials_authority_affiliations ?? []
  const q8 = state.s5_q8_money_pricing_fundraising_statements ?? []
  const s30 = getS30InheritedSignals(state)
  return (
    includesAny(q7, [
      'mentions_partners_sponsors_funders_clients',
      'uses_logos_badges_or_marks',
    ]) ||
    includesAny(q8, [
      'describes_donations_grants_sponsorships_support',
      'describes_tax_deductible_status_or_fiscal_sponsor',
    ]) ||
    s30.has_public_claims_or_impact_statements
  )
}

function shouldShowS5Q10(state) {
  const q2 = state.s5_q2_public_statement_types ?? []
  const s16 = getS16InheritedSignals(state)
  const s10 = getS10InheritedSignals(state)
  return (
    q2.includes('ai_privacy_security_technology_statements') ||
    s16.has_ai_public_content_signal ||
    s10.has_public_technology_or_security_claim_signal ||
    gatingHasAiAssistedPublicContentSignal(state)
  )
}

function shouldShowS5Q11(state) {
  const q2 = state.s5_q2_public_statement_types ?? []
  const s30 = getS30InheritedSignals(state)
  const s20 = getS20InheritedSignals(state)
  return (
    includesAny(q2, ['health_wellness_safety_statements', 'donation_grant_sponsor_impact_statements']) ||
    s30.has_people_or_program_delivery_signal ||
    s30.has_public_claims_or_impact_statements ||
    s20.has_program_event_service_signal
  )
}

function shouldShowS5Q12(state) {
  const q2 = state.s5_q2_public_statement_types ?? []
  return includesAny(q2, [
    'availability_timeline_capacity_statements',
    'product_service_offer_statements',
    'pricing_refund_guarantee_payment_statements',
    'not_sure',
  ])
}

function shouldShowS5Q13(state) {
  const q1 = state.s5_q1_public_facing_channels ?? []
  const q4 = state.s5_q4_claim_support_records
  const q6 = state.s5_q6_testimonials_social_proof ?? []
  return (
    countSubstantiveQ1Channels(q1) > 1 ||
    q4 === 'public_statements_may_be_outdated' ||
    q6.includes('testimonials_reused_across_channels')
  )
}

function shouldShowS5Q14(state) {
  const q2 = state.s5_q2_public_statement_types ?? []
  const q10 = state.s5_q10_ai_privacy_security_tech_statements ?? []
  const s16 = getS16InheritedSignals(state)
  const s10 = getS10InheritedSignals(state)
  return (
    q2.includes('ai_privacy_security_technology_statements') ||
    q10.includes('describes_ai_automation_or_model_use') ||
    s16.has_ai_content_creation_signal ||
    s10.has_ai_tool_or_automation_signal ||
    gatingHasAiAssistedPublicContentSignal(state)
  )
}

function shouldShowS5Q15(state) {
  const q1 = state.s5_q1_public_facing_channels ?? []
  return (
    computeHasReviewProcessGap(state) ||
    computeHasRecordSupportGap(state) ||
    q1.includes('pitch_sponsor_grant_funder_materials') ||
    q1.includes('ads_paid_campaigns_affiliate_pages') ||
    q1.includes('proposals_rfp_sponsor_partnership_packets') ||
    computeHasHighImpactPublicClaimPath(state)
  )
}

function shouldShowS5Q16(state) {
  return q1HasSubstantiveChannel(state.s5_q1_public_facing_channels)
}

const S5_SHOW_CHECKERS = {
  q1: () => true,
  q2: shouldShowS5Q2,
  q3: shouldShowS5Q3,
  q4: shouldShowS5Q4,
  q5: shouldShowS5Q5,
  q6: shouldShowS5Q6,
  q7: shouldShowS5Q7,
  q8: shouldShowS5Q8,
  q9: shouldShowS5Q9,
  q10: shouldShowS5Q10,
  q11: shouldShowS5Q11,
  q12: shouldShowS5Q12,
  q13: shouldShowS5Q13,
  q14: shouldShowS5Q14,
  q15: shouldShowS5Q15,
  q16: shouldShowS5Q16,
}

function getBaseQuestionOrder(state, pathType, activeEntry) {
  if (pathType === 'no_public_claims') {
    return ['q1']
  }

  let order = PATH_QUESTION_ORDER[pathType] ?? PATH_QUESTION_ORDER.basic_public_presence

  if (activeEntry) {
    const withoutQ16 = order.filter((id) => id !== 'q16')
    const q1Index = withoutQ16.indexOf('q1')
    const before = withoutQ16.slice(0, q1Index + 1)
    const after = withoutQ16.slice(q1Index + 1)
    order = [...before, 'q16', ...after]
  }

  return order
}

function applyPathCap(visible, pathType) {
  if (pathType === 'no_public_claims') {
    return visible.slice(0, 1)
  }

  if (pathType === 'active_public_issue') {
    const q16Index = visible.indexOf('q16')
    if (q16Index === -1) {
      return visible.slice(0, PATH_CAPS.money_fundraising_sponsor_claims)
    }
    return visible.slice(0, q16Index + 1 + 6)
  }

  const cap = PATH_CAPS[pathType]
  if (cap == null) {
    return visible
  }
  return visible.slice(0, cap)
}

export function shouldS5EarlyExit(state) {
  return q1IsNotApplicableOnly(state.s5_q1_public_facing_channels)
}

export function getVisibleS5QuestionIds(state) {
  if (state.s5_q1_public_facing_channels == null) {
    return ['q1']
  }

  if (shouldS5EarlyExit(state)) {
    return ['q1']
  }

  const pathType = computeS5PathType(state)
  const activeEntry = entersS5ThroughActivePublicIssue(state)
  const order = getBaseQuestionOrder(state, pathType, activeEntry)
  const visible = order.filter((questionId) => {
    const checker = S5_SHOW_CHECKERS[questionId]
    return checker ? checker(state) : false
  })

  return applyPathCap(visible, pathType)
}

export function buildS5InheritedSignals(state) {
  const pathType = computeS5PathType(state)
  return {
    s5_path_type: pathType,
    has_public_facing_language: computeHasPublicFacingLanguage(state),
    has_results_outcome_claims: computeHasResultsOutcomeClaims(state),
    has_testimonial_or_case_study_signal: computeHasTestimonialOrCaseStudySignal(state),
    has_credentials_authority_signal: computeHasCredentialsAuthoritySignal(state),
    has_money_fundraising_sponsor_signal: computeHasMoneyFundraisingSponsorSignal(state),
    has_ai_privacy_security_tech_signal: computeHasAiPrivacySecurityTechSignal(state),
    has_health_wellness_safety_signal: computeHasHealthWellnessSafetySignal(state),
    has_review_process_gap: computeHasReviewProcessGap(state),
    has_record_support_gap: computeHasRecordSupportGap(state),
    has_ai_assisted_public_content: computeHasAiAssistedPublicContent(state),
    has_high_impact_public_claim_path: computeHasHighImpactPublicClaimPath(state),
    has_active_s5_issue: computeHasActiveS5Issue(state),
  }
}

export function computeS5DerivedFields(state) {
  const inherited = buildS5InheritedSignals(state)
  return {
    s5_path_type: inherited.s5_path_type,
    s5_early_exit: shouldS5EarlyExit(state),
    s5_inherited_signals: inherited,
    HAS_PUBLIC_FACING_LANGUAGE: inherited.has_public_facing_language,
    HAS_RESULTS_OUTCOME_CLAIMS: inherited.has_results_outcome_claims,
    HAS_TESTIMONIAL_OR_CASE_STUDY_SIGNAL: inherited.has_testimonial_or_case_study_signal,
    HAS_CREDENTIALS_AUTHORITY_SIGNAL: inherited.has_credentials_authority_signal,
    HAS_MONEY_FUNDRAISING_SPONSOR_SIGNAL: inherited.has_money_fundraising_sponsor_signal,
    HAS_AI_PRIVACY_SECURITY_TECH_SIGNAL: inherited.has_ai_privacy_security_tech_signal,
    HAS_HEALTH_WELLNESS_SAFETY_SIGNAL: inherited.has_health_wellness_safety_signal,
    HAS_REVIEW_PROCESS_GAP: inherited.has_review_process_gap,
    HAS_RECORD_SUPPORT_GAP: inherited.has_record_support_gap,
    HAS_AI_ASSISTED_PUBLIC_CONTENT: inherited.has_ai_assisted_public_content,
    HAS_HIGH_IMPACT_PUBLIC_CLAIM_PATH: inherited.has_high_impact_public_claim_path,
    HAS_ACTIVE_S5_ISSUE: inherited.has_active_s5_issue,
  }
}

export function resolveS5QuestionAnswer(questionId, state) {
  const question = s5QuestionsById[questionId]
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

export function getS5QuestionById(id) {
  return s5QuestionsById[id]
}

export function getS5QuestionOptions(question) {
  if (question.primaryOptions) {
    return [
      ...question.primaryOptions,
      ...question.moreOptions,
      ...question.stickyOptions,
    ]
  }
  return flattenQuestionOptions(question)
}

export function applyS5MultiSelectExclusivity(questionId, prev, optionValue) {
  if (questionId === 'q1' || questionId === 'q2') {
    if (optionValue === 'not_applicable') {
      return prev.includes('not_applicable') ? [] : ['not_applicable']
    }
    if (optionValue === 'not_sure') {
      return prev.includes('not_sure') ? [] : ['not_sure']
    }
    const withoutExclusive = prev.filter((v) => v !== 'not_sure' && v !== 'not_applicable')
    if (withoutExclusive.includes(optionValue)) {
      return withoutExclusive.filter((v) => v !== optionValue)
    }
    return [...withoutExclusive, optionValue]
  }

  if (questionId === 'q16') {
    if (optionValue === 'no_known_issues') {
      return prev.includes('no_known_issues') ? [] : ['no_known_issues']
    }
    const withoutNoKnownIssues = prev.filter((v) => v !== 'no_known_issues')
    if (withoutNoKnownIssues.includes(optionValue)) {
      return withoutNoKnownIssues.filter((v) => v !== optionValue)
    }
    return [...withoutNoKnownIssues, optionValue]
  }

  if (
    ['q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q14', 'q15'].includes(questionId)
  ) {
    if (optionValue === 'not_applicable') {
      return prev.includes('not_applicable') ? [] : ['not_applicable']
    }
    if (optionValue === 'not_sure') {
      return prev.includes('not_sure') ? [] : ['not_sure']
    }
    const withoutExclusive = prev.filter((v) => v !== 'not_sure' && v !== 'not_applicable')
    if (withoutExclusive.includes(optionValue)) {
      return withoutExclusive.filter((v) => v !== optionValue)
    }
    return [...withoutExclusive, optionValue]
  }

  if (prev.includes(optionValue)) {
    return prev.filter((v) => v !== optionValue)
  }
  return [...prev, optionValue]
}
