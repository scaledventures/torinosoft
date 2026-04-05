import { ResourcesHubLayout } from "@/components/resources/ResourcesHubLayout";

export default function DataCompressionResourcesPage() {
  return (
    <ResourcesHubLayout
      title="Data Compression Resources"
      whitepaper={{
        description: "Secure compression, tokenization, and privacy-preserving analytics at enterprise scale.",
        href: "/whitepaper/data-compression",
      }}
      blog={{
        description: "What CTOs should evaluate when reducing storage cost and risk without losing analytical value.",
        href: "/blog/data-compression",
      }}
    />
  );
}
