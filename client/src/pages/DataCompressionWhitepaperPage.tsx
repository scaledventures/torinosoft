import { ResourceWhitepaperShell } from "@/components/resources/ResourceWhitepaperShell";
import placeholderWhitepaperPdf from "../../../attached_assets/pdfs/17032026_Whitepaper_AdTech.pdf";

export default function DataCompressionWhitepaperPage() {
  return (
    <ResourceWhitepaperShell
      eyebrow="Data Compression · Whitepaper"
      title="Data compression whitepaper — title pending"
      backHref="/data-compression-resources"
      backLabel="Data Compression Resources"
      pdfFile={placeholderWhitepaperPdf}
    />
  );
}
