import { Html, Head, Main, NextScript } from 'next/document'

export default function Document()
{
  return (
          <Html>
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
              <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bebas+Neue&family=Great+Vibes&family=Montserrat:wght@500&family=Open+Sans:wght@500&family=Oswald:wght@600&family=Playfair+Display:ital,wght@1,600&family=Poppins&family=Raleway:ital,wght@0,600;1,500&family=Roboto:ital@1&family=Sacramento&family=Source+Sans+Pro:ital,wght@0,600;1,600&display=swap" rel="stylesheet"/>
              <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
              <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
}
