"use client";

import TouchGallery from "./TouchGallery";

export default function GalleryCollage() {
    const images = [
        // {
        //   imageUrl: "/images/collage-photos/img1.jpg",
        //   description: "Pristine detailing and paint correction work.",
        //   heightRatio: 0.66,
        // },
        // {
        //   imageUrl: "/images/collage-photos/img2.jpg",
        //   description: "Track-ready shine with advanced ceramic coating.",
        //   heightRatio: 0.66,
        // },
        {
            imageUrl: "/images/collage-photos/img3.jpg",
            description: "This Camero SS took 7 hours to prep for a car show with a full paint enhancement to gloss it up.",
            heightRatio: 0.66,
        },
        {
            imageUrl: "/images/collage-photos/img8.jpg",
            description: "This truck took me 28 hours to paint correct. This photo shows a side by side before and after.",
            heightRatio: 0.66,
        },
        // {
        //   imageUrl: "/images/collage-photos/img5.png",
        //   description: "Refined interior and exterior with stage 2 polish.",
        //   heightRatio: 0.66,
        // },
        {
            imageUrl: "/images/collage-photos/img7.png",
            description: "This is a side by side of the cleaning of the carpet in a BMW before and after.",
            heightRatio: 0.66,
        },
        // {
        //   imageUrl: "/images/collage-photos/img6.jpg",
        //   description: "Daily driven and always dialed in.",
        //   heightRatio: 0.66,
        // },
        // {
        //   imageUrl: "/images/collage-photos/img9.jpg",
        //   description: "Track prep and full body detail.",
        //   heightRatio: 0.66,
        // },
        {
            imageUrl: "/images/collage-photos/img4.jpg",
            description: "This Porsche was a 2 day project to remove old PPF and to ceramic coat it.",
            heightRatio: 0.66,
        },
        {
            imageUrl: "/images/collage-photos/img10.jpg",
            description: "This Galeon 500 Fly is a 3 story yacht owned by one of my regular clients. I go out to clean it once a month.",
            heightRatio: 0.66,
            isTall: true,
        },
        {
            imageUrl: "/images/collage-photos/img11.jpg",
            description: "This Hummer had a matte paint job so extra care was taken to clean it for the client.",
            heightRatio: 0.66,
            isTall: true,
        },
        {
            imageUrl: "/images/collage-photos/img12.jpg",
            description: "This McLaren 720s has a full body ppf and ceramic coating. Only needs quick washes.",
            heightRatio: 0.66,
            isTall: true,
        },
        {
            imageUrl: "/images/collage-photos/img13.jpg",
            description: "This Harley Davidson needed a clean before summer arrived so the owner could show it off.",
            heightRatio: 0.66,
            isTall: true,
        },
        {
            imageUrl: "/images/collage-photos/img14.jpg",
            description: "This Jeep needed a full interior, and carpet shampoo, along with an exterior detail.",
            heightRatio: 0.66,
            isTall: true,
        },
        {
            imageUrl: "/images/collage-photos/img15.jpg",
            description: "This Aston Martin DB2 Vantage was brought to me to detail before listing it for sale.",
            heightRatio: 0.66,
            isTall: true,
        },
        {
            imageUrl: "/images/collage-photos/img16.jpg",
            description: "This BMW race car is brought to me on a semi regular basis to clean before racing.",
            heightRatio: 0.66,
            isTall: true,
        },
        {
            imageUrl: "/images/collage-photos/img17.jpg",
            description: "This custom built hot rod needed a paint correction before going to a car show.",
            heightRatio: 0.66,
            isTall: true,
        },
        // {
        //   imageUrl: "/images/collage-photos/img18.jpg",
        //   description: "Iconic JDM legend brought back to glory.",
        //   heightRatio: 0.66,
        //   isTall: true,
        // },
    ];

    return <TouchGallery images={images} />;
}
