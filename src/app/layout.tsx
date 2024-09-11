import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
<Link  href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></Link>

const poppins = Poppins({ subsets: ["latin"], weight : '400' });

export const metadata: Metadata = {
  title: "Joseph Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        {children}
        
        </body>
    </html>
  );
}