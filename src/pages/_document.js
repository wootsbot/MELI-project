import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <meta name="application-name" content="Mercado Libre" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Mercado Libre" />
          <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#ffe600" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ffe600" />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.png" color="#3483fa" />
          <link rel="shortcut icon" href="/static/icons/favicon.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://www.mercadolibre.com.mx/" />
          <meta name="twitter:title" content="Mercado Libre" />
          <meta
            name="twitter:description"
            content="La comunidad de compra y venta online más grande de América Latina."
          />
          <meta name="twitter:image" content="/static/icons/favicon-32x32.png" />
          {/* <meta name="twitter:creator" content="@wootsbot" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mercado Libre" />
          <meta
            property="og:description"
            content="La comunidad de compra y venta online más grande de América Latina."
          />
          <meta property="og:site_name" content="Mercado Libre" />
          <meta property="og:url" content="https://www.mercadolibre.com.mx/" />
          <meta property="og:image" content="/static/icons/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
