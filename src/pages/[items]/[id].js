import { useRouter } from 'next/router';

import Layout from '@/components/Layout';

function HomePage() {
  const router = useRouter();

  // console.log('items id', router);

  return <div>MELI</div>;
}

HomePage.Layout = Layout;
export default HomePage;
