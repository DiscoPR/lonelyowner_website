import { ImageResponse } from "next/og";

export const alt = "Every missed call is a job your competitor just booked.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#110f0c",
          color: "#f6f1e7",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 1,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              background: "#c67b3a",
              color: "#110f0c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            LO
          </div>
          Lonely Owner
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 54,
              lineHeight: 1.15,
              maxWidth: 980,
              fontWeight: 600,
            }}
          >
            Every missed call is a job your competitor just booked.
          </div>
          <div style={{ fontSize: 28, color: "#c67b3a" }}>
            Live in 48 hours, or you don&apos;t pay.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
