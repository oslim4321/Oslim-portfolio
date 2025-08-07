import MyContextProvider from "@/lib/Context";
import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TransitionEffect from "../components/TransitionEffect";
import "./globals.css";

import Global from "../components/Global";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Sooto Selim - Full Stack Developer & Web Designer",
    template: "%s | Sooto Selim Portfolio",
  },
  description:
    "Professional Full Stack Developer & Web Designer with 4+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies. Based in Ibadan, Nigeria.",
  keywords: [
    "Sooto Selim",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Nigeria Developer",
    "Ibadan Developer",
    "Portfolio",
    "Web Development Services",
  ],
  authors: [{ name: "Sooto Selim", email: "adewaleselim6@gmail.com" }],
  creator: "Sooto Selim",
  publisher: "Sooto Selim",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://oslim-portfolio.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Sooto Selim - Full Stack Developer & Web Designer",
    description:
      "Professional Full Stack Developer & Web Designer with 4+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Sooto Selim Portfolio",
    images: [
      {
        url: "/images/MyLogo.png",
        width: 1200,
        height: 630,
        alt: "Sooto Selim - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sooto Selim - Full Stack Developer & Web Designer",
    description:
      "Professional Full Stack Developer & Web Designer with 4+ years of experience.",
    creator: "@sooto_selim",
    images: ["/images/MyLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sooto Selim",
    jobTitle: "Full Stack Developer",
    description:
      "Professional Full Stack Developer & Web Designer with 4+ years of experience",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "https://oslim-portfolio.vercel.app",
    email: "adewaleselim6@gmail.com",
    telephone: "+2347087121696",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 39 Ifeosefowora Adegbayi",
      addressLocality: "Ibadan",
      addressCountry: "Nigeria",
    },
    sameAs: [
      "https://github.com/oslim4321",
      "https://linkedin.com/in/sooto-selim",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
        {/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
      </body>
    </html>
  );
}
