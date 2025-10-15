"use client";

import TouchGallery from "./TouchGallery";

export default function GalleryCollage() {
  const images = [
    {
      imageUrl: "/images/collage-photos/img1.jpg",
      description: "Pristine detailing and paint correction work.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img2.jpg",
      description: "Track-ready shine with advanced ceramic coating.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img3.jpg",
      description: "Engine bay and rotary-specific cosmetic restoration.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img8.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img5.png",
      description: "Refined interior and exterior with stage 2 polish.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img7.png",
      description: "Glass-like finish with wheel brightening.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img6.jpg",
      description: "Daily driven and always dialed in.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img9.jpg",
      description: "Track prep and full body detail.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img4.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
    },
    {
      imageUrl: "/images/collage-photos/img10.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img11.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img12.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img13.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img14.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img15.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img16.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img17.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
    {
      imageUrl: "/images/collage-photos/img18.jpg",
      description: "Iconic JDM legend brought back to glory.",
      heightRatio: 0.66,
      isTall: true,
    },
  ];

  return <TouchGallery images={images} />;
}
