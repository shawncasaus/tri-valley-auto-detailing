import { FaInstagram, FaLinkedin, FaXTwitter, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-t border-dotted border-gray-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="font-semibold">Connect:</span>
          <a 
            href="#" 
            className="hover:text-primary transition-colors duration-200"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors duration-200"
            aria-label="Connect with us on LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors duration-200"
            aria-label="Follow us on X (Twitter)"
          >
            <FaXTwitter size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors duration-200"
            aria-label="Like us on Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors duration-200"
            aria-label="Subscribe to our YouTube channel"
          >
            <FaYoutube size={20} />
          </a>
          <a 
            href="#" 
            className="hover:text-primary transition-colors duration-200"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok size={20} />
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
