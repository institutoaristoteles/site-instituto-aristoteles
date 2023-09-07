import "./globals.css"
import "react-loading-skeleton/dist/skeleton.css"
import localFont from "next/font/local"
import { PropsWithChildren } from "react"
import Header from "@/shared/components/header"
import Footer from "@/shared/components/footer"
import { Toaster } from "react-hot-toast"
import Script from "next/script"

const montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/montserrat/Montserrat-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
})

export const metadata = {
  title: "Instituto Aristóteles",
  description:
    "Instituição sem fins lucrativos que, através de campanhas, eventos e workshops, busca oferecer apoio gratuito a jovens brasileiros na área de saúde mental",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>

      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Y25S0EWKPS"
        strategy="beforeInteractive"
      ></Script>

      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script id="google-analytics" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y25S0EWKPS');`}
      </Script>
    </html>
  )
}
