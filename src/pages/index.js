import { useRouter } from 'next/router';
import useSWR from 'swr';

import Layout from '@/components/Layout';

import fetcher from '@/utils/fetcher';

function HomePage() {
  const router = useRouter();

  const { data, error, isValidating } = useSWR(`https://api.mercadolibre.com/items/MLA931449399`, fetcher);

  // console.log('router', router);
  // console.log('data', data);

  return <div>MELI</div>;
}

HomePage.Layout = Layout;
export default HomePage;
