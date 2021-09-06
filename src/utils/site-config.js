const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mercado Libre. All Rights Reserved.`,
  author: {
    name: 'JLCA',
    github: 'https://github.com/wootsbot',
    twitter: 'https://twitter.com/wootsbot',
    email: 'jorgelca1205@gmail.com',
  },
  seo: {
    title: 'Mercado Libre',
    titleTemplate: '%s - Mercado Libre',
    description: 'La comunidad de compra y venta online más grande de América Latina.',
    siteUrl: 'https://www.mercadolibre.com.mx/',
    twitter: {
      handle: '@Mercado Libre',
      site: '@Mercado Libre',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'es-MX',
      url: 'https://www.mercadolibre.com.mx/',
      title: 'Mercado Libre',
      description: 'La comunidad de compra y venta online más grande de América Latina.',
      site_name: 'Mercado Libre: La comunidad de compra y venta online más grande de América Latina.',
      images: [
        {
          url: 'https://www.mercadolibre.com.mx/og-image.png',
          width: 1240,
          height: 480,
          alt: 'Mercado Libre: La comunidad de compra y venta online más grande de América Latina.',
        },
        {
          url: 'https://www.mercadolibre.com.mx/twitter-og-image.png',
          width: 1012,
          height: 506,
          alt: 'Mercado Libre: La comunidad de compra y venta online más grande de América Latina.',
        },
      ],
    },
  },
};

export default siteConfig;
