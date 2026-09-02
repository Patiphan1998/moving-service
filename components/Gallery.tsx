import { ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** ผลงานตัวอย่าง — แทนที่ label + คลาสสีด้วยรูปถ่ายงานจริงภายหลัง */
const GALLERY_ITEMS = [
  { label: "ย้ายคอนโด · ทองหล่อ", tone: "from-navy to-navy-700" },
  { label: "ย้ายสำนักงาน · อโศก", tone: "from-brand to-brand-600" },
  { label: "ขนส่งเหมาคัน · 10 ล้อ", tone: "from-slate to-navy" },
  { label: "ย้ายบ้าน · นนทบุรี", tone: "from-navy-700 to-brand" },
  { label: "ถอด-ประกอบเฟอร์นิเจอร์", tone: "from-brand-600 to-navy" },
  { label: "ขนย้ายสัตว์เลี้ยง", tone: "from-navy to-brand-600" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="ผลงานที่ผ่านมา"
          title="ตัวอย่างงานขนย้ายจริง"
          description="ภาพตัวอย่างประกอบ — เมื่อพร้อมสามารถแทนที่ด้วยรูปถ่ายหน้างานจริงของคุณได้ทันที"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map(({ label, tone }) => (
            <figure
              key={label}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${tone}`}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <ImageIcon
                aria-hidden
                className="absolute right-4 top-4 size-6 text-white/40"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5 text-sm font-semibold text-white">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
