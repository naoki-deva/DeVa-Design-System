export const navigationItems = [
  { key: "home", label: "Home" },
  { key: "menu", label: "Menu" },
  { key: "standard", label: "Button (通常)" },
  { key: "gradient", label: "Gradient Button" },
  { key: "sidebar", label: "Overlay Sidebar" },
] as const;

export type SectionKey = (typeof navigationItems)[number]["key"];
