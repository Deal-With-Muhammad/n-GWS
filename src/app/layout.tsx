"use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navigation } from "../components/Navigation";
const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
