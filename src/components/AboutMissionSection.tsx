import SectionTitle from "./SectionTitle";
import ParagraphBlock from "./ParagraphBlock";

export default function AboutMissionSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="A Holistic Approach"
          subtitle="We redefine detailing standards"
        />
        <ParagraphBlock>
          <p>
            Using state-of-the-art tools and techniques, we approach every
            detail job with care and purpose. Understanding your needs and
            goals, we provide the expertise and services to elevate your
            vehicle’s appearance.
          </p>
          <p>
            Our team guarantees flawless execution with reliable efficiency,
            precision, and attention to detail. Each vehicle is treated to the
            highest standard—tailored to the lifestyle and expectations of our
            clients.
          </p>
          <p>
            We lead advancements in the automotive care space, crafting
            awe-inspiring finishes that reflect our values, passion, and craft.
          </p>
        </ParagraphBlock>
      </div>
    </section>
  );
}
