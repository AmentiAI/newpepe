# GEO Technical SEO Audit — bp157stack.com
Date: 2026-04-18

## Technical Score: 87/100

## Score Breakdown
| Category | Score | Status |
|---|---|---|
| Crawlability | 15/15 | Pass |
| Indexability | 9/12 | Pass |
| Security | 6/10 | Warn |
| URL Structure | 7/8 | Pass |
| Mobile Optimization | 10/10 | Pass |
| Core Web Vitals | 10/15 | Warn (no field data) |
| Server-Side Rendering | 15/15 | Pass |
| Page Speed & Server | 15/15 | Pass |

## AI Crawler Access

robots.txt content:

```
User-Agent: *
Allow: /
Disallow: /out

Sitemap: https://bp157stack.com/sitemap.xml
```

All AI crawlers are allowed by the wildcard `User-Agent: *` rule. Only the `/out` affiliate redirect path is disallowed (intentional — cloaks the Phiogen affiliate link).

| Crawler | User-Agent | Status | Recommendation |
|---|---|---|---|
| GPTBot | GPTBot | Allowed | Add explicit Allow for clarity |
| Google-Extended | Google-Extended | Allowed | Add explicit Allow — needed for AI Overviews presence |
| Googlebot | Googlebot | Allowed | No action |
| Bingbot | bingbot | Allowed | No action (critical for ChatGPT search) |
| PerplexityBot | PerplexityBot | Allowed | Add explicit Allow |
| ClaudeBot | ClaudeBot | Allowed | Add explicit Allow |
| Amazonbot | Amazonbot | Allowed | No action |
| CCBot | CCBot | Allowed | Add explicit Allow |
| Applebot-Extended | Applebot-Extended | Allowed | Add explicit Allow |
| Bytespider | Bytespider | Allowed | Consider blocking (low commercial value, aggressive crawler) |

---

## Critical Issues (fix immediately)

### 1. Homepage is missing `<link rel="canonical">`
**Evidence:** `grep 'rel="canonical"' /tmp/home-www.html` returns 0 matches. `/products/[slug]` and `/stacks/[slug]` pages both emit canonicals via Next metadata, but the homepage does not.
**Impact:** With both `https://bp157stack.com` and `https://www.bp157stack.com` reachable (via redirect), Google/AI crawlers have no authoritative signal for which URL is canonical. This fragments the strongest link-equity page on the site.
**Fix:** Add `alternates: { canonical: 'https://www.bp157stack.com' }` to the root `app/layout.tsx` or `app/page.tsx` metadata export.

### 2. Canonical/redirect mismatch on product and stack pages
**Evidence:** Product page HTML emits `<link rel="canonical" href="https://bp157stack.com/products/bpc-157">`, but fetching `https://bp157stack.com/products/bpc-157` returns `HTTP 307` redirecting to `https://www.bp157stack.com/products/bpc-157`. The canonical URL is a redirect target, not the final URL.
**Impact:** Google treats canonicals pointing at redirects as suggestions, not directives. Can cause indexing of whichever URL the crawler lands on first.
**Fix:** Either (a) change the canonical base to `https://www.bp157stack.com` in `generateMetadata` across `app/**/page.tsx`, OR (b) serve content on the apex `bp157stack.com` and redirect www → apex instead. Decide one host, make every canonical match that host, and make every redirect land on that host.

### 3. Apex → www uses 307 (temporary) instead of 301/308
**Evidence:** `curl -sI https://bp157stack.com/` returns `HTTP/2 307` with `location: https://www.bp157stack.com/`.
**Impact:** 307 tells crawlers the redirect may not persist, so both URLs may stay in the index. A 301/308 permanently consolidates signals.
**Fix:** In `vercel.json` or the Vercel domain settings, set the apex→www redirect status to `308` (or use `redirects` with `permanent: true` in `next.config.js`).

### 4. HTTP → apex → www creates a 2-hop redirect chain
**Evidence:** `curl -sI http://bp157stack.com/` → 308 to `https://bp157stack.com/` → 307 to `https://www.bp157stack.com/`. Two redirects on first visit.
**Impact:** Wastes crawl budget, delays initial load for users, bleeds PageRank across intermediate hops.
**Fix:** Configure Vercel so HTTP requests on either host jump straight to `https://www.bp157stack.com/...` in one hop.

