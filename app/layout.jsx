import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashish Jaiswar - web developer",
  description:
    "Web portfolio by Ashish Jaiswar showcasing career highlights, projects, and skills.",
  keywords: [
    "Ashish",
    "Jaiswar",
    "React",
    "Next.js",
    "JavaScript",
    "Python",
    "web",
    "developer",
    "Portfolio",
  ],
  creator: "Ashish Jaiswar",
  author: "Ashish Jaiswar",
  copyright: "Ashish Jaiswar",
  year: "2025",

  openGraph: {
    title: "Ashish Jaiswar - web developer",
    description:
      "Web portfolio by Ashish Jaiswar showcasing career highlights, projects, and skills.",
    url: "https://ashishjaiswar.in/",
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
    </html>
  );
}
