import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

function HomePage() {
  const router = useRouter();

  // console.log('router', router);
  // console.log('data', data);

  return <div>MELI</div>;
}

HomePage.Layout = Layout;
export default HomePage;
