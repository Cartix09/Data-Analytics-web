import { HeaderServer } from "@/components/layout/HeaderServer";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Learn",
  description: "ANLYTICS learning portal - your enrolled modules and lessons.",
  path: "/learn",
  noindex: true,
});

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderServer />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
