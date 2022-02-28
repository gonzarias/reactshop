import Document, { Html, Head, Main, NextScript } from 'next/document';
// Trabajo con el SEO, reemplaza lo que trae next por default
class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">

                <Head>
                    <title>React Shop 🐱‍🏍</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;