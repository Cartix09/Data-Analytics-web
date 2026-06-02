/**
 * Studio uses its own full-screen layout (no Header/Footer chrome).
 * We rely on the Sanity Studio shell to handle styling and routing.
 */
export const metadata = {
  title: "ANLYTICS Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
