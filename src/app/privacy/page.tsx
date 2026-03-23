import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for IM Pro - how we handle your data when you use our website and contact form.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-base">
      <div className="mx-auto max-w-[720px] px-6 py-24">
        <a
          href="/"
          className="mb-12 inline-flex items-center gap-1 text-sm text-teal transition-colors hover:text-teal-hover"
        >
          &larr; Back to Home
        </a>

        <h1 className="mb-4 text-3xl font-bold text-text-bright sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-text-dim">
          Last updated: March 23, 2026
        </p>

        <div className="space-y-10 text-text-main leading-relaxed [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-bright [&_p+p]:mt-3 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">
          <section>
            <h2>Data Controller</h2>
            <p>
              SIA IM Pro, registered in Latvia. This policy applies to the
              website impro-media.com.
            </p>
          </section>

          <section>
            <h2>Personal Data We Collect</h2>
            <p>
              When you submit the contact form on this website, we collect the
              following personal data:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
            </ul>
          </section>

          <section>
            <h2>Purpose and Legal Basis</h2>
            <p>
              We process your personal data for the sole purpose of responding
              to your inquiry and discussing potential collaboration. The legal
              basis is your consent, given by submitting the contact form
              (GDPR Art. 6(1)(a)).
            </p>
          </section>

          <section>
            <h2>Email Delivery</h2>
            <p>
              Contact form submissions are delivered via{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal underline decoration-teal/30 transition-colors hover:text-teal-hover"
              >
                Resend
              </a>{" "}
              (Plus Five Five, Inc., USA), which acts as a data processor. Resend
              processes the email content solely for the purpose of delivery and
              retains data in accordance with their{" "}
              <a
                href="https://resend.com/legal/dpa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal underline decoration-teal/30 transition-colors hover:text-teal-hover"
              >
                Data Processing Addendum
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Hosting and Server Data</h2>
            <p>
              This website is hosted on{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal underline decoration-teal/30 transition-colors hover:text-teal-hover"
              >
                Vercel
              </a>{" "}
              (Vercel Inc., USA). As part of standard web hosting operations,
              Vercel may automatically collect:
            </p>
            <ul>
              <li>IP address and approximate location (city, country)</li>
              <li>Browser type and operating system</li>
              <li>Pages viewed and access timestamps</li>
            </ul>
            <p>
              This data is collected by Vercel as a data processor and is used
              for infrastructure operation and security.
            </p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p>
              We use{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal underline decoration-teal/30 transition-colors hover:text-teal-hover"
              >
                Vercel Web Analytics
              </a>{" "}
              to collect basic, non-identifiable usage metrics (page views,
              referrers, country of origin). This service does not use cookies
              and does not track individual visitors across sites.
            </p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>
              Contact form submissions are delivered as email to our business
              mailbox hosted on Google Workspace. Emails are retained
              indefinitely as part of standard business correspondence unless you
              request deletion.
            </p>
          </section>

          <section>
            <h2>International Transfers</h2>
            <p>
              Your data may be processed outside the European Economic Area by
              our service providers (Resend, Vercel, Google). These transfers are
              covered by the providers&apos; Standard Contractual Clauses and
              applicable data protection frameworks.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>
              Under GDPR, you have the right to request access to, correction
              of, or deletion of your personal data. You may also withdraw your
              consent at any time. To exercise any of these rights, contact us
              at{" "}
              <a
                href="mailto:hello@impro-media.com"
                className="text-teal underline decoration-teal/30 transition-colors hover:text-teal-hover"
              >
                hello@impro-media.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For any questions regarding this privacy policy:{" "}
              <a
                href="mailto:hello@impro-media.com"
                className="text-teal underline decoration-teal/30 transition-colors hover:text-teal-hover"
              >
                hello@impro-media.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
