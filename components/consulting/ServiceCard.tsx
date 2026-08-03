import { BarChart3, Settings, SearchCheck, Users } from "lucide-react";
import type { ComponentType } from "react";
import type { Service } from "@/content/services";
import { Card } from "@/components/ui/Card";

const icons: Record<
  Service["icon"],
  ComponentType<{ size?: number; "aria-hidden"?: boolean | "true" | "false" }>
> = {
  chart: BarChart3,
  gear: Settings,
  search: SearchCheck,
  team: Users,
};

interface Props {
  service: Service;
}

export function ServiceCard({ service }: Props) {
  const Icon = icons[service.icon];
  return (
    <Card hover className="h-full flex flex-col">
      {/* icon - fixed-size badge so every card's icon sits at the same Y */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
        <Icon size={24} aria-hidden />
      </div>
      {/* title - reserved min-height keeps titles aligned even when one wraps */}
      <h3 className="mt-5 text-xl font-semibold leading-snug min-h-[3.5rem]">
        {service.title}
      </h3>
      {/* summary - grows to push any future footer to bottom */}
      <p className="mt-3 flex-1 text-sm text-muted-light leading-relaxed">
        {service.summary}
      </p>
    </Card>
  );
}