---

## Warnings (fix this month)

### 5. Missing security headers (except HSTS)
**Evidence:** Response headers contain only `strict-transport-security: max-age=63072000`. None of the following are set: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Content-Security-Policy`, `Permissions-Policy`.
**Impact:** Trust signal weakness; not a direct ranking factor, but Google increasingly considers site-security posture in E-E-A-T evaluation.
**Fix:** Add to `next.config.js`:
```js
async headers() {
  return [{
    source: '/:path*',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ],
  }];
}
```

### 6. Homepage H1 uses visual-only text lacking topic keywords
**Evidence:** `<h1>` contains three stacked spans with text "Heal. / Optimize. / Dominate." The topic/brand string "BPC-157 Peptide Protocols" exists only as `aria-label` on the H1, not as visible crawlable text.
**Impact:** Googlebot and AI crawlers primarily weight visible text. Your H1 — the single strongest on-page signal — does not contain "BPC-157," "peptide," or "protocol."
**Fix:** Either add a visible subheading/span inside the H1 with the topical keywords, or restructure to `<h1>BPC-157 Peptide Protocols</h1>` followed by `<p class="...">Heal. Optimize. Dominate.</p>`.

### 7. No IndexNow implementation
**Impact:** Bing indexes changes slower; since ChatGPT and Bing Copilot both draw from the Bing index, this slows AI visibility on two major platforms.
**Fix:** Add an IndexNow key file at `/public/{key}.txt`, then POST to `https://api.indexnow.org/indexnow` on each publish. Vercel + Next.js: a small API route triggered by deployment webhook is sufficient.

### 8. Core Web Vitals: no field data available
**Evidence:** Lab-estimable signals are good — image preloads are in place, critical CSS is inlined, gzip compression works (26KB compressed vs 147KB on product pages), TTFB is ~270ms. Real-user data (CrUX) was not retrieved.
**Impact:** Score is conservative (10/15) because field data determines the ranking signal, not lab estimates.
**Fix:** Connect Search Console and check the Core Web Vitals report after 28 days of real traffic. If LCP >2.5s or INP >200ms appear at the 75th percentile, profile with PageSpeed Insights and fix per-page.

---

## Recommendations (optimize this quarter)

### 9. Add explicit AI crawler entries to robots.txt
Current wildcard allow works, but being explicit future-proofs against silent behavior changes and signals intent. Proposed `public/robots.txt`:

```
User-Agent: *
Allow: /
Disallow: /out

User-Agent: GPTBot
Allow: /

User-Agent: Google-Extended
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: ClaudeBot
Allow: /

User-Agent: CCBot
Allow: /

User-Agent: Applebot-Extended
Allow: /

Sitemap: https://www.bp157stack.com/sitemap.xml
```

