import { hasAnyTag } from './diagnosticTags.js'

export const S2_SECTION_HEADER =
  'Section: S2 — Brand, Intellectual Property, and Ownership'

export const S2_GROUP_LABELS = {
  q1: 'Brand names and accounts',
  q5: 'Creation and rights',
  q9: 'Content, technical assets, and public proof',
  q14: 'Licensing, records, and issues',
}

const S2_Q1_SHOW_Q2_Q3 = ['yes', 'some_not_consistently', 'not_sure']

const S2_Q5_SHOW_Q6 = ['yes_records_available', 'some_not_all', 'no', 'not_sure']

const S2_Q19_Q5_VALUES = ['yes_records_available', 'some_not_all', 'not_sure']

const S2_Q19_Q6_VALUES = [
  'yes_rights_permissions_documented',
  'some_documentation_incomplete',
  'no',
  'not_sure',
]

const S2_Q19_Q8_VALUES = ['yes', 'some_not_consistently_tracked', 'not_sure']

const S2_Q19_Q14_VALUES = [
  'yes_use_rights_documented',
  'yes_documentation_incomplete',
  'yes_not_sure_records',
  'not_sure',
]

export const s2q1 = {
  id: 'q1',
  field: 's2_q1_public_names_brands_products_programs',
  mode: 'single',
  question:
    'Do you use any public names, brand names, product names, program names, project names, or taglines?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_consistently',
      label: 'Some, but not consistently',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'No status change' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    { value: 'not_applicable', label: 'Not applicable', baseStatus: 'No status change' },
  ],
}

