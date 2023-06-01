import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import TransitionEffect from "../components/TransitionEffect";
import MyContextProvider from "@/lib/Context";

import Global from "../components/Global";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sooto Selim",
  description: "sooto selim portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-light dark:bg-dark">
          <Navbar />
          <Global />
        </nav>
        <TransitionEffect />
        <MyContextProvider>
          <div className="bg-light dark:bg-dark">{children}</div>
        </MyContextProvider>
        <Footer />
        <Script id="theme-switch" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
            `}
        </Script>
      </body>
    </html>
  );
}
