import { hasAnyTag } from './diagnosticTags.js'

export const S3_SECTION_HEADER =
  'Section: S3 — Business Model and Offer Readiness'

export const S3_GROUP_LABELS = {
  q1: 'Offer profile',
  q3: 'Offer description and boundaries',
  q6: 'Pricing model and terms',
  q8: 'Delivery and support',
  q12: 'Review readiness and active issues',
}

export const s3q1 = {
  id: 'q1',
  field: 's3_q1_offer_type',
  mode: 'multi',
  question: 'What are you offering or planning to offer?',
  required: true,
  options: [
    {
      value: 'professional_service_consulting',
      label: 'Professional service or consulting',
      baseStatus: 'Indicated',
    },
    {
      value: 'coaching_advising_facilitation_training',
      label: 'Coaching, advising, facilitation, or training',
      baseStatus: 'Indicated',
    },
    {
      value: 'course_curriculum_toolkit_digital_product',
      label: 'Course, curriculum, workbook, toolkit, or digital education product',
      baseStatus: 'Indicated',
    },
    {
      value: 'software_saas_app_ai_platform',
      label: 'Software, SaaS, app, AI tool, or digital platform',
      baseStatus: 'Indicated',
    },
    {
      value: 'physical_product_hardware_goods',
      label: 'Physical product, hardware, or packaged goods',
      baseStatus: 'Indicated',
    },
    {
      value: 'marketplace_directory_community_platform',
      label: 'Marketplace, directory, community, or platform connecting others',
      baseStatus: 'Indicated',
    },
    {
      value: 'event_retreat_workshop_program_experience',
      label: 'Event, retreat, workshop, program, or experience',
      baseStatus: 'Indicated',
    },
    {
      value: 'nonprofit_donor_grant_sponsored_activity',
      label:
        'Nonprofit program, donor-funded activity, grant-funded activity, or sponsored initiative',
      baseStatus: 'Indicated',
    },
    {
      value: 'membership_subscription_retainer_recurring',
      label: 'Membership, subscription, retainer, or recurring-access model',
      baseStatus: 'Indicated',
    },
    {
      value: 'free_resource_beta_pilot_trial_waitlist',
      label: 'Free resource, beta, pilot, sample, trial, or waitlist offer',
      baseStatus: 'Indicated',
    },
    { value: 'not_sure_yet', label: 'I am not sure yet', baseStatus: 'Review recommended' },
  ],
}

