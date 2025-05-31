import Link from 'next/link';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from "react";

export default function PrivacyPolicyPage() {
  return (
      <div className="flex flex-col min-h-screen">
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              FotoTravel
            </Link>
            <nav className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
              <Link href="/travel" className="text-sm font-medium text-primary">
                Travel
              </Link>
              <Link href="/privacy-policy"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <ThemeToggle/>
            </nav>
          </div>
        </header>

        <main className="flex-grow container py-12">
          <div className="max-w-3xl mx-auto bg-card p-8 shadow-lg rounded-lg">
            <Button variant="outline" size="sm" asChild className="mb-8">
              <Link href="/">
                <ArrowLeft size={16} className="mr-2"/> Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-4 text-foreground">
              <p>Welcome to FotoTravel! This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website [Your Website URL], including any other media form, media
                channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”).
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the site.</p>

              <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">1. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site
                includes:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email
                  address, and demographic information, that you voluntarily give to us when you register with the Site
                  or when you choose to participate in various activities related to the Site, such as online chat and
                  message boards.
                </li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the
                  Site, such as your IP address, your browser type, your operating system, your access times, and the
                  pages you have viewed directly before and after accessing the Site.
                </li>
                <li><strong>Cookies and Web Beacons:</strong> We may use cookies, web beacons, tracking pixels, and
                  other tracking technologies on the Site to help customize the Site and improve your experience.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">2. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and
                customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">3. Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
                  necessary to respond to legal process, to investigate or remedy potential violations of our policies,
                  or to protect the rights, property, and safety of others, we may share your information as permitted
                  or required by any applicable law, rule, or regulation.
                </li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties
                  that perform services for us or on our behalf, including payment processing, data analysis, email
                  delivery, hosting services, customer service, and marketing assistance.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">4. Security of Your Information</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.</p>

              <h2 className="text-xl font-semibold mt-6 mb-2 text-primary">5. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us using the contact form
                on our website or by emailing us at [your-contact-email@example.com].</p>

              <p className="mt-6 italic">This is a template Privacy Policy and should be reviewed and customized by a
                legal professional to ensure it meets all legal requirements for your specific situation and
                jurisdiction.</p>
            </section>
          </div>
        </main>

        <footer className="py-6 bg-foreground text-background">
          <div className="container text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} FotoTravel. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
  );
}
