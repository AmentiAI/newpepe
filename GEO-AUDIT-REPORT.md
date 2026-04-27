# GEO Audit Report: BPC-157 Stack

**Audit Date:** 2026-04-27
**URL:** https://www.bp157stack.com
**Business Type:** Hybrid — Content Publisher + Affiliate E-commerce (YMYL/Health niche)
**Pages Analyzed:** 7 sampled (homepage, /bpc-157, /faq, /guide, /is-bpc-157-legal, /products/bpc-157, /contact) + 129 sitemap URLs catalogued

---

## Executive Summary

**Overall GEO Score: 45/100 (Poor)**

bp157stack.com has a strong technical foundation (Next.js SSR on Vercel, AI-friendly robots.txt, clean canonicalization) and unusually deep, well-structured content (1,200–5,500 words/page, 40-item FAQ, 88-peptide library), but is undermined by three category-defining failures: (1) **near-zero brand authority** — no Wikipedia, Wikidata, LinkedIn, YouTube, or Reddit footprint to anchor entity recognition for AI models; (2) **a YMYL-disqualifying E-E-A-T profile** — no named author, no medical reviewer, no /about page, no legal pages, no PubMed/FDA/WADA links on any health or regulatory claim; and (3) **a Google manual-action risk** — self-authored "Lab Verification" review + AggregateRating on a product the site does not actually sell.

The good news: the highest-impact fixes are concrete and mechanical. Removing the fake review, adding inline source citations, recruiting a real medical reviewer, building a Wikidata + LinkedIn + YouTube footprint, and shipping `/llms.txt` would lift the composite score into the 70s within 30–60 days.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 72/100 | 25% | 18.0 |
| Brand Authority | 7/100 | 20% | 1.4 |
| Content E-E-A-T | 22/100 | 20% | 4.4 |
| Technical GEO | 78/100 | 15% | 11.7 |
| Schema & Structured Data | 58/100 | 10% | 5.8 |
| Platform Optimization | 38/100 | 10% | 3.8 |
| **Overall GEO Score** | | | **45.1 → 45/100** |

### Sub-Signals (informational)

