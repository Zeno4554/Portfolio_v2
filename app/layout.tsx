import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE } from "@/config/site";
import { AppProviders } from "@/providers";
import { Header } from "@/components/layout/Header";
import { SceneTracker } from "@/components/layout/SceneTracker";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { IntroLoader } from "@/components/loading/IntroLoader";
import "./globals.css";

// Body face: neutral, highly legible at small sizes for stat/data readouts.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Display face: geometric grotesk for the hero/section headlines — carries
// the "futuristic interface" personality the brief calls for.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} — ${SITE.role}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    url: SITE.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <AppProviders>

    <IntroLoader />

    

    <CustomCursor />

    <Header />

    <SceneTracker />

    <main>{children}</main>

</AppProviders>
      </body>
    </html>
  );
}
