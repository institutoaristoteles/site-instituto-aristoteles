import Script from "next/script"
import React from "react"

export const Analytics = () => (
  <React.Fragment>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-Y25S0EWKPS"
      strategy="afterInteractive"
    ></Script>

    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.GA_MEASUREMENT_ID}');`}
    </Script>
  </React.Fragment>
)
