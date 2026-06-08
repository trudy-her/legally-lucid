export const diagnosticSectionIntros = [
  {
    sectionId: 'S0',
    name: 'Welcome, Orientation, and Readiness Map Framing',
    intro: `Welcome to the Business Protection Diagnostic.

This Diagnostic is designed to help you see your business or organization more clearly, not to make you feel behind. Most founders, nonprofits, and business owners build in motion. They use AI tools, templates, vendors, contractors, informal promises, payment platforms, websites, email lists, and quick decisions long before everything is fully documented. That is normal. The goal here is not to judge what you have done. The goal is to help you understand what exists, what may be missing, what may need review, and what to gather next.

As you answer, focus on what is true today and what you are actively planning. You do not need perfect records. You do not need to know legal terms. Your answers will help create your Business Protection Map, which points you to practical next steps, relevant Vault resources, and areas where a qualified professional may be useful. Please do not enter passwords, private account details, customer data, donor data, employee data, health information, confidential documents, or long explanations of sensitive issues. When in doubt, answer at a high level. This Diagnostic is for issue spotting and preparation, not legal advice.`,
  },
  {
    sectionId: 'S1',
    name: 'Business Foundation and Structure',
    intro: `This section looks at the basic structure behind your business or organization: who owns it, who can act for it, what records exist, and whether you are operating through one brand, several brands, a nonprofit, a for-profit, or a hybrid setup.

Do not worry if some pieces are still informal. The goal is to understand your current foundation so your Map can show where records, authority, or structure may need attention.`,
  },
  {
    sectionId: 'S2',
    name: 'Brand, Intellectual Property, and Ownership',
    intro: `This section looks at the names, domains, content, code, frameworks, methods, designs, product materials, and other assets that make your business recognizable or valuable.

You do not need to know every intellectual property term to answer these questions. Just focus on who created what, who uses it, who controls it, and whether anything important may need ownership or permission review.`,
  },
  {
    sectionId: 'S3',
    name: 'Business Model and Offer Readiness',
    intro: `This section looks at what you sell, provide, host, license, operate, or deliver. Different offers create different readiness needs, especially when money, data, digital access, subscriptions, communities, events, software, donations, or professional services are involved.

Answer based on how your offer works today and what you are planning next. The point is to help your Map connect your actual business model to the right next steps.`,
  },
  {
    sectionId: 'S6',
    name: 'Contracts, Agreements, and Commitment Readiness',
    intro: `This section looks at the commitments your business has made or is planning to make, including written contracts, informal promises, vendor terms, grants, sponsorships, fiscal sponsor arrangements, customer terms, donor commitments, and platform terms.

You may not have formal contracts for everything yet. Answer honestly so your Map can flag where the business may need clearer scope, payment, ownership, confidentiality, responsibility, termination, or review.`,
  },
]

export function getSectionIntro(sectionId) {
  return (
    diagnosticSectionIntros.find((entry) => entry.sectionId === sectionId) ??
    null
  )
}
