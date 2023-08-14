import type { AppProps } from 'next/app';
import '../styles/globals.css';  // Tailwind CSS のスタイルをインポート

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;