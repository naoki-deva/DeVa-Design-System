"use client";

import React from "react";
import { getBlurStyle, type BlurLevel } from "@/tokens/blur";

export interface OverlaySidebarProps extends React.HTMLAttributes<HTMLElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  blurLevel?: BlurLevel;
  children: React.ReactNode;
}

/** Floating frosted-glass navigation surface. Compose its contents freely. */
export function OverlaySidebar({
  open,
  onClose,
  title = "Navigation",
  blurLevel = 4,
  children,
  className = "",
  ...props
}: OverlaySidebarProps) {
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        aria-label="ナビゲーションを閉じる"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        aria-label={title}
        aria-hidden={!open}
        inert={!open}
        style={{
          ...getBlurStyle(blurLevel),
          transformOrigin: "left center",
        }}
        className={`fixed inset-y-4 left-4 z-[61] flex w-[min(20rem,calc(100vw-2rem))] flex-col overflow-y-auto rounded-[2rem] border border-white/20 bg-neutral-900/75 p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] origin-left transition-[transform,opacity] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${open ? "translate-x-0 scale-x-100 opacity-100" : "pointer-events-none -translate-x-[105%] scale-x-[0.94] opacity-0"} ${className}`}
        {...props}
      >
        <div className="mb-7 flex items-center justify-between px-2 pt-2">
          <span className="text-2xl font-medium tracking-tight">DeVa</span>
          <button type="button" onClick={onClose} aria-label="閉じる" className="rounded-full p-2 text-white/65 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
        {children}
      </aside>
    </>
  );
}

export interface OverlaySidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children: React.ReactNode;
}

export function OverlaySidebarItem({ selected = false, children, className = "", ...props }: OverlaySidebarItemProps) {
  return (
    <button
      type="button"
      aria-current={selected ? "page" : undefined}
      className={`w-full rounded-full px-4 py-2.5 text-left text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300 ${selected ? "bg-white/35 text-white" : "text-white/90 hover:bg-white/15"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface OverlaySidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

export function OverlaySidebarGroup({ children, className = "", label, collapsible = false, defaultOpen = true, ...props }: OverlaySidebarGroupProps) {
  if (collapsible && label) {
    return (
      <details className={`group ${className}`} open={defaultOpen}>
        <summary className="cursor-pointer list-none rounded-xl px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300">
          <span className="flex items-center justify-between">{label}<span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span></span>
        </summary>
        <nav className="mt-1 flex flex-col gap-1" {...props}>{children}</nav>
      </details>
    );
  }
  return <nav className={`flex flex-col gap-1 ${className}`} aria-label={label} {...props}>{children}</nav>;
}
