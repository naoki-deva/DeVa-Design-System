"use client";

import React from "react";
import { blurTokens, BlurLevel } from "@/tokens/blur";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * ボタンスタイル
   * - 'glass': すりガラス素材（写真やグラデーションなど複雑な背景向け）
   * - 'bordered': 枠線を表示（白など単調な背景向け）
   */
  variant?: "glass" | "bordered";
  /**
   * 枠線の強制表示フラグ（白など単調な背景で輪郭を保持する仕様）
   */
  bordered?: boolean;
  /**
   * 背景ブラーの強度 (1〜6)。仕様標準は強度4 (16px)
   */
  blurLevel?: BlurLevel;
  /**
   * ボタンサイズ
   */
  size?: "sm" | "md" | "lg";
  /**
   * テキストカラーの上書き
   */
  textColor?: string;
}

const sizeStyles = {
  sm: "px-6 py-2 text-sm tracking-wider font-semibold",
  md: "px-10 py-4 text-lg tracking-wider font-semibold",
  lg: "px-14 py-5 text-2xl tracking-widest font-bold",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "glass",
      bordered = false,
      blurLevel = 4,
      size = "md",
      textColor,
      className = "",
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const blurValue = blurTokens[blurLevel] ?? blurTokens[4];
    const isBordered = bordered || variant === "bordered";

    return (
      <button
        ref={ref}
        disabled={disabled}
        style={{
          backdropFilter: `blur(${blurValue})`,
          WebkitBackdropFilter: `blur(${blurValue})`,
          ...(textColor ? { color: textColor } : {}),
          ...style,
        }}
        className={`
          relative inline-flex items-center justify-center
          rounded-full select-none
          transition-all duration-300 ease-out
          hover:scale-[1.02] active:scale-[0.98]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none disabled:transform-none
          ${sizeStyles[size]}
          ${
            isBordered
              ? /* 白など単調な背景用の枠線表示スタイル */
                "border-2 border-neutral-900 bg-white/40 text-neutral-900 shadow-sm hover:bg-white/60 dark:border-neutral-100 dark:bg-black/30 dark:text-neutral-100 dark:hover:bg-black/50"
              : /* 写真・リッチ背景用のすりガラス素材スタイル */
                "border border-white/25 bg-white/20 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] hover:bg-white/30 hover:border-white/40"
          }
          ${className}
        `}
        {...props}
      >
        {/* すりガラスの上部光沢ハイライト (非Bordered時) */}
        {!isBordered && (
          <span
            className="pointer-events-none absolute inset-0 rounded-full border border-white/40 [mask-image:linear-gradient(to_bottom,black_0%,transparent_70%)]"
            aria-hidden="true"
          />
        )}
        <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
