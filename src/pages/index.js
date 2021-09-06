import Margin from '@design-system/Margin';

import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import DisplayMessage from '@/components/DisplayMessage';

function HomePage() {
  return (
    <Container>
      <SEO
        title="Mercado Libre - Nunca dejes de buscar"
        description="Mercado Libre: La comunidad de compra y venta online más grande de América Latina."
      />

      <Margin side="top" xs={32}>
        <DisplayMessage
          title="Escribe en el buscador lo que quieres encontrar."
          message="Escribe tu búsqueda en el campo que figura en la parte superior de la pantalla"
        />
      </Margin>
    </Container>
  );
}

HomePage.Layout = Layout;
export default HomePage;
