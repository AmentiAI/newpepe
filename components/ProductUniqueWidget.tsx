'use client';

import BpcRouteRecommender from './BpcRouteRecommender';
import Tb500InjuryTimeline from './Tb500InjuryTimeline';
import GhkCuProtocolGuide from './GhkCuProtocolGuide';
import EpithalonCyclePlanner from './EpithalonCyclePlanner';
import NadAgeCalculator from './NadAgeCalculator';
import WrinkleTargetSelector from './WrinkleTargetSelector';
import GhResultsTracker from './GhResultsTracker';
import Igf1ProtocolSelector from './Igf1ProtocolSelector';
import GlpWeightLossCalculator from './GlpWeightLossCalculator';
import TirzepatideVsSema from './TirzepatideVsSema';
import RetatrutideTripleMechanism from './RetatrutideTripleMechanism';
import CagrisemaComparison from './CagrisemaComparison';
import GlpVialCalculator from './GlpVialCalculator';
import ReconstitutionCalculator from './ReconstitutionCalculator';

interface Props {
  slug: string;
}

export default function ProductUniqueWidget({ slug }: Props) {
  switch (slug) {
    case 'bpc-157':
      return <BpcRouteRecommender />;

    case 'tb-500':
      return <Tb500InjuryTimeline />;

    case 'ghk-cu':
      return <GhkCuProtocolGuide />;

    case 'epithalon':
      return <EpithalonCyclePlanner />;

    case 'nad':
      return <NadAgeCalculator />;

    case 'snap-8':
      return <WrinkleTargetSelector />;

    case 'cjc1295-ipamorelin':
      return <GhResultsTracker />;

    case 'igf-1lr3':
      return <Igf1ProtocolSelector />;

    case 'glp-1s-semaglutide':
      return <GlpWeightLossCalculator />;

    case 'glp-2t-tirzepatide':
      return <TirzepatideVsSema />;

    case 'glp-3r-retatrutide':
      return <RetatrutideTripleMechanism />;

    case 'cagri-sema':
      return <CagrisemaComparison />;

    case 'glp-1s-semaglutide-5mg':
      return (
        <GlpVialCalculator
          compound="semaglutide"
          vialMg={5}
          mode="starter"
          defaultWater={2}
        />
      );

    case 'glp-1s-semaglutide-15mg':
      return (
        <GlpVialCalculator
          compound="semaglutide"
          vialMg={15}
          mode="maintenance"
          defaultWater={3}
        />
      );

    case 'glp-2t-tirzepatide-30mg':
      return (
        <GlpVialCalculator
          compound="tirzepatide"
          vialMg={30}
          mode="escalation"
          defaultWater={3}
        />
      );

    case 'glp-2t-tirzepatide-60mg':
      return (
        <GlpVialCalculator
          compound="tirzepatide"
          vialMg={60}
          mode="maintenance"
          defaultWater={6}
        />
      );

    case 'glp-3r-retatrutide-15mg':
      return (
        <GlpVialCalculator
          compound="retatrutide"
          vialMg={15}
          mode="starter"
          defaultWater={3}
        />
      );

    case 'glp-3r-retatrutide-30mg':
      return (
        <GlpVialCalculator
          compound="retatrutide"
          vialMg={30}
          mode="escalation"
          defaultWater={3}
        />
      );

    case 'glp-3r-retatrutide-60mg':
      return (
        <GlpVialCalculator
          compound="retatrutide"
          vialMg={60}
          mode="maintenance"
          defaultWater={6}
        />
      );

    case 'bacteriostatic-water':
      return <ReconstitutionCalculator />;

    default:
      return null;
  }
}
