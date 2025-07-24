import ImageCardSquared from "./ImageCardSquared";
import TextHero from "./TextHero";

export default function GalleryCollage() {
  return (
    <section className="px-4 py-8 mb-32">
      <div className="grid grid-cols-1 sm:grid-cols-3 auto-rows-[200px] gap-4">
        <div className="col-span-1 row-span-1">
          <ImageCardSquared
            title="E36 M3"
            imageUrl="/images/collage-photos/img1.jpg"
            description1="Pristine detailing and paint correction work."
            height="h-full"
            background="bg-[#EDBB3F]"
            blackText={true}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <ImageCardSquared
            title="GT3 RS"
            imageUrl="/images/collage-photos/img2.jpg"
            description1="Track-ready shine with advanced ceramic coating."
            height="h-full"
            background="bg-[#2DB9D7]"
            blackText={true}
          />
        </div>

        <div className="col-span-1 row-span-2">
          <ImageCardSquared
            title="FD RX-7"
            imageUrl="/images/collage-photos/img3.jpg"
            description1="Engine bay and rotary-specific cosmetic restoration."
            height="h-full"
            background="bg-[#273850]"
            blackText={false}
          />
        </div>

        <div className="col-span-1 row-span-2 h-full flex items-center justify-center bg-white p-6 overflow-hidden">
          <TextHero className="text-left whitespace-pre-line">
            {"A CURATED\nGLIMPSE\nINTO\nOUR\nCRAFT"}
          </TextHero>
        </div>

        <div className="col-span-1 row-span-2">
          <ImageCardSquared
            title="R32 GTR"
            imageUrl="/images/collage-photos/img8.jpg"
            description1="Iconic JDM legend brought back to glory."
            height="h-full"
            background="bg-[#B4DD19]"
            blackText={true}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <ImageCardSquared
            title="E46 M3"
            imageUrl="/images/collage-photos/img5.png"
            description1="Refined interior and exterior with stage 2 polish."
            height="h-full"
            background="bg-[#FF8D19]"
            blackText={true}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <ImageCardSquared
            title="MK4 Supra"
            imageUrl="/images/collage-photos/img7.png"
            description1="Glass-like finish with wheel brightening."
            height="h-full"
            background="bg-[#C7AFF0]"
            blackText={true}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <ImageCardSquared
            title="GR Yaris"
            imageUrl="/images/collage-photos/img6.jpg"
            description1="Daily driven and always dialed in."
            height="h-full"
            background="bg-[#8A2056]"
            blackText={false}
          />
        </div>

        <div className="col-span-1 row-span-2">
          <ImageCardSquared
            title="911 GT3"
            imageUrl="/images/collage-photos/img9.jpg"
            description1="Track prep and full body detail."
            height="h-full"
            background="bg-[#F9551D]"
            blackText={false}
          />
        </div>

        <div className="col-span-1 row-span-1">
          <ImageCardSquared
            title="R32 GTR"
            imageUrl="/images/collage-photos/img4.jpg"
            description1="Iconic JDM legend brought back to glory."
            height="h-full"
            background="bg-[#0F503C]"
            blackText={false}
          />
        </div>
      </div>
    </section>
  );
}
