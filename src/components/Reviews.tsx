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
    <section
      id="reviews"
      className="py-16 bg-gray-50 px-4 sm:px-8 mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1600px] mx-auto">
        <div className="w-full md:w-1/2 flex justify-start">
          <div className="md:sticky top-28 self-start w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl aspect-[9/16] w-full object-cover"
            >
              <source src="/media/reviews-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h3 className="text-right sm:text-right text-[10vw] sm:text-6xl md:text-7xl font-bold text-primary leading-tight">
            WHAT PEOPLE
          </h3>
          <h3 className="text-right sm:text-right text-[10vw] sm:text-6xl md:text-7xl font-bold mb-8 text-primary leading-tight">
            ARE SAYING
          </h3>
          <div className="space-y-6 pr-2">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md text-left transition transform hover:scale-105 hover:shadow-xl hover:z-10"
              >
                <p className="text-xl text-gray-700 italic mb-2">{r.text}</p>
                <p className="text-2xl font-semibold text-secondary">
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://g.page/r/CbqWaHqLrLQREBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-primary rounded-xl shadow-lg hover:bg-primary/90 hover:scale-105 transition-transform duration-300"
            >
              Read More Reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
