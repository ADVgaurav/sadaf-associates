import { AboutCTA } from "../../components/sections/about-cta";
import { WhySadaf } from "../../components/sections/why-sadaf";
import { CoreValues } from "../../components/sections/core-values";
import { AboutHero } from "../../components/sections/about-hero";
import { Founder } from "../../components/sections/founder";
import { WhoWeAre } from "../../components/sections/who-we-are";
import { OurPhilosophy } from "../../components/sections/our-philosophy";

export default function AboutPage() {
  return (
    <>
     <AboutHero />
<Founder />
<WhoWeAre />
<OurPhilosophy />
<CoreValues />
<WhySadaf />
<AboutCTA />
    </>
  );
}