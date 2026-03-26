import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "iolaire-cookie-consent";

export default function PrivacySettingsPage() {
  const [performanceEnabled, setPerformanceEnabled] = useState(true);
  const [functionalityEnabled, setFunctionalityEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored === "declined") {
        setPerformanceEnabled(false);
        setFunctionalityEnabled(false);
      } else if (stored === "accepted") {
        setPerformanceEnabled(true);
        setFunctionalityEnabled(true);
      }
    } catch {
      // ignore storage read errors
    }
  }, []);

  const handleSave = () => {
    const nextConsent = performanceEnabled || functionalityEnabled ? "accepted" : "declined";
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, nextConsent);
    } catch {
      // ignore storage write errors
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <header>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Privacy Settings
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We are committed to protecting personal data and respecting privacy. Our platform
              processes information responsibly, in accordance with applicable laws and
              regulations, including strict data security, limited retention, and purpose-based
              use.
            </p>
          </header>

          <section className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Here you can review how data is collected, used, stored, and protected across our
              platform. Where applicable, you may manage privacy-related preferences in line with
              our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <div className="rounded-2xl border border-border bg-card/70 p-5 md:p-6 space-y-3">
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                Data Handling Overview
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Data is collected only for specified, explicit, and legitimate purposes.</li>
                <li>Retention periods are limited and aligned with legal, contractual, or
                  operational requirements.</li>
                <li>Technical and organizational safeguards are applied to protect personal data.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-5 md:p-6 space-y-3">
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                Managing Your Privacy
              </h2>
              <p>
                To exercise your privacy rights (such as access, correction, or deletion of
                personal data), or to update applicable preferences, please contact our team at{" "}
                <a
                  href="mailto:info@scaledventures.com"
                  className="text-primary hover:underline break-all"
                >
                  info@scaledventures.com
                </a>
                . Requests will be reviewed and handled in accordance with our Privacy Policy and
                applicable law.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-5 md:p-6 space-y-4">
              <h2 className="text-lg md:text-xl font-heading font-semibold text-foreground">
                Cookie Preferences
              </h2>
              <p className="text-sm md:text-base">
                Required cookies are always active. You can choose optional cookies below.
              </p>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-border"
                    checked={performanceEnabled}
                    onChange={(e) => setPerformanceEnabled(e.target.checked)}
                  />
                  <span>
                    <span className="block text-foreground font-medium">Measure performance</span>
                    <span className="text-sm">Helps us analyze usage and improve site performance.</span>
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-border"
                    checked={functionalityEnabled}
                    onChange={(e) => setFunctionalityEnabled(e.target.checked)}
                  />
                  <span>
                    <span className="block text-foreground font-medium">Extend functionality</span>
                    <span className="text-sm">Remembers preferences to enhance your experience.</span>
                  </span>
                </label>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <Button size="sm" onClick={handleSave}>
                  Save cookie preferences
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
                >
                  Open cookie settings dialog
                </Button>
              </div>
              {saved ? <p className="text-sm text-primary font-medium">Cookie preferences saved.</p> : null}
            </div>

            <p>
              For more details on data handling practices, legal compliance, and your rights,
              please refer to our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

