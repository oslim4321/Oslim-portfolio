import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oslim | About Me",
  description:
    "I am Sooto selim Olalekan a full stack and Mern stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>this is only for about page</nav>
        {children}
      </body>
    </html>
  );
}
