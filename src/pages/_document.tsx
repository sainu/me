import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import * as gtag from '@/shared/lib/gtag'

class MyDocument extends Document<{ prefix: string | undefined }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    const prefix = []
    if (this.useOgp(ctx.pathname)) {
      prefix.push('og: http://ogp.me/ns#')
      if (ctx.pathname == '/') prefix.push('website: http://ogp.me/ns/website#')
      if (ctx.pathname == '/about') prefix.push('profile: http://ogp.me/ns/profile#')
      else prefix.push('article: http://ogp.me/ns/article#')
    }

    return {
      ...initialProps,
      prefix: prefix.length > 0 ? prefix.join(' ') : undefined
    }
  }

  private static useOgp(pathname: string): boolean {
    switch (pathname) {
    case '/404':
      return false
    default:
      return true
    }
  }

  render() {
    const prefix = this.props.prefix

    return (
      <Html lang="ja">
        <Head prefix={prefix}>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta property="og:locale" content="ja_JP" />
          <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
          <script async src="https://embed.zenn.studio/js/listen-embed-event.js" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          {gtag.existsGaId ?
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${gtag.GA_ID}', {
                      page_path: window.location.pathname
                    });
                  `,
                }} />
            </>
          : undefined}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
