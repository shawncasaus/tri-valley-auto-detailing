import ImageCardSquared from "./ImageCardSquared";

export default function GalleryShowcase() {
  return (
    <section className="mb-12">
      <ImageCardSquared
        title="E36 M3"
        imageUrl="/images/showcase.jpg"
        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae leo eu nulla gravida tincidunt. Curabitur tincidunt, odio sit amet pretium varius, lacus sem euismod nulla, sit amet dignissim tortor nulla a est."
        description2="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas fringilla, nibh sed pulvinar cursus, enim arcu vestibulum est, non condimentum purus sapien a erat."
      />
    </section>
  );
}
