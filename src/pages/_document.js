import Document, { Html, Head, Main, NextScript } from 'next/document';
// Trabajo con el SEO, reemplaza lo que trae next por default
class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">

                <Head>
                    <title>React Shop 🐱‍🏍</title>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CR125G5HJ2"></script>
                    <script dangerouslySetInnerHTML={{
                        __html:
                        `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-CR125G5HJ2');`
                    }} />
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