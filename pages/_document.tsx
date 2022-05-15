import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  const url = 'https://election.suikoden.info'
  const title = '幻水総選挙2022'
  const description = '幻水総選挙2022のWebサイトです。'

  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="description" content="幻水総選挙2022" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Zen+Old+Mincho:wght@900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#333" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${url}/gss2022_top.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
