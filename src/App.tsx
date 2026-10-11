/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UrgencyBanner } from './components/UrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { FeatureSection } from './components/FeatureSection';
import { TealBandSection } from './components/TealBandSection';
import { BenefitsCarousel } from './components/BenefitsCarousel';
import { CarouselCallout } from './components/CarouselCallout';
import { IdealForSection } from './components/IdealForSection';
import { ReceiveSection } from './components/ReceiveSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { StepsSection } from './components/StepsSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <main>
      <UrgencyBanner />
      <HeroSection />
      <ShowcaseSection />
      <FeatureSection />
      <TealBandSection />
      <BenefitsCarousel />
      <CarouselCallout />
      <IdealForSection />
      <ReceiveSection />
      <BonusesSection />
      <PricingSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FaqSection />
      <StepsSection />
      <FooterSection />
    </main>
  );
}
