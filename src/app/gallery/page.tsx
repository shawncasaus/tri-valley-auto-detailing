import GalleryShowcase from "@/components/GalleryShowcase";

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <h1 className="text-4xl font-bold mb-10 text-center">Gallery</h1>
        <GalleryShowcase />
      </section>
    </div>
  );
}
