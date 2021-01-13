import Head from 'next/head';

const Meta = () => (
  <Head>
    <title>Personal Website | Ian René Solano-Kamaiko</title>
    <meta
      name="description"
      content="Ian René Solano-Kamaiko is a graduate student in Computer Science at the NYU Tandon School of Engineering."
    />
    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content="Personal Website | Ian René Solano-Kamaiko"
    />
    <meta
      name="og:description"
      property="og:description"
      content="Ian René Solano-Kamaiko is a graduate student in Computer Science at the NYU Tandon School of Engineering."
    />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:title"
      content="Personal Website | Ian René Solano-Kamaiko"
    />
    <meta
      name="twitter:description"
      content="Ian René Solano-Kamaiko is a graduate student in Computer Science at the NYU Tandon School of Engineering."
    />
    <meta name="twitter:creator" content="@ianrsolano" />
    <meta property="og:image" content="/og-image.png" />
    <meta name="twitter:image" content="/og-image.png" />
    <link rel="canonical" href="https://iansolano.com/" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
);

export default Meta;
