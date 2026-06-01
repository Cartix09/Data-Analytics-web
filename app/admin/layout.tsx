import { HeaderServer } from "@/components/layout/HeaderServer";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin guide",
  description: "Where to edit ANLYTICS website content while a full CMS is on the roadmap.",
  path: "/admin",
  noindex: true,
});

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderServer />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
