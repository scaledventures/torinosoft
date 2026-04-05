import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { WhitepaperPdfViewer } from "@/components/WhitepaperPdfViewer";
import { Link } from "wouter";

type ResourceWhitepaperShellProps = {
  eyebrow: string;
  title: string;
  backHref: string;
  backLabel: string;
  /** Bundled PDF URL from Vite import — replace per product when the final PDF is available. */
  pdfFile: string;
};

export function ResourceWhitepaperShell({
  eyebrow,
  title,
  backHref,
  backLabel,
  pdfFile,
}: ResourceWhitepaperShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="max-w-5xl mx-auto space-y-6">
          <header className="space-y-3">
            <p className="text-primary font-bold tracking-widest uppercase text-[0.85rem]">{eyebrow}</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">{title}</h1>
            <p className="text-sm text-muted-foreground">
              Placeholder PDF: swap the imported file in this page when your final whitepaper is ready.
            </p>
          </header>

          <div className="flex flex-wrap gap-3 items-center">
            <Link href={backHref}>
              <Button variant="outline" size="sm" className="rounded-full">
                ← {backLabel}
              </Button>
            </Link>
            <Link href="/contact-center">
              <Button size="sm" className="rounded-full">
                Learn more
              </Button>
            </Link>
          </div>

          <WhitepaperPdfViewer file={pdfFile} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
