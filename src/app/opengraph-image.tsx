import { ImageResponse } from "next/og";

export const alt = "Lonely Owner. The after-hours call is a job.";
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
              fontSize: 64,
              lineHeight: 1.1,
              maxWidth: 980,
              fontWeight: 600,
            }}
          >
            The after-hours call is a job. Voicemail is how you lose it.
          </div>
          <div style={{ fontSize: 28, color: "#c67b3a" }}>
            AI Opportunity Audit for owner-operated trades
          </div>
        </div>
      </div>
    ),
    size,
  );
}
