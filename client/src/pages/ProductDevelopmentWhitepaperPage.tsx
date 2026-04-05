import { ResourceWhitepaperShell } from "@/components/resources/ResourceWhitepaperShell";
import placeholderWhitepaperPdf from "../../../attached_assets/pdfs/17032026_Whitepaper_AdTech.pdf";

export default function ProductDevelopmentWhitepaperPage() {
  return (
    <ResourceWhitepaperShell
      eyebrow="Product Development · Whitepaper"
      title="Product development whitepaper — title pending"
      backHref="/product-development-resources"
      backLabel="Product Development Resources"
      pdfFile={placeholderWhitepaperPdf}
    />
  );
}
