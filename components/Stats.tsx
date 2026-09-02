import { STATS } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Stats() {
  return (
    <section className="bg-background py-10">
      <Container>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon className="size-6" strokeWidth={2.2} />
              </span>
              <div>
                <dt className="text-2xl font-bold text-navy">{value}</dt>
                <dd className="text-sm text-slate">{label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
