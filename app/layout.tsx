import type { Metadata } from "next";
import { Noto_Sans_Thai, IBM_Plex_Sans_Thai } from "next/font/google";
import { BRAND } from "@/lib/site";
import "./globals.css";

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.nameTh} | ${BRAND.tagline}`,
  description:
    "บริการขนย้ายบ้าน คอนโด สำนักงาน ขนส่งสินค้าเหมาคัน และขนย้ายสัตว์เลี้ยง ทีมงานมืออาชีพ ประกันความเสียหาย ราคาชัดเจน ให้บริการทั่วประเทศ",
  keywords: [
    "ขนย้ายบ้าน",
    "ขนย้ายคอนโด",
    "ขนย้ายสำนักงาน",
    "รถ 6 ล้อ",
    "ขนส่งเหมาคัน",
    "ขนย้ายสัตว์เลี้ยง",
  ],
  openGraph: {
    title: `${BRAND.nameTh} | ${BRAND.tagline}`,
    description:
      "บริการขนย้ายครบวงจร ทีมงานมืออาชีพ ประกันความเสียหาย ราคาชัดเจน ทั่วประเทศ",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${notoThai.variable} ${plexThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
