import { useRouter } from 'next/router';
import useSWR from 'swr';

import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import ProductsList from '@/components/ProductsList';

import fetcher from '@/utils/fetcher';

function HomePage() {
  const router = useRouter();

  const { search } = router.query;

  const { data, error, isValidating } = useSWR(search ? `/api/items?search=${search}&limit=4` : null, fetcher);

  return (
    <ProductsList>
      {data?.results?.map((item) => (
        <li key={item?.id}>
          <ProductCard
            to={`/items/${item?.id}`}
            imageSrc={item?.thumbnail}
            price={item?.price}
            title={item?.title}
            address={item?.address}
          />
        </li>
      ))}
    </ProductsList>
  );
}

HomePage.Layout = Layout;
export default HomePage;
