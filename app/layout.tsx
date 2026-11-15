import type { Metadata } from "next";
import "./globals.css";
import "./case.css";
import "./showcase.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://somil-agrawal-portfolio.coolcarol2.chatgpt.site"),
  title: "Somil Agrawal — Full-stack Software Engineer",
  description: "Full-stack software engineer building thoughtful interfaces, dependable APIs, real-time systems, and applied AI products. Explore Somil Agrawal's selected work and tech stack.",
  openGraph: {
    title: "Somil Agrawal — Full-stack Software Engineer",
    description: "From the interface people remember to the systems they rely on.",
    type: "website",
    images: [{ url: "/og-card.png", width: 1200, height: 630, alt: "Somil Agrawal — I build the whole thing." }],
  },
  twitter: { card: "summary_large_image", images: ["/og-card.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
