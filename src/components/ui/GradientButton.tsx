"use client";

import React from "react";
import { getBlurStyle, type BlurLevel } from "@/tokens/blur";
import { colorPresets, ColorPresetKey } from "@/tokens/colors";
import { buttonBaseStyles, buttonSizes, type ButtonSize } from "./buttonStyles";

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * プリセットカラー ('sky' | 'indigo' | 'sunset' | 'emerald' | 'rose' | 'purple' | 'monochrome')
   * 画像仕様の標準は 'sky'
   */
  variant?: ColorPresetKey;
  /**
   * 背景画像や強調したい色に合わせたカスタムRGB値 (例: "115, 175, 255")
   */
  customRgb?: string;
  /**
   * カスタムテキストカラー
   */
  textColor?: string;
  /**
   * 背景ブラーの強度 (1〜6)。仕様標準は強度4 (16px)
   */
  blurLevel?: BlurLevel;
  /**
   * ボタンサイズ
   */
  size?: ButtonSize;
  /**
   * 中心部の透明度 (0〜1)。デフォルトは 0.08
   */
  centerOpacity?: number;
  /**
   * 外縁部の透明度 (0〜1)。デフォルトは 0.75
   */
  edgeOpacity?: number;
}

export const GradientButton = React.forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      children,
      variant = "sky",
      customRgb,
      textColor,
      blurLevel = 4,
      size = "md",
      centerOpacity = 0.08,
      edgeOpacity = 0.75,
      className = "",
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const preset = colorPresets[variant] ?? colorPresets.sky;
    const rgb = customRgb || preset.rgb;
    const finalTextColor = textColor || preset.text;

    // 中心へ向かって色の濃度が下がる放射グラデーション
    const backgroundGradient = `radial-gradient(ellipse 110% 110% at 50% 50%, rgba(${rgb}, ${centerOpacity}) 0%, rgba(${rgb}, ${
      (centerOpacity + edgeOpacity) / 2
    }) 65%, rgba(${rgb}, ${edgeOpacity}) 100%)`;

    return (
      <button
        ref={ref}
        disabled={disabled}
        style={{
          ...getBlurStyle(blurLevel),
          background: backgroundGradient,
          color: finalTextColor,
          ...style,
        }}
        className={`
          ${buttonBaseStyles}
          border border-white/20
          shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]
          hover:shadow-[0_12px_40px_0_rgba(${rgb},0.35)]
          hover:scale-[1.03] active:scale-[0.98]
          hover:scale-[1.03] active:scale-[0.98]
          ${buttonSizes[size]}
          ${className}
        `}
        {...props}
      >
        {/* ボタン内側の光沢ハイライト */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full border border-white/30 [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]"
          aria-hidden="true"
        />
        <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
          {children}
        </span>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";
