import { ResourceWhitepaperShell } from "@/components/resources/ResourceWhitepaperShell";
import placeholderWhitepaperPdf from "@assets/pdfs/17032026_Whitepaper_AdTech.pdf";

export default function ContactCenterWhitepaperPage() {
  return (
    <ResourceWhitepaperShell
      eyebrow="Contact Center · Whitepaper"
      title="Contact center whitepaper — title pending"
      backHref="/contact-center-resources"
      backLabel="Contact Center Resources"
      pdfFile={placeholderWhitepaperPdf}
    />
  );
}
