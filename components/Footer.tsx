import { Truck, Phone, MessageCircle, Mail } from "lucide-react";
import { BRAND, CONTACT, NAV_LINKS, SERVICES } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-navy-700 pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 md:max-w-sm">
            <div className="flex items-center gap-2 text-white">
              <span className="grid size-9 place-items-center rounded-lg bg-accent">
                <Truck className="size-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold">{BRAND.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              {BRAND.nameTh} — บริการขนย้ายครบวงจร ทีมงานมืออาชีพ ประกันความเสียหาย
              ราคาชัดเจน ให้บริการทั่วประเทศ
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">เมนู</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">บริการ</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
          <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-sm transition hover:text-white">
            <Phone className="size-4 text-accent" strokeWidth={2.2} />
            {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition hover:text-white">
            <MessageCircle className="size-4 text-accent" strokeWidth={2.2} />
            {CONTACT.lineId}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm transition hover:text-white">
            <Mail className="size-4 text-accent" strokeWidth={2.2} />
            {CONTACT.email}
          </a>
        </div>

        <p className="mt-6 text-xs text-white/50">
          © {BRAND.established} {BRAND.nameTh}. สงวนลิขสิทธิ์
        </p>
        <p className="mt-1 text-xs text-white/40">
          พัฒนาเว็บไซต์โดย{" "}
          <a
            href="mailto:patiphan.dev@gmail.com"
            className="text-white/60 transition hover:text-white"
          >
            Patiphan Dev
          </a>{" "}
          · patiphan.dev@gmail.com
        </p>
      </Container>
    </footer>
  );
}
