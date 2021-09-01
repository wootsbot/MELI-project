import { useRouter } from 'next/router';

import useSWR from 'swr';

import Layout from '@/components/Layout';
import ItemDetails from '@/components/ItemDetails';

import fetcher from '@/utils/fetcher';

function HomePage() {
  const router = useRouter();
  const { itemId } = router.query;
  const { data: item, error, isValidating } = useSWR(`https://api.mercadolibre.com/items/${itemId}`, fetcher);

  console.log('data', item);

  if (!item) return null;

  return (
    <ItemDetails
      thumbnail={item?.thumbnail}
      title={item?.title}
      price={item?.price}
      soldQuantity={item?.sold_quantity}
      condition={item?.condition}
    />
  );
}

HomePage.Layout = Layout;
export default HomePage;
