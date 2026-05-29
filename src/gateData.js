export const gate1 = {
  field: 'stage_v35',
  question: 'What stage is your business in?',
  options: [
    {
      value: 'prelaunch',
      label: "I'm still in the planning or pre-launch stage",
    },
    {
      value: 'under_1',
      label: "I've been operating for less than a year",
    },
    {
      value: 'one_to_three',
      label: "I've been operating for one to three years",
    },
    {
      value: 'over_three',
      label: "I've been operating for more than three years",
    },
    {
      value: 'scaling',
      label: "I'm in a growth or scaling stage",
    },
  ],
}

export const gate2 = {
  field: 'business_models',
  question: 'What kind of business are you building? Select all that apply.',
  helper:
    'Many founders fit more than one category. Choose anything that matches how you sell, deliver, or make money.',
  options: [
    {
      value: 'service',
      label:
        'Service business — coaching, consulting, freelance, or professional services',
    },
    {
      value: 'ecomm_physical',
      label: 'E-commerce or physical products',
    },
    {
      value: 'saas_software_ai',
      label: 'SaaS, software, or AI product',
    },
    {
      value: 'content_creator',
      label: 'Content, media, or creator business',
    },
    {
      value: 'marketplace_platform',
      label: 'Marketplace or platform',
    },
    {
      value: 'hardware_connected',
      label: 'Hardware or connected device',
    },
    {
      value: 'high_scrutiny',
      label: 'Health, financial, legal, or other high-scrutiny claims',
    },
    {
      value: 'unknown',
      label: "I'm not sure yet",
    },
  ],
}

export const gate2a = {
  field: 'primary_model',
  question: 'Which one matters most right now?',
  helper:
    'Choose the one that drives the most revenue, takes the most time, or creates the most risk.',
  balancedOption: {
    value: 'balanced_unknown',
    label: 'They are equally important or I am not sure',
  },
}

export function shouldShowGate2A(business_models) {
  const nonUnknown = business_models.filter((v) => v !== 'unknown')
  return nonUnknown.length > 1
}

export function getGate2aOptions(business_models) {
  const selected = new Set(business_models.filter((v) => v !== 'unknown'))
  const fromGate2 = gate2.options.filter((option) => selected.has(option.value))
  return [...fromGate2, gate2a.balancedOption]
}

export const gate2b = {
  field: 'structure_orientation',
  question:
    'What kind of structure are you building or using? Select all that apply.',
  helper:
    'This helps the Diagnostic distinguish investor readiness, donor readiness, fiscal sponsorship, hybrid structures, and impact-focused businesses.',
  options: [
    {
      value: 'for_profit',
      label: 'For-profit business or entity',
    },
    {
      value: 'nonprofit',
      label: 'Nonprofit corporation or nonprofit organization',
    },
    {
      value: 'fiscal_sponsorship',
      label: 'Operating under a fiscal sponsor',
    },
    {
      value: 'hybrid_for_profit_nonprofit',
      label: 'Both for-profit and nonprofit or mission-driven pieces',
    },
    {
      value: 'impact_for_profit',
      label: 'Impact-focused or mission-driven for-profit',
    },
    {
      value: 'not_sure',
      label: 'I am not sure',
    },
  ],
}

export const gate2c = {
  field: 'regulated_financial_activity',
  question:
    'Does your business or activity involve regulated financial services?',
  helper:
    'Some financial activities require specialized counsel and are outside the scope of the Vault, Inner Circle, and Concierge tiers.',
  options: [
    { value: 'no', label: 'No' },
    { value: 'yes', label: 'Yes' },
    { value: 'not_sure', label: 'I am not sure' },
  ],
  boundary: {
    headline: 'Legally Lucid has a boundary here.',
    body:
      'Legally Lucid is not built for businesses that involve investment banking, M&A advisory, broker-dealer activity, finder activity, securities placement or distribution, transaction-based deal compensation, investment advisory services, real estate brokerage with transaction-based compensation, insurance brokerage with commissions, money transmission, or crypto or digital asset intermediation. These activities require specialized professional review. The Vault, Inner Circle, and Concierge tiers do not cover these activities and are not available for businesses focused on them. Parts of the Diagnostic that address your own internal business operations may still be useful for general orientation.',
    checkboxLabel:
      'I understand that the Vault, Inner Circle, and Concierge tiers do not cover regulated financial services, and that the Diagnostic does not provide advice on these activities.',
  },
}

