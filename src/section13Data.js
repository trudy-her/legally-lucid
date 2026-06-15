import { hasAnyTag } from './diagnosticTags.js'

function includesAny(arr, values) {
  return values.some((v) => arr.includes(v))
}

export const S13_SECTION_HEADER =
  'S13 — Privacy, Data Collection, and Data Use'

const S13_SHOW_TAGS = [
  'MODEL_SAAS_SOFTWARE_AI',
  'MODEL_MARKETPLACE_PLATFORM',
  'MODEL_ECOMM_PHYSICAL',
  'MODEL_SERVICE',
  'MODEL_CONTENT_CREATOR',
  'MOVE_ENTERPRISE_CUSTOMERS',
  'MOVE_SEEKING_DONATIONS_GRANTS_SPONSORS',
  'STRUCTURE_NONPROFIT',
  'STRUCTURE_FISCAL_SPONSORSHIP',
  'TEAM_EMPLOYEES',
  'TEAM_CONTRACTORS',
  'AI_CUSTOMER_FACING_PRODUCT',
  'AI_DECISION_HIGH_RISK',
  'EVENT_DATA_SECURITY_CONCERN',
]

const S3_ONLINE_DIGITAL_OFFERS = [
  'software_saas_app_ai_platform',
  'marketplace_directory_community_platform',
  'membership_subscription_retainer_recurring',
  'course_curriculum_toolkit_digital_product',
  'free_resource_beta_pilot_trial_waitlist',
  'event_retreat_workshop_program_experience',
]

const S3_MARKETING_COMMUNITY_AI_OFFERS = [
  'software_saas_app_ai_platform',
  'marketplace_directory_community_platform',
  'membership_subscription_retainer_recurring',
  'course_curriculum_toolkit_digital_product',
  'coaching_advising_facilitation_training',
  'professional_service_consulting',
]

const S3_DATASET_AI_OFFERS = [
  'software_saas_app_ai_platform',
  'free_resource_beta_pilot_trial_waitlist',
  'marketplace_directory_community_platform',
  'course_curriculum_toolkit_digital_product',
]

const Q2_SENSITIVE_VALUES = [
  'health_wellness_coaching_body_related_information',
  'financial_credit_tax_income_loan_investment_funding_information',
  'demographic_identity_family_immigration_background_eligibility_information',
  'children_minor_student_parent_guardian_information',
  'confidential_business_client_customer_partner_third_party_information',
  'dataset_research_training_testing_evaluation_product_data',
]

const Q3_SENSITIVE_GROUPS = [
  'students_children_minors_parents_guardians',
  'patients_wellness_clients_coaching_clients_retreat_participants_high_trust',
  'dataset_research_testers_beta_product_users',
  'donors_sponsors_grantors_funders',
  'employees_applicants_contractors_volunteers_interns_advisors_workers',
]

const STATUS_TIER = {
  Indicated: 1,
  'Review recommended': 2,
  'Professional review strongly recommended': 3,
}