export const s2q2 = {
  id: 'q2',
  field: 's2_q2_similar_name_search_awareness',
  mode: 'single',
  question:
    'Before using important names publicly, have you checked whether similar names are already being used?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_names_not_all',
      label: 'Some names, but not all',
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

export const s2q3 = {
  id: 'q3',
  field: 's2_q3_trademark_registration_records',
  mode: 'single',
  question:
    'Do you know whether any important names, logos, or taglines are registered, pending, unregistered, or unreviewed?',
  required: true,
  options: [
    {
      value: 'yes_records_available',
      label: 'Yes, and I can find the records',
      baseStatus: 'Indicated',
    },
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

export const s2q4 = {
  id: 'q4',
  field: 's2_q4_domains_handles_accounts_access',
  mode: 'single',
  question:
    'Can you access and control your important domains, social handles, websites, app accounts, and platform accounts?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    { value: 'some_not_all', label: 'Some, but not all', baseStatus: 'Review recommended' },
    {
      value: 'no',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s2q5 = {
  id: 'q5',
  field: 's2_q5_creator_source_awareness',
  mode: 'single',
  question:
    'Do you know who created your important brand, content, product, software, technical, or creative assets?',
  required: true,
  options: [
    {
      value: 'yes_records_available',
      label: 'Yes, and the records are easy to find',
      baseStatus: 'Indicated',
    },
    { value: 'some_not_all', label: 'Some, but not all', baseStatus: 'Review recommended' },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    { value: 'not_applicable', label: 'Not applicable', baseStatus: 'No status change' },
  ],
}

export const s2q6 = {
  id: 'q6',
  field: 's2_q6_creator_rights_permissions_documented',
  mode: 'single',
  question:
    'If people helped create important assets, are the related rights or permissions documented?',
  required: true,
  options: [
    {
      value: 'yes_rights_permissions_documented',
      label: 'Yes, and rights or permissions are documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_documentation_incomplete',
      label: 'Some, but documentation is incomplete',
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

export const s2q7 = {
  id: 'q7',
  field: 's2_q7_pre_existing_contributor_work_documented',
  mode: 'single',
  question:
    'If a founder, cofounder, or key contributor brought pre-existing work into the business or organization, is there a record showing whether the business, organization, or individual can use it?',
  required: true,
  options: [
    {
      value: 'yes_records_available',
      label: 'Yes, and the records are easy to find',
      baseStatus: 'Indicated',
    },
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

export const s2q8 = {
  id: 'q8',
  field: 's2_q8_original_content_methods_toolkits',
  mode: 'single',
  question:
    'Do you rely on original content, curriculum, frameworks, methods, toolkits, templates, workbooks, or training materials?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_not_consistently_tracked',
      label: 'Some, but not consistently tracked',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'No status change' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    { value: 'not_applicable', label: 'Not applicable', baseStatus: 'No status change' },
  ],
}

export const s2q9 = {
  id: 'q9',
  field: 's2_q9_ai_generated_or_assisted_assets',
  mode: 'single',
  question:
    'Have you used AI tools to create or help create important brand, content, product, software, or customer-facing assets?',
  required: true,
  options: [
    {
      value: 'yes_ai_use_tracked',
      label: 'Yes, and I track where AI was used',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_not_consistently_tracked',
      label: 'Yes, but not consistently tracked',
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

export const s2q10 = {
  id: 'q10',
  field: 's2_q10_third_party_content_templates_media_research',
  mode: 'single',
  question:
    'Do you use third-party content, templates, images, video, music, fonts, research, slides, screenshots, or materials you did not create?',
  required: true,
  options: [
    {
      value: 'yes_source_permission_tracked',
      label: 'Yes, and I track the source or permission',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_not_consistently_tracked',
      label: 'Yes, but not consistently tracked',
      baseStatus: 'Review recommended',
    },
    { value: 'no', label: 'No', baseStatus: 'No status change' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    { value: 'not_applicable', label: 'Not applicable', baseStatus: 'No status change' },
  ],
}

export const s2q11 = {
  id: 'q11',
  field: 's2_q11_technical_assets_sources',
  mode: 'single',
  question:
    'If you use software, code, apps, automations, plug-ins, APIs, open-source tools, libraries, or technical assets, do you track what they are and where they came from?',
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

export const s2q12 = {
  id: 'q12',
  field: 's2_q12_data_training_prompts_model_outputs_user_data',
  mode: 'single',
  question:
    'Do you rely on datasets, training data, prompts, model outputs, annotations, user data, or other data assets?',
  required: true,
  options: [
    {
      value: 'yes_source_use_documented',
      label: 'Yes, and source or use records are documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_records_incomplete',
      label: 'Yes, but records are incomplete',
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

export const s2q13 = {
  id: 'q13',
  field: 's2_q13_public_proof_media_permissions',
  mode: 'single',
  question:
    'Do you use public proof, such as testimonials, case studies, stories, logos, or media assets?',
  required: true,
  options: [
    {
      value: 'yes_permission_records_documented',
      label: 'Yes, and permission or records are documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_records_incomplete',
      label: 'Yes, but records are incomplete',
      baseStatus: 'Review recommended',
    },
    {
      value: 'yes_not_sure_permission',
      label: 'Yes, but I am not sure what permission I have',
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

export const s2q14 = {
  id: 'q14',
  field: 's2_q14_licensing_others_to_use_assets',
  mode: 'single',
  question:
    'Do you let other people or organizations use your brand, content, method, curriculum, software, data, templates, or materials?',
  required: true,
  options: [
    {
      value: 'yes_use_rights_documented',
      label: 'Yes, and use rights are documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_documentation_incomplete',
      label: 'Yes, but documentation is incomplete',
      baseStatus: 'Review recommended',
    },
    {
      value: 'yes_not_sure_records',
      label: 'Yes, but I am not sure what records say',
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

export const s2q15 = {
  id: 'q15',
  field: 's2_q15_using_licensed_or_partner_assets',
  mode: 'single',
  question:
    "Do you use someone else's licensed method, curriculum, certification, brand, logo, software, platform asset, partner material, or sponsor material?",
  required: true,
  options: [
    {
      value: 'yes_permission_documented',
      label: 'Yes, and permission is documented',
      baseStatus: 'Indicated',
    },
    {
      value: 'yes_documentation_incomplete',
      label: 'Yes, but documentation is incomplete',
      baseStatus: 'Review recommended',
    },
    {
      value: 'yes_not_sure_records',
      label: 'Yes, but I am not sure what records say',
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

export const s2q16 = {
  id: 'q16',
  field: 's2_q16_asset_inventory_storage',
  mode: 'single',
  question:
    'Do you have an inventory or storage system for your important brand, content, product, software, and ownership records?',
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

export const s2q17 = {
  id: 'q17',
  field: 's2_q17_rights_records_needed_for_next_move',
  mode: 'single',
  question:
    'Before your next major move, do you know which brand, content, product, software, or ownership records need review?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    { value: 'some_not_all', label: 'Some, but not all', baseStatus: 'Review recommended' },
    { value: 'no', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s2q18 = {
  id: 'q18',
  field: 's2_q18_active_brand_asset_content_platform_issues',
  mode: 'multi',
  question:
    'Have any issues already come up involving a name, brand, asset, account, content, or ownership claim?',
  required: true,
  options: [
    { value: 'no_known_issues', label: 'No known issues', baseStatus: 'Indicated' },
    {
      value: 'similar_name_brand_concern',
      label: 'Similar-name or brand concern',
      baseStatus: 'Review recommended',
    },
    {
      value: 'domain_handle_account_access_issue',
      label: 'Domain, handle, or account access issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'content_media_template_concern',
      label: 'Content, image, video, music, or template concern',
      baseStatus: 'Review recommended',
    },
    {
      value: 'creator_contributor_ownership_concern',
      label: 'Creator, contributor, or ownership concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'platform_takedown_warning_account_restriction',
      label: 'Platform takedown, warning, suspension, or account restriction',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'public_proof_permission_concern',
      label: 'Customer, donor, sponsor, partner, or public-proof permission concern',
      baseStatus: 'Review recommended',
    },
    {
      value: 'software_code_data_ai_concern',
      label: 'Software, code, data, AI, or technical asset concern',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s2q19 = {
  id: 'q19',
  field: 's2_q19_post_relationship_asset_use',
  mode: 'single',
  question:
    'If a founder, contractor, employee, advisor, sponsor, partner, fiscal sponsor, or vendor relationship ends, do you know who can keep using the related assets?',
  required: true,
  options: [
    { value: 'yes', label: 'Yes', baseStatus: 'Indicated' },
    { value: 'some_not_all', label: 'Some, but not all', baseStatus: 'Review recommended' },
    {
      value: 'no',
      label: 'No',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
    {
      value: 'not_applicable',
      label: 'Not applicable',
      baseStatus: 'No status change unless override applies',
    },
  ],
}

export const s2QuestionsById = {
  q1: s2q1,
  q2: s2q2,
  q3: s2q3,
  q4: s2q4,
  q5: s2q5,
  q6: s2q6,
  q7: s2q7,
  q8: s2q8,
  q9: s2q9,
  q10: s2q10,
  q11: s2q11,
  q12: s2q12,
  q13: s2q13,
  q14: s2q14,
  q15: s2q15,
  q16: s2q16,
  q17: s2q17,
  q18: s2q18,
  q19: s2q19,
}

function shouldShowS2Q2(ctx) {
  const q1 = ctx.s2_q1_public_names_brands_products_programs
  return q1 != null && S2_Q1_SHOW_Q2_Q3.includes(q1)
}

function shouldShowS2Q3(ctx) {
  return shouldShowS2Q2(ctx)
}

function shouldShowS2Q6(ctx) {
  const q5 = ctx.s2_q5_creator_source_awareness
  const q5Match = q5 != null && S2_Q5_SHOW_Q6.includes(q5)
  return (
    q5Match ||
    hasAnyTag(ctx, [
      'TEAM_COFOUNDER_PARTNER',
      'TEAM_CONTRACTORS',
      'TEAM_EMPLOYEES',
      'TEAM_INTERNS',
      'TEAM_ADVISORS_COMPENSATED',
      'TEAM_OVERSEAS',
      'STRUCTURE_NONPROFIT',
      'STRUCTURE_FISCAL_SPONSORSHIP',
      'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
    ])
  )
}

function shouldShowS2Q7(ctx) {
  return hasAnyTag(ctx, [
    'TEAM_COFOUNDER_PARTNER',
    'TEAM_ADVISORS_COMPENSATED',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
    'MOVE_RAISING_INVESTMENT_BUSINESS_FUNDING',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'EVENT_MONEY_OWNERSHIP_CHANGE',
    'MODEL_SERVICE',
    'MODEL_CONTENT_CREATOR',
    'MODEL_SAAS_SOFTWARE_AI',
  ])
}

function shouldShowS2Q9(ctx) {
  return hasAnyTag(ctx, [
    'AI_WORK_PRODUCT',
    'AI_PRODUCT_BUILDER',
    'AI_CUSTOMER_FACING_PRODUCT',
    'AI_DECISION_HIGH_RISK',
    'MODEL_CONTENT_CREATOR',
    'MODEL_SAAS_SOFTWARE_AI',
    'MODEL_SERVICE',
    'MODEL_ECOMM_PHYSICAL',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'S5_SIGNAL_MARKETING_PUBLIC_CONTENT',
    'S15_SIGNAL_PUBLIC_CONTENT',
  ])
}

function shouldShowS2Q11(ctx) {
  return hasAnyTag(ctx, [
    'MODEL_SAAS_SOFTWARE_AI',
    'MODEL_MARKETPLACE_PLATFORM',
    'MODEL_HARDWARE_CONNECTED',
    'AI_PRODUCT_BUILDER',
    'AI_CUSTOMER_FACING_PRODUCT',
    'MODEL_SERVICE',
    'MOVE_ENTERPRISE_CUSTOMERS',
  ])
}

function shouldShowS2Q12(ctx) {
  return hasAnyTag(ctx, [
    'MODEL_SAAS_SOFTWARE_AI',
    'AI_PRODUCT_BUILDER',
    'AI_CUSTOMER_FACING_PRODUCT',
    'AI_DECISION_HIGH_RISK',
    'MODEL_MARKETPLACE_PLATFORM',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'EVENT_DATA_SECURITY_CONCERN',
  ])
}

function shouldShowS2Q13(ctx) {
  return hasAnyTag(ctx, [
    'MODEL_SERVICE',
    'MODEL_CONTENT_CREATOR',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'MODEL_HIGH_SCRUTINY',
    'S15_SIGNAL_PUBLIC_CONTENT',
  ])
}

function shouldShowS2Q14(ctx) {
  return hasAnyTag(ctx, [
    'MODEL_SERVICE',
    'MODEL_CONTENT_CREATOR',
    'MODEL_SAAS_SOFTWARE_AI',
    'MODEL_MARKETPLACE_PLATFORM',
    'MOVE_ENTERPRISE_CUSTOMERS',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'MOVE_PLATFORM_CHANNEL_SALES',
  ])
}

function shouldShowS2Q15(ctx) {
  return hasAnyTag(ctx, [
    'MODEL_SERVICE',
    'MODEL_CONTENT_CREATOR',
    'MODEL_SAAS_SOFTWARE_AI',
    'MODEL_MARKETPLACE_PLATFORM',
    'STRUCTURE_NONPROFIT',
    'STRUCTURE_FISCAL_SPONSORSHIP',
    'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
    'MOVE_ENTERPRISE_CUSTOMERS',
  ])
}

function hasS2AssetsIdentifiedQ1ThroughQ15(ctx) {
  for (const value of Object.values(ctx.s2AnswersQ1ThroughQ15 ?? {})) {
    if (value != null && value !== 'no' && value !== 'not_applicable') {
      return true
    }
  }
  return false
}

function shouldShowS2Q19(ctx) {
  if (
    hasAnyTag(ctx, [
      'TEAM_COFOUNDER_PARTNER',
      'TEAM_CONTRACTORS',
      'TEAM_EMPLOYEES',
      'TEAM_INTERNS',
      'TEAM_ADVISORS_COMPENSATED',
      'STRUCTURE_FISCAL_SPONSORSHIP',
      'STRUCTURE_HYBRID_FOR_PROFIT_NONPROFIT',
      'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
      'MOVE_ENTERPRISE_CUSTOMERS',
      'EVENT_KEY_PERSON_CHANGE',
      'EVENT_MONEY_OWNERSHIP_CHANGE',
      'EVENT_DONOR_GRANT_SPONSOR_ISSUE',
    ])
  ) {
    return true
  }

  const q5 = ctx.s2_q5_creator_source_awareness
  if (q5 != null && S2_Q19_Q5_VALUES.includes(q5)) {
    return true
  }

  const q6 = ctx.s2_q6_creator_rights_permissions_documented
  if (q6 != null && S2_Q19_Q6_VALUES.includes(q6)) {
    return true
  }

  const q8 = ctx.s2_q8_original_content_methods_toolkits
  if (q8 != null && S2_Q19_Q8_VALUES.includes(q8)) {
    return true
  }

  const q14 = ctx.s2_q14_licensing_others_to_use_assets
  if (q14 != null && S2_Q19_Q14_VALUES.includes(q14)) {
    return true
  }

  return false
}

const s2ShowById = {
  q1: () => true,
  q2: shouldShowS2Q2,
  q3: shouldShowS2Q3,
  q4: () => true,
  q5: () => true,
  q6: shouldShowS2Q6,
  q7: shouldShowS2Q7,
  q8: () => true,
  q9: shouldShowS2Q9,
  q10: () => true,
  q11: shouldShowS2Q11,
  q12: shouldShowS2Q12,
  q13: shouldShowS2Q13,
  q14: shouldShowS2Q14,
  q15: shouldShowS2Q15,
  q16: () => true,
  q17: () => true,
  q18: () => true,
  q19: shouldShowS2Q19,
}

export function getVisibleS2QuestionIds(ctx) {
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
    'q14',
    'q15',
    'q16',
    'q17',
    'q18',
    'q19',
  ]) {
    if (s2ShowById[id](ctx)) {
      ids.push(id)
    }
  }
  return ids
}

export function getS2QuestionById(id) {
  return s2QuestionsById[id]
}

export function getS2GroupLabel(questionId) {
  return S2_GROUP_LABELS[questionId] ?? null
}
