import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/QuoteForm";

const CONTACT_ITEMS = [
  { icon: Phone, label: "โทรศัพท์", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
  { icon: MessageCircle, label: "LINE", value: CONTACT.lineId, href: CONTACT.lineUrl },
  { icon: Mail, label: "อีเมล", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export function Contact() {
  return (
    <section id="contact" className="bg-navy py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="text-white">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              ติดต่อเรา
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              ขอใบเสนอราคาฟรี วันนี้
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              กรอกฟอร์มเพื่อขอใบเสนอราคา หรือติดต่อเราโดยตรงตามช่องทางด้านล่าง
              ทีมงานพร้อมให้คำปรึกษาและประเมินราคาโดยไม่มีค่าใช้จ่าย
            </p>

            <ul className="mt-8 space-y-3">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent/20 text-accent">
                      <Icon className="size-5" strokeWidth={2.2} />
                    </span>
                    <span>
                      <span className="block text-xs text-white/60">{label}</span>
                      <span className="font-semibold text-white">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" strokeWidth={2.2} />
                {CONTACT.address}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-4 text-accent" strokeWidth={2.2} />
                {CONTACT.hours}
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}
