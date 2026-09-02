import { Check } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="บริการของเรา"
          title="ครบทุกความต้องการการขนย้าย"
          description="ไม่ว่าจะย้ายบ้านหลังเล็กหรือสำนักงานทั้งชั้น เรามีทีมงานและอุปกรณ์พร้อมดูแลให้จบในที่เดียว"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, features }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <span className="grid size-13 place-items-center rounded-xl bg-navy text-white transition group-hover:bg-brand">
                <Icon className="size-6" strokeWidth={2.1} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate"
                  >
                    <Check className="size-4 text-brand" strokeWidth={3} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
