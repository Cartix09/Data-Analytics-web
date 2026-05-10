type ClassValue = string | number | null | undefined | false | ClassValue[] | { [k: string]: unknown };

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (value: ClassValue) => {
    if (!value) return;
    if (typeof value === "string" || typeof value === "number") {
      out.push(String(value));
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    if (typeof value === "object") {
      for (const [k, v] of Object.entries(value)) if (v) out.push(k);
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}
