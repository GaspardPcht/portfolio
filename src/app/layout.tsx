import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GASPARDPCHT",
  description: "Portfolio GASPARDPCHT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/memoji/withmac.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
