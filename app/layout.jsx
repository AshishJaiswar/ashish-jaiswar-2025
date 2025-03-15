import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ashishjaiswar.in"),
  title: "Ashish Jaiswar - web developer portfolio",
  description:
    "Web portfolio by Ashish Jaiswar showcasing career highlights, projects, and skills.",
  keywords: [
    "Ashish Ramesh Jaiswar",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "Python developer",
    "Automation developer",
    "web developer",
    "Portfolio",
    "RJ college",
    "Mumbai",
  ],
  creator: "Ashish Jaiswar",
  author: "Ashish Jaiswar",
  copyright: "Ashish Jaiswar",
  year: "2025",

  openGraph: {
    title: "Ashish Jaiswar - web developer portfolio",
    description:
      "Web portfolio by Ashish Jaiswar showcasing career highlights, projects, and skills.",
    url: "https://ashishjaiswar.in",
    siteName: "Ashish Jaiswar portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/seo_image.jpg",
        width: 800,
        height: 600,
        alt: "Ashish Jaiswar's Portfolio Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased text-gray-800`}>
        <NavBar />
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.GAID} />
    </html>
  );
}
