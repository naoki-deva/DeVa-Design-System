/**
 * DeVa Design System - Blur Tokens
 */
export const blurTokens = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px", // 仕様：強度4の background blur (標準)
  5: "24px",
  6: "32px",
} as const;

export type BlurLevel = keyof typeof blurTokens;
