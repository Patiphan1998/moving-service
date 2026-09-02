"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/site";

interface FormState {
  name: string;
  phone: string;
  service: string;
  route: string;
  note: string;
}

const INITIAL: FormState = {
  name: "",
  phone: "",
  service: SERVICES[0].title,
  route: "",
  note: "",
};

/** ฟอร์มขอใบเสนอราคา — รวมข้อมูลแล้วเปิดอีเมลถึงร้าน (ไม่ต้องใช้ backend) */
export function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`ขอใบเสนอราคา: ${form.service}`);
    const body = encodeURIComponent(
      [
        `ชื่อ: ${form.name}`,
        `เบอร์ติดต่อกลับ: ${form.phone}`,
        `บริการ: ${form.service}`,
        `ต้นทาง - ปลายทาง: ${form.route}`,
        `รายละเอียดเพิ่มเติม: ${form.note || "-"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-lg">
        <CheckCircle2 className="size-14 text-brand" strokeWidth={1.8} />
        <h3 className="mt-4 text-xl font-bold text-navy">ส่งคำขอเรียบร้อย</h3>
        <p className="mt-2 text-sm text-slate">
          เราจะติดต่อกลับโดยเร็วที่สุด หรือโทรหาเราได้ทันทีเพื่อความรวดเร็ว
        </p>
        <a
          href={`tel:${CONTACT.phone}`}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-600"
        >
          <Phone className="size-5" strokeWidth={2.4} />
          {CONTACT.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-7 shadow-lg sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="ชื่อ-นามสกุล" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="กรอกชื่อของคุณ"
          />
        </Field>
        <Field label="เบอร์โทรติดต่อกลับ" required>
          <input
            type="tel"
            required
            pattern="[0-9\-\s]{9,}"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="08X-XXX-XXXX"
          />
        </Field>
      </div>

      <Field label="บริการที่ต้องการ" className="mt-4">
        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="input"
        >
          {SERVICES.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
      </Field>

      <Field label="ต้นทาง - ปลายทาง" required className="mt-4">
        <input
          type="text"
          required
          value={form.route}
          onChange={(e) => update("route", e.target.value)}
          className="input"
          placeholder="เช่น คอนโดอโศก → บ้านนนทบุรี"
        />
      </Field>

      <Field label="รายละเอียดเพิ่มเติม" className="mt-4">
        <textarea
          rows={3}
          value={form.note}
          onChange={(e) => update("note", e.target.value)}
          className="input resize-none"
          placeholder="จำนวนของ ชั้น วันที่สะดวก ฯลฯ"
        />
      </Field>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-3.5 font-semibold text-white transition hover:bg-navy-700"
      >
        <Send className="size-5" strokeWidth={2.2} />
        ส่งคำขอใบเสนอราคา
      </button>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
