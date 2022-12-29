import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { useRouter } from 'next/router';
import { FooterComponent } from '../global/components/Footer';
import { appWithTranslation} from 'next-i18next'

 function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
    <GlobalStyle/>
  <Component key={router.asPath} {...pageProps} />
  <FooterComponent/>
  </>
  )
} export default appWithTranslation(App)