export const s13q1 = {
  id: 'q1',
  field: 's13_q1_data_collection_status',
  mode: 'single',
  question:
    'Does your business or organization collect information from customers, clients, users, donors, prospects, employees, contractors, volunteers, members, students, patients, or website visitors?',
  required: true,
  options: [
    {
      value: 'yes_collects_information',
      label: 'Yes',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_does_not_collect_information',
      label: 'No',
      baseStatus: 'Indicated',
    },
    {
      value: 'planning_to_collect_information',
      label: 'We are planning to',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q2 = {
  id: 'q2',
  field: 's13_q2_data_types_collected',
  mode: 'multi',
  question: 'What types of information do you collect or plan to collect?',
  required: true,
  options: [
    {
      value: 'names_contact_information',
      label: 'Names or contact information',
      baseStatus: 'Review recommended',
    },
    {
      value: 'emails_phone_numbers',
      label: 'Emails or phone numbers',
      baseStatus: 'Review recommended',
    },
    {
      value: 'payment_billing_information',
      label: 'Payment or billing information',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'account_login_user_profile_information',
      label: 'Account, login, or user profile information',
      baseStatus: 'Review recommended',
    },
    {
      value: 'survey_intake_assessment_quiz_application_onboarding',
      label: 'Survey, intake, assessment, quiz, application, or onboarding responses',
      baseStatus: 'Review recommended',
    },
    {
      value: 'purchase_usage_preferences_behavior_data',
      label: 'Purchase history, usage activity, preferences, or behavior data',
      baseStatus: 'Review recommended',
    },
    {
      value: 'analytics_cookies_pixels_session_replay_tracking',
      label: 'Website analytics, cookies, pixels, session replay, or tracking data',
      baseStatus: 'Review recommended',
    },
    {
      value: 'donor_grantor_sponsor_member_fundraising_information',
      label: 'Donor, grantor, sponsor, member, or fundraising information',
      baseStatus: 'Review recommended',
    },
    {
      value: 'employee_contractor_applicant_volunteer_intern_advisor_information',
      label: 'Employee, contractor, applicant, volunteer, intern, or advisor information',
      baseStatus: 'Review recommended',
    },
    {
      value: 'health_wellness_coaching_body_related_information',
      label:
        'Health, wellness, coaching, fitness, nutrition, medical-adjacent, therapy-adjacent, mental health, disability, biometric, reproductive health, or body-related information',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'financial_credit_tax_income_loan_investment_funding_information',
      label: 'Financial, credit, tax, income, loan, investment, or funding information',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'demographic_identity_family_immigration_background_eligibility_information',
      label:
        'Demographic, DEI, identity, family, immigration, background, or eligibility information',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'location_information',
      label: 'Location information',
      baseStatus: 'Review recommended',
    },
    {
      value: 'children_minor_student_parent_guardian_information',
      label: 'Children, minor, student, parent, or guardian information',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'confidential_business_client_customer_partner_third_party_information',
      label:
        'Confidential business, client, customer, partner, or third-party information',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'dataset_research_training_testing_evaluation_product_data',
      label:
        'Dataset participant information, research data, training data, testing data, evaluation data, or data used to build or improve a product',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'uploads_documents_media_user_generated_content',
      label: 'Uploaded files, documents, images, audio, video, or user-generated content',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q3 = {
  id: 'q3',
  field: 's13_q3_data_subject_groups',
  mode: 'multi',
  question: 'Whose information do you collect or use?',
  required: true,
  options: [
    {
      value: 'customers_clients',
      label: 'Customers or clients',
      baseStatus: 'Review recommended',
    },
    {
      value: 'website_visitors',
      label: 'Website visitors',
      baseStatus: 'Review recommended',
    },
    {
      value: 'users_members_subscribers',
      label: 'Users, members, or subscribers',
      baseStatus: 'Review recommended',
    },
    {
      value: 'donors_sponsors_grantors_funders',
      label: 'Donors, sponsors, grantors, or funders',
      baseStatus: 'Review recommended',
    },
    {
      value: 'prospects_leads_applicants',
      label: 'Prospects, leads, or applicants',
      baseStatus: 'Review recommended',
    },
    {
      value: 'employees_applicants_contractors_volunteers_interns_advisors_workers',
      label: 'Employees, job applicants, contractors, volunteers, interns, advisors, or workers',
      baseStatus: 'Review recommended',
    },
    {
      value: 'students_children_minors_parents_guardians',
      label: 'Students, children, minors, parents, or guardians',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'patients_wellness_clients_coaching_clients_retreat_participants_high_trust',
      label:
        'Patients, wellness clients, coaching clients, retreat participants, or people in high-trust relationships',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'business_partners_vendors_affiliates_referral_sources_collaborators',
      label: 'Business partners, vendors, affiliates, referral sources, or collaborators',
      baseStatus: 'Review recommended',
    },
    {
      value: 'dataset_research_testers_beta_product_users',
      label: 'Dataset participants, research participants, testers, beta users, or product users',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q4 = {
  id: 'q4',
  field: 's13_q4_collection_channels',
  mode: 'multi',
  question: 'How do you collect this information?',
  required: true,
  options: [
    {
      value: 'website_forms_landing_pages',
      label: 'Website forms or landing pages',
      baseStatus: 'Review recommended',
    },
    {
      value: 'email_newsletter_signups',
      label: 'Email or newsletter signups',
      baseStatus: 'Review recommended',
    },
    {
      value: 'payment_processors_checkout_pages',
      label: 'Payment processors or checkout pages',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'scheduling_tools',
      label: 'Scheduling tools',
      baseStatus: 'Review recommended',
    },
    {
      value: 'crm_sales_marketing_tools',
      label: 'CRM, sales, or marketing tools',
      baseStatus: 'Review recommended',
    },
    {
      value: 'surveys_quizzes_assessments_applications_intake_forms',
      label: 'Surveys, quizzes, assessments, applications, or intake forms',
      baseStatus: 'Review recommended',
    },
    {
      value: 'apps_portals_dashboards_memberships_courses_communities',
      label: 'Apps, portals, dashboards, memberships, courses, or communities',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_tools_chatbots_agents_automated_workflows',
      label: 'AI tools, chatbots, agents, or automated workflows',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'social_ads_pixels_analytics_tracking_session_replay',
      label: 'Social media, ads, pixels, analytics, tracking tools, or session replay tools',
      baseStatus: 'Review recommended',
    },
    {
      value: 'events_webinars_retreats_workshops_in_person_signups',
      label: 'Events, webinars, retreats, workshops, or in-person signups',
      baseStatus: 'Review recommended',
    },
    {
      value: 'team_members_collect_information',
      label: 'Employees, contractors, volunteers, vendors, or team members collect it',
      baseStatus: 'Review recommended',
    },
    {
      value: 'third_parties_provide_information',
      label: 'Vendors, partners, sponsors, grantors, funders, affiliates, or referral sources provide it',
      baseStatus: 'Review recommended',
    },
    {
      value: 'files_uploads_documents_media_user_generated_content',
      label: 'Files, uploads, documents, images, audio, video, or user-generated content',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q5 = {
  id: 'q5',
  field: 's13_q5_storage_and_access_awareness',
  mode: 'single',
  question: 'Do you know where this information is stored and who can access it?',
  required: true,
  options: [
    {
      value: 'yes_storage_access_known',
      label: 'Yes, we know where it is stored and who can access it',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_storage_access_unknown',
      label: 'Somewhat, but not for every tool or system',
      baseStatus: 'Review recommended',
    },
    { value: 'no_storage_access_unknown', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q6 = {
  id: 'q6',
  field: 's13_q6_data_access_by_tools_vendors_team',
  mode: 'single',
  question:
    'Do vendors, platforms, contractors, employees, AI tools, analytics tools, payment tools, CRMs, email tools, cloud tools, or automations access or process this information?',
  required: true,
  options: [
    {
      value: 'yes_tools_vendors_team_access_data',
      label: 'Yes',
      baseStatus: 'Review recommended',
    },
    { value: 'no_tools_vendors_team_access_data', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'some_access_not_documented',
      label: 'Some do, but not all are documented',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q7 = {
  id: 'q7',
  field: 's13_q7_public_privacy_language_exists',
  mode: 'single',
  question:
    'Do you have public-facing privacy language, such as a privacy policy, privacy notice, data-use statement, consent language, or donor/member/user notice?',
  required: true,
  options: [
    { value: 'yes_privacy_language_exists', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'privacy_language_outdated_incomplete',
      label: 'Yes, but it may be outdated or incomplete',
      baseStatus: 'Review recommended',
    },
    { value: 'no_privacy_language', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q8 = {
  id: 'q8',
  field: 's13_q8_privacy_language_matches_practice',
  mode: 'single',
  question:
    'Does your privacy language match what your business actually collects, uses, stores, shares, analyzes, sends to vendors, or uses with AI tools?',
  required: true,
  options: [
    {
      value: 'yes_privacy_language_matches_practice',
      label: 'Yes',
      baseStatus: 'Indicated',
    },
    {
      value: 'mostly_matches_may_need_updates',
      label: 'Mostly, but it may need updates',
      baseStatus: 'Review recommended',
    },
    { value: 'no_privacy_language_mismatch', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q9 = {
  id: 'q9',
  field: 's13_q9_terms_platform_data_user_content_alignment',
  mode: 'single',
  question:
    'Do your terms of use, customer terms, member terms, donor terms, program terms, or service terms address how people may use your site, platform, community, app, content, services, data, accounts, or user-generated content?',
  required: true,
  options: [
    { value: 'yes_terms_address_use', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_terms_address_use',
      label: 'Some do, but not all',
      baseStatus: 'Review recommended',
    },
    { value: 'no_terms_address_use', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q10 = {
  id: 'q10',
  field: 's13_q10_data_use_transparency',
  mode: 'single',
  question: 'Are people told why information is being collected and how it may be used?',
  required: true,
  options: [
    { value: 'yes_people_told_why_and_how', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'sometimes_inconsistent_transparency',
      label: 'Sometimes, but not consistently',
      baseStatus: 'Review recommended',
    },
    { value: 'no_data_use_transparency', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q11 = {
  id: 'q11',
  field: 's13_q11_tracking_technologies',
  mode: 'single',
  question:
    'Do you use cookies, pixels, analytics, retargeting, ads, session replay, tracking tools, or similar technologies on your website, app, landing pages, emails, or platforms?',
  required: true,
  options: [
    {
      value: 'yes_tracking_technologies_used',
      label: 'Yes',
      baseStatus: 'Review recommended',
    },
    { value: 'no_tracking_technologies_used', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'planning_tracking_technologies',
      label: 'We are planning to',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q12 = {
  id: 'q12',
  field: 's13_q12_secondary_data_uses',
  mode: 'single',
  question:
    'Do you use information for email marketing, SMS/text marketing, retargeting, ads, analytics, personalization, fundraising, AI analysis, customer scoring, lead scoring, recommendations, or automated follow-up?',
  required: true,
  options: [
    { value: 'yes_secondary_data_uses', label: 'Yes', baseStatus: 'Review recommended' },
    { value: 'no_secondary_data_uses', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'planning_secondary_data_uses',
      label: 'We are planning to',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q13 = {
  id: 'q13',
  field: 's13_q13_data_sharing_transfer_third_parties',
  mode: 'single',
  question:
    'Do you share, sell, license, transfer, exchange, or provide information to sponsors, partners, affiliates, vendors, funders, advertisers, platforms, data providers, or other third parties?',
  required: true,
  options: [
    {
      value: 'yes_data_shared_with_third_parties',
      label: 'Yes',
      baseStatus: 'Review recommended',
    },
    { value: 'no_data_shared_with_third_parties', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'service_providers_vendors_only',
      label: 'Only with service providers or vendors',
      baseStatus: 'Review recommended',
    },
    {
      value: 'planning_data_sharing_third_parties',
      label: 'We are planning to',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q14 = {
  id: 'q14',
  field: 's13_q14_sensitive_information_collected',
  mode: 'single',
  question:
    "Do you collect or use sensitive information, such as health, wellness, financial, employment, children's, location, demographic, donor, confidential business, third-party, biometric, government-ID, identity-related, eligibility, dataset participant, or research information?",
  required: true,
  options: [
    {
      value: 'yes_sensitive_information_collected',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'no_sensitive_information_collected', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'planning_sensitive_information_collection',
      label: 'We are planning to',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q15 = {
  id: 'q15',
  field: 's13_q15_health_wellness_body_related_information',
  mode: 'single',
  question:
    'Do you collect health, wellness, fitness, nutrition, coaching, therapy-adjacent, medical-adjacent, mental health, disability, biometric, reproductive health, or other body-related information?',
  required: true,
  options: [
    {
      value: 'yes_health_wellness_body_related_information',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'no_health_wellness_body_related_information',
      label: 'No',
      baseStatus: 'Indicated',
    },
    {
      value: 'planning_health_wellness_body_related_information',
      label: 'We are planning to',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q16 = {
  id: 'q16',
  field: 's13_q16_dataset_ai_product_training_data',
  mode: 'single',
  question:
    'Do you collect, use, store, analyze, license, sell, share, or protect dataset participant information, research data, training data, testing data, evaluation data, user-generated data, or data used to build, test, train, improve, or validate an AI product, software product, app, report, model, or tool?',
  required: true,
  options: [
    {
      value: 'yes_dataset_ai_product_training_data',
      label: 'Yes',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'no_dataset_ai_product_training_data', label: 'No', baseStatus: 'Indicated' },
    {
      value: 'planning_dataset_ai_product_training_data',
      label: 'We are planning to',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q17 = {
  id: 'q17',
  field: 's13_q17_vendor_tool_data_handling_awareness',
  mode: 'single',
  question:
    'Do you know whether the tools or vendors that receive information can store, retain, train on, reuse, share, sell, license, export, transfer, or access that information?',
  required: true,
  options: [
    {
      value: 'yes_vendor_data_handling_reviewed',
      label: 'Yes, we have reviewed this for key tools',
      baseStatus: 'Indicated',
    },
    {
      value: 'some_vendor_data_handling_reviewed',
      label: 'Somewhat, but not for every tool',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_vendor_data_handling_not_reviewed',
      label: 'No',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q18 = {
  id: 'q18',
  field: 's13_q18_cross_border_multistate_data_presence',
  mode: 'single',
  question:
    'Do you have customers, users, donors, website visitors, members, clients, subscribers, prospects, beta users, dataset participants, or program participants in other states, California, the EU, the UK, Canada, or other countries?',
  required: true,
  options: [
    {
      value: 'yes_cross_border_multistate_data_presence',
      label: 'Yes',
      baseStatus: 'Review recommended',
    },
    {
      value: 'no_cross_border_multistate_data_presence',
      label: 'No',
      baseStatus: 'Indicated',
    },
    {
      value: 'planning_cross_border_multistate_data_presence',
      label: 'We are planning to',
      baseStatus: 'Review recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q19 = {
  id: 'q19',
  field: 's13_q19_data_request_process',
  mode: 'single',
  question:
    'Do you have a process for requests to unsubscribe, stop communications, access information, correct information, delete information, opt out, withdraw consent, limit use, or ask questions about data use?',
  required: true,
  options: [
    { value: 'yes_data_request_process', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_informal_data_request_process',
      label: 'Somewhat, but it is informal',
      baseStatus: 'Review recommended',
    },
    { value: 'no_data_request_process', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q20 = {
  id: 'q20',
  field: 's13_q20_internal_data_rules',
  mode: 'single',
  question:
    'Do you have internal rules for who may collect, access, download, export, share, retain, delete, use, analyze, or send information to vendors, AI tools, platforms, or third parties?',
  required: true,
  options: [
    { value: 'yes_internal_data_rules', label: 'Yes', baseStatus: 'Indicated' },
    {
      value: 'some_informal_internal_data_rules',
      label: 'Some informal expectations exist',
      baseStatus: 'Review recommended',
    },
    { value: 'no_internal_data_rules', label: 'No', baseStatus: 'Review recommended' },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13q21 = {
  id: 'q21',
  field: 's13_q21_privacy_data_active_issues',
  mode: 'multi',
  question:
    'Have any privacy, data, consent, unsubscribe, deletion, access, correction, opt-out, vendor, platform, AI, customer, donor, employee, contractor, confidentiality, tracking, cookie, breach, security, dataset, public-claim, funder, diligence, or complaint issues already come up?',
  required: true,
  options: [
    { value: 'no_known_issues', label: 'No known issues', baseStatus: 'Indicated' },
    {
      value: 'customer_client_user_donor_member_dataset_participant_prospect_concern',
      label: 'Customer, client, user, donor, member, dataset participant, or prospect concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'employee_applicant_contractor_volunteer_intern_advisor_worker_concern',
      label: 'Employee, applicant, contractor, volunteer, intern, advisor, or worker concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'unsubscribe_deletion_access_correction_opt_out_consent_request',
      label: 'Unsubscribe, deletion, access, correction, opt-out, consent, or communication request',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'vendor_platform_tracking_crm_payment_email_cloud_tool_issue',
      label: 'Vendor, platform, analytics, cookie, pixel, tracking, CRM, payment, email, or cloud-tool issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'ai_tool_automation_training_data_dataset_data_use_concern',
      label: 'AI tool, automation, training data, dataset, or data-use concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'confidentiality_third_party_data_concern',
      label: 'Confidentiality or third-party data concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'data_access_export_deletion_loss_breach_security_concern',
      label: 'Data access, export, deletion, loss, breach, or security concern',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'privacy_language_may_not_match_actual_practice',
      label: 'Privacy language may not match actual practice',
      baseStatus: 'Professional review strongly recommended',
    },
    {
      value: 'terms_user_generated_content_platform_member_community_issue',
      label: 'Terms of use, user-generated content, platform, or member/community issue',
      baseStatus: 'Review recommended',
    },
    {
      value: 'sponsor_grantor_funder_investor_partner_diligence_question',
      label: 'Sponsor, grantor, funder, investor, partner, or diligence question',
      baseStatus: 'Review recommended',
    },
    {
      value: 'international_california_multistate_cross_border_data_question',
      label: 'International, California, multi-state, or cross-border data question',
      baseStatus: 'Professional review strongly recommended',
    },
    { value: 'not_sure', label: 'I am not sure', baseStatus: 'Review recommended' },
  ],
}

export const s13QuestionsById = {
  q1: s13q1,
  q2: s13q2,
  q3: s13q3,
  q4: s13q4,
  q5: s13q5,
  q6: s13q6,
  q7: s13q7,
  q8: s13q8,
  q9: s13q9,
  q10: s13q10,
  q11: s13q11,
  q12: s13q12,
  q13: s13q13,
  q14: s13q14,
  q15: s13q15,
  q16: s13q16,
  q17: s13q17,
  q18: s13q18,
  q19: s13q19,
  q20: s13q20,
  q21: s13q21,
}

const S13_QUESTION_ORDER = [
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
  'q20',
  'q21',
]

function q1IndicatesCollection(q1) {
  return ['yes_collects_information', 'planning_to_collect_information', 'not_sure'].includes(
    q1,
  )
}

export function hasCustomerFacingGateSignal(state) {
  const models = (state.business_models ?? []).filter((v) => v !== 'unknown')
  if (models.length > 0) {
    return true
  }

  return (
    includesAny(state.next_moves ?? [], [
      'launching',
      'platform_channel_sales',
      'enterprise_customers',
      'signing_agreement',
      'seeking_donations_grants_sponsors',
    ]) ||
    includesAny(state.growth_path ?? [], ['platform_marketplace', 'enterprise_growth'])
  )
}

export function hasPriorDataCollectionSignal(state, tags) {
  if (hasAnyTag({ tags }, S13_SHOW_TAGS)) {
    return true
  }

  if (includesAny(state.ai_use ?? [], ['customer_facing_product', 'decision_high_risk'])) {
    return true
  }

  const s3Offers = state.s3_q1_offer_type ?? []
  if (includesAny(s3Offers, S3_ONLINE_DIGITAL_OFFERS)) {
    return true
  }

  if ((state.business_models ?? []).includes('high_scrutiny')) {
    return true
  }

  return false
}

function hasDataCollectionSignal(state, tags) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }
  return hasPriorDataCollectionSignal(state, tags)
}

export function shouldS13EarlyExit(state, tags) {
  return (
    state.s13_q1_data_collection_status === 'no_does_not_collect_information' &&
    !hasPriorDataCollectionSignal(state, tags)
  )
}

export function isS13Triggered(state, tags) {
  if (hasAnyTag({ tags }, S13_SHOW_TAGS)) {
    return true
  }
  return hasCustomerFacingGateSignal(state)
}

function hasHealthWellnessBodySignal(state, tags) {
  const q2 = state.s13_q2_data_types_collected ?? []
  const q3 = state.s13_q3_data_subject_groups ?? []

  if (q2.includes('health_wellness_coaching_body_related_information')) {
    return true
  }

  if (q3.includes('patients_wellness_clients_coaching_clients_retreat_participants_high_trust')) {
    return true
  }

  return (
    (state.business_models ?? []).includes('high_scrutiny') ||
    includesAny(state.s3_q2_primary_audience_or_recipient ?? [], [
      'children_students_patients_vulnerable_high_scrutiny',
    ])
  )
}

function shouldShowS13Q2(state, tags) {
  return hasDataCollectionSignal(state, tags)
}

function shouldShowS13Q3(state, tags) {
  return hasDataCollectionSignal(state, tags)
}

function shouldShowS13Q4(state, tags) {
  return hasDataCollectionSignal(state, tags)
}

function shouldShowS13Q5(state, tags) {
  return (
    hasDataCollectionSignal(state, tags) &&
    !(
      state.s13_q1_data_collection_status === 'no_does_not_collect_information' &&
      !hasPriorDataCollectionSignal(state, tags)
    )
  )
}

function shouldShowS13Q6(state, tags) {
  return shouldShowS13Q5(state, tags)
}

function shouldShowS13Q7(state, tags) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }
  if (hasPriorDataCollectionSignal(state, tags)) {
    return true
  }
  if (hasCustomerFacingGateSignal(state)) {
    return true
  }
  if (includesAny(state.s3_q1_offer_type ?? [], S3_ONLINE_DIGITAL_OFFERS)) {
    return true
  }
  if (
    includesAny(state.ai_use ?? [], [
      'customer_facing_product',
      'decision_high_risk',
      'work_product',
    ])
  ) {
    return true
  }
  return includesAny(state.s13_q4_collection_channels ?? [], [
    'website_forms_landing_pages',
    'email_newsletter_signups',
    'ai_tools_chatbots_agents_automated_workflows',
    'social_ads_pixels_analytics_tracking_session_replay',
  ])
}

function shouldShowS13Q8(state) {
  const q7 = state.s13_q7_public_privacy_language_exists
  return (
    q7 === 'yes_privacy_language_exists' ||
    q7 === 'privacy_language_outdated_incomplete' ||
    q7 === 'not_sure'
  )
}

function shouldShowS13Q9(state) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }

  const q4 = state.s13_q4_collection_channels ?? []
  if (
    includesAny(q4, [
      'website_forms_landing_pages',
      'apps_portals_dashboards_memberships_courses_communities',
      'files_uploads_documents_media_user_generated_content',
      'email_newsletter_signups',
      'events_webinars_retreats_workshops_in_person_signups',
    ])
  ) {
    return true
  }

  return includesAny(state.s3_q1_offer_type ?? [], S3_ONLINE_DIGITAL_OFFERS)
}

function shouldShowS13Q10(state, tags) {
  return shouldShowS13Q5(state, tags)
}

function shouldShowS13Q11(state) {
  const q4 = state.s13_q4_collection_channels ?? []
  if (
    includesAny(q4, [
      'website_forms_landing_pages',
      'email_newsletter_signups',
      'apps_portals_dashboards_memberships_courses_communities',
      'social_ads_pixels_analytics_tracking_session_replay',
    ])
  ) {
    return true
  }
  return includesAny(state.s3_q1_offer_type ?? [], S3_ONLINE_DIGITAL_OFFERS)
}

function shouldShowS13Q12(state) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }

  const q4 = state.s13_q4_collection_channels ?? []
  if (
    includesAny(q4, [
      'email_newsletter_signups',
      'crm_sales_marketing_tools',
      'ai_tools_chatbots_agents_automated_workflows',
      'social_ads_pixels_analytics_tracking_session_replay',
      'events_webinars_retreats_workshops_in_person_signups',
      'apps_portals_dashboards_memberships_courses_communities',
    ])
  ) {
    return true
  }

  return includesAny(state.s3_q1_offer_type ?? [], S3_MARKETING_COMMUNITY_AI_OFFERS)
}

function shouldShowS13Q13(state) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }

  const q4 = state.s13_q4_collection_channels ?? []
  return includesAny(q4, [
    'third_parties_provide_information',
    'ai_tools_chatbots_agents_automated_workflows',
    'social_ads_pixels_analytics_tracking_session_replay',
    'payment_processors_checkout_pages',
    'crm_sales_marketing_tools',
    'email_newsletter_signups',
    'scheduling_tools',
    'apps_portals_dashboards_memberships_courses_communities',
  ])
}

function shouldShowS13Q14(state) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }

  const q2 = state.s13_q2_data_types_collected ?? []
  if (q2.some((value) => Q2_SENSITIVE_VALUES.includes(value))) {
    return true
  }

  const q3 = state.s13_q3_data_subject_groups ?? []
  return q3.some((value) => Q3_SENSITIVE_GROUPS.includes(value))
}

function shouldShowS13Q15(state, tags) {
  const q2 = state.s13_q2_data_types_collected ?? []
  if (q2.includes('health_wellness_coaching_body_related_information')) {
    return true
  }

  const q3 = state.s13_q3_data_subject_groups ?? []
  if (q3.includes('patients_wellness_clients_coaching_clients_retreat_participants_high_trust')) {
    return true
  }

  const q14 = state.s13_q14_sensitive_information_collected
  if (
    (q14 === 'yes_sensitive_information_collected' ||
      q14 === 'planning_sensitive_information_collection' ||
      q14 === 'not_sure') &&
    hasHealthWellnessBodySignal(state, tags)
  ) {
    return true
  }

  return false
}

function shouldShowS13Q16(state) {
  const q2 = state.s13_q2_data_types_collected ?? []
  if (q2.includes('dataset_research_training_testing_evaluation_product_data')) {
    return true
  }

  const q3 = state.s13_q3_data_subject_groups ?? []
  if (q3.includes('dataset_research_testers_beta_product_users')) {
    return true
  }

  return includesAny(state.s3_q1_offer_type ?? [], S3_DATASET_AI_OFFERS)
}

function shouldShowS13Q17(state) {
  const q6 = state.s13_q6_data_access_by_tools_vendors_team
  if (
    q6 === 'yes_tools_vendors_team_access_data' ||
    q6 === 'some_access_not_documented' ||
    q6 === 'not_sure'
  ) {
    return true
  }

  const q4 = state.s13_q4_collection_channels ?? []
  return includesAny(q4, [
    'ai_tools_chatbots_agents_automated_workflows',
    'social_ads_pixels_analytics_tracking_session_replay',
    'payment_processors_checkout_pages',
    'crm_sales_marketing_tools',
    'scheduling_tools',
    'email_newsletter_signups',
    'third_parties_provide_information',
    'apps_portals_dashboards_memberships_courses_communities',
    'team_members_collect_information',
  ])
}

function shouldShowS13Q18(state) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }

  const q4 = state.s13_q4_collection_channels ?? []
  return includesAny(q4, [
    'website_forms_landing_pages',
    'apps_portals_dashboards_memberships_courses_communities',
    'email_newsletter_signups',
    'events_webinars_retreats_workshops_in_person_signups',
    'payment_processors_checkout_pages',
  ])
}

function shouldShowS13Q19(state) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }

  const q12 = state.s13_q12_secondary_data_uses
  if (
    q12 === 'yes_secondary_data_uses' ||
    q12 === 'planning_secondary_data_uses' ||
    q12 === 'not_sure'
  ) {
    return true
  }

  const q18 = state.s13_q18_cross_border_multistate_data_presence
  return (
    q18 === 'yes_cross_border_multistate_data_presence' ||
    q18 === 'planning_cross_border_multistate_data_presence' ||
    q18 === 'not_sure'
  )
}

function shouldShowS13Q20(state) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }

  const q6 = state.s13_q6_data_access_by_tools_vendors_team
  if (
    q6 === 'yes_tools_vendors_team_access_data' ||
    q6 === 'some_access_not_documented' ||
    q6 === 'not_sure'
  ) {
    return true
  }

  return (state.s13_q4_collection_channels ?? []).includes('team_members_collect_information')
}

function hasPrivacyDataConcernSignal(state, tags) {
  if (q1IndicatesCollection(state.s13_q1_data_collection_status)) {
    return true
  }
  if (hasPriorDataCollectionSignal(state, tags)) {
    return true
  }
  if (state.s13_inherited_ai_data_use_signal) {
    return true
  }
  if (tags.has('EVENT_DATA_SECURITY_CONCERN')) {
    return true
  }

  const q14 = state.s13_q14_sensitive_information_collected
  if (
    q14 === 'yes_sensitive_information_collected' ||
    q14 === 'planning_sensitive_information_collection'
  ) {
    return true
  }

  const q21 = state.s13_q21_privacy_data_active_issues ?? []
  if (q21.some((value) => value !== 'no_known_issues')) {
    return true
  }

  return includesAny(state.s13_q2_data_types_collected ?? [], Q2_SENSITIVE_VALUES)
}

function shouldShowS13Q21(state, tags) {
  return hasPrivacyDataConcernSignal(state, tags)
}

const S13_SHOW_CHECKERS = {
  q1: () => true,
  q2: shouldShowS13Q2,
  q3: shouldShowS13Q3,
  q4: shouldShowS13Q4,
  q5: shouldShowS13Q5,
  q6: shouldShowS13Q6,
  q7: shouldShowS13Q7,
  q8: shouldShowS13Q8,
  q9: shouldShowS13Q9,
  q10: shouldShowS13Q10,
  q11: shouldShowS13Q11,
  q12: shouldShowS13Q12,
  q13: shouldShowS13Q13,
  q14: shouldShowS13Q14,
  q15: shouldShowS13Q15,
  q16: shouldShowS13Q16,
  q17: shouldShowS13Q17,
  q18: shouldShowS13Q18,
  q19: shouldShowS13Q19,
  q20: shouldShowS13Q20,
  q21: shouldShowS13Q21,
}

export function getVisibleS13QuestionIds(state, tags) {
  if (state.s13_q1_data_collection_status == null) {
    return ['q1']
  }

  if (shouldS13EarlyExit(state, tags)) {
    return ['q1']
  }

  return S13_QUESTION_ORDER.filter((questionId) => {
    const checker = S13_SHOW_CHECKERS[questionId]
    if (!checker) {
      return false
    }
    if (questionId === 'q8') {
      return checker(state)
    }
    if (questionId === 'q11' || questionId === 'q12' || questionId === 'q15' || questionId === 'q16') {
      return checker(state, tags)
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

export function computeS13Q10WeakTransparency(state) {
  const q10 = state.s13_q10_data_use_transparency
  return q10 === 'no_data_use_transparency' || q10 === 'not_sure'
}

export function computeS13Q12Escalated(state) {
  const q12 = state.s13_q12_secondary_data_uses
  return (
    (q12 === 'yes_secondary_data_uses' || q12 === 'planning_secondary_data_uses') &&
    computeS13Q10WeakTransparency(state)
  )
}

export function computeS13DerivedFields(state, tags) {
  return {
    s13_early_exit: shouldS13EarlyExit(state, tags),
    s13_q10_weak_transparency: computeS13Q10WeakTransparency(state),
    s13_q12_escalated: computeS13Q12Escalated(state),
    s13_inherited_ai_data_use_signal: Boolean(state.s13_inherited_ai_data_use_signal),
  }
}

export function resolveS13QuestionAnswer(questionId, state) {
  const question = s13QuestionsById[questionId]
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
  let resolvedStatus = baseStatus

  if (questionId === 'q12' && computeS13Q12Escalated(state)) {
    resolvedStatus = 'Professional review strongly recommended'
  }

  return {
    value: fieldValue,
    baseStatus,
    resolvedStatus,
    q12Escalated: questionId === 'q12' ? computeS13Q12Escalated(state) : false,
    q10WeakTransparency:
      questionId === 'q10' ? computeS13Q10WeakTransparency(state) : undefined,
  }
}

export function getS13QuestionById(id) {
  return s13QuestionsById[id]
}
