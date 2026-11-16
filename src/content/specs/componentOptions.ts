import type { ColorPresetKey } from "@/tokens/colors";

export const standardButtonBgOptions = [
  {
    id: "scenic-dusk",
    name: "風景グラデーション (すりガラス確認用)",
    type: "gradient",
    style: "linear-gradient(180deg, #1e293b 0%, #334155 35%, #475569 60%, #fdba74 90%, #f97316 100%)",
    autoBorder: false,
  },
  {
    id: "pure-white",
    name: "白・単調な背景 (枠表示の推奨)",
    type: "solid",
    style: "#ffffff",
    autoBorder: true,
  },
  {
    id: "soft-gray",
    name: "ライトグレー単色背景",
    type: "solid",
    style: "#f4f4f5",
    autoBorder: true,
  },
  {
    id: "pure-black",
    name: "ダークプレーン背景",
    type: "solid",
    style: "#09090b",
    autoBorder: true,
  },
  {
    id: "aurora",
    name: "Deep Aurora",
    type: "gradient",
    style: "linear-gradient(135deg, #09090b 0%, #2e1065 50%, #4c1d95 100%)",
    autoBorder: false,
  },
];

// Gradient Button用の背景オプション
export const gradientButtonBgOptions = [
  {
    id: "gradient-dusk",
    name: "Tokyo Twilight & Dusk",
    type: "gradient",
    style: "linear-gradient(180deg, #1e293b 0%, #334155 35%, #475569 60%, #fdba74 90%, #f97316 100%)",
    suggestedVariant: "sky" as ColorPresetKey,
  },
  {
    id: "gradient-sunset",
    name: "Sunset Twilight",
    type: "gradient",
    style: "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #e11d48 70%, #fb923c 100%)",
    suggestedVariant: "sunset" as ColorPresetKey,
  },
  {
    id: "gradient-cyber",
    name: "Cyber Neon",
    type: "gradient",
    style: "linear-gradient(135deg, #020617 0%, #064e3b 40%, #059669 70%, #10b981 100%)",
    suggestedVariant: "emerald" as ColorPresetKey,
  },
  {
    id: "urban-lights",
    name: "Urban Night Grid",
    type: "grid",
    style: "radial-gradient(#ffffff20 1px, transparent 1px)",
    suggestedVariant: "indigo" as ColorPresetKey,
  },
];

// Menu用の背景オプション
export const menuBgOptions = [
  {
    id: "sunset-dusk",
    name: "Tokyo Twilight (黄昏・夜景風景)",
    type: "gradient",
    style: "linear-gradient(180deg, #1e293b 0%, #334155 35%, #475569 60%, #fdba74 90%, #f97316 100%)",
  },
  {
    id: "vibrant-sunset",
    name: "Sunset Twilight (夕焼け)",
    type: "gradient",
    style: "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #e11d48 70%, #fb923c 100%)",
  },
  {
    id: "deep-ocean",
    name: "Deep Ocean (濃紺)",
    type: "gradient",
    style: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
  },
  {
    id: "daylight-sky",
    name: "Daylight Sky (明るい昼空)",
    type: "gradient",
    style: "linear-gradient(180deg, #bae6fd 0%, #e0f2fe 60%, #ffffff 100%)",
  },
];

