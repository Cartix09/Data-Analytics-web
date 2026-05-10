import { BarChart3, Settings, SearchCheck, Users } from "lucide-react";
import type { ComponentType } from "react";
import type { Service } from "@/content/services";
import { Card } from "@/components/ui/Card";

const icons: Record<Service["icon"], ComponentType<{ size?: number; "aria-hidden"?: boolean | "true" | "false" }>> = {
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
    <Card hover className="h-full flex flex-col gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
        <Icon size={24} aria-hidden />
      </div>
      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="text-sm text-muted-light leading-relaxed">{service.summary}</p>
    </Card>
  );
}
