import { ResourceWhitepaperShell } from "@/components/resources/ResourceWhitepaperShell";
import knowledgeWorkflowAiWhitepaperPdf from "../../../attached_assets/Whitepapers/White Paper-Knowledge AI.pdf";

export default function KnowledgeWorkflowAIWhitepaperPage() {
  return (
    <ResourceWhitepaperShell
      eyebrow="Knowledge & Workflow AI · Whitepaper"
      title="Knowledge & Workflow AI — Whitepaper"
      backHref="/knowledge-workflow-ai-resources"
      backLabel="Knowledge & Workflow AI Resources"
      pdfFile={knowledgeWorkflowAiWhitepaperPdf}
      learnMoreHref="/knowledge-workflow-ai"
      learnMoreLabel="Learn more"
    />
  );
}
