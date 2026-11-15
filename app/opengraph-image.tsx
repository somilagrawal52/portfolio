import { ImageResponse } from "next/og";

export const alt = "Somil Agrawal — Full-stack software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#121816", color: "#f3f0e8", padding: 62, flexDirection: "column", justifyContent: "space-between", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", fontSize: 24, letterSpacing: 3 }}>
        <span>SOMIL AGRAWAL</span><span style={{ color: "#d9fd68", fontSize: 19 }}>FULL-STACK SOFTWARE ENGINEER</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontWeight: 700, fontSize: 118, letterSpacing: -9, lineHeight: .92 }}>
        <span>I build the</span><span style={{ color: "#d9fd68" }}>whole thing.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", borderTop: "1px solid #60705e", paddingTop: 26, fontSize: 20, letterSpacing: 2 }}>
        <span>INTERFACES · APIS · DATA · APPLIED AI</span><span>2026 ↗</span>
      </div>
    </div>,
    size,
  );
}
