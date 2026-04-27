import { SITE, REVIEWER, EDITORIAL } from './site';

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': SITE.organizationId,
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: SITE.logo, width: 512, height: 512 },
  description: SITE.description,
  foundingDate: SITE.foundingDate,
  sameAs: SITE.sameAs,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'editorial',
    email: SITE.contactEmail,
    availableLanguage: ['English'],
  },
});

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE.websiteId,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  publisher: { '@id': SITE.organizationId },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/products?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const reviewerPersonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': REVIEWER.id,
  name: REVIEWER.name,
  honorificPrefix: REVIEWER.honorificPrefix,
  jobTitle: REVIEWER.jobTitle,
  affiliation: { '@type': 'Organization', name: REVIEWER.affiliation },
  knowsAbout: REVIEWER.expertise,
  hasCredential: REVIEWER.credentials.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: c,
  })),
  sameAs: REVIEWER.sameAs,
});

export const editorialOrgLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': EDITORIAL.id,
  name: EDITORIAL.name,
  url: EDITORIAL.url,
  description: EDITORIAL.description,
  parentOrganization: { '@id': SITE.organizationId },
});

export interface ArticleArgs {
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  breadcrumb?: { name: string; item: string }[];
  reviewed?: boolean;
  type?: 'Article' | 'MedicalWebPage';
  about?: { name: string; alternateName?: string; type?: string }[];
  speakable?: string[];
}

export const articleLd = (a: ArticleArgs) => {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': a.type ?? 'Article',
    headline: a.headline,
    description: a.description,
    url: a.url,
    inLanguage: 'en-US',
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    author: { '@id': EDITORIAL.id },
    publisher: { '@id': SITE.organizationId },
  };
  if (a.image) base.image = a.image;
  if (a.reviewed) {
    base.reviewedBy = { '@id': REVIEWER.id };
    base.lastReviewed = a.dateModified;
  }
  if (a.type === 'MedicalWebPage' && a.about?.length) {
    base.about = a.about.map((t) => ({
      '@type': t.type ?? 'Drug',
      name: t.name,
      ...(t.alternateName ? { alternateName: t.alternateName } : {}),
    }));
    base.medicalAudience = [
      { '@type': 'MedicalAudience', audienceType: 'Patient' },
      { '@type': 'MedicalAudience', audienceType: 'Researcher' },
    ];
  }
  if (a.speakable?.length) {
    base.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: a.speakable,
    };
  }
  return base;
};

export const breadcrumbLd = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.item,
  })),
});

export const faqLd = (qa: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: qa.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
