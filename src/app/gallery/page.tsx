import type { Metadata } from "next";
import GalleryShowcase from "@/components/GalleryShowcase";
import GalleryCollage from "@/components/GalleryCollage";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our portfolio of premium auto detailing work. See before and after photos of paint correction, ceramic coating, interior detailing, and vehicle restoration projects.",
  keywords: [
    "auto detailing gallery",
    "car detailing portfolio",
    "paint correction before after",
    "ceramic coating results",
    "interior detailing photos",
    "vehicle restoration gallery",
    "Tri-Valley detailing work"
  ],
  openGraph: {
    title: "Tri-Valley Auto Detailing Gallery",
    description: "View our portfolio of premium auto detailing work including paint correction, ceramic coating, and vehicle restoration projects.",
    images: [
      {
        url: "/images/showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Tri-Valley Auto Detailing Gallery - Premium Detailing Work",
      },
    ],
  },
  twitter: {
    title: "Tri-Valley Auto Detailing Gallery",
    description: "View our portfolio of premium auto detailing work including paint correction, ceramic coating, and vehicle restoration projects.",
    images: ["/images/showcase.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="py-16 px-4 sm:px-8">
        <div className="mt-16">
          <GalleryShowcase />
        </div>

        <GalleryCollage />
      </section>
    </div>
  );
}
