import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-background py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              พื้นที่ให้บริการ
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              ให้บริการทั่วกรุงเทพฯ ปริมณฑล และต่างจังหวัด
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              ครอบคลุมงานย้ายในเมืองและงานเหมาคันข้ามจังหวัด
              ไม่ว่าปลายทางจะอยู่ที่ไหน เราวางแผนเส้นทางและทีมงานให้พร้อม
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2.5 text-sm font-medium text-navy"
                >
                  <MapPin className="size-4 shrink-0 text-accent" strokeWidth={2.4} />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* แผนที่เชิงสัญลักษณ์ */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-navy p-8">
            <div
              aria-hidden
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 0), linear-gradient(90deg, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative flex h-full flex-col items-center justify-center text-center">
              <span className="grid size-20 place-items-center rounded-full bg-accent/20 ring-1 ring-accent/40">
                <MapPin className="size-10 text-accent" strokeWidth={2} />
              </span>
              <p className="mt-6 font-display text-2xl font-bold text-white">
                ครอบคลุมทั่วประเทศ
              </p>
              <p className="mt-2 text-sm text-white/70">
                สอบถามพื้นที่ปลายทางของคุณได้ทาง LINE หรือโทรสอบถาม
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
