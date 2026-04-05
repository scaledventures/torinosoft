import { ResourcesHubLayout } from "@/components/resources/ResourcesHubLayout";

export default function ProductDevelopmentResourcesPage() {
  return (
    <ResourcesHubLayout
      title="Product Development Resources"
      whitepaper={{
        description: "Blueprint for building scalable products, modern delivery practices, and measurable business outcomes.",
        href: "/whitepaper/product-development",
      }}
      blog={{
        description: "How product and engineering leaders align roadmaps, speed, and quality when modernizing the stack.",
        href: "/blog/product-development",
      }}
    />
  );
}
