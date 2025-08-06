import GalleryShowcase from "@/components/GalleryShowcase";
import GalleryCollage from "@/components/GalleryCollage";

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
