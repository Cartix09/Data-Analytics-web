import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin",
  description: "Redirects to /studio.",
  path: "/admin",
  noindex: true,
});

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
