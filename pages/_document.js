import Document, {Head, Main, NextScript} from 'next/document'
import GoogleTagManager from "../components/Global/GoogleTagManager";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <html lang="en">
            <Head>
              <GoogleTagManager gtmId={''}/>
              <link rel="stylesheet" href="/_next/static/style.css"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}

