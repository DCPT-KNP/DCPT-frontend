import { extractCritical } from '@emotion/server';
import { EmotionCritical } from '@emotion/server/create-instance';
import { DocumentContext, RenderPage } from 'next/dist/shared/lib/utils';
import Document, {
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

type MyDocumentProps = EmotionCritical & RenderPage & DocumentInitialProps;

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Pretendard/Pretendard-Black.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Pretendard/Pretendard-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Pretendard/Pretendard-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
