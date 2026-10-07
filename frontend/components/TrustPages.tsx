import React from 'react';
import { useSEO } from '../hooks/useSEO.ts';

type TrustPageProps = { title: string; description: string; children: React.ReactNode };

const TrustPage: React.FC<TrustPageProps> = ({ title, description, children }) => {
  useSEO({ title: `${title} | newaitools`, description, canonical: `https://www.newaitools.online/${title.toLowerCase().replace(/\s+/g, '-')}` });
  return <main className="min-h-[70vh] bg-[#f8f7f4] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
    <article className="prose prose-stone mx-auto max-w-3xl rounded-3xl border border-ink/[0.08] bg-white p-7 sm:p-10">
      <p className="not-prose text-xs font-bold uppercase tracking-[0.18em] text-accent">newaitools</p>
      <h1>{title}</h1>
      {children}
    </article>
  </main>;
};

export const AboutPage: React.FC = () => <TrustPage title="About us" description="Learn how newaitools researches and presents AI tools, software, and workflows.">
  <p>newaitools is an independent directory for people comparing AI software and building practical workflows.</p>
  <h2>How we work</h2>
  <p>We aim to explain what a tool does, who it is for, how pricing and limits work, and what users should verify before relying on it. Product details change quickly, so provider documentation remains the final authority.</p>
  <h2>Editorial standard</h2>
  <p>Our reviews are written for clarity rather than promotion. We identify uncertainty, distinguish provider claims from our interpretation, and update pages when material product information changes. Some links may be affiliate links; that does not change our editorial goal.</p>
</TrustPage>;

export const PrivacyPage: React.FC = () => <TrustPage title="Privacy policy" description="Privacy information for visitors to newaitools.online.">
  <p><strong>Last updated: October 7, 2026.</strong></p>
  <p>This page explains the main categories of information used when you visit newaitools.online. Review it with your legal or privacy adviser before publishing if your business setup includes additional services, advertising partners, newsletter providers, or contact forms.</p>
  <h2>Analytics</h2>
  <p>We use Google Analytics 4 to understand visits, page views, navigation, and aggregate engagement with the site. Google may process technical information such as browser, device, approximate location, and online identifiers according to its own terms and privacy documentation. You can manage cookies and Google activity controls in your browser and Google account.</p>
  <h2>Cookies and third parties</h2>
  <p>The site may use essential browser storage and third-party services such as analytics, hosting, fonts, affiliate networks, or advertising providers. Third-party services set their own cookies and publish their own privacy policies. If advertising is enabled, Google and its partners may use cookies to personalize or measure ads where permitted by law and user settings.</p>
  <h2>Contact and choices</h2>
  <p>For a privacy request or correction, contact the site owner using the current contact method published on this website. Do not send passwords, payment details, or other sensitive information through an ordinary message.</p>
</TrustPage>;

export const TermsPage: React.FC = () => <TrustPage title="Terms of service" description="Terms for using the newaitools.online directory and editorial content.">
  <p><strong>Last updated: October 7, 2026.</strong></p>
  <p>newaitools provides informational directory pages, comparisons, and workflow guidance. The site is not a provider of the tools listed and does not guarantee their availability, pricing, performance, security, legality, or suitability for a particular purpose.</p>
  <h2>Use of information</h2>
  <p>Verify current features, limits, pricing, privacy terms, licences, and commercial-use rights with the relevant provider before making a purchase or using a tool for consequential work.</p>
  <h2>External links</h2>
  <p>Links may lead to third-party websites. Their content, policies, products, and availability are controlled by those providers. Some links may be affiliate links and may generate a commission at no extra cost to you.</p>
  <h2>Changes</h2>
  <p>We may update the directory, articles, and these terms as the site develops. Continued use of the site after an update means you accept the revised information.</p>
</TrustPage>;

export const ContactPage: React.FC = () => <TrustPage title="Contact" description="Contact newaitools about corrections, partnerships, and site feedback.">
  <p>Found an outdated price, broken link, missing tool, or factual error? We welcome concise corrections that include the page URL and a source from the provider.</p>
  <h2>What to include</h2>
  <ul><li>The page or tool name</li><li>The specific detail that needs attention</li><li>A current official source or evidence</li><li>Your preferred reply method, if a reply is needed</li></ul>
  <p>Publish the site owner’s current email or contact form URL here before launch. This avoids sending visitors to an address that may not be monitored.</p>
</TrustPage>;