export const gate3 = {
  field: 'team_structure',
  question: 'Who helps you run the business? Select all that apply.',
  helper:
    'Choose anyone who helps create, sell, deliver, advise, manage, promote, or operate the business.',
  options: [
    {
      value: 'solo',
      label: 'Just me — I run this alone',
    },
    {
      value: 'cofounder_partner',
      label: 'A co-founder or business partner',
    },
    {
      value: 'contractors',
      label: 'Contractors or freelancers',
    },
    {
      value: 'employees',
      label: 'Employees — W-2 or equivalent',
    },
    {
      value: 'overseas',
      label: 'Overseas or international team members',
    },
    {
      value: 'compensated_advisors',
      label: 'Advisors I compensate with money or equity',
    },
    {
      value: 'unpaid_helpers',
      label: 'Volunteers, interns, or unpaid helpers',
    },
    {
      value: 'classification_unknown',
      label: 'I have help but I am not sure how to classify them',
    },
  ],
}

export const gate4ExclusiveValues = ['unknown', 'not_reviewed']

export const gate4SpecificValues = [
  'single_state',
  'multi_state',
  'international',
  'eea_uk',
  'california',
]

export const gate4 = {
  field: 'geography',
  question:
    'Where do your customers, users, or website visitors come from? Select all that apply.',
  helper:
    'Location affects which privacy, tax, and contract rules apply.',
  options: [
    {
      value: 'single_state',
      label: 'One US state only',
    },
    {
      value: 'multi_state',
      label: 'Multiple US states',
    },
    {
      value: 'international',
      label: 'Outside the US',
    },
    {
      value: 'eea_uk',
      label: 'European Union or United Kingdom',
    },
    {
      value: 'california',
      label: 'California specifically',
    },
    {
      value: 'unknown',
      label: 'I am not sure',
    },
    {
      value: 'not_reviewed',
      label: 'I have not reviewed this',
    },
  ],
}

export const gate5 = {
  field: 'ai_use',
  question: 'How do you use AI in the business? Select all that apply.',
  helper:
    'AI use can include tools you use internally, tools your team uses, or tools built into your product, platform, marketing, operations, or customer experience.',
  options: [
    {
      value: 'internal',
      label: 'Internally — for my own work, writing, research, or operations',
    },
    {
      value: 'work_product',
      label:
        'In work product — AI is part of what I deliver to clients or customers',
    },
    {
      value: 'customer_facing_product',
      label: 'In a customer-facing product or feature',
    },
    {
      value: 'decision_high_risk',
      label:
        'In decisions that affect health, money, safety, legal outcomes, or access to services',
    },
    {
      value: 'product_builder',
      label: 'I build AI products or use AI models in what I sell',
    },
    {
      value: 'none',
      label: 'I do not use AI',
    },
    {
      value: 'unknown',
      label: 'I am not sure',
    },
  ],
}

export const gate6 = {
  field: 'next_moves',
  question: 'What is the next major move you are preparing for? Select all that apply.',
  helper:
    'Choose anything you are doing now or expect to do soon. This helps the Diagnostic focus on the risks most likely to affect your next step.',
  options: [
    {
      value: 'launching',
      label: 'Launching a product, service, app, or website',
    },
    {
      value: 'signing_agreement',
      label: 'Signing or negotiating an important agreement',
    },
    {
      value: 'team_change',
      label: 'Hiring, adding contractors, or changing my team',
    },
    {
      value: 'platform_channel_sales',
      label: 'Selling through a platform, marketplace, or channel partner',
    },
    {
      value: 'raising_investment_business_funding',
      label: 'Raising investment or business funding',
    },
    {
      value: 'seeking_donations_grants_sponsors',
      label: 'Seeking donations, grants, or sponsors',
    },
    {
      value: 'enterprise_customers',
      label: 'Pursuing enterprise or institutional customers',
    },
    {
      value: 'handling_problem',
      label: 'Responding to a legal, platform, or customer problem',
    },
    {
      value: 'general_scan',
      label: 'General readiness scan — no specific move right now',
    },
  ],
}

