import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Chaotic PPR | Pacstall</title>
        <meta name="description" content="The (chaotic) Pacstall Package Repository" />
        <meta name="darkreader-lock" />
        <meta name="theme-color" content="#169390" />
        <link rel="icon" href="/pacstall.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
