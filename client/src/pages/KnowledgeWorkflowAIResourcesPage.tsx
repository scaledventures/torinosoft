import { ResourcesHubLayout } from "@/components/resources/ResourcesHubLayout";

export default function KnowledgeWorkflowAIResourcesPage() {
  return (
    <ResourcesHubLayout
      title="Knowledge & Workflow AI Resources"
      whitepaper={{
        description: "Automating knowledge work and workflow orchestration with AI across the enterprise.",
        href: "/whitepaper/knowledge-workflow-ai",
      }}
      blog={{
        description: "Practical patterns for RFPs, bids, and document-heavy workflows powered by knowledge + workflow AI.",
        href: "/blog/knowledge-workflow-ai",
      }}
    />
  );
}