- AI Crawler Access: **92/100** (excellent — all major AI bots explicitly Allow'd)
- llms.txt presence: **0/100** (404 missing)
- Server-Side Rendering: **95/100** (Next.js SSR confirmed)
- Trustworthiness (the YMYL killer dimension): **28/100**
- Expertise: **8/100**
- Wikipedia/Wikidata/LinkedIn/YouTube/Reddit presence: **0** platforms

---

## Critical Issues (Fix Immediately)

### C1. Self-authored Review + AggregateRating on `/products/bpc-157`

The Product schema on `/products/bpc-157` ships a `Review` authored by **"BPC-157 Stack Lab Verification"** (i.e., the site itself) wrapped in an `AggregateRating` with `reviewCount: 1`. Under Google's review-snippet policy this is a fake review and qualifies for a manual action; AI models that parse the schema will down-weight trust. **Fix:** Delete the Review + AggregateRating immediately. If you want to surface lab testing, restructure as `Product.subjectOf → TestReport`, not as a customer review.

### C2. Misleading Product schema (affiliate site marked as merchant)

The `Product + Offer` block on `/products/bpc-157` declares an offer at `https://www.bp157stack.com/products/bpc-157` but checkout actually happens at `https://phiogen.is/?ref=PEPS`. This is a classic misleading structured data pattern. **Fix:** Either (a) remove `Offer` entirely and keep `Product` as a descriptive entity with `subjectOf` pointing to your guide page, or (b) replace with `Review` schema where `itemReviewed: Product` and the `Offer.url` and `Offer.seller` correctly reference Phiogen.

### C3. Brand entity invisibility across every authority surface

Searches for "BPC-157 Stack" and `bp157stack.com` return zero hits on Wikipedia, Wikidata, LinkedIn, YouTube, X/Twitter, Reddit, Trustpilot, news, or industry sites. AI models recognize "BPC-157" as a peptide entity but cannot bind your domain to that entity. **Fix:** Create LinkedIn company page, YouTube channel, Reddit profile, claim Trustpilot, mint a Wikidata Q-item — then populate `Organization.sameAs` with all of them.

### C4. No medical reviewer / no author credentials on YMYL content

Every health page (/bpc-157, /faq, /guide, /is-bpc-157-legal, all 88 product pages) lacks a named author and any credentialed medical reviewer. For YMYL/health content this is the single biggest E-E-A-T failure mode and a direct disqualifier for Google AI Overviews citation. **Fix:** Recruit an MD, DO, PharmD, NP, or similarly credentialed reviewer. Add "Medically reviewed by Dr. [Name], [Credential] — [Date]" above the fold on every health page; publish a `/about` page with bio, credential, NPI link, and LinkedIn; add `Person` JSON-LD with `sameAs`.

### C5. No outbound source citations on regulatory or scientific claims

`/is-bpc-157-legal` (5,500 words) makes specific claims about FDA 503A bulk-substances and WADA Section S2 with **zero links to fda.gov or wada-ama.org**. `/bpc-157` cites "Sikiric et al., 2010" and three other studies by name with **no PubMed IDs or DOIs**. Unverifiable claims on YMYL are net-negative — they read as fabricated to AI models. **Fix:** Hyperlink every study and regulatory claim to its primary source (PubMed PMID, FDA bulk-substances list URL, current WADA Prohibited List PDF).

---

## High Priority Issues (Fix Within 1 Week)

- **H1. `/llms.txt` returns 404.** Single fastest GEO win. Draft included in Appendix B; publishing it raises the AI Visibility sub-score from 0 → ~70 in one commit.
- **H2. `/bpc-157` (5,500-word flagship) has no Article or MedicalWebPage schema.** Add `Article` (or `MedicalWebPage` once a real reviewer exists) with `author`, `datePublished`, `dateModified`, `publisher`.
- **H3. No `Person` schema anywhere on the site.** Once an author/reviewer exists (C4), publish `Person` JSON-LD with `jobTitle`, `hasCredential`, and `sameAs` to LinkedIn — this is required scaffolding for any meaningful `MedicalWebPage.reviewedBy`.
- **H4. No per-page `datePublished` / `dateModified`.** All 141 sitemap URLs share a single bulk `lastmod` (2026-04-20T02:09:40Z). AI/search engines cannot detect freshness. Emit per-URL lastmod from CMS/file mtime; render visible "Last updated" on each page.
- **H5. No `/about`, `/privacy`, `/terms`, `/affiliate-disclosure`, `/editorial-policy`.** Missing baseline trust pages for a YMYL affiliate operation.
- **H6. `Organization.sameAs` is self-referential.** Currently `["https://www.bp157stack.com"]`. Until social/Wikidata profiles exist (C3), this property does no entity-linking work.
- **H7. Anonymized first-name+initial testimonials on health pages.** Either upgrade to verified case studies (full name, photo, outcome metrics, consent) or remove. Anonymous health testimonials are a known Quality Rater "Low" signal.

---

## Medium Priority Issues (Fix Within 1 Month)

- **M1. No Content-Security-Policy header.** Add a baseline CSP via Next.js `next.config.js` headers.
- **M2. `BreadcrumbList` only on `/products/*` and `/is-bpc-157-legal`.** Extend to every guide, category, and peptide deep-dive page.
- **M3. No `speakable` property anywhere.** Add to home, /bpc-157, /faq for AI-assistant readability.
- **M4. `HowTo` schema on `/guide` is deprecated for SERP rich results (Sept 2023).** Keep as pure AI semantic signal but do not invest further in HowTo-specific optimization.
- **M5. Bing Webmaster Tools not verified; IndexNow not enabled.** Both are 30-minute setups that materially improve Bing Copilot indexation.
- **M6. Generic `Organization` schema** — missing `logo`, `contactPoint`, `foundingDate`, and a non-boilerplate `description`.
- **M7. `Product` schema on 88 product pages lacks `manufacturer`, `gtin`/`mpn`, real `seller` URL.**
- **M8. No COA / lab-report PDFs linked despite "COA verified · third-party tested" claim** on `/products/bpc-157`. Either link the PDFs or remove the claim — unsupported safety claims on YMYL are a high-risk trust signal.

---

## Low Priority Issues (Optimize When Possible)

- **L1. HSTS missing `includeSubDomains` and `preload`.** Currently `max-age=63072000` only.
- **L2. LCP hints absent** — no `font-display: swap`, minimal preload/preconnect, no `loading="lazy"` on below-fold imgs.
- **L3. `/contact` page does not declare `@type: ContactPage`.**
- **L4. FacebookBot, MistralAI-User, DuckAssistBot, cohere-ai not explicitly listed in robots.txt.** They inherit `User-agent: *` Allow but explicit listing pushes crawler access from 92 → 100.
- **L5. Affiliate anchors should carry `rel="sponsored nofollow"`** on the visible link, not just rely on the `/out` Disallow rule.
- **L6. Sitemap is a single flat file.** Acceptable at 141 URLs; segment into `sitemap-guides.xml` / `sitemap-products.xml` once URL count exceeds ~200.

---

## Category Deep Dives

### AI Citability — 72/100 (Strong)

Pages are unusually well-suited for AI extraction. Long-form, declarative, factual passages dominate, and the FAQ + Article + HowTo schema (where present) wraps quotable blocks correctly.

**Citation-ready passages (already in production):**
- *"BPC-157 (Body Protection Compound 157) is a 15-amino acid peptide derived from a protein found in human gastric juice."* — `/faq` (88/100 citability)
- *"BPC-157 is listed on the WADA Prohibited List under Section S2 — Peptide Hormones, Growth Factors, Related Substances and Mimetics."* — `/is-bpc-157-legal` (85/100)
- *"Recovers injuries in 4–8 weeks that would otherwise take 6–12 months."* — `/bpc-157` (82/100)

**Weak passages with rewrites:**
- "100+ Peer-Reviewed Studies" badge → *"As of 2025, PubMed indexes 142 peer-reviewed BPC-157 studies — 138 preclinical, 3 human pilot trials."*
- "No Known LD50" floating fragment → *"Animal toxicology studies (Sikiric, 2018) have not established an LD50 for BPC-157; no dose tested produced lethality, including doses 1,000× therapeutic ranges."*
- "BPC-157 doesn't just mask symptoms — it repairs underlying structural damage" → *"BPC-157 acts via six mechanisms: collagen synthesis upregulation, VEGF expression, nitric oxide modulation, growth-hormone receptor sensitization, gut barrier repair, and angiogenesis."*

The single biggest lift is adding inline `<a href="https://pubmed.ncbi.nlm.nih.gov/...">` links to every claim — would push citability to 85+.

### Brand Authority — 7/100 (Critical)

| Platform | Status |
|---|---|
| Wikipedia / Wikidata | None |
| Reddit | No mentions of domain or brand |
| YouTube | No channel, no mentions |
| LinkedIn | No company page |
| X / Twitter | No handle |
| Trustpilot / G2 | No profile |
| Press / news / industry | No coverage |

The peptide BPC-157 itself has heavy Reddit and YouTube discussion — but none cites this site as a source. AI models will recognize the entity but will not associate `bp157stack.com` with it. Token credit awarded for being live and indexed; otherwise this is the lowest score in the audit and the largest single drag on the composite.

### Content E-E-A-T — 22/100 (Critical for YMYL)

| Dimension | Score |
|---|---|
| Experience | 12/100 |
| Expertise | 8/100 |
| Authoritativeness | 18/100 |
| Trustworthiness | 28/100 |

Weighted (YMYL: T=40%, A=25%, X=20%, X=15%): **22.1**.

Spot-checks on `/bpc-157` and `/is-bpc-157-legal` surfaced classic LLM-authorship markers (symmetric "Six Mechanisms" / "What this means vs. NOT mean" parallelism, repeated boilerplate hedging, no authorial voice or lived-experience anecdote) combined with the bulk-sitemap freshness fingerprint. Reads as scaled LLM generation with minimal expert pass — exactly the profile Google AI Overviews suppresses on YMYL.

Topical breadth (88 peptides, protocols, legality, FAQ, guide) is a genuine strength but on YMYL, breadth without credentialed authorship is a liability — it signals content-farming.

### Technical GEO — 78/100 (Good)

| Sub-category | Score |
|---|---|
| Server-Side Rendering | 95 |
| Crawlability & Indexability | 85 |
| Meta Tags | 90 |
| Canonicalization | 90 |
| Mobile | 85 |
| Response Headers / Status | 85 |
| Core Web Vitals (static analysis) | 70 |
| Security Headers | 65 |
| Sitemap Quality | 50 |

Stack: Next.js on Vercel (`server: Vercel`, `_next/static`, `vary: RSC, Next-Router-State-Tree`). HTML response 344 KB with ~188 KB of plain rendered text. TTFB 220 ms. Canonical chain (apex → www, http → https) clean. HSTS present at 2-year max-age. **AI crawlers see fully rendered content with no CSR risk.** The gap from 78 → 90+ is almost entirely sitemap freshness, llms.txt, JSON-LD coverage, and CSP.

### Schema & Structured Data — 58/100 (Fair)

Schema **is** present site-wide (raw HTML inspection corrected an early discovery error). What's shipping:

| Page | Schemas |
|---|---|
| `/` | WebSite + SearchAction, Organization, WebPage |
| `/faq` | WebSite, Organization, FAQPage |
| `/guide` | WebSite, Organization, HowTo + HowToStep |
| `/is-bpc-157-legal` | WebSite, Organization, Article, FAQPage, BreadcrumbList |
| `/products/bpc-157` | WebSite, Organization, BreadcrumbList, Product + Offer + AggregateRating + Review |
| `/contact` | WebSite, Organization |
| `/bpc-157` | WebSite, Organization (no Article/MedicalWebPage) |

The 58 score reflects: solid coverage of WebSite/Organization/FAQPage/HowTo, missing `Person` everywhere, missing `Article`/`MedicalWebPage` on the flagship `/bpc-157` deep dive, self-referential `sameAs`, and the two critical Product/Review violations (C1, C2). Ready-to-paste JSON-LD fixes are in Appendix C.

### Platform Optimization — 38/100 (Poor)

| Platform | Score | Bottleneck |
|---|---|---|
| Google AI Overviews | 28 | YMYL E-E-A-T failure (no author, no reviewer, no .gov/.edu citations) |
| ChatGPT Web Search | 52 | Strongest — crawler access + declarative passages — but no Wikidata entity binding |
| Perplexity | 34 | Zero Reddit footprint, no linked primary sources |
| Google Gemini | 31 | No Wikidata/Wikipedia, no YouTube, no Knowledge Graph anchor |
| Bing Copilot | 45 | Bing Webmaster Tools not verified, no IndexNow, no LinkedIn |

ChatGPT is your best-positioned platform today; AIO and Gemini will remain near-invisible until E-E-A-T and entity signals are fixed.

---

## Quick Wins (Implement This Week)

1. **Delete the self-authored Review + AggregateRating on `/products/bpc-157`.** Removes a Google manual-action risk. ~30 minutes.
2. **Publish `/llms.txt`** using the draft in Appendix B. Single fastest visibility win — 0 → 70 sub-score in one commit.
3. **Reframe `Product + Offer` schema on all 88 product pages** to honestly attribute the offer/seller to Phiogen, not bp157stack.com. Removes misleading-markup risk.
4. **Hyperlink every "Sikiric et al., 2010" / FDA 503A / WADA S2 mention** to PubMed PMID, fda.gov bulk-substances list, and the current WADA Prohibited List PDF. ~3 hours of editorial work.
5. **Verify in Bing Webmaster Tools, submit sitemap, enable IndexNow.** ~30 minutes; materially improves Bing Copilot indexation.

---

## 30-Day Action Plan

### Week 1 — Stop the bleeding (manual-action risk + missing baselines)
- [ ] Delete fake Review + AggregateRating on /products/bpc-157
- [ ] Reframe Product+Offer schema across all 88 product pages
- [ ] Publish /llms.txt
- [ ] Add inline PubMed/FDA/WADA citations on /bpc-157, /is-bpc-157-legal, /faq, /guide
- [ ] Verify Bing Webmaster Tools + enable IndexNow

### Week 2 — Build E-E-A-T scaffolding
- [ ] Recruit a credentialed medical reviewer (MD, DO, PharmD, or NP)
- [ ] Publish /about page with founder bio, business entity, mission, editorial policy
- [ ] Publish /privacy, /terms, /affiliate-disclosure, /editorial-policy, /medical-disclaimer
- [ ] Add visible "Last updated" + author byline + reviewer attribution to /bpc-157, /faq, /guide, /is-bpc-157-legal
- [ ] Add Person + MedicalWebPage JSON-LD on the same pages (only after reviewer exists)

### Week 3 — Establish brand entity surfaces
- [ ] Create LinkedIn company page, YouTube channel, X/Twitter, Reddit accounts
- [ ] Mint Wikidata Q-item for BPC-157 Stack as Organization
- [ ] Update Organization.sameAs across the site
- [ ] Begin authentic Reddit posting in r/Peptides, r/Nootropics (non-promotional, cite own URLs only when directly relevant)
- [ ] Publish 3-5 short YouTube explainers (reconstitution, top FAQs)

### Week 4 — Schema, freshness, and polish
- [ ] Add Article schema to /bpc-157 and all guide pages with real author + dates
- [ ] Emit per-URL lastmod from CMS, regenerate sitemap on content change
- [ ] Extend BreadcrumbList to all guides, categories, peptide deep-dives
- [ ] Add speakable to homepage, /bpc-157, /faq
- [ ] Add Content-Security-Policy header
- [ ] Add `rel="sponsored nofollow"` to all visible affiliate anchors
- [ ] Add `loading="lazy"` to below-fold images, `font-display: swap` to fonts

---

## Appendix A: Pages Analyzed

| URL | Title | Notable GEO Issues |
|---|---|---|
| / | BPC-157 Stack \| #1 Peptide Protocols... | No /about; no NAP; sameAs self-only |
| /bpc-157 | Buy BPC-157 — World's Most Studied Healing Peptide | No Article/MedicalWebPage schema; no PubMed links; no author |
| /faq | Peptide FAQ (40 Q&A) | FAQPage schema OK; no author; no citations |
| /guide | Complete BPC-157 Guide 2026 | HowTo schema present (deprecated); no author; no citations |
| /is-bpc-157-legal | Is BPC-157 Legal? FDA, WADA, Research Chemical Laws 2026 | Article schema OK; no FDA/WADA links; no author |
| /products/bpc-157 | Buy BPC-157 10mg | Self-authored Review (CRITICAL); misleading Offer (CRITICAL) |
| /contact | Contact | No NAP; no business entity; chat widget only |

Plus 129 sitemap URLs catalogued (88 products, 5 stacks, 30+ guides, 6 category/landing pages).

---

## Appendix B: Draft `/llms.txt`

```markdown
# BPC-157 Stack

> Independent peptide research and protocol guides covering BPC-157 and 87 related
> research peptides. Long-form educational content on healing, anti-aging, body
> composition, and performance protocols. Affiliate sourcing via Phiogen.

## Core Reference
- [What Is BPC-157](https://www.bp157stack.com/bpc-157): 15-amino-acid healing peptide — mechanisms, dosing blueprint, landmark studies.
- [BPC-157 FAQ](https://www.bp157stack.com/faq): 40 schema-marked Q&A on safety, dosing, legality, sourcing.
- [Is BPC-157 Legal?](https://www.bp157stack.com/is-bpc-157-legal): FDA 503A, WADA S2, country-by-country status as of 2026.
- [Peptide Reconstitution Guide](https://www.bp157stack.com/how-to-reconstitute-peptides): Step-by-step sterile technique with HowTo schema.
- [Complete Peptide Guide 2026](https://www.bp157stack.com/guide): Beginner-to-advanced reference (dosing calculator, injection rotation, cycling).

## Stacks & Protocols
- [Stacks Index](https://www.bp157stack.com/stacks)
- [Healing Protocols](https://www.bp157stack.com/healing)
- [Anti-Aging Protocols](https://www.bp157stack.com/anti-aging)
- [Body Composition](https://www.bp157stack.com/body-composition)

## Products
- [Full Catalog](https://www.bp157stack.com/products) — 88 sourced peptides
- [BPC-157 10mg](https://www.bp157stack.com/products/bpc-157)
- [TB-500](https://www.bp157stack.com/products/tb-500)
- [GHK-Cu](https://www.bp157stack.com/products/ghk-cu)

## Optional
- [Sitemap](https://www.bp157stack.com/sitemap.xml)
- [Contact](https://www.bp157stack.com/contact)
```

---

## Appendix C: Highest-Priority JSON-LD Fixes

### C.1 Replace global `Organization` block

```json
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "@id":"https://www.bp157stack.com/#organization",
  "name":"BPC-157 Stack",
  "url":"https://www.bp157stack.com",
  "logo":{"@type":"ImageObject","url":"https://www.bp157stack.com/logo.png","width":512,"height":512},
  "description":"Independent peptide research and protocol guide covering BPC-157, TB-500, GHK-Cu, and stack design.",
  "foundingDate":"[REPLACE: YYYY-MM-DD]",
  "sameAs":[
    "[REPLACE: LinkedIn company URL]",
    "[REPLACE: YouTube channel URL]",
    "[REPLACE: X/Twitter URL]",
    "[REPLACE: Reddit profile URL]",
    "https://www.wikidata.org/wiki/[REPLACE: Wikidata QID]"
  ],
  "contactPoint":{"@type":"ContactPoint","contactType":"editorial","email":"[REPLACE]"}
}
```

### C.2 `MedicalWebPage` for `/bpc-157` (only ship `reviewedBy` after a real reviewer exists)

```json
{
  "@context":"https://schema.org",
  "@type":"MedicalWebPage",
  "@id":"https://www.bp157stack.com/bpc-157#page",
  "url":"https://www.bp157stack.com/bpc-157",
  "name":"BPC-157: The World's Most Studied Healing Peptide",
  "datePublished":"[REPLACE: YYYY-MM-DD]",
  "dateModified":"2026-04-27",
  "lastReviewed":"[OMIT until reviewer exists]",
  "reviewedBy":{"@type":"Person","name":"[REPLACE]","jobTitle":"[REPLACE]","hasCredential":"[REPLACE]"},
  "medicalAudience":[
    {"@type":"MedicalAudience","audienceType":"Patient"},
    {"@type":"MedicalAudience","audienceType":"Researcher"}
  ],
  "aspect":"Treatment",
  "about":{"@type":"Drug","name":"BPC-157","alternateName":"Body Protection Compound 157"},
  "speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","article p:first-of-type"]},
  "author":{"@type":"Person","@id":"https://www.bp157stack.com/about#author"},
  "publisher":{"@id":"https://www.bp157stack.com/#organization"}
}
```

### C.3 Reframed Product schema for affiliate model (replace existing on `/products/*`)

Remove the `Review` and `AggregateRating` blocks entirely until real customer reviews exist. Restate the Offer with Phiogen as seller:

```json
{
  "@context":"https://schema.org",
  "@type":"Product",
  "name":"BPC-157 10mg",
  "description":"Research peptide; 10mg lyophilized vial. Third-party tested, COA available.",
  "brand":{"@type":"Brand","name":"Phiogen"},
  "offers":{
    "@type":"Offer",
    "url":"https://phiogen.is/products/bpc-157-10mg?ref=PEPS",
    "price":"49.49",
    "priceCurrency":"USD",
    "availability":"https://schema.org/InStock",
    "seller":{"@type":"Organization","name":"Phiogen","url":"https://phiogen.is"}
  },
  "subjectOf":{"@type":"MedicalWebPage","url":"https://www.bp157stack.com/bpc-157"}
}
```

> **YMYL caution:** Do not ship `MedicalWebPage` with placeholder `reviewedBy` values. A fake medical reviewer is materially worse than no schema — it triggers Google misleading-markup actions and degrades AI trust signals. Either commission a real credentialed reviewer or ship `MedicalWebPage` without `reviewedBy`/`lastReviewed` until one exists.
