import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

type ResourceBlogShellProps = {
  eyebrow: string;
  title: string;
  backHref: string;
  backLabel: string;
  children?: ReactNode;
};

export function ResourceBlogShell({ eyebrow, title, backHref, backLabel, children }: ResourceBlogShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <article className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-primary font-bold tracking-widest uppercase text-[0.85rem]">{eyebrow}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">{title}</h1>
            <Link href={backHref}>
              <Button variant="outline" size="sm" className="rounded-full">
                ← {backLabel}
              </Button>
            </Link>
          </header>

          {children ?? (
            <>
              <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  This article is ready for your final copy. Replace this placeholder with the full blog content in
                  the same structure as our reference posts (intro, sections, lists, and closing).
                </p>
                <p>
                  When you provide the text, we will drop it in here section by section while preserving headings,
                  emphasis, and call-to-action placement.
                </p>
              </section>

              <section className="space-y-4">
                <div className="rounded-2xl bg-primary/5 border border-primary/30 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-sm font-semibold text-primary uppercase tracking-[0.18em]">
                    Talk to us about this solution
                  </p>
                  <Link href="/contact-center">
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-5 h-11 text-sm md:text-base">
                      Contact Center
                    </Button>
                  </Link>
                </div>
              </section>
            </>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
