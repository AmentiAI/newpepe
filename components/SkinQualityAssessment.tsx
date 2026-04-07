'use client';

import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

const SOURCE_URL = '/out';

type Concern = 'wrinkles' | 'dullness' | 'texture' | 'sagging' | 'acne' | 'uneven' | null;
type SkinType = 'dry' | 'oily' | 'combination' | 'normal' | 'sensitive' | null;

interface Protocol {
  headline: string;
  description: string;
  peptides: {
    name: string;
    emoji: string;
    dose: string;
    reason: string;
    color: string;
  }[];
  timeline: string;
  tip: string;
}

const protocolMap: Record<string, Record<string, Protocol>> = {
  wrinkles: {
    dry: {
      headline: 'Anti-Wrinkle Protocol — Dry/Aging Skin',
      description: 'Dry skin accelerates wrinkle formation due to reduced barrier function and loss of plumpness. This protocol addresses both wrinkle relaxation and collagen rebuilding.',
      peptides: [
        { name: 'SNAP-8', emoji: '💉', dose: '10% topical serum, AM + PM', reason: 'Relaxes muscle-driven wrinkles via SNARE complex inhibition', color: 'text-purple-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg topical serum, PM after SNAP-8', reason: 'Drives collagen I, III, IV synthesis and gene expression reset', color: 'text-emerald-400' },
        { name: 'Epithalon', emoji: '⭕', dose: '10mg over 10 days, quarterly', reason: 'Telomere extension for cellular skin longevity', color: 'text-rose-400' },
      ],
      timeline: 'Week 3–4: First softening of expression lines. Month 2: Measurable wrinkle depth reduction. Month 4: Full collagen remodeling effect visible.',
      tip: 'Apply SNAP-8 first, wait 5 minutes, then layer GHK-Cu. For dry skin, finish with a ceramide moisturizer to seal peptides in.',
    },
    oily: {
      headline: 'Anti-Wrinkle Protocol — Oily Skin',
      description: 'Oily skin is often better preserved naturally, but surface texture can mask improvements. This protocol focuses on lightweight delivery systems.',
      peptides: [
        { name: 'SNAP-8', emoji: '💉', dose: '7.5% gel or water-based serum, AM', reason: 'Wrinkle relaxation without heavy emollients that can cause breakouts', color: 'text-purple-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5–1mg in lightweight carrier, PM', reason: 'Collagen synthesis with anti-inflammatory bonus for oily skin', color: 'text-emerald-400' },
      ],
      timeline: 'Week 4: Visible softening of forehead and crow\'s feet lines. Month 3: Improved firmness and pore reduction.',
      tip: 'Use a water-based carrier for GHK-Cu (avoid PG-heavy solutions which can feel heavy). Niacinamide serum pairs well for additional pore-tightening.',
    },
    combination: {
      headline: 'Anti-Wrinkle Protocol — Combination Skin',
      description: 'Address wrinkles on the drier zones (cheeks, under-eyes) while managing the T-zone separately.',
      peptides: [
        { name: 'SNAP-8', emoji: '💉', dose: '7.5% targeted to wrinkle zones', reason: 'Precise application to forehead and crow\'s feet avoids T-zone', color: 'text-purple-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg topical, focus on dry zones', reason: 'Collagen support for drier areas most vulnerable to wrinkling', color: 'text-emerald-400' },
      ],
      timeline: 'Month 1: Noticeable improvement in expression lines. Month 3: Collagen density improvements in dry zones.',
      tip: 'Apply SNAP-8 precisely using a cotton swab to avoid spreading into oily zones unnecessarily.',
    },
    normal: {
      headline: 'Anti-Wrinkle Protocol — Normal Skin',
      description: 'Normal skin responds well to targeted anti-wrinkle peptides. Focus on prevention and early intervention.',
      peptides: [
        { name: 'SNAP-8', emoji: '💉', dose: '5% preventative concentration, PM', reason: 'Prevention-focused dose for early expression line treatment', color: 'text-purple-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg topical, AM', reason: 'Collagen maintenance and skin gene health for long-term prevention', color: 'text-emerald-400' },
        { name: 'Epithalon', emoji: '⭕', dose: 'Quarterly cycle', reason: 'Telomere preservation for long-term skin cell health', color: 'text-rose-400' },
      ],
      timeline: 'Month 1: Skin quality improvement. Month 3: Measurable wrinkle prevention vs. untreated baseline.',
      tip: 'Normal skin is ideal for preventative protocols. Lower concentrations maintain efficacy with less product cost.',
    },
    sensitive: {
      headline: 'Anti-Wrinkle Protocol — Sensitive Skin',
      description: 'Sensitive skin requires gentler introductions. Start with lower concentrations and patch test before full application.',
      peptides: [
        { name: 'SNAP-8', emoji: '💉', dose: '5% in gentle, alcohol-free base, every other day initially', reason: 'Lower concentration reduces irritation risk while maintaining wrinkle effect', color: 'text-purple-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg in aloe vera base, PM', reason: 'GHK-Cu has anti-inflammatory properties that can benefit reactive skin', color: 'text-emerald-400' },
      ],
      timeline: 'Week 2: Assess tolerance. Month 2: Increase to full protocol once tolerance established. Month 4: Full anti-wrinkle results.',
      tip: 'Patch test all peptide formulations on inner arm for 48 hours before facial application. Avoid products with strong preservatives (parabens, phenoxyethanol).',
    },
  },
  dullness: {
    dry: {
      headline: 'Luminosity Protocol — Dull/Dry Skin',
      description: 'Dullness in dry skin is typically caused by cell turnover slowdown and reduced microcirculation. This protocol drives both.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1–2mg topical, AM + PM', reason: 'Drives angiogenesis to improve skin microcirculation and glow', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Gut-skin axis repair — a leaky gut is a hidden cause of dull skin', color: 'text-blue-400' },
        { name: 'NAD+', emoji: '⚡', dose: 'NMN 500mg oral daily or NAD+ IV monthly', reason: 'Mitochondrial dysfunction drives dullness — NAD+ replenishment reverses this', color: 'text-amber-400' },
      ],
      timeline: 'Week 2–3: Subtle glow improvement. Month 2: Significant luminosity change. Month 3: "Glass skin" texture for many users.',
      tip: 'GHK-Cu\'s angiogenesis effect is the key mechanism for glow — it increases blood vessel density in the dermis, literally bringing more blood (and oxygen/nutrients) to the skin surface.',
    },
    oily: {
      headline: 'Luminosity Protocol — Dull/Oily Skin',
      description: 'Oily skin can appear dull due to surface oxidation of sebum and poor cell turnover. GHK-Cu\'s antioxidant and angiogenesis effects are key.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg lightweight serum, AM', reason: 'Antioxidant defense + angiogenesis for microcirculation', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Gut-skin axis correction reduces excess sebum production', color: 'text-blue-400' },
      ],
      timeline: 'Week 3: Skin tone evenness. Month 2: Genuine luminosity with reduced greasiness.',
      tip: 'Use GHK-Cu in a zinc-based carrier — zinc helps regulate sebum while GHK-Cu delivers the glow-driving effects.',
    },
    combination: {
      headline: 'Luminosity Protocol — Combination Skin',
      description: 'Focus the luminosity protocol on dull zones while managing oily areas separately.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg targeted to dull areas (cheeks, forehead)', reason: 'Angiogenesis for glow, collagen for texture', color: 'text-emerald-400' },
        { name: 'Epithalon', emoji: '⭕', dose: 'Quarterly cycle', reason: 'Cellular rejuvenation drives full-face luminosity improvement', color: 'text-rose-400' },
      ],
      timeline: 'Month 1–2: Improved glow and evenness. Month 3: Cumulative collagen and cellular effects produce sustained luminosity.',
      tip: 'Epithalon\'s cellular rejuvenation mechanism is particularly effective for age-related dullness — it is one of the fastest-acting peptides for luminosity improvements.',
    },
    normal: {
      headline: 'Luminosity Protocol — Normal Skin',
      description: 'Normal skin dullness is often lifestyle-related. Peptides address the cellular and microcirculatory roots.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5–1mg topical, AM', reason: 'Angiogenesis and collagen for sustained glow', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Gut optimization for systemic skin health', color: 'text-blue-400' },
      ],
      timeline: 'Month 1: Noticeable glow improvement. Month 3: Optimized luminosity as baseline.',
      tip: 'Pair with consistent sleep (7–9 hours) — GHK-Cu\'s gene expression effects are amplified by adequate overnight skin repair.',
    },
    sensitive: {
      headline: 'Luminosity Protocol — Sensitive Skin',
      description: 'Redness and reactivity often masquerade as dullness. Addressing inflammation is the first step.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg in calming base (aloe, centella), PM only initially', reason: 'Anti-inflammatory + angiogenesis — GHK-Cu\'s dual action benefits reactive skin', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Systemic inflammation reduction clears redness-related dullness', color: 'text-blue-400' },
      ],
      timeline: 'Week 2: Redness reduction. Month 2: True luminosity improvement as inflammation settles.',
      tip: 'For sensitive skin, the BPC-157 systemic protocol (addressing gut and systemic inflammation) is often more impactful than topicals alone.',
    },
  },
  texture: {
    dry: {
      headline: 'Texture Protocol — Dry Skin',
      description: 'Rough texture in dry skin is driven by slowed cell turnover and dehydrated stratum corneum. Peptides rebuild from the dermal layer up.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1–2mg topical, PM', reason: 'Proteasome activation clears damaged proteins; collagen synthesis improves structural texture', color: 'text-emerald-400' },
        { name: 'SNAP-8', emoji: '💉', dose: '5% topical, AM', reason: 'Relaxed facial muscles reduce texture-distorting contraction patterns', color: 'text-purple-400' },
        { name: 'Epithalon', emoji: '⭕', dose: 'Quarterly cycle', reason: 'Cellular renewal improves cell quality driving better surface texture', color: 'text-rose-400' },
      ],
      timeline: 'Month 1: Pore size reduction and initial smoothing. Month 3: Significantly improved skin texture and evenness.',
      tip: 'GHK-Cu\'s proteasome activation is particularly valuable for texture — it clears accumulated cellular debris that contributes to rough surface texture.',
    },
    oily: {
      headline: 'Texture Protocol — Oily/Textured Skin',
      description: 'Oily skin texture is often caused by enlarged pores and irregular sebum flow. GHK-Cu reduces pore size as a secondary effect of collagen strengthening.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg lightweight water-based serum, AM + PM', reason: 'Pore reduction via collagen strengthening around follicle openings', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Gut-skin axis repair reduces inflammation-driven pore dilation', color: 'text-blue-400' },
      ],
      timeline: 'Month 1–2: Visible pore reduction. Month 3: Significantly smoother skin surface.',
      tip: 'Consistent GHK-Cu use over 3+ months produces cumulative pore reduction — the collagen tightening around pore walls takes time to fully manifest.',
    },
    combination: {
      headline: 'Texture Protocol — Combination Skin',
      description: 'Different zones require targeted approaches. Rough T-zone vs. normal-textured cheeks need differentiated protocols.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg, focusing on rough areas', reason: 'Targeted collagen improvement for rough zones', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Systemic anti-inflammatory effect improves all zones', color: 'text-blue-400' },
      ],
      timeline: 'Month 1: Smoothing in targeted areas. Month 3: Uniform texture across all zones.',
      tip: 'Take consistent macro photography under the same lighting every 4 weeks to objectively track texture improvements.',
    },
    normal: {
      headline: 'Texture Refinement — Normal Skin',
      description: 'For normal skin with minor texture concerns, a light peptide protocol provides significant improvement.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg topical, PM', reason: 'Maintenance collagen synthesis for sustained texture quality', color: 'text-emerald-400' },
      ],
      timeline: 'Month 1–2: Subtle but noticeable texture refinement. Month 3+: Maintained improvement.',
      tip: 'Normal skin typically responds quickly to GHK-Cu — start at 0.5mg and increase to 1mg after month 1.',
    },
    sensitive: {
      headline: 'Texture Protocol — Sensitive Skin',
      description: 'Sensitivity-driven rough texture needs anti-inflammatory support first, then texture-specific peptides.',
      peptides: [
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Systemic inflammation reduction is step one for reactive skin texture', color: 'text-blue-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg in gentle base, every other day', reason: 'Anti-inflammatory + collagen support — introduced gradually', color: 'text-emerald-400' },
      ],
      timeline: 'Week 2–4: Inflammation reduction. Month 2: Texture begins improving. Month 3: Stable smooth baseline.',
      tip: 'For sensitive skin, the gut-skin axis is often the most impactful intervention — BPC-157 reducing systemic inflammation can transform skin texture from the inside out.',
    },
  },
  sagging: {
    dry: {
      headline: 'Firmness Protocol — Dry/Sagging Skin',
      description: 'Sagging is driven by collagen and elastin loss. Dry skin has additional barrier compromise. This protocol is the most collagen-intensive.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '2mg injectable SC daily + 1mg topical', reason: 'Maximum collagen synthesis drive — all 5 collagen types upregulated', color: 'text-emerald-400' },
        { name: 'CJC-1295/Ipamorelin', emoji: '🔶', dose: '300/100mcg SC, 2–3x/week before bed', reason: 'GH pulse drives skin collagen and reduces facial adiposity simultaneously', color: 'text-amber-400' },
        { name: 'Epithalon', emoji: '⭕', dose: 'Quarterly cycle', reason: 'Cellular rejuvenation supports fibroblast function for ongoing collagen production', color: 'text-rose-400' },
      ],
      timeline: 'Month 2: Measurable skin firmness. Month 4: Significant visible lifting effect. Month 6: Full protocol effect.',
      tip: 'Injectable GHK-Cu produces stronger collagen effects than topical alone — the combination approach gives both systemic and local delivery.',
    },
    oily: {
      headline: 'Firmness Protocol — Oily/Sagging Skin',
      description: 'Oily skin with sagging benefits from the same collagen interventions with lighter carrier choices.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1–2mg topical water-based serum, PM', reason: 'Collagen I and III synthesis for structural support', color: 'text-emerald-400' },
        { name: 'CJC-1295/Ipamorelin', emoji: '🔶', dose: '300/100mcg SC, 2x/week', reason: 'GH for fat redistribution and collagen — the dual effect on facial structure', color: 'text-amber-400' },
      ],
      timeline: 'Month 2–3: Improved firmness. Month 4–6: Visible structural improvement.',
      tip: 'CJC/Ipamorelin\'s body composition effects (fat reduction) can significantly improve perceived facial firmness by reducing facial adiposity.',
    },
    combination: {
      headline: 'Firmness Protocol — Combination Skin',
      description: 'Sagging is uniform so the firmness protocol is consistent across skin zones.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg topical, AM + PM', reason: 'Consistent collagen rebuilding across all zones', color: 'text-emerald-400' },
        { name: 'CJC-1295/Ipamorelin', emoji: '🔶', dose: '300/100mcg SC, 2x/week', reason: 'GH axis for systemic collagen and fat metabolism', color: 'text-amber-400' },
      ],
      timeline: 'Month 2: Firmness improvement begins. Month 4+: Significant structural improvement.',
      tip: 'Measure facial firmness objectively with a pinch test on the cheek — the amount of skin that "snaps back" is a reliable proxy for elastin content.',
    },
    normal: {
      headline: 'Firmness Protocol — Normal Skin',
      description: 'Normal skin sagging is typically age-related collagen loss. Prevention-focused stacks work well.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg topical, PM', reason: 'Continuous collagen upregulation for structural maintenance', color: 'text-emerald-400' },
        { name: 'Epithalon', emoji: '⭕', dose: 'Quarterly cycle', reason: 'Telomere extension to slow cellular aging driving collagen loss', color: 'text-rose-400' },
      ],
      timeline: 'Month 2: Subtle firmness improvement. Month 4–6: Measurable lifting effect.',
      tip: 'Epithalon quarterly cycles compound in efficacy — the second and third cycles produce more pronounced effects than the first.',
    },
    sensitive: {
      headline: 'Firmness Protocol — Sensitive Skin',
      description: 'Sensitive skin sagging requires anti-inflammatory management alongside collagen rebuilding.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5–1mg in gentle carrier, PM', reason: 'Anti-inflammatory + collagen — ideal dual action for reactive aging skin', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Systemic anti-inflammatory to calm the reactive baseline before collagen focus', color: 'text-blue-400' },
      ],
      timeline: 'Month 1: Inflammation reduction. Month 2–3: Collagen effects become primary driver. Month 4: Visible firmness.',
      tip: 'GHK-Cu\'s anti-inflammatory property makes it uniquely suited for sensitive skin sagging — it addresses both the inflammation component and the collagen deficit.',
    },
  },
  acne: {
    dry: {
      headline: 'Acne Protocol — Dry Skin',
      description: 'Dry skin acne is often inflammation-driven with dehydration as a compounding factor. BPC-157\'s gut-skin axis repair is the primary intervention.',
      peptides: [
        { name: 'BPC-157', emoji: '🟢', dose: '250–500mcg SC, 5x/week', reason: 'Gut-skin axis repair — the most impactful intervention for inflammatory acne', color: 'text-blue-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg topical in hydrating carrier, PM', reason: 'Anti-inflammatory + barrier strengthening + scar prevention', color: 'text-emerald-400' },
      ],
      timeline: 'Week 2–4: Active breakout reduction. Month 2: Significantly clearer skin. Month 3: Scar healing begins.',
      tip: 'BPC-157\'s oral route (1mg oral BPC-157, non-stabilized, morning) specifically targets gut lining repair and may be more effective for gut-driven acne than SC injection.',
    },
    oily: {
      headline: 'Acne Protocol — Oily Skin',
      description: 'The most common acne presentation. Excess sebum + bacterial overgrowth + inflammation. BPC-157 addresses the gut root cause; GHK-Cu the skin environment.',
      peptides: [
        { name: 'BPC-157', emoji: '🟢', dose: '500mcg SC or oral, 5x/week', reason: 'Primary mechanism: gut microbiome repair, systemic inflammation reduction', color: 'text-blue-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg lightweight serum, PM (avoid active lesions)', reason: 'Anti-inflammatory + sebum regulation via gene expression effects', color: 'text-emerald-400' },
      ],
      timeline: 'Week 3–4: Reduction in new breakouts. Month 2: Clear skin baseline. Month 3+: Scar remodeling.',
      tip: 'Avoid applying GHK-Cu directly to active inflamed lesions — it works better as a skin environment optimizer. Apply to surrounding areas and healed areas.',
    },
    combination: {
      headline: 'Acne Protocol — Combination Skin',
      description: 'T-zone acne with normal or dry cheeks. Target the gut-skin axis systemically for T-zone control.',
      peptides: [
        { name: 'BPC-157', emoji: '🟢', dose: '250–500mcg SC, 5x/week', reason: 'Systemic gut-skin axis repair for T-zone sebum regulation', color: 'text-blue-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg to non-acne zones, PM', reason: 'Skin quality maintenance in non-affected zones + scar prevention', color: 'text-emerald-400' },
      ],
      timeline: 'Month 1: T-zone oil reduction. Month 2: Breakout frequency drops significantly. Month 3: Skin texture evening out.',
      tip: 'The systemic BPC-157 approach is preferable to topical for acne because the root cause (gut dysbiosis) requires internal treatment.',
    },
    normal: {
      headline: 'Acne Protocol — Normal Skin',
      description: 'Occasional or hormonal breakouts on otherwise normal skin. Lower-dose protocol with BPC-157 as foundation.',
      peptides: [
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Gut health maintenance and systemic anti-inflammatory', color: 'text-blue-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg topical, PM', reason: 'Preventative scar management and skin quality maintenance', color: 'text-emerald-400' },
      ],
      timeline: 'Month 1: Reduced breakout frequency. Month 2: Clearer skin between cycles. Month 3: Improved baseline.',
      tip: 'For normal skin with hormonal acne, BPC-157\'s systemic anti-inflammatory effects often reduce cortisol-driven breakouts as a secondary benefit.',
    },
    sensitive: {
      headline: 'Acne Protocol — Sensitive/Reactive Skin',
      description: 'Inflammatory acne on sensitive skin requires systemic approaches over topicals. BPC-157 is particularly valuable here.',
      peptides: [
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Systemic inflammation cascade — the root of sensitive acne-prone skin', color: 'text-blue-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg in aloe/centella base, every other day', reason: 'Anti-inflammatory copper peptide — uniquely tolerated even by reactive skin', color: 'text-emerald-400' },
      ],
      timeline: 'Week 2: Systemic inflammation reduction. Month 2: Acne frequency down 50–70%. Month 3: Stable clear baseline.',
      tip: 'GHK-Cu is one of the few active peptides that does not trigger sensitivity reactions — its anti-inflammatory action is actually beneficial for reactive skin.',
    },
  },
  uneven: {
    dry: {
      headline: 'Tone Evenness Protocol — Dry/Uneven Skin',
      description: 'Uneven tone in dry skin is often driven by post-inflammatory hyperpigmentation and slow cell renewal. This protocol drives cellular turnover and pigmentation normalization.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1–2mg topical, AM + PM', reason: 'Gene expression reset reduces melanin overproduction signals in aged skin', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Angiogenesis and tissue repair improve microcirculation behind uneven tone', color: 'text-blue-400' },
        { name: 'Epithalon', emoji: '⭕', dose: 'Quarterly cycle', reason: 'Cellular rejuvenation drives even pigmentation across the skin surface', color: 'text-rose-400' },
      ],
      timeline: 'Month 1: Subtle evenness improvement. Month 3: Significant dark spot fading. Month 6: Uniform tone baseline.',
      tip: 'GHK-Cu\'s gene expression effects include downregulating inflammatory signals that drive post-inflammatory hyperpigmentation (PIH) — making it particularly effective for dark spots from old acne.',
    },
    oily: {
      headline: 'Tone Evenness Protocol — Oily/Uneven Skin',
      description: 'Oily skin unevenness is often PIH from acne combined with sebum oxidation creating patchy appearance. Address both layers.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg lightweight serum, AM + PM', reason: 'Antioxidant defense + gene reset for PIH reduction', color: 'text-emerald-400' },
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Gut-skin axis repair to prevent ongoing inflammation creating new dark spots', color: 'text-blue-400' },
      ],
      timeline: 'Month 1: New PIH prevention begins. Month 2–3: Existing dark spots lighten. Month 4: Even baseline.',
      tip: 'Prevention of new PIH is as important as treating existing spots — BPC-157\'s systemic anti-inflammatory effect prevents the inflammatory cascade that creates dark spots in the first place.',
    },
    combination: {
      headline: 'Tone Evenness Protocol — Combination Skin',
      description: 'Targeted approach to even the most problematic zones.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '1mg targeted to uneven zones', reason: 'Direct gene expression reset for localized pigmentation unevenness', color: 'text-emerald-400' },
        { name: 'Epithalon', emoji: '⭕', dose: 'Quarterly cycle for full-face evenness', reason: 'Systemic cellular rejuvenation for comprehensive tone improvement', color: 'text-rose-400' },
      ],
      timeline: 'Month 2: Visible improvement in targeted zones. Month 4: Full-face evenness improving.',
      tip: 'Take monthly photos under the same natural light to track objective improvements in evenness — it\'s one of the clearest before/after visible changes from this protocol.',
    },
    normal: {
      headline: 'Tone Evenness — Normal Skin',
      description: 'Minor unevenness on normal skin responds well to targeted GHK-Cu application.',
      peptides: [
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5–1mg topical, PM', reason: 'Collagen + gene reset for sustained even tone', color: 'text-emerald-400' },
      ],
      timeline: 'Month 1–2: Subtle improvement. Month 3: Even baseline established.',
      tip: 'For minor unevenness, GHK-Cu alone is often sufficient — its gene expression effects include modulating the inflammatory signals that drive uneven tone.',
    },
    sensitive: {
      headline: 'Tone Evenness — Sensitive Skin',
      description: 'Reactive skin unevenness needs anti-inflammatory foundation before pigmentation-specific interventions.',
      peptides: [
        { name: 'BPC-157', emoji: '🟢', dose: '250mcg SC, 5x/week', reason: 'Systemic anti-inflammatory reduces the chronic flushing and reactivity driving unevenness', color: 'text-blue-400' },
        { name: 'GHK-Cu', emoji: '🔵', dose: '0.5mg in calming base, every other day → daily', reason: 'Anti-inflammatory + gene reset — gradual introduction for sensitive baseline', color: 'text-emerald-400' },
      ],
      timeline: 'Week 2: Redness reduction. Month 2: Tone unevenness improving as inflammation reduces. Month 3–4: Even baseline.',
      tip: 'For sensitive skin, reducing systemic inflammation (BPC-157) produces more dramatic tone improvements than any topical can achieve on reactive skin.',
    },
  },
};