export const gate7 = {
  field: 'sensitive_claims',
  question: 'Does your business make claims about sensitive outcomes?',
  helper:
    'This includes claims about health, mental health, money, credit, investing, weight loss, income, legal outcomes, safety, or specific results.',
  options: [
    {
      value: 'no',
      label: 'No — we do not make these kinds of claims',
    },
    {
      value: 'yes',
      label: 'Yes — we make claims about these kinds of outcomes',
    },
    {
      value: 'not_sure',
      label: 'I am not sure',
    },
  ],
}

export const gate8 = {
  field: 'growth_path',
  question: 'What kind of growth are you building toward? Select all that apply.',
  helper:
    'Choose the path that best matches where you are trying to take the business.',
  options: [
    {
      value: 'owner_led',
      label: 'Staying owner-led and sustainable',
    },
    {
      value: 'small_team_steady',
      label: 'Building a small steady team',
    },
    {
      value: 'platform_marketplace',
      label: 'Growing through a platform or marketplace',
    },
    {
      value: 'enterprise_growth',
      label: 'Pursuing enterprise or institutional customers',
    },
    {
      value: 'outside_capital',
      label: 'Raising outside capital or investment',
    },
    {
      value: 'donor_grant_sponsor_growth',
      label: 'Growing through donations, grants, or sponsorships',
    },
    {
      value: 'nonprofit_mission_expansion',
      label: 'Expanding nonprofit or mission-driven programs',
    },
    {
      value: 'acquisition_exit',
      label: 'Preparing for acquisition or exit',
    },
    {
      value: 'not_sure',
      label: 'I am not sure yet',
    },
  ],
}

export const gate9 = {
  field: 'annual_revenue_range',
  question: 'What is your current annual revenue range?',
  helper:
    'This helps weight the recommendations. It does not decide whether a risk matters.',
  options: [
    {
      value: 'pre_revenue',
      label: 'Pre-revenue — not yet generating revenue',
    },
    {
      value: 'under_50k',
      label: 'Under $50K',
    },
    {
      value: '50k_to_250k',
      label: '$50K to $250K',
    },
    {
      value: '250k_to_1m',
      label: '$250K to $1M',
    },
    {
      value: '1m_to_5m',
      label: '$1M to $5M',
    },
    {
      value: 'over_5m',
      label: 'Over $5M',
    },
    {
      value: 'prefer_not',
      label: 'I prefer not to say',
    },
  ],
}

export const gate10 = {
  field: 'recent_events_12mo',
  question:
    'In the past 12 months, has any of this happened in your business? Select all that apply.',
  helper:
    'These events can reveal risks that may not show up from business model or revenue alone.',
  optionalLabel: 'Optional but recommended',
  options: [
    {
      value: 'ai_sensitive_documents',
      label: 'Used AI with sensitive documents or confidential information',
    },
    {
      value: 'signed_without_review',
      label: 'Signed an agreement without reviewing it carefully',
    },
    {
      value: 'customer_payment_service_issue',
      label: 'Had a customer, payment, or service issue',
    },
    {
      value: 'worker_change',
      label: 'Added, changed, or lost a key team member or contractor',
    },
    {
      value: 'key_person_change',
      label: 'Had a founder, owner, or key person change',
    },
    {
      value: 'warning_legal_platform',
      label:
        'Received a legal letter, platform warning, or account restriction',
    },
    {
      value: 'data_security_concern',
      label: 'Had a data or security concern',
    },
    {
      value: 'money_ownership_change',
      label: 'Had a significant money or ownership change',
    },
    {
      value: 'donor_grant_sponsor_issue',
      label: 'Had a donor, grant, or sponsor issue',
    },
    {
      value: 'none',
      label: 'None of these',
    },
    {
      value: 'not_sure',
      label: 'I am not sure',
    },
  ],
}
