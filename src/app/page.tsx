import { Hero } from "@/components/hero/hero";
import { PlatformSection } from "@/components/sections/platform-section";
import { TelemetryStrip } from "@/components/sections/telemetry-strip";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { WhyNowSection } from "@/components/sections/why-now-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TelemetryStrip />
      <PlatformSection />
      <SolutionsSection />
      <TechnologySection />
      <WhyNowSection />
      <PartnersSection />
    </>
  );
}
