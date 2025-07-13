export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/media/hero-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full text-center px-4 bg-black/60 backdrop-blur-sm backdrop-brightness-75">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-offwhite drop-shadow-md mb-4 animate-fade-in">
          We are not a Car Wash...
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-offwhite drop-shadow-md mb-4 animate-fade-in">
          We are Detailers!
        </h1>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-offwhite text-xl">
        ↓
      </div>
    </section>
  );
}