const concerns = [
  { value: 'wrinkles' as Concern, label: 'Wrinkles & Lines', emoji: '〰️' },
  { value: 'dullness' as Concern, label: 'Dullness & Glow', emoji: '✨' },
  { value: 'texture' as Concern, label: 'Texture & Pores', emoji: '🔍' },
  { value: 'sagging' as Concern, label: 'Sagging & Firmness', emoji: '⬆️' },
  { value: 'acne' as Concern, label: 'Acne & Breakouts', emoji: '🔴' },
  { value: 'uneven' as Concern, label: 'Uneven Tone', emoji: '🎨' },
];

const skinTypes = [
  { value: 'dry' as SkinType, label: 'Dry', desc: 'Tight, flaky, or dehydrated' },
  { value: 'oily' as SkinType, label: 'Oily', desc: 'Shiny, enlarged pores' },
  { value: 'combination' as SkinType, label: 'Combination', desc: 'Oily T-zone, dry elsewhere' },
  { value: 'normal' as SkinType, label: 'Normal', desc: 'Balanced, minimal issues' },
  { value: 'sensitive' as SkinType, label: 'Sensitive', desc: 'Reactive, redness-prone' },
];

export default function SkinQualityAssessment() {
  const [step, setStep] = useState(1);
  const [concern, setConcern] = useState<Concern>(null);
  const [skinType, setSkinType] = useState<SkinType>(null);

  const protocol =
    concern && skinType ? protocolMap[concern]?.[skinType] : null;

  const reset = () => {
    setStep(1);
    setConcern(null);
    setSkinType(null);
  };

  return (
    <div className="rounded-xl bg-dark-800/60 border border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Skin Assessment Tool</h3>
          <p className="text-slate-400 text-sm">Get a personalized peptide protocol in 3 steps</p>
        </div>
        {step > 1 && (
          <button onClick={reset} className="text-slate-500 hover:text-slate-300 flex items-center gap-1 text-sm">
            <RotateCcw className="w-4 h-4" /> Restart
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map(s => (
          <div
            key={s}
            className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${s <= step ? 'bg-emerald-500' : 'bg-dark-700'}`}
          />
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <p className="text-white font-semibold mb-4">Step 1: What is your primary skin concern?</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {concerns.map(c => (
              <button
                key={c.value}
                onClick={() => { setConcern(c.value); setStep(2); }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-dark-700/40 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-center"
              >
                <span className="text-2xl">{c.emoji}</span>
                <span className="text-sm font-medium text-slate-200">{c.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <p className="text-slate-400 text-sm mb-1">
            Primary concern: <span className="text-emerald-400">{concerns.find(c => c.value === concern)?.label}</span>
          </p>
          <p className="text-white font-semibold mb-4">Step 2: How would you describe your skin type?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skinTypes.map(st => (
              <button
                key={st.value}
                onClick={() => { setSkinType(st.value); setStep(3); }}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-dark-700/40 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-left"
              >
                <div>
                  <div className="text-sm font-semibold text-slate-200">{st.label}</div>
                  <div className="text-xs text-slate-500">{st.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 — Results */}
      {step === 3 && protocol && (
        <div className="space-y-5">
          <div>
            <p className="text-xs text-slate-500 mb-1">Your personalized protocol:</p>
            <h4 className="text-lg font-bold text-white">{protocol.headline}</h4>
            <p className="text-sm text-slate-400 mt-1">{protocol.description}</p>
          </div>

          <div className="space-y-3">
            {protocol.peptides.map((pep) => (
              <div key={pep.name} className="bg-dark-700/50 border border-white/5 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{pep.emoji}</span>
                  <div>
                    <span className={`font-bold text-sm ${pep.color}`}>{pep.name}</span>
                    <span className="text-slate-500 text-xs ml-2">{pep.dose}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400">{pep.reason}</p>
              </div>
            ))}
          </div>

          <div className="bg-dark-700/40 border border-emerald-500/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Timeline</p>
            <p className="text-sm text-slate-300">{protocol.timeline}</p>
          </div>

          <div className="bg-dark-700/40 border border-amber-500/20 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Pro Tip</p>
            <p className="text-sm text-slate-300">{protocol.tip}</p>
          </div>

          <a
            href={SOURCE_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 w-full justify-center"
          >
            Source These Peptides <ArrowRight className="w-4 h-4" />
          </a>

          <button onClick={reset} className="w-full text-slate-500 hover:text-slate-300 text-sm flex items-center justify-center gap-1 py-2">
            <RotateCcw className="w-4 h-4" /> Start Over
          </button>
        </div>
      )}

      <p className="text-xs text-slate-600 text-center mt-4">
        For research purposes only. Not medical advice.
      </p>
    </div>
  );
}
