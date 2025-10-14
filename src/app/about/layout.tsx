import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Tri-Valley Auto Detailing's mission, expertise, and commitment to delivering exceptional automotive detailing services. Our experienced team uses premium products and advanced techniques.",
  keywords: [
    "about tri-valley auto detailing",
    "auto detailing team",
    "automotive expertise",
    "premium detailing services",
    "car detailing professionals",
    "Tri-Valley detailing company"
  ],
  openGraph: {
    title: "About Tri-Valley Auto Detailing",
    description: "Learn about our mission, expertise, and commitment to delivering exceptional automotive detailing services.",
    images: [
      {
        url: "/images/about-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Tri-Valley Auto Detailing Team",
      },
    ],
  },
  twitter: {
    title: "About Tri-Valley Auto Detailing",
    description: "Learn about our mission, expertise, and commitment to delivering exceptional automotive detailing services.",
    images: ["/images/about-photo.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
