import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";

interface CtaButtonsProps {
  variant?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
}

/** ปุ่ม "โทรด่วน" + "แชท LINE" — CTA หลักที่ใช้ซ้ำหลายจุด */
export function CtaButtons({
  variant = "light",
  size = "md",
  className = "",
}: CtaButtonsProps) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  const lineStyle =
    variant === "dark"
      ? "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20"
      : "bg-navy text-white hover:bg-navy-700";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={`tel:${CONTACT.phone}`}
        className={`inline-flex items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-600 ${pad}`}
      >
        <Phone className="size-5" strokeWidth={2.4} />
        โทรด่วน {CONTACT.phoneDisplay}
      </a>
      <a
        href={CONTACT.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition ${lineStyle} ${pad}`}
      >
        <MessageCircle className="size-5" strokeWidth={2.4} />
        แชท LINE
      </a>
    </div>
  );
}
