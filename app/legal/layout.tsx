import { HeaderServer } from "@/components/layout/HeaderServer";
import { Footer } from "@/components/layout/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderServer />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
