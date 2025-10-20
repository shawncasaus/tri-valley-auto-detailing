import { FaInstagram, FaLinkedin, FaXTwitter, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white text-black py-8 border-t border-dotted border-gray-300" role="contentinfo">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <nav className="flex flex-wrap gap-6 text-sm" role="navigation" aria-label="Footer navigation">
                    <Link
                        href="/"
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                        aria-label="Go to homepage"
                    >
                        Home
                    </Link>
                    <Link
                        href="/gallery"
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                        aria-label="View our gallery of auto detailing work"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/about"
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                        aria-label="Learn about our auto detailing services"
                    >
                        About
                    </Link>
                </nav>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="font-semibold" id="social-heading">Connect:</span>
                    <div role="group" aria-labelledby="social-heading" className="flex gap-4">
                        <a
                            href="#"
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
                            aria-label="Follow us on Instagram"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
                            aria-label="Connect with us on LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
                            aria-label="Follow us on X (Twitter)"
                        >
                            <FaXTwitter size={20} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
                            aria-label="Like us on Facebook"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
                            aria-label="Subscribe to our YouTube channel"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-1"
                            aria-label="Follow us on TikTok"
                        >
                            <FaTiktok size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-500">
                Designed by{" "}
                <a
                    href="https://www.github.com/shawncasaus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="Visit designer's website (opens in new tab)"
                >
                    Shawn Renee Casaus
                </a>
            </div>
        </footer>
    );
}
