interface Row {
  label: string;
  a: number;
  b: number;
}

const rows: Row[] = [
  { label: "EMEA", a: 0.78, b: 0.62 },
  { label: "AMER", a: 0.92, b: 0.71 },
  { label: "APAC", a: 0.55, b: 0.48 },
  { label: "LATAM", a: 0.41, b: 0.36 },
];

export function MatrixVisual() {
  return (
    <div className="space-y-2">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[44px_1fr_1fr] items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-dark">
            {row.label}
          </span>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${row.a * 100}%` }}
            />
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-white/40"
              style={{ width: `${row.b * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
