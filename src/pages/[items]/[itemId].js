import { useRouter } from 'next/router';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import Margin from '@design-system/Margin';
import Container from '@/components/Container';
import Breadcrumb from '@/components/Breadcrumb';
import ItemDetails from '@/components/ItemDetails';

import useItem from '@/hooks/useItem';
import useDomainDiscovery from '@/hooks/useDomainDiscovery';

import { attributesTypes } from '@/utils/attributes-types';

function HomePage() {
  const router = useRouter();
  const { itemId } = router.query;

  const { item, itemDescription } = useItem({ itemId });
  const { discovery } = useDomainDiscovery({ search: item?.title });

  const attributesFilter = item?.attributes?.filter((attribute) => attributesTypes[attribute?.id]);

  if (!item) return null;

  return (
    <Container>
      <SEO
        title={`Mercado Libre - ${item?.title}`}
        description="Mercado Libre: La comunidad de compra y venta online más grande de América Latina."
      />

      <Margin xs={16}>
        <Breadcrumb>
          <Breadcrumb.Item>{discovery?.category_name}</Breadcrumb.Item>
          {attributesFilter?.map((attribute) => (
            <Breadcrumb.Item key={attribute?.id}>{attribute?.value_name}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Margin>

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
