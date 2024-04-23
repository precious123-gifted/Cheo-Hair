import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";


const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()

  const page = await client.getSingle('app_settings')

 
  return {
    title: page.data.site_title || 'Empty Title',
    description: page.data.meta_description || 'Add a Description',
    openGraph: {
      images: [page.data?.og_image.url || "../../public/OG_Image.jpg"],
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
        
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
        </body>
    </html>
  );
}
