import satori from "satori";
import { SITE } from "@/config";
import { isobars, markers, viewBox } from "../isobars";
import loadGoogleFonts from "../loadGoogleFont";

// Light theme colours from global.css
const SURFACE = "#f3f5f7";
const FOREGROUND = "#1a2229";
const SUBTLE = "#56626c";
const ACCENT = "#e8590c";
const ISOBAR = "#9aa8b3";

const WIDTH = 1200;
const HEIGHT = 630;

// Fit the chart like preserveAspectRatio="xMidYMid slice" does on the home page
const scale = Math.max(WIDTH / viewBox.width, HEIGHT / viewBox.height);
const offsetX = (WIDTH - viewBox.width * scale) / 2;
const offsetY = (HEIGHT - viewBox.height * scale) / 2;
const toPx = (x, y) => [
  offsetX + (x - viewBox.x) * scale,
  offsetY + (y - viewBox.y) * scale,
];

// Stroke widths are in chart units, so divide the pixel widths by the scale
const chartSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}" preserveAspectRatio="xMidYMid slice">${isobars
  .map(
    ({ major, d }) =>
      `<path d="${d}" fill="none" stroke="${ISOBAR}" stroke-width="${(major ? 3 : 1.75) / scale}" stroke-linejoin="round"/>`
  )
  .join("")}</svg>`;

// Satori draws text itself, so the H/L labels are positioned boxes over the chart
const LABEL_WIDTH = 120;
const label = ({ kind, x, y, centre }) => {
  const [left, top] = toPx(x, y);
  return {
    type: "div",
    props: {
      style: {
        position: "absolute",
        left: left - LABEL_WIDTH / 2,
        top: top - 30,
        width: LABEL_WIDTH,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: kind === "L" ? ACCENT : ISOBAR,
        lineHeight: 1,
      },
      children: [
        {
          type: "span",
          props: {
            style: {
              fontSize: 60,
              fontWeight: 700,
              padding: "0 8px",
              background: SURFACE,
            },
            children: kind,
          },
        },
        {
          type: "span",
          props: {
            style: {
              fontSize: 20,
              fontWeight: 500,
              marginTop: 4,
              padding: "0 6px",
              background: SURFACE,
            },
            children: String(centre),
          },
        },
      ],
    },
  };
};

const [firstName, ...lastNames] = SITE.author.split(" ");
const hostname = new URL(SITE.website).hostname;

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          background: SURFACE,
          fontFamily: "IBM Plex Mono",
          color: FOREGROUND,
        },
        children: [
          {
            type: "img",
            props: {
              src: `data:image/svg+xml;base64,${Buffer.from(chartSvg).toString("base64")}`,
              width: WIDTH,
              height: HEIGHT,
              style: { position: "absolute", left: 0, top: 0 },
            },
          },
          // Labels in the faded west would only ghost behind the name
          ...markers.filter(({ x }) => toPx(x, 0)[0] > WIDTH / 2).map(label),
          // The same fade as the hero: the chart gives way to the text in the west
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: WIDTH,
                height: HEIGHT,
                backgroundImage: `linear-gradient(to right, ${SURFACE} 30%, rgba(243, 245, 247, 0) 75%)`,
              },
            },
          },
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                width: WIDTH,
                height: HEIGHT,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "72px 80px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      fontSize: 104,
                      fontWeight: 500,
                      lineHeight: 0.95,
                      letterSpacing: "-0.04em",
                    },
                    children: [
                      { type: "span", props: { children: firstName } },
                      {
                        type: "span",
                        props: { children: lastNames.join(" ") },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      maxWidth: 620,
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: { fontSize: 30, lineHeight: 1.3 },
                          children: SITE.desc,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            marginTop: 28,
                            paddingLeft: 14,
                            borderLeft: `4px solid ${ACCENT}`,
                            fontSize: 26,
                            color: SUBTLE,
                          },
                          children: hostname,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      embedFont: true,
      fonts: await loadGoogleFonts(
        SITE.author + SITE.desc + hostname + "HL0123456789"
      ),
    }
  );
};
