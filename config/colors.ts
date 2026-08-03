/**
 * -----------------------------------------------------------------------------
 * Portfolio Design System
 * Colors
 * -----------------------------------------------------------------------------
 * Single source of truth for every color used throughout the application.
 * Never hardcode colors inside components.
 * -----------------------------------------------------------------------------
 */

export const COLORS = {
  background: {
    primary: "#050816",
    secondary: "#0B1120",
    tertiary: "#111827",
  },

  surface: {
    primary: "#111827",
    secondary: "#1E293B",
    glass: "rgba(255,255,255,0.04)",
  },

  text: {
    primary: "#F8FAFC",
    secondary: "#CBD5E1",
    muted: "#94A3B8",
    disabled: "#64748B",
  },

  accent: {
    primary: "#3B82F6",
    light: "#60A5FA",
    dark: "#1D4ED8",
    glow: "#93C5FD",
  },

  border: {
    light: "rgba(255,255,255,0.08)",
    strong: "rgba(255,255,255,0.14)",
  },

  status: {
    success: "#22C55E",
    warning: "#FACC15",
    danger: "#EF4444",
  },
} as const;