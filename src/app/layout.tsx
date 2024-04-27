import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "./components/Header";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()

  const settings = await client.getSingle('app_settings')

 
  return {
    title: settings.data.site_title || 'Empty Title',
    description: settings.data.meta_description || 'Add a Description',
    openGraph: {
      images: [settings.data?.og_image.url || "../../public/OG_Image.jpg"],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header/>
        <div className="relative">
          <div className="menuslidebackground  absolute z-10 bg-[#47443F] opacity-[98%] hidden h-full w-full">

          </div>
          {children} 
        </div>
       
        <Footer/>
       
        </body>
    </html>
  );
}
