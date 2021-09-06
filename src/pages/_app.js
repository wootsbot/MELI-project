import '@fontsource/inter';
import 'normalize.css';
import '@/styles/design-system/index.scss';
import '@/styles/global.scss';

import { DefaultSeo } from 'next-seo';

import { getSeo } from '@/utils/seo';

const Frame = ({ children }) => <>{children}</>;

function AppRoot({ Component, pageProps }) {
  const seo = getSeo();

  const Layout = Component.Layout || Frame;

  return (
    <>
      <DefaultSeo {...seo} />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default AppRoot;
