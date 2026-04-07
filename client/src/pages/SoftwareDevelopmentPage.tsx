import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import softwareHeroImg from "@assets/SoftwareDevelopmentHero.png";
import softwareOverviewImg from "@assets/SoftwareDevelopmentOverview.png";
import softwareChallengesImg from "@assets/SoftwareDevelopmentChallenges.png";
import softwareLastImg from "@assets/SoftwareDevelopmentLast.png";

const KEY_CHALLENGES = [
  "Balancing speed of delivery with product quality",
  "Modernizing legacy systems without disrupting operations",
  "Integrating new technologies with existing platforms",
  "Managing changing business requirements during development",
  "Ensuring consistent user experience across platforms",
  "Reducing development complexity and technical debt",
  "Maintaining scalability as products and users grow",
  "Improving release reliability and operational efficiency",
  "Aligning product development with long-term business goals",
  "Adapting engineering workflows to continuous delivery models",
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-16">
        <section className="w-full relative overflow-hidden bg-white" aria-label="Software Development hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[320px] md:min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${softwareHeroImg})`, aspectRatio: "1920 / 810" }}
          />
          <div className="absolute inset-0">
            <div className="mx-auto w-full pl-4 pr-4 pt-4 md:pl-10 md:pt-6 lg:pl-16 lg:pt-8">
              <div className="inline-flex flex-col gap-3 md:gap-4 max-w-2xl bg-black/35 text-primary-foreground rounded-2xl px-5 py-4 md:px-8 md:py-6 shadow-xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Software Development</h1>
                <p className="text-sm md:text-base leading-relaxed text-primary-foreground/95 max-w-xl">
                  We modernize legacy environments with scalable, AI-driven custom software to accelerate business
                  outcomes. Our agile engineering approach delivers a digital foundation that accelerates innovation and
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">Overview</h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 lg:items-stretch">
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed lg:min-h-0">
                <p>
                  The software development industry is under constant pressure to deliver faster, modernize legacy systems, and adapt to evolving business needs without increasing complexity.
                </p>
                <p>
                  We help organizations balance scalability, integration, user experience, and operational efficiency by designing technology solutions aligned with AI, cloud, automation, and connected systems with practical business needs.
                </p>
              </div>
              <div className="relative w-full min-h-[220px] sm:min-h-[260px] rounded-xl overflow-hidden lg:min-h-0 lg:h-full lg:self-stretch">
                <img
                  src={softwareOverviewImg}
                  alt="Software development overview"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">Key Challenges</h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-stretch">
              <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
                {KEY_CHALLENGES.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[420px] rounded-xl overflow-hidden">
                <img
                  src={softwareChallengesImg}
                  alt="Software development key challenges"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 pb-10 md:pb-14 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              How We Enable Scalable and Future Ready Software Development
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-stretch">
              <div className="order-2 lg:order-1 relative min-h-[340px] md:min-h-[380px] lg:min-h-[420px] rounded-xl overflow-hidden">
                <img
                  src={softwareLastImg}
                  alt="Scalable software development"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We solve these challenges through custom software solutions with modern architecture, scalable engineering, and technology advisory to deliver business outcomes.
                  </p>
                  <p>
                    Our approach integrates AI, ML, edge, cloud, automation, analytics, and connected technologies to modernize legacy environments and improve delivery speed.
                  </p>
                  <p>
                    Continuous delivery, modern engineering practices, and business-aligned strategy strengthen product flexibility and deliver digital systems that support long-term growth, resilience, and operational efficiency.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
