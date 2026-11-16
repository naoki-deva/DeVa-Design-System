export const buttonSizes = {
  sm: "px-6 py-2 text-sm tracking-wider font-semibold",
  md: "px-10 py-4 text-lg tracking-wider font-semibold",
  lg: "px-14 py-5 text-2xl tracking-widest font-bold",
} as const;

export type ButtonSize = keyof typeof buttonSizes;

export const buttonBaseStyles = `
  relative inline-flex items-center justify-center rounded-full select-none
  transition-all duration-300 ease-out
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  disabled:opacity-50 disabled:pointer-events-none disabled:transform-none
`;
