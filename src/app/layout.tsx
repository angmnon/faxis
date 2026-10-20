import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/layout/scroll-reveal";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.COZE_PROJECT_DOMAIN_DEFAULT || "faxis.ai"}`),
  title: {
    default: "FAXIS.AI | Local Manufacturing for Global Brands",
    template: "%s | FAXIS.AI",
  },
  description:
    "FAXIS.AI helps global brands and retailers build and operate AI-enabled manufacturing capacity closer to their customers—connecting product engineering, local production, quality, and supply-chain operations.",
  keywords: [
    "FAXIS.AI",
    "Local manufacturing",
    "Local manufacturing for global brands",
    "Product localization",
    "SKU localization",
    "Total landed cost",
    "Supply-chain resilience",
    "AI-enabled manufacturing operations",
    "Regional manufacturing network",
    "Factory transformation",
    "Contract manufacturing",
    "Reserved capacity",
  ],
  authors: [{ name: "FAXIS.AI", url: "https://faxis.ai" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/assets/logo-mark.png", type: "image/png" }],
    shortcut: [{ url: "/assets/logo-mark.png" }],
  },
  openGraph: {
    title: "FAXIS.AI | Local Manufacturing for Global Brands",
    description:
      "We help global brands and retailers design, deploy, and operate manufacturing capacity in the markets they serve—powered by AI, automation, and a connected network.",
    siteName: "FAXIS.AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAXIS.AI | Local Manufacturing for Global Brands",
    description: "Manufacturing, closer to every market. Local production. Global coordination. AI-powered operations.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0a0a0a] text-[#fafafa] antialiased font-sans">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
