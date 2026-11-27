import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rubyfranco.dev"),
  title: "Ruby Franco | Software Engineer",
  description:
    "Ruby Franco is a software engineer in Los Angeles building web and mobile apps with TypeScript, React, React Native, Python, and SQL. See her projects, experience, and resume.",
  openGraph: {
    title: "Ruby Franco | Software Engineer",
    description:
      "Software Engineer in Los Angeles: TypeScript, React/React Native, Python/Flask, SQL.",
    url: "https://rubyfranco.dev",
    siteName: "Ruby Franco",
    type: "website",
  },
  verification: {
    google: "J9EVF4sJqnqUMC-d5rCTwyPDKngFuRXwAVlyArY2LDY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
