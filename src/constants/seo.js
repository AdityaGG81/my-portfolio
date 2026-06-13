/**
 * Canonical site URL (no trailing slash).
 * @type {string}
 */
export const SITE_URL = 'https://adityaghorpade.tech' // Update this later if needed

/**
 * Primary document path used for canonical and Open Graph URLs.
 * @type {string}
 */
export const SITE_PATH = '/'

/**
 * Full legal / display name.
 * @type {string}
 */
export const PERSON_NAME = 'Aditya Ghorpade'

/**
 * Target search phrases for meta keywords, schema knowsAbout, and on-page copy.
 * @type {readonly string[]}
 */
export const SEO_KEYWORDS = [
  'Aditya Ghorpade',
  'Full Stack Engineer',
  'Next.js Developer',
  'Node.js Developer',
  'Laravel Developer',
  'AI Integrations',
  'DevOps',
  'Software Engineer',
  'Backend Developer',
  'Full Stack Developer'
]

/**
 * Comma-separated keywords for the meta keywords tag.
 * @type {string}
 */
export const META_KEYWORDS = SEO_KEYWORDS.join(', ')

/**
 * Document title (aim for under ~60 characters in SERPs).
 * @type {string}
 */
export const META_TITLE =
  'Aditya Ghorpade | Full Stack Engineer'

/**
 * Document title for the custom 404 page.
 * @type {string}
 */
export const NOT_FOUND_META_TITLE = '404 — Page Not Found | Aditya Ghorpade'

/**
 * Meta description (~150–160 characters).
 * @type {string}
 */
export const META_DESCRIPTION =
  'Aditya Ghorpade — Full Stack Engineer. I build production-ready applications with Next.js, Node.js, Laravel, and cloud infrastructure.'

/** Open Graph site name. @type {string} */
export const OG_SITE_NAME = 'Aditya Ghorpade Portfolio'

/** Open Graph / Twitter title. @type {string} */
export const OG_TITLE = META_TITLE

/** Open Graph / Twitter description. @type {string} */
export const OG_DESCRIPTION = META_DESCRIPTION

/** Open Graph image absolute URL. @type {string} */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`

/** Alt text for OG / Twitter preview images. @type {string} */
export const OG_IMAGE_ALT =
  'Aditya Ghorpade — Full Stack Engineer'

/** Contact email (public). @type {string} */
export const CONTACT_EMAIL = 'adityaghorpade81@gmail.com'

/** Social profile URLs for schema sameAs. @type {readonly string[]} */
export const SAME_AS = [
  'https://github.com/AdityaGG81',
  'https://www.linkedin.com/in/adityag81/',
  'https://x.com/Aditya_G81',
]

/**
 * Social profiles for the contact section (url + accessible label).
 * @type {readonly { url: string, ariaLabel: string, id: 'github' | 'linkedin' | 'x' }[]}
 */
export const SOCIAL_PROFILES = [
  {
    id: 'github',
    url: 'https://github.com/AdityaGG81',
    ariaLabel: 'Aditya Ghorpade on GitHub',
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/adityag81/',
    ariaLabel: 'Aditya Ghorpade on LinkedIn',
  },
  {
    id: 'x',
    url: 'https://x.com/Aditya_G81',
    ariaLabel: 'Aditya Ghorpade on X',
  },
]

/**
 * Skills and topics for schema.org knowsAbout.
 * @type {readonly string[]}
 */
export const KNOWS_ABOUT = [
  'Next.js',
  'Node.js',
  'Laravel',
  'React',
  'AI Integrations',
  'Cloud Infrastructure',
  'DevOps',
  'Full Stack Development'
]

/**
 * Hero tagline shown above the name (visible, keyword-aware).
 * @type {string}
 */
export const HERO_KICKER =
  'FULL STACK ENGINEER · AI INTEGRATIONS · DEVOPS'

/**
 * Hero supporting paragraph (plain text for static LCP shell and meta).
 * @type {string}
 */
export const HERO_SUMMARY_PLAIN =
  'I build production-ready applications with Next.js, Node.js, Laravel, and cloud infrastructure. Experienced in AI integrations, automation, and scalable backend systems.'

/**
 * Accessible label for the profile image.
 * @type {string}
 */
export const PROFILE_IMAGE_ALT =
  'Aditya Ghorpade — Full Stack Engineer'

/**
 * schema.org @graph for index.html JSON-LD.
 * @returns {object}
 */
export function buildStructuredDataGraph() {
  const pageUrl = `${SITE_URL}${SITE_PATH}`
  const personId = `${pageUrl}#person`
  const websiteId = `${pageUrl}#website`
  const profileId = `${pageUrl}#profilepage`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: PERSON_NAME,
        givenName: 'Aditya',
        familyName: 'Ghorpade',
        url: pageUrl,
        image: OG_IMAGE_URL,
        email: `mailto:${CONTACT_EMAIL}`,
        jobTitle: [
          'Full Stack Engineer',
        ],
        description: META_DESCRIPTION,
        sameAs: [...SAME_AS],
        knowsAbout: [...KNOWS_ABOUT],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: OG_SITE_NAME,
        url: pageUrl,
        description: META_DESCRIPTION,
        publisher: { '@id': personId },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'ProfilePage',
        '@id': profileId,
        url: pageUrl,
        name: META_TITLE,
        description: META_DESCRIPTION,
        mainEntity: { '@id': personId },
        isPartOf: { '@id': websiteId },
        inLanguage: 'en-IN',
      },
    ],
  }
}
