import { Check, Truck } from "lucide-react";
import { PRICING } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaButtons } from "@/components/ui/CtaButtons";

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="อัตราค่าบริการ"
          title="ราคาเริ่มต้นตามขนาดรถ"
          description="ราคาเป็นเรตเริ่มต้นโดยประมาณ ค่าบริการจริงขึ้นกับระยะทาง จำนวนชั้น และปริมาณของ — แจ้งชัดเจนก่อนเริ่มงานเสมอ"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
                tier.highlighted
                  ? "border-brand bg-navy text-white shadow-xl"
                  : "border-line bg-white"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  ยอดนิยม
                </span>
              )}
              <span
                className={`grid size-12 place-items-center rounded-xl ${
                  tier.highlighted ? "bg-white/10 text-accent" : "bg-brand/10 text-brand"
                }`}
              >
                <Truck className="size-6" strokeWidth={2.1} />
              </span>
              <h3
                className={`mt-5 text-xl font-bold ${
                  tier.highlighted ? "text-white" : "text-navy"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-sm ${
                  tier.highlighted ? "text-white/70" : "text-slate"
                }`}
              >
                {tier.vehicle}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span
                  className={`text-sm ${
                    tier.highlighted ? "text-white/70" : "text-slate"
                  }`}
                >
                  เริ่มต้น ฿
                </span>
                <span
                  className={`font-display text-4xl font-bold ${
                    tier.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.priceFrom}
                </span>
              </div>

              <p
                className={`mt-5 flex items-start gap-2 border-t pt-5 text-sm ${
                  tier.highlighted
                    ? "border-white/15 text-white/80"
                    : "border-line text-slate"
                }`}
              >
                <Check
                  className={`mt-0.5 size-4 shrink-0 ${
                    tier.highlighted ? "text-accent" : "text-brand"
                  }`}
                  strokeWidth={3}
                />
                เหมาะกับ: {tier.suitableFor}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-surface p-8 text-center">
          <p className="text-lg font-semibold text-navy">
            ไม่แน่ใจว่าต้องใช้รถขนาดไหน? ให้เราช่วยประเมินฟรี
          </p>
          <CtaButtons />
        </div>
      </Container>
    </section>
  );
}
