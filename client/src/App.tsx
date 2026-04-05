import { useEffect, useState } from "react";
import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ContactCenterPage from "@/pages/ContactCenterPage";
import DataCompressionPage from "@/pages/DataCompressionPage";
import ProductDevelopmentPage from "@/pages/ProductDevelopmentPage";
import AboutUsPage from "@/pages/AboutUsPage";
import GetInTouchPage from "@/pages/GetInTouchPage";
import CareersPage from "@/pages/CareersPage";
import OfficeLocationsPage from "@/pages/OfficeLocationsPage";
import ClientLoginPage from "@/pages/ClientLoginPage";
import SiteLoginPage from "@/pages/SiteLoginPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import PrivacySettingsPage from "@/pages/PrivacySettingsPage";
import AdTechResourcesPage from "@/pages/AdTechResourcesPage";
import ContactCenterResourcesPage from "@/pages/ContactCenterResourcesPage";
import ProductDevelopmentResourcesPage from "@/pages/ProductDevelopmentResourcesPage";
import DataCompressionResourcesPage from "@/pages/DataCompressionResourcesPage";
import KnowledgeWorkflowAIResourcesPage from "@/pages/KnowledgeWorkflowAIResourcesPage";
import ContactCenterBlogPage from "@/pages/ContactCenterBlogPage";
import ProductDevelopmentBlogPage from "@/pages/ProductDevelopmentBlogPage";
import DataCompressionBlogPage from "@/pages/DataCompressionBlogPage";
import KnowledgeWorkflowAIBlogPage from "@/pages/KnowledgeWorkflowAIBlogPage";
import ContactCenterWhitepaperPage from "@/pages/ContactCenterWhitepaperPage";
import ProductDevelopmentWhitepaperPage from "@/pages/ProductDevelopmentWhitepaperPage";
import DataCompressionWhitepaperPage from "@/pages/DataCompressionWhitepaperPage";
import KnowledgeWorkflowAIWhitepaperPage from "@/pages/KnowledgeWorkflowAIWhitepaperPage";
import IndustrySolutionsPage from "@/pages/IndustrySolutionsPage";
import ConstructionPage from "@/pages/ConstructionPage";
import DataManagementPage from "@/pages/DataManagementPage";
import SoftwareDevelopmentPage from "@/pages/SoftwareDevelopmentPage";
import RetailPage from "@/pages/RetailPage";
import SafetyEnforcementPage from "@/pages/SafetyEnforcementPage";
import CalendarPage from "@/pages/CalendarPage";
import ServiceArchitecturePage from "@/pages/ServiceArchitecturePage";
import KnowledgeWorkflowAIPage from "@/pages/KnowledgeWorkflowAIPage";
import { CookieConsent } from "@/components/CookieConsent";
import LoyaltyOffersPage from "@/pages/LoyaltyOffersPage";
import AdtechBlogPage from "@/pages/AdtechBlogPage";
import AdtechWhitepaperPage from "@/pages/AdtechWhitepaperPage";

function RedirectToContactCenter() {
  return <Redirect to="/contact-center" />;
}

