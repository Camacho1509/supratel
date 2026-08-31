import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LanguageProvider } from "@/i18n/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "SUPRATEL",
    template: "SUPRATEL | %s",
  },
  description: "SUPRATEL Product Catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
