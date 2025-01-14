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
        url: "https://drive.google.com/uc?id=1aoF020GwJhPQ13_XwCphu6YkaSmq_MSX",
        width: 800,
        height: 600,
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
