import { ImageResponse } from "next/og";

export const alt = "LiveIcons — Animated React icons you copy & paste";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#e4e4e7",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            color: "#71717a",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          40+ animated icons and growing
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "88px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Icons that move.
        </div>
        <div
          style={{
            fontSize: "88px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#71717a",
          }}
        >
          Interfaces that feel alive.
        </div>
        <div style={{ marginTop: "48px", fontSize: "30px", color: "#a1a1aa" }}>
          SVG + Framer Motion · Copy the TSX · MIT
        </div>
      </div>
    ),
    size
  );
}
