import Document, { Html, Head, Main, NextScript } from 'next/document';
// Trabajo con el SEO, reemplaza lo que trae next por default
class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
