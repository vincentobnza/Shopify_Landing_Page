import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const Space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Shopify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Space.className}>{children}</body>
    </html>
  );
}
