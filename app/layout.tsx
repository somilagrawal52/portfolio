import type { Metadata } from "next";
import "./globals.css";
import "./case.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://somilagrawal.dev"),
  title: "Somil Agrawal — Full-Stack Software Engineer | VIT Vellore",
  description:
    "Full-stack software engineer building high-throughput APIs, distributed systems, real-time WebSockets, and applied AI. Explore Somil Agrawal's featured projects, experience, and tech stack.",
  keywords: [
    "Somil Agrawal",
    "Software Engineer",
    "Full-Stack Developer",
    "Node.js",
    "React",
    "Next.js",
    "FastAPI",
    "WebSockets",
    "Socket.IO",
    "MongoDB",
    "Kafka",
    "VIT Vellore",
    "Machine Learning",
    "Gemini API"
  ],
  authors: [{ name: "Somil Agrawal", url: "https://github.com/somilagrawal52" }],
  openGraph: {
    title: "Somil Agrawal — Full-Stack Software Engineer",
    description: "Engineering dependable full-stack systems, real-time flows, and applied AI.",
    type: "website",
    images: [{ url: "/og-card.png", width: 1200, height: 630, alt: "Somil Agrawal — Full-Stack Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somil Agrawal — Full-Stack Software Engineer",
    description: "Engineering dependable full-stack systems, real-time flows, and applied AI.",
    images: ["/og-card.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
