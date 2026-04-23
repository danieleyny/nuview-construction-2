import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "NuView Constructions — Philadelphia's most trusted builders";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0A0A0B 0%, #141416 100%)",
          color: "#F3EFE7",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", color: "#8A8680" }}>
          <span>NuView Constructions</span>
          <span>Est. 2015 · Philadelphia</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -3 }}>Philadelphia's most</div>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -3 }}>
            <span style={{ fontStyle: "italic", color: "#C8732B" }}>trusted</span> builders.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", color: "#8A8680" }}>
          <span>nuviewconstructions.com</span>
          <span>(267) 203-4880</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
