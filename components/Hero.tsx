import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { BRAND } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { CtaButtons } from "@/components/ui/CtaButtons";

const HIGHLIGHTS = [
  { icon: ShieldCheck, text: "ประกันความเสียหาย" },
  { icon: Clock, text: "ตรงเวลา มาตามนัด" },
  { icon: BadgeCheck, text: "ราคาชัดเจน ไม่บวกเพิ่ม" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* พื้นหลังลวดลายมุมมืออาชีพ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand/20 blur-3xl"
      />

      <Container className="relative">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/15">
            <span className="size-2 rounded-full bg-accent" />
            ให้บริการทั่วประเทศ ตั้งแต่ปี {BRAND.established}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {BRAND.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            ขนย้ายบ้าน คอนโด สำนักงาน ขนส่งสินค้าเหมาคัน และดูแลสัตว์เลี้ยง
            ด้วยทีมงานมืออาชีพ พร้อมประกันความเสียหายทุกงาน
          </p>

          <CtaButtons variant="dark" size="lg" className="mt-8" />

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-2 text-sm font-medium text-white/85"
              >
                <Icon className="size-5 text-accent" strokeWidth={2.2} />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* ขอบโค้งเชื่อมกับ section ถัดไป */}
      <div className="absolute inset-x-0 bottom-0 h-8 rounded-t-[2.5rem] bg-background" />
    </section>
  );
}
