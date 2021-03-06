export default {
  github: 'https://github.com/degenerocity/hotm-learn/',
  docsRepositoryBase: 'https://github.com/degenerocity/hotm-learn/blob/master',
  titleSuffix: ' – HOTM',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">HOTM Reference Guide</span>
	</>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Humans of the Metaverse - Reference Guide" />
      <meta name="og:description" content="Best Practices, Common Problems, Important Links" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://hotm.6blocks.io/og.png" />
      <meta name="twitter:site:domain" content="https://hotm.6blocks.io" />
      <meta name="twitter:url" content="https://hotm.6blocks.io/" />
      <meta name="og:title" content="Humans of the Metaverse - Reference Guide" />
      <meta name="og:image" content="https://hotm.6blocks.io/og.png" />
      <meta name="apple-mobile-web-app-title" content="Humans of the Metaverse - Reference Guide" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Curious',
  footerText: (
     <>
	    Humans of the Metaverse {new Date().getFullYear()} © Reference Guide
	 </>
  ),
  unstable_faviconGlyph: '📜',
}
