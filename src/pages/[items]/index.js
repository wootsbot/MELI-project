import { useRouter } from 'next/router';
import useSWR from 'swr';

import Margin from '@design-system/Margin';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import ProductsList from '@/components/ProductsList';
import DisplayMessage from '@/components/DisplayMessage';

import fetcher from '@/utils/fetcher';

function HomePage() {
  const router = useRouter();

  const { search } = router.query;

  const {
    data: itemList,
    error,
    isValidating,
  } = useSWR(search ? `/api/items?search=${search}&limit=4` : null, fetcher);

  console.log('itemList', itemList);

  const isShowList = itemList?.results?.length > 0;

  return (
    <Container>
      <SEO
        title="Mercado Libre - Nunca dejes de buscar"
        description="Mercado Libre: La comunidad de compra y venta online más grande de América Latina."
      />

      {isShowList && (
        <Margin side="top" xs={16}>
          <ProductsList>
            {itemList?.results?.map((item) => (
              <li key={item?.id}>
                <ProductCard
                  to={`/items/${item?.id}`}
                  imageSrc={item?.thumbnail}
                  price={item?.price}
                  title={item?.title}
                  address={item?.address}
                  isFreeShipping={item?.shipping?.free_shipping}
                />
              </li>
            ))}
          </ProductsList>
        </Margin>
      )}

      {!isShowList && (
        <Margin side="top" xs={32}>
          <DisplayMessage
            title="Escribe en el buscador lo que quieres encontrar."
            message="Escribe tu búsqueda en el campo que figura en la parte superior de la pantalla"
          />
        </Margin>
      )}
    </Container>
  );
}

HomePage.Layout = Layout;
export default HomePage;