function Router() {
  const [location, setLocation] = useLocation();
  const [isSiteAuthenticated, setIsSiteAuthenticated] = useState<boolean | null>(null);

  // Read site-auth state from localStorage on first load and when custom auth event fires
  useEffect(() => {
    const readAuth = () => {
      try {
        const stored = window.localStorage.getItem("iolaire-site-auth");
        setIsSiteAuthenticated(stored === "logged-in");
      } catch {
        setIsSiteAuthenticated(false);
      }
    };

    readAuth();
    window.addEventListener("iolaire-site-auth-changed", readAuth);

    return () => {
      window.removeEventListener("iolaire-site-auth-changed", readAuth);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  // For unauthenticated visitors, always show the simple site login page,
  // except when they directly open the dedicated client login.
  useEffect(() => {
    if (isSiteAuthenticated === null) return;

    if (!isSiteAuthenticated && location !== "/site-login" && location !== "/client-login") {
      setLocation("/site-login");
    } else if (isSiteAuthenticated && location === "/site-login") {
      setLocation("/");
    }
  }, [isSiteAuthenticated, location, setLocation]);

  // Avoid rendering routes until we know auth state to prevent flicker
  if (isSiteAuthenticated === null) {
    return null;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/site-login" component={SiteLoginPage} />
      {/* Products */}
      <Route path="/alpr/unified-dashboard" component={RedirectToContactCenter} />
      <Route path="/alpr/layered-security-privacy" component={RedirectToContactCenter} />
      <Route path="/alpr/edge-applications" component={RedirectToContactCenter} />
      <Route path="/alpr" component={RedirectToContactCenter} />
      <Route path="/alpr-resources" component={RedirectToContactCenter} />
      <Route path="/blog/alpr" component={RedirectToContactCenter} />
      <Route path="/whitepaper/alpr" component={RedirectToContactCenter} />
      <Route path="/adtech" component={ContactCenterPage} />
      <Route path="/contact-center" component={ContactCenterPage} />
      <Route path="/data-compression" component={DataCompressionPage} />
      <Route path="/product-development" component={ProductDevelopmentPage} />
      <Route path="/adtech/loyalty-offers" component={LoyaltyOffersPage} />
      {/* Industry Solutions */}
      <Route path="/industry-solutions" component={IndustrySolutionsPage} />
      <Route path="/construction" component={ConstructionPage} />
      <Route path="/data-management" component={DataManagementPage} />
      <Route path="/software-development" component={SoftwareDevelopmentPage} />
      <Route path="/retail" component={RetailPage} />
      <Route path="/safety-enforcement" component={SafetyEnforcementPage} />
      {/* Service Architecture */}
      <Route path="/service-architecture" component={ServiceArchitecturePage} />
      <Route path="/platform-architecture">
        <Redirect to="/service-architecture" />
      </Route>
      <Route path="/knowledge-workflow-ai" component={KnowledgeWorkflowAIPage} />
      {/* Resources hubs */}
      <Route path="/contact-center-resources" component={ContactCenterResourcesPage} />
      <Route path="/product-development-resources" component={ProductDevelopmentResourcesPage} />
      <Route path="/data-compression-resources" component={DataCompressionResourcesPage} />
      <Route path="/knowledge-workflow-ai-resources" component={KnowledgeWorkflowAIResourcesPage} />
      <Route path="/adtech-resources" component={AdTechResourcesPage} />
      {/* Reference blog & whitepaper (AdTech) — keep URLs intact */}
      <Route path="/blog/adtech" component={AdtechBlogPage} />
      <Route path="/whitepaper/adtech" component={AdtechWhitepaperPage} />
      {/* Product-line blogs & whitepapers (placeholders — swap copy/PDF when ready) */}
      <Route path="/blog/contact-center" component={ContactCenterBlogPage} />
      <Route path="/blog/product-development" component={ProductDevelopmentBlogPage} />
      <Route path="/blog/data-compression" component={DataCompressionBlogPage} />
      <Route path="/blog/knowledge-workflow-ai" component={KnowledgeWorkflowAIBlogPage} />
      <Route path="/whitepaper/contact-center" component={ContactCenterWhitepaperPage} />
      <Route path="/whitepaper/product-development" component={ProductDevelopmentWhitepaperPage} />
      <Route path="/whitepaper/data-compression" component={DataCompressionWhitepaperPage} />
      <Route path="/whitepaper/knowledge-workflow-ai" component={KnowledgeWorkflowAIWhitepaperPage} />
      {/* About Us */}
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/get-in-touch" component={GetInTouchPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/office-locations" component={OfficeLocationsPage} />
      {/* Calendar/Booking */}
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/book-appointment" component={CalendarPage} />
      {/* Client login */}
      <Route path="/client-login" component={ClientLoginPage} />
      {/* Legal */}
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/privacy-settings" component={PrivacySettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
