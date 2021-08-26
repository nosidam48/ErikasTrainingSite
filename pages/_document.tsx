import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { v4 } from 'uuid';
import crypto, { Hash } from 'crypto';

const generateNonce = () => {
  const hash: Hash = crypto.createHash('sha256');
  hash.update(v4());
  const nonce: string = hash.digest('base64');
  return nonce;
};

const getCSP = (nonce: string) => {
  return `default-src 'self' 'nonce-${nonce}'`;
};

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = generateNonce(); // however you do this is up to you
    const csp = getCSP(nonce); // we have a function that returns a string incorporating the nonce
    const res = ctx?.res;
    if (res != null) {
      res.setHeader('Content-Security-Policy', csp);
    }
    return {
      ...initialProps,
      nonce,
    };
  }

  render() {
    // @ts-ignore
    const { nonce } = this.props;

    return (
      <Html lang="en" dir="ltr">
        <Head nonce={nonce} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
