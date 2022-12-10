import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { useRouter } from 'next/router';
import { FooterComponent } from '../global/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
    <GlobalStyle/>
  <Component key={router.asPath} {...pageProps} />
  <FooterComponent/>
  </>
  )
}
