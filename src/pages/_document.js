import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render () {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Breno Starling - Fullstack Developer" />
          <meta name="description" content="I'm Breno Starling, a Fullstack Developer from Betim, MG - Brazil with over two years of experience in Fullstack development. I have expertise in Asterisk, SIP phone system, and WebRTC. Currently, I am proficient in developing frontend applications using React, Vue2, Vue3, and AngularJS, while utilizing Node.js for backend development." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Breno Starling - Fullstack Developer" />
          <meta property="og:description" content="I'm Breno Starling, a Fullstack Developer from Betim, MG - Brazil with over two years of experience in Fullstack development. I have expertise in Asterisk, SIP phone system, and WebRTC. Currently, I am proficient in developing frontend applications using React, Vue2, Vue3, and AngularJS, while utilizing Node.js for backend development." />
          <meta property="og:image" content="/images/banner_breno.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Breno Starling - Fullstack Developer" />
          <meta property="twitter:description" content="I'm Breno Starling, a Fullstack Developer from Betim, MG - Brazil with over two years of experience in Fullstack development. I have expertise in Asterisk, SIP phone system, and WebRTC. Currently, I am proficient in developing frontend applications using React, Vue2, Vue3, and AngularJS, while utilizing Node.js for backend development." />
          <meta property="twitter:image" content="/images/banner_breno.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
