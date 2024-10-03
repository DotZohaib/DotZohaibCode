import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";



export const metadata: Metadata = {
  title: "Zohaib Ali - Full Stack Developer | AI Enthusiast",
  description: "Zohaib Ali is a Full Stack Developer with expertise in MERN stack, AI, Machine Learning, and web technologies. Pursuing IT studies and working as a freelance developer, Zohaib has experience in creating dynamic and secure web applications. Visit my portfolio to explore projects in AI, web development, and more.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
