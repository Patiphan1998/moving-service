import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="เสียงจากลูกค้า"
          title="ลูกค้ากว่า 12,000 งานไว้วางใจ"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, quote, rating }) => (
            <figure
              key={name}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-sm"
            >
              <Quote className="size-8 text-brand/20" strokeWidth={2} />
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent text-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                “{quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-navy">{name}</p>
                <p className="text-sm text-slate">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
