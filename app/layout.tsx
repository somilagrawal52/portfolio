import type { Metadata } from "next";
import "./globals.css";
import "./case.css";

export const metadata: Metadata = {
  title: "Somil Agrawal — Full-stack Software Engineer",
  description: "Somil Agrawal builds dependable web products, real-time systems, and practical AI experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
