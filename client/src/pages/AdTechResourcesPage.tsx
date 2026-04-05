import { Redirect } from "wouter";

/** Legacy URL — use `/contact-center-resources`. */
export default function AdTechResourcesPage() {
  return <Redirect to="/contact-center-resources" />;
}
