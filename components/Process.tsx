import { PROCESS } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="ขั้นตอนการทำงาน"
          title="ง่าย โปร่งใส แค่ 4 ขั้นตอน"
          description="ตั้งแต่แจ้งความต้องการจนส่งมอบ เราสื่อสารชัดเจนทุกขั้นตอน ไม่มีเซอร์ไพรส์เรื่องราคา"
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map(({ step, title, description }, index) => (
            <li key={step} className="relative">
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm">
                <span className="font-display text-4xl font-bold text-brand/25">
                  {step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {description}
                </p>
              </div>
              {index < PROCESS.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 place-items-center text-brand lg:grid">
                  ›
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
