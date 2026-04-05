import { ResourcesHubLayout } from "@/components/resources/ResourcesHubLayout";

export default function ContactCenterResourcesPage() {
  return (
    <ResourcesHubLayout
      title="Contact Center Resources"
      whitepaper={{
        description: "Where hyperlocal engagement meets real-world intent — whitepaper overview for Contact Center.",
        href: "/whitepaper/contact-center",
      }}
      blog={{
        description: "Questions retail and CX leaders should ask before investing in real-time, AI-driven contact center capabilities.",
        href: "/blog/contact-center",
      }}
    />
  );
}
