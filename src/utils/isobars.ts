/**
 * A synthetic surface-pressure chart: Gaussian highs and lows on top of a
 * mid-latitude background (pressure rising southwards), contoured every 4 hPa
 * like a synoptic chart. Shared by the home page hero and the OG image.
 */
import { contours } from "d3-contour";

// Grid resolution; the chart's coordinates use the same units.
export const W = 240;
export const H = 135;

type PressureSystem = {
  kind: "H" | "L";
  x: number; // centre, as a fraction of the width
  y: number; // centre, as a fraction of the height
  dp: number; // pressure anomaly at the centre, hPa
  sx: number; // spread along x, as a fraction of the width
  sy: number; // spread along y, as a fraction of the height
};

// The text sits on the left, so the interesting weather is in the east.
const SYSTEMS: PressureSystem[] = [
  { kind: "L", x: 0.8, y: 0.3, dp: -26, sx: 0.08, sy: 0.17 },
  { kind: "L", x: 0.93, y: 0.76, dp: -12, sx: 0.06, sy: 0.12 },
  { kind: "H", x: 0.64, y: 0.74, dp: 14, sx: 0.1, sy: 0.22 },
  { kind: "H", x: 0.98, y: 0.12, dp: 8, sx: 0.07, sy: 0.12 },
  { kind: "L", x: 0.36, y: 0.22, dp: -14, sx: 0.08, sy: 0.16 },
  { kind: "H", x: 0.12, y: 0.75, dp: 12, sx: 0.12, sy: 0.25 },
];

const pressure = (x: number, y: number) =>
  1012 +
  8 * (y - 0.5) + // lower pressure to the north
  1.5 * Math.sin(x * 11 + y * 4) + // a gentle wave so no contour is a perfect ellipse
  SYSTEMS.reduce(
    (p, s) =>
      p +
      s.dp *
        Math.exp(
          -((x - s.x) ** 2 / (2 * s.sx ** 2) + (y - s.y) ** 2 / (2 * s.sy ** 2))
        ),
    0
  );

const values = new Float64Array(W * H);
for (let j = 0; j < H; j++) {
  for (let i = 0; i < W; i++) {
    values[j * W + i] = pressure(i / (W - 1), j / (H - 1));
  }
}

const thresholds: number[] = [];
for (let p = 960; p <= 1040; p += 4) thresholds.push(p);

const round = (n: number) => Math.round(n * 100) / 100;

/** One SVG path per 4 hPa level; every 20 hPa is a major (thicker) line. */
export const isobars = contours()
  .size([W, H])
  .thresholds(thresholds)(Array.from(values))
  .filter(c => c.coordinates.length > 0)
  .map(c => ({
    major: c.value % 20 === 0,
    d: c.coordinates
      .flat()
      .map(
        ring =>
          "M" + ring.map(([x, y]) => `${round(x)},${round(y)}`).join("L") + "Z"
      )
      .join(""),
  }));

/** Each system in view, labelled with its central pressure as on a real chart. */
export const markers = SYSTEMS.filter(
  s => s.x > 0.03 && s.x < 0.97 && s.y > 0.05 && s.y < 0.95
).map(s => ({
  kind: s.kind,
  x: s.x * W,
  y: s.y * H,
  centre: Math.round(pressure(s.x, s.y)),
}));

/**
 * The viewBox is inset by one unit so the edge segments d3 adds to close rings
 * stay hidden.
 */
export const viewBox = { x: 1, y: 1, width: W - 2, height: H - 2 };
