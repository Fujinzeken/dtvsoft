import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DTV Soft — Advanced Load Management Software",
  description:
    "Simplify Operations, Improve Accuracy, and Optimize Profits with Our All-in-One Solution for Carrier Companies.",
  openGraph: {
    title: "DTV Soft — Advanced Load Management Software",
    description:
      "Simplify Operations, Improve Accuracy, and Optimize Profits with Our All-in-One Solution for Carrier Companies.",
    url: "https://dtvsoft.com",
    siteName: "DTV Soft",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
