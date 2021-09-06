import { useRouter } from 'next/router';
import useSWR from 'swr';

import Margin from '@design-system/Margin';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import ItemDetails from '@/components/ItemDetails';

import fetcher from '@/utils/fetcher';

function HomePage() {
  const router = useRouter();
  const { itemId } = router.query;
  const { data: item } = useSWR(`https://api.mercadolibre.com/items/${itemId}`, fetcher);
  const { data: itemDescription } = useSWR(`https://api.mercadolibre.com/items/${item?.id}/description`, fetcher);

  if (!item) return null;

  return (
    <Container>
      <SEO
        title={`Mercado Libre - ${item?.title}`}
        description="Mercado Libre: La comunidad de compra y venta online más grande de América Latina."
      />

      <Margin side="top" xs={16}>
        <Margin side="bottom" xs={32}>
          <ItemDetails
            thumbnail={item?.thumbnail}
            title={item?.title}
            price={item?.price}
            soldQuantity={item?.sold_quantity}
            condition={item?.condition}
            description={itemDescription?.plain_text}
          />
        </Margin>
      </Margin>
    </Container>
  );
}

HomePage.Layout = Layout;
export default HomePage;
