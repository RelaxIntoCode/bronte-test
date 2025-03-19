import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Bronte's Small Paws",
  description: "Dog Grooming in the Northern Beaches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: "75px" }}>{children}</main>
      </body>
    </html>
  );
}