export const s3q2 = {
  id: 'q2',
  field: 's3_q2_primary_audience_or_recipient',
  mode: 'multi',
  question: 'Who is the offer mainly for?',
  required: true,
  options: [
    {
      value: 'individual_consumers_public',
      label: 'Individual consumers or members of the public',
      baseStatus: 'Indicated',
    },
    {
      value: 'business_organizational_clients',
      label: 'Business customers or organizational clients',
      baseStatus: 'Indicated',
    },
    {
      value: 'enterprise_institutional_customers',
      label:
        'Enterprise customers, institutions, schools, hospitals, governments, or large organizations',
      baseStatus: 'Review recommended',
    },
    {
      value: 'nonprofit_donor_grant_sponsor_participants',
      label:
        'Nonprofit clients, community members, donors, grantors, sponsors, or program participants',
      baseStatus: 'Review recommended',
    },
    {
      value: 'children_students_patients_vulnerable_high_scrutiny',
      label:
        'Children, students, patients, vulnerable groups, or high-scrutiny populations',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'professionals_or_licensed_providers',
      label: 'Other professionals or licensed providers',
      baseStatus: 'Review recommended',
    },
    {
      value: 'platform_marketplace_community_users',
      label:
        'Platform users, marketplace participants, creators, vendors, or community members',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure_yet', label: 'I am not sure yet', baseStatus: 'Review recommended' },
  ],
}

export const s3q3 = {
  id: 'q3',
  field: 's3_q3_offer_description_integrity',
  mode: 'single',
  question:
    'Is your offer described consistently, and do you update materials when it changes?',
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
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q4 = {
  id: 'q4',
  field: 's3_q4_deliverables_scope_and_limits',
  mode: 'single',
  question:
    'Is it documented what people receive, what is included and excluded, and when the offer ends?',
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
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q5 = {
  id: 'q5',
  field: 's3_q5_results_claims_outcomes_promises',
  mode: 'single',
  question:
    'Do your offer materials make promises or claims about results, outcomes, health, earnings, or similar topics?',
  required: true,
  options: [
    {
      value: 'yes_reviewed_or_documented',
      label: 'Yes, and they are reviewed or documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_not_consistently_reviewed',
      label: 'Yes, but not consistently reviewed or documented',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'No status change' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q6 = {
  id: 'q6',
  field: 's3_q6_paid_free_beta_pilot_trial_status',
  mode: 'multi',
  question:
    'Are any offers free, discounted, beta, pilot, sample, trial, waitlist-based, donor-funded, sponsor-funded, or paid later?',
  required: true,
  options: [
    {
      value: 'standard_paid_offers_only',
      label: 'No, all offers are standard paid offers',
      baseStatus: 'Indicated',
    },
    {
      value: 'free_resource_lead_magnet',
      label: 'Free resource or lead magnet',
      baseStatus: 'Review recommended',
    },
    {
      value: 'discounted_promotional_offer',
      label: 'Discounted or promotional offer',
      baseStatus: 'Review recommended',
    },
    {
      value: 'beta_pilot_prototype_test_offer',
      label: 'Beta, pilot, prototype, or test offer',
      baseStatus: 'Review recommended',
    },
    {
      value: 'trial_sample_demo_waitlist_offer',
      label: 'Trial, sample, demo, or waitlist offer',
      baseStatus: 'Review recommended',
    },
    {
      value: 'donor_grant_sponsor_funded_offer',
      label: 'Donor-funded, grant-funded, or sponsor-funded offer',
      baseStatus: 'Review recommended',
    },
    {
      value: 'paid_later_deferred_revenue_share_exchange',
      label: 'Paid later, deferred payment, revenue share, or informal exchange',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s3q7 = {
  id: 'q7',
  field: 's3_q7_payment_access_refund_cancellation_terms',
  mode: 'single',
  question:
    'Are payment, access, refund, cancellation, and change terms documented for this offer?',
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
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q8 = {
  id: 'q8',
  field: 's3_q8_delivery_dependencies_and_constraints',
  mode: 'single',
  question:
    'Does your offer depend on specific people, vendors, platforms, tools, or partners?',
  required: true,
  options: [
    {
      value: 'yes_dependencies_documented',
      label: 'Yes, and dependencies are documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_not_consistently_documented',
      label: 'Yes, but not consistently documented',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'No status change' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q9 = {
  id: 'q9',
  field: 's3_q9_human_support_service_level_and_response_expectations',
  mode: 'single',
  question:
    'Is it documented what level of support, communication, response time, access, or human involvement people should expect?',
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
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q10 = {
  id: 'q10',
  field: 's3_q10_licensed_regulated_or_high_scrutiny_offer',
  mode: 'single',
  question:
    'Does your offer involve health, legal, financial, education, children, safety, or other licensed or high-scrutiny areas?',
  required: true,
  options: [
    {
      value: 'yes',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'some_parts_might',
      label: 'Some parts might',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'No status change' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    { value: 'not_applicable', label: 'Not applicable', baseStatus: 'No status change' },
  ],
}

export const s3q11 = {
  id: 'q11',
  field: 's3_q11_partner_sponsor_affiliate_or_third_party_delivery',
  mode: 'single',
  question:
    'Do partners, sponsors, affiliates, contractors, vendors, fiscal sponsors, platforms, or other third parties help sell, fund, promote, host, deliver, or support the offer?',
  required: true,
  options: [
    {
      value: 'yes_roles_documented',
      label: 'Yes, and roles are documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_documentation_incomplete',
      label: 'Yes, but documentation is incomplete',
      baseStatus: 'Review recommended',
    },
    {
      value: 'yes_not_sure_records',
      label: 'Yes, but I am not sure what records exist',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'No status change' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q12 = {
  id: 'q12',
  field: 's3_q12_offer_records_for_diligence_or_review',
  mode: 'single',
  question:
    'Can you find the key records someone would ask for when reviewing this offer?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    { value: 'some_not_all', label: 'Some, but not all', baseStatus: 'Review recommended' },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s3q13 = {
  id: 'q13',
  field: 's3_q13_active_offer_related_issues',
  mode: 'multi',
  question:
    'Have any issues already come up involving what was promised, sold, delivered, funded, sponsored, accessed, canceled, refunded, changed, or expected?',
  required: true,
  options: [
    { value: 'no_known_issues', label: 'No known issues', baseStatus: 'Indicated' },
    {
      value: 'customer_client_participant_user_complaint',
      label: 'Customer, client, participant, or user complaint',
      baseStatus: 'Review recommended',
    },
    {
      value: 'payment_refund_cancellation_chargeback_access_issue',
      label: 'Payment, refund, cancellation, chargeback, or access issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'delivery_scope_support_service_issue',
      label: 'Delivery delay, missed deadline, scope, support, or service issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'sponsor_donor_grantor_partner_expectation_issue',
      label: 'Sponsor, donor, grantor, fiscal sponsor, or partner expectation issue',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'platform_marketplace_vendor_account_issue',
      label: 'Platform, marketplace, app store, vendor, or account restriction issue',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'claim_outcome_testimonial_marketing_issue',
      label: 'Claim, outcome, testimonial, public statement, or marketing issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'safety_health_privacy_data_ai_child_student_issue',
      label: 'Safety, health, privacy, data, AI, child, student, or high-scrutiny issue',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s3QuestionsById = {
  q1: s3q1,
  q2: s3q2,
  q3: s3q3,
  q4: s3q4,
  q5: s3q5,
  q6: s3q6,
  q7: s3q7,
  q8: s3q8,
  q9: s3q9,
  q10: s3q10,
  q11: s3q11,
  q12: s3q12,
  q13: s3q13,
}

function shouldShowS3Q7(ctx) {
  return hasAnyTag(ctx, [
    'MODEL_SERVICE',
    'MODEL_CONTENT_CREATOR',
    'MODEL_ECOMM_PHYSICAL',
    'MODEL_SAAS_SOFTWARE_AI',
    'MODEL_MARKETPLACE_PLATFORM',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'MOVE_PLATFORM_CHANNEL_SALES',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'membership_subscription_retainer_recurring',
    'event_retreat_workshop_program_experience',
    'donor_grant_sponsor_funded_offer',
    'free_resource_beta_pilot_trial_waitlist',
    'paid_later_deferred_revenue_share_exchange',
    'beta_pilot_prototype_test_offer',
    'trial_sample_demo_waitlist_offer',
    'professional_service_consulting',
    'coaching_advising_facilitation_training',
  ])
}

function shouldShowS3Q9(ctx) {
  return hasAnyTag(ctx, [
    'MODEL_SERVICE',
    'MODEL_SAAS_SOFTWARE_AI',
    'MODEL_MARKETPLACE_PLATFORM',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'MODEL_HIGH_SCRUTINY',
    'coaching_advising_facilitation_training',
    'professional_service_consulting',
    'membership_subscription_retainer_recurring',
    'event_retreat_workshop_program_experience',
    'software_saas_app_ai_platform',
    'marketplace_directory_community_platform',
    'nonprofit_donor_grant_sponsored_activity',
  ])
}

function shouldShowS3Q11(ctx) {
  return hasAnyTag(ctx, [
    'TEAM_CONTRACTORS',
    'TEAM_ADVISORS_COMPENSATED',
    'TEAM_COFOUNDER_PARTNER',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
    'MODEL_MARKETPLACE_PLATFORM',
    'MOVE_PLATFORM_CHANNEL_SALES',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
    'nonprofit_donor_grant_sponsored_activity',
    'donor_grant_sponsor_funded_offer',
  ])
}

function shouldShowS3Q12(ctx) {
  return hasAnyTag(ctx, [
    'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'MOVE_PLATFORM_CHANNEL_SALES',
    'MODEL_SAAS_SOFTWARE_AI',
    'MODEL_HARDWARE_CONNECTED',
    'MODEL_MARKETPLACE_PLATFORM',
    'EVENT_MONEY_OWNERSHIP_CHANGE',
    'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
    'EVENT_WARNING_LEGAL_PLATFORM',
  ])
}

const s3ShowById = {
  q1: () => true,
  q2: () => true,
  q3: () => true,
  q4: () => true,
  q5: () => true,
  q6: () => true,
  q7: shouldShowS3Q7,
  q8: () => true,
  q9: shouldShowS3Q9,
  q10: () => true,
  q11: shouldShowS3Q11,
  q12: shouldShowS3Q12,
  q13: () => true,
}

export function getVisibleS3QuestionIds(ctx) {
  const ids = []
  for (const id of [
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
  ]) {
    if (s3ShowById[id](ctx)) {
      ids.push(id)
    }
  }
  return ids
}

export function getS3QuestionById(id) {
  return s3QuestionsById[id]
}

export function getS3GroupLabel(questionId) {
  return S3_GROUP_LABELS[questionId] ?? null
}
