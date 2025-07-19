import GalleryShowcase from "@/components/GalleryShowcase";
import GalleryCollage from "@/components/GalleryCollage";

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mt-16">
          <GalleryShowcase />
        </div>
        <GalleryCollage />
      </section>
    </div>
  );
}
