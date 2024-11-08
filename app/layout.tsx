import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans} from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";

const font = DM_Sans({subsets:['latin']})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "fécond",
  description: "Evolution Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${font.className} antialiased`}
      >
         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
