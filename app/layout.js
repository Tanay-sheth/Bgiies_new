// src/app/layout.js
import { Inter } from "next/font/google";
import { Providers } from "./providers"; 
import Footer from "@/components/Footer"; 
import Navbar from "@/components/Navbar"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BGIIES",
  description: "Project Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Navbar/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}