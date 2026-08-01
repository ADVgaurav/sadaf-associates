import { ConsultationCTA } from "@/components/sections/consultation-cta";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { AboutPreview } from "@/components/sections/about-preview";
import { PageWrapper } from "@/components/layout";

export default function RootPage() {
  return (
 <PageWrapper>
  <Hero />
  <TrustBar />
  <AboutPreview />
  <PracticeAreas />
  <WhyChooseUs />
  <ConsultationCTA />
</PageWrapper>
  );
}