Note: update the Sitemap URL to the canonical host once decided (see Issue #2).

### 10. Sitemap references the non-canonical host
**Evidence:** `robots.txt` declares `Sitemap: https://bp157stack.com/sitemap.xml` and sitemap `<loc>` entries use `https://bp157stack.com/...` — again non-www while the live site redirects to www.
**Fix:** Regenerate sitemap with `https://www.bp157stack.com/...` loc URLs (or drop the redirect — pick one host and make it consistent everywhere).

---

## Detailed Findings

### Crawlability — 15/15
- **robots.txt:** Valid, 4-line minimum. Sitemap declared.
- **Sitemap:** 184 URLs, valid XML, all entries include `<lastmod>`, `<changefreq>`, `<priority>`. Sampled URLs return 200.
- **Crawl depth:** Homepage links to `/healing`, `/anti-aging`, `/body-composition`, `/products`, `/stacks`, `/guide`, `/faq`, `/contact`, and category hubs. All 141 products reachable at depth 2 via `/products`. Within the 3-click limit.
- **Noindex:** `meta name="robots" content="index, follow"` on sampled pages. No erroneous noindex.

### Indexability — 9/12
- **Canonicals:** Present on product/stack pages; **absent on homepage**; present URLs reference the redirect-origin host (see Critical #1, #2).
- **Duplicate content:** Apex vs www both reachable, HTTP→HTTPS redirect present. Issue is redirect type/chain (see Critical #3, #4), not duplicate surface.
- **Pagination:** Not in use on audited pages.
- **Hreflang:** Not applicable (single-language site).
- **Index bloat:** 184 sitemap URLs for 141 products + 5 stacks + ~30 category/static pages. Sensible.

### Security — 6/10
- HTTPS enforced, valid cert (Vercel-managed).
- HSTS: `max-age=63072000; includeSubDomains` — strong (2 years).
- No other security headers present (see Warning #5).

### URL Structure — 7/8
- Clean, lowercase, hyphenated URLs throughout (`/products/bpc-157`, `/stacks/ultimate-healing`, `/bpc-157-for-tendons`).
- Logical hierarchy with 2 levels of nesting max.
- `/out?p=<slug>` affiliate parameter pattern exists but is `Disallow`ed in robots.txt (correct handling).
- **-1 for redirect chain:** HTTP→apex→www is 2 hops (see Critical #4).

### Mobile Optimization — 10/10
- Viewport meta present (`width=device-width, initial-scale=1`).
- Tailwind-based responsive design throughout (`sm:`, `md:`, `lg:` breakpoints visible in class attributes on every page).
- Base font size 16px (`text-base`, Inter typeface loaded).
- No separate mobile URL or content parity issues.

### Core Web Vitals — 10/15 (lab-estimate only)
- **LCP:** Homepage preloads hero images via `<link rel="preload" as="image">`. Critical CSS inlined. TTFB 250–300ms. Likely <2.5s at 75th percentile.
- **INP:** Static-rendered pages (`force-static`) with moderate Next.js hydration bundles. Likely <200ms but not verified.
- **CLS:** Next `Image` used throughout (enforces width/height). `font-display` handling via Next font loader. Likely <0.1.
- Score withheld pending CrUX field data.

### Server-Side Rendering — 15/15 (GEO-critical: Pass)
- **Main content:** Product page `/products/bpc-157` raw curl output contains 5,984 words of text, 5 unique `<h2>` blocks, full product description, benefits list, protocol, FAQ. All visible without JS execution.
- **Meta tags + structured data:** `<title>`, `<meta description>`, `<link rel="canonical">`, full OG suite, 4 JSON-LD blocks (BreadcrumbList, Product, FAQPage, organizational) — all server-rendered.
- **Internal links:** 57 distinct `href` attributes in raw HTML on the product page, including nav, related products, category links, synergy tags.
- **Verdict:** AI crawlers (GPTBot, PerplexityBot, ClaudeBot) will see the full page on first fetch. This is the single most important GEO signal and it is fully in order.

### Page Speed & Server — 15/15
- **TTFB:** 0.25–0.30s sampled across homepage, product page, sitemap. Well under 800ms target.
- **Compression:** gzip active — product page 26KB compressed vs 147KB uncompressed (5.6× reduction). Vercel brotli available but not negotiated in this test.
- **Page weight:** Homepage 344KB (large but below 2MB); product page 147KB. Acceptable.
- **Images:** Next `Image` component with automatic AVIF/WebP, lazy loading below fold.
- **JS bundles:** Multiple static chunks per page (typical Next.js code-splitting).
- **Cache headers:** `public, max-age=0, must-revalidate` on HTML (Vercel edge caches anyway — `x-vercel-cache: HIT` observed). Static `_next/static/*` assets use hash-suffixed filenames for long-term cacheability.
- **CDN:** Vercel Edge Network (`server: Vercel`, `x-vercel-id` headers confirm).

---

## Summary

The site's **GEO foundation is strong**: SSR is complete, AI crawlers are not blocked, the sitemap is healthy, and server performance is excellent. The 13-point gap to 100 is concentrated in **host/canonical hygiene** (the apex↔www situation is the one real liability) and **missing security headers**. Fixing Critical issues #1–#4 would add ~7 points and eliminate the main risk of Google splitting index signal across two hosts.
