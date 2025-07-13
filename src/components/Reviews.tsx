"use client";

const reviews = [
  {
    name: "Scott Kavanagh",
    text: `Awesome service, I would absolutely use them again... The cleanup went great and all spots were removed!`,
  },
  {
    name: "Sims Cabrera",
    text: `Great experience and highly recommended... No more milk stains, food crumbs or mold smells! Awesome job guys!!!!`,
  },
  {
    name: "Kelly Macias Mauney",
    text: `Demetris at CW Proshine is the best... My 8 year old got into my car and was like: oh my goodness Momma your car hasn’t ever been this clean.`,
  },
  {
    name: "Lunaely Espinoza",
    text: `Demetris did an amazing job cleaning the interior of my car! As someone with a busy schedule I really appreciate his flexibility! Super happy and definitely recommend his services!`,
  },
  {
    name: "Kian Masoudi",
    text: `If i could give Dimitri 10/5 stars i would my caddillac had super faded paint and i thought i was going to have the whole roof resprayed but Dimitri saved my paint and protected it with ceramic coating`,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-gray-50 px-4 sm:px-8 mx-auto">
      <div className="flex flex-col md:flex-row gap-8 max-w-screen-xl mx-auto">
        <div className="md:w-1/2 flex justify-center">
          <div className="sticky top-28 self-start w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rounded-4xl aspect-[9/16] w-full object-cover"
            >
              <source src="/media/reviews-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div
          className="md:w-1/2 flex flex-col justify-center h-full mx-auto"
          style={{ margin: "auto" }}
        >
          <h3 className="text-4xl font-bold mb-6 text-center text-primary">
            What Our Customers Say
          </h3>
          <div className="space-y-6 max-h-[950px] overflow-y-auto pr-2">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md text-left"
              >
                <p className="text-xl  text-gray-700 italic mb-2">{r.text}</p>
                <p className="text-2xl font-semibold text-secondary">
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
          <a
            href="https://g.page/r/CbqWaHqLrLQREBM/review" // Replace with your actual Google review link if different
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center text-primary underline text-lg hover:text-primary/80 transition"
          >
            Read more...
          </a>
        </div>
      </div>
    </section>
  );
}
