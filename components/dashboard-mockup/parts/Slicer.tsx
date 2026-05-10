interface Props {
  chips: string[];
}

export function Slicer({ chips }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {chips.map((chip, i) => (
        <span
          key={chip}
          className={
            "rounded-full border px-2.5 py-1 text-[10px] font-medium " +
            (i === 0
              ? "border-accent/50 bg-accent/15 text-accent"
              : "border-white/10 bg-white/[0.03] text-muted-dark")
          }
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
