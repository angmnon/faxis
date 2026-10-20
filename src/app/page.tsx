import { Hero } from "@/components/hero/hero";
import {
  ProblemSection,
  ModelSection,
  ProductSection,
  ProcessSection,
  OutcomeSection,
  TechSummarySection,
  BusinessModelSection,
  NetworkSection,
  ClosingCta,
} from "@/components/home/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ModelSection />
      <ProductSection />
      <ProcessSection />
      <OutcomeSection />
      <TechSummarySection />
      <BusinessModelSection />
      <NetworkSection />
      <ClosingCta />
    </>
  );
}
