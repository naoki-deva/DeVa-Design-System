"use client";

import React from "react";
import { getBlurStyle, type BlurLevel } from "@/tokens/blur";

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * モード設定:
   * - 'dark': 黒ベースのすりガラス
   * - 'light': 白ベースのすりガラス
   * - 'auto': システム/親要素のカラースキームに連動 (ダークモードでは黒、ライトモードでは白)
   */
  mode?: "dark" | "light" | "auto";
  /**
   * 背景ブラーの強度 (1〜6)。仕様標準は強度4 (16px)
   */
  blurLevel?: BlurLevel;
  children: React.ReactNode;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      mode = "auto",
      blurLevel = 4,
      children,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    // モードに応じたスタイリング
    const modeClass =
      mode === "dark"
        ? "bg-black/60 text-white border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        : mode === "light"
        ? "bg-white/70 text-neutral-900 border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
        : /* auto: ダークモードでは黒、ライトモードでは白 */
          "bg-white/70 text-neutral-900 border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:bg-black/60 dark:text-white dark:border-white/15 dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)]";

    return (
      <div
        ref={ref}
        style={{
          ...getBlurStyle(blurLevel),
          ...style,
        }}
        className={`
          relative rounded-2xl p-1.5 min-w-[220px]
          border transition-all duration-300
          ${modeClass}
          ${className}
        `}
        {...props}
      >
        {/* 上部エッジの繊細な光沢ハイライト */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20 [mask-image:linear-gradient(to_bottom,black_0%,transparent_50%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col">{children}</div>
      </div>
    );
  }
);
Menu.displayName = "Menu";

export interface MenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: React.ReactNode;
}

export const MenuGroup: React.FC<MenuGroupProps> = ({
  label,
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`py-0.5 ${className}`} {...props}>
      {label && (
        <div className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-neutral-400 dark:text-neutral-400">
          {label}
        </div>
      )}
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
};
MenuGroup.displayName = "MenuGroup";

export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
  shortcut?: string;
  danger?: boolean;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      icon,
      children,
      shortcut,
      danger = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`
          group relative flex items-center justify-between w-full
          px-3 py-1.5 rounded-xl text-left text-sm font-medium
          transition-all duration-150 select-none
          disabled:opacity-40 disabled:pointer-events-none
          hover:bg-white/20 active:scale-[0.99]
          dark:hover:bg-white/10
          ${
            danger
              ? "text-rose-500 hover:text-rose-400 hover:bg-rose-500/10"
              : ""
          }
          ${className}
        `}
        {...props}
      >
        <div className="flex items-center gap-2.5">
          {icon && (
            <span className="flex items-center justify-center text-sm opacity-80 group-hover:opacity-100 transition-opacity">
              {icon}
            </span>
          )}
          <span className="truncate">{children}</span>
        </div>

        {shortcut && (
          <span className="text-[11px] font-mono opacity-50 tracking-wider">
            {shortcut}
          </span>
        )}
      </button>
    );
  }
);
MenuItem.displayName = "MenuItem";

export interface MenuDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export const MenuDivider: React.FC<MenuDividerProps> = ({
  className = "",
  ...props
}) => {
  return (
    <hr
      className={`my-1 border-t border-black/10 dark:border-white/15 ${className}`}
      {...props}
    />
  );
};
MenuDivider.displayName = "MenuDivider";
