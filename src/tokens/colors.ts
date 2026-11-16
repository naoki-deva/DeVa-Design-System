/**
 * DeVa Design System - Color Tokens
 */
export const colorPresets = {
  // 画像の東京風景と調和した標準のスカイブルー
  sky: {
    label: "Sky Blue (Standard)",
    rgb: "115, 175, 255", // #73afff
    text: "#000000",
  },
  indigo: {
    label: "Neon Indigo",
    rgb: "129, 140, 248", // #818cf8
    text: "#000000",
  },
  sunset: {
    label: "Sunset Orange",
    rgb: "251, 146, 60", // #fb923c
    text: "#000000",
  },
  emerald: {
    label: "Cyber Emerald",
    rgb: "52, 211, 153", // #34d399
    text: "#000000",
  },
  rose: {
    label: "Electric Rose",
    rgb: "251, 113, 133", // #fb7185
    text: "#000000",
  },
  purple: {
    label: "Deep Violet",
    rgb: "192, 132, 252", // #c084fc
    text: "#000000",
  },
  monochrome: {
    label: "Monochrome Glass",
    rgb: "255, 255, 255",
    text: "#000000",
  },
} as const;

export type ColorPresetKey = keyof typeof colorPresets;
