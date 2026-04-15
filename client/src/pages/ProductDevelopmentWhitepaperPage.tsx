import { ResourceWhitepaperShell } from "@/components/resources/ResourceWhitepaperShell";
import productDevelopmentWhitepaperPdf from "@assets/Whitepapers/White Paper-Product Development.pdf";

export default function ProductDevelopmentWhitepaperPage() {
  return (
    <ResourceWhitepaperShell
      eyebrow="Product Development · Whitepaper"
      title="Product Development — Whitepaper"
      backHref="/product-development-resources"
      backLabel="Product Development Resources"
      pdfFile={productDevelopmentWhitepaperPdf}
      learnMoreHref="/product-development"
      learnMoreLabel="Learn more"
    />
  );
}
