import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ErrorBoundary from "@/components/ErrorBoundary";
import GlobalErrorHandler from "@/components/GlobalErrorHandler";

export const metadata: Metadata = {
  title: {
    default: "Tri-Valley Auto Detailing | Premium Car Detailing Services",
    template: "%s | Tri-Valley Auto Detailing"
  },
  description: "Professional auto detailing services in the Tri-Valley area. Paint correction, ceramic coating, interior detailing, and more. Book your detail today!",
  keywords: [
    "auto detailing",
    "car detailing",
    "paint correction",
    "ceramic coating",
    "interior detailing",
    "exterior detailing",
    "Tri-Valley",
    "Livermore",
    "Pleasanton",
    "Dublin",
    "San Ramon",
    "car wash",
    "vehicle restoration",
    "premium detailing"
  ],
  authors: [{ name: "Tri-Valley Auto Detailing" }],
  creator: "Tri-Valley Auto Detailing",
  publisher: "Tri-Valley Auto Detailing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trivalleyautodetailing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trivalleyautodetailing.com",
    siteName: "Tri-Valley Auto Detailing",
    title: "Tri-Valley Auto Detailing | Premium Car Detailing Services",
    description: "Professional auto detailing services in the Tri-Valley area. Paint correction, ceramic coating, interior detailing, and more. Book your detail today!",
    images: [
      {
        url: "/images/showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Tri-Valley Auto Detailing - Premium Car Detailing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tri-Valley Auto Detailing | Premium Car Detailing Services",
    description: "Professional auto detailing services in the Tri-Valley area. Paint correction, ceramic coating, interior detailing, and more.",
    images: ["/images/showcase.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveRepairShop",
              "name": "Tri-Valley Auto Detailing",
              "description": "Professional auto detailing services specializing in paint correction, ceramic coating, and premium vehicle restoration.",
              "url": "https://trivalleyautodetailing.com",
              "logo": "https://trivalleyautodetailing.com/logo.png",
              "image": "https://trivalleyautodetailing.com/images/showcase.jpg",
              "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
              "email": "info@trivalleyautodetailing.com", // Replace with actual email
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tri-Valley Area",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.6879",
                "longitude": "-121.7680"
              },
              "openingHours": "Mo-Fr 09:00-18:00,Sa 09:00-17:00",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "37.6879",
                  "longitude": "-121.7680"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Auto Detailing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Paint Correction",
                      "description": "Professional paint correction to remove swirl marks, scratches, and oxidation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ceramic Coating",
                      "description": "Premium ceramic coating application for long-lasting paint protection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interior Detailing",
                      "description": "Complete interior cleaning and protection services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Exterior Detailing",
                      "description": "Comprehensive exterior cleaning, polishing, and protection"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50"
              }
            })
          }}
        />
      </head>
      <body className="bg-white text-black">
        <SmoothScroll />
        <GlobalErrorHandler />
        
        {/* Skip to main content link for keyboard users */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        
        <ErrorBoundary>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
