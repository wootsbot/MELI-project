import { useRouter } from 'next/router';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import Margin from '@design-system/Margin';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import ProductsList from '@/components/ProductsList';
import DisplayMessage from '@/components/DisplayMessage';
import Breadcrumb from '@/components/Breadcrumb';

import useItems from '@/hooks/useItems';
import useDomainDiscovery from '@/hooks/useDomainDiscovery';

function HomePage() {
  const router = useRouter();
  const { search } = router.query;

  const { items } = useItems({ search });
  const { discovery } = useDomainDiscovery({ search });

  const isShowList = items?.length > 0;

  return (
    <Container>
      <SEO
        title="Mercado Libre - Nunca dejes de buscar"
        description="Mercado Libre: La comunidad de compra y venta online más grande de América Latina."
      />

      <Margin xs={16}>
        <Breadcrumb>
          <Breadcrumb.Item>{discovery?.category_name}</Breadcrumb.Item>
          {discovery?.attributes?.map((attribute) => (
            <Breadcrumb.Item key={attribute?.id}>{attribute?.value_name}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Margin>

      {isShowList && (
        <Margin side="top" xs={16}>
          <Margin side="bottom" xs={32}>
            <ProductsList>
              {items.map((item) => (
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
