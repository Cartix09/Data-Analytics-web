import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Student Hub",
  description:
    "ANLYTICS student hub — Google Classroom, live Teams sessions, course materials, and availability collection while the full portal is being built.",
  path: "/login",
  noindex: true,
});

export default function StudentHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
