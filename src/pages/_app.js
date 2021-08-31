import '@fontsource/inter';
import 'normalize.css';
import '@/styles/global.scss';

const Frame = ({ children }) => <>{children}</>;

function AppRoot({ Component, pageProps }) {
  const Layout = Component.Layout || Frame;

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default AppRoot;
