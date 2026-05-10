import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Student login",
  description: "ANLYTICS student portal — launching with the first cohort.",
  path: "/login",
  noindex: true,
});

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
