import { COLORS } from "./colors";
import { MOTION } from "./motion";
import { SPACING } from "./spacing";
import { TYPOGRAPHY } from "./typography";

/**
 * -----------------------------------------------------------------------------
 * Global Theme
 * -----------------------------------------------------------------------------
 * Central design system export.
 * -----------------------------------------------------------------------------
 */

export const THEME = {
  colors: COLORS,
  motion: MOTION,
  spacing: SPACING,
  typography: TYPOGRAPHY,
} as const;

export type Theme = typeof THEME;