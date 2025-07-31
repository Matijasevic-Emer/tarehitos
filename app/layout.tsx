import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveSidebar from "@/components/ui/ResponsiveSidebar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "TareHitos!!",
  description: "Organiza tus tareas fácil",
  icons: {
    icon: "/assets/images/gato.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans antialiased"
      >
        <ResponsiveSidebar />
        <Toaster />
        <section className=" bg-[url('/assets/images/grid.png')]         /* Mobile */
        sm:bg-[url('/assets/images/grid.png')]         /* Desktop */
        bg-no-repeat bg-cover bg-center 
        sm:bg-cover md:bg-cover lg:bg-contain xl:bg-contain">
        {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
