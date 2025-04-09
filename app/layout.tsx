import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/organism/mainHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Risloo | ریسلو",
  description:
    "سرویس آنلاین و یکپاچه مدیریت مراکز روان‌شناسی و کلینیک‌های شخصی، حساب‌داری، نوبت‌دهی، دریافت و نمردهی آزمون‌ها",
  robots: "index,follow",
  authors: [{name:"mostafa hossein", url: "https://mostafafront.vercel.app"}],
  openGraph: {
    title: "Risloo | ریسلو",
    description:
      "سرویس آنلاین و یکپارچه مدیریت مراکز روان‌شناسی و کلینیک‌های شخصی، حساب‌داری، نوبت‌دهی، دریافت و نمردهی آزمون‌ها",
    url: "https://www.risloo.com",
    siteName: "Risloo",
    images: [
      {
        url: "/images/screen.JPG",
        width: 800,
        height: 600,
        alt: "Risloo Logo",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risloo | ریسلو",
    description:
      "سرویس آنلاین و یکپارچه مدیریت مراکز روان‌شناسی و کلینیک‌های شخصی، حساب‌داری، نوبت‌دهی، دریافت و نمردهی آزمون‌ها",
    images: [
      {
        url: "/images/screen.JPG",
        alt: "Risloo Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-bgBlue`}
        cz-shortcut-listen="true"
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
