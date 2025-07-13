import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="text-gray-900">
      <Header />
      <Hero />
      <Services />
      <Reviews />
      <ContactForm />
    </main>
  );
}
