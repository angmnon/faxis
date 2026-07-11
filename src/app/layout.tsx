import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/components/layout/scroll-reveal";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.COZE_PROJECT_DOMAIN_DEFAULT || "faxis.ai"}`),
  title: {
    default: "FAXIS.AI | The World's First AI-Powered Lights-Out Factory Network",
    template: "%s | FAXIS.AI",
  },
  description:
    "FAXIS.AI delivers fully unmanned AI factories for 3D printing, CNC machining, sheet metal, and injection molding. 7×24 lights-out production powered by end-to-end AI — quoting, scheduling, CAM, execution and QC.",
  keywords: [
    "FAXIS.AI",
    "Lights-out factory",
    "Unmanned factory",
    "AI manufacturing",
    "Smart factory",
    "3D printing factory",
    "CNC automation",
    "Injection molding AI",
    "Sheet metal automation",
    "Industry 4.0",
    "Dark factory",
    "AI CAM",
    "Autonomous manufacturing",
    "Global partner network",
  ],
  authors: [{ name: "FAXIS.AI", url: "https://faxis.ai" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "FAXIS.AI | The World's First AI-Powered Lights-Out Factory Network",
    description:
      "End-to-end unmanned AI factories covering 3D printing, CNC, sheet metal, and injection molding. Join our global partner network.",
    siteName: "FAXIS.AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAXIS.AI | AI-Powered Lights-Out Factories",
    description:
      "Redefining global manufacturing with fully unmanned AI-driven production.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#05070A] text-[#E6ECF5] antialiased font-sans">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
