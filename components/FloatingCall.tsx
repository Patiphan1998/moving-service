import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";

/** ปุ่มลอยโทรด่วน + LINE — มองเห็นตลอดบนมือถือ */
export function FloatingCall() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={CONTACT.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แชท LINE"
        className="grid size-14 place-items-center rounded-full bg-[#06C755] text-white shadow-xl shadow-black/20 transition hover:scale-105"
      >
        <MessageCircle className="size-7" strokeWidth={2.2} />
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        aria-label={`โทร ${CONTACT.phoneDisplay}`}
        className="relative grid size-14 place-items-center rounded-full bg-accent text-white shadow-xl shadow-black/20 transition hover:scale-105"
      >
        <Phone className="size-7" strokeWidth={2.2} />
        <span className="absolute inline-flex size-14 animate-ping rounded-full bg-accent opacity-30" />
      </a>
    </div>
  );
}
