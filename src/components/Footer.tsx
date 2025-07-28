export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-t border-dotted border-gray-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="/gallery" className="hover:underline">
            Gallery
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="font-semibold">Connect:</span>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            X
          </a>
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            YouTube
          </a>
          <a href="#" className="hover:underline">
            TikTok
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        Designed by{" "}
        <a
          href="https://yourdomain.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-medium text-gray-600"
        >
          Shawn Renee Casaus
        </a>
      </div>
    </footer>
  );
}
