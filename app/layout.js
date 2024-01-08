import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

import { ToastContainer } from "react-toastify";
import { ThemeContextProvider } from "@/components/providers";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
    default: `Instagram Video Downloader | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
  },
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  authors: { name: process.env.NEXT_PUBLIC_APP_AUTHOR },
  icons: {
    icon: "/favicon.ico",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="id">
      <body>
        <ThemeContextProvider>
          <div className="flex flex-col min-h-screen">
            <div className="bg-gradient-to-r from-[#0348dd] via-[#8142f5] to-[#ee4dd4]">
              <Header />
              <Hero />
            </div>
            <main className="container relative flex-grow h-full mx-auto mt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
