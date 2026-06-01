import { HeaderServer } from "@/components/layout/HeaderServer";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderServer />
      <main id="main">{children}</main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
