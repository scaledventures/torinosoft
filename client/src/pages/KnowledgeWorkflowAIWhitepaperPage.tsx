import { ResourceWhitepaperShell } from "@/components/resources/ResourceWhitepaperShell";
import placeholderWhitepaperPdf from "../../../attached_assets/pdfs/17032026_Whitepaper_AdTech.pdf";

export default function KnowledgeWorkflowAIWhitepaperPage() {
  return (
    <ResourceWhitepaperShell
      eyebrow="Knowledge & Workflow AI · Whitepaper"
      title="Knowledge and workflow AI whitepaper — title pending"
      backHref="/knowledge-workflow-ai-resources"
      backLabel="Knowledge & Workflow AI Resources"
      pdfFile={placeholderWhitepaperPdf}
    />
  );
}
