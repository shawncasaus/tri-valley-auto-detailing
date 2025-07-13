export default function GalleryCollage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="aspect-video bg-gray-200 rounded-xl shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
