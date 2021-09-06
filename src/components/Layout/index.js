import Header from '@/components/Header';

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main role="main">{children}</main>
    </div>
  );
}

export default Layout;
