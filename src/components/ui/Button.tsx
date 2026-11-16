"use client";

import React from "react";
import { getBlurStyle, type BlurLevel } from "@/tokens/blur";
import { buttonBaseStyles, buttonSizes, type ButtonSize } from "./buttonStyles";

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
  size?: ButtonSize;
  /**
   * テキストカラーの上書き
   */
  textColor?: string;
}

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
    const isBordered = bordered || variant === "bordered";

    return (
      <button
        ref={ref}
        disabled={disabled}
        style={{
          ...getBlurStyle(blurLevel),
          ...(textColor ? { color: textColor } : {}),
          ...style,
        }}
        className={`
          ${buttonBaseStyles}
          hover:scale-[1.02] active:scale-[0.98]
          ${buttonSizes[size]}
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
