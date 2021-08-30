import '@fontsource/inter';
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
