import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemsPage from '@/pages/[items]/[itemId]';

const renderComponent = (props = {}) => render(<ItemsPage {...props} />);

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const itemMock = {
  id: 'MLA903951222',
  site_id: 'MLA',
  title: 'Cable Cargador Usb Original Lightning iPhone 6 7 8 X Xs Xr',
  price: 1899.99,
  condition: 'new',
  thumbnail: '/D_659328-MLA47006823834_082021-O.jpg',
  sold_quantity: 3,
  condition: 'new',
  address: {
    state_id: 'AR-C',
    state_name: 'Capital Federal',
    city_id: null,
    city_name: 'Belgrano',
  },
  shipping: {
    free_shipping: true,
    mode: 'me2',
    tags: ['self_service_in'],
    logistic_type: 'cross_docking',
    store_pick_up: false,
  },
  attributes: [
    { id: 'BRAND', value_name: 'name' },
    { id: 'MODEL', value_name: 'name' },
  ],
};

jest.mock('../../hooks/useItem', () => {
  return jest.fn(() => ({
    item: itemMock,
    itemDescription: { plain_text: 'description' },
  }));
});

jest.mock('../../hooks/useDomainDiscovery', () => {
  return jest.fn(() => ({
    discovery: { category_name: 'category name', attributes: [{ id: '123', value_name: 'name' }] },
  }));
});

describe('<ItemPage />', () => {
  beforeEach(() => {
    jest.unmock('../../hooks/useItems');
    jest.unmock('../../hooks/useDomainDiscovery');
    jest.resetModules();
  });

  it('Should render correctly', () => {
    const router = { push: jest.fn(), query: { search: null } };
    useRouter.mockReturnValue(router);

    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render properties of mock item when render page', () => {
    const router = { push: jest.fn(), query: { search: 'iphone' } };

    useRouter.mockReturnValue(router);

    renderComponent();

    const conditionElement = screen.getByText(/nuevo \- 3 vendidos/i);
    const headingH1 = screen.getByRole('heading', {
      name: /cable cargador usb original lightning iphone 6 7 8 x xs xr/i,
    });
    const priceElement = screen.getByText(/\$ 1,899\.99/i);
    const buttonPay = screen.getByRole('button', {
      name: /comprar/i,
    });
    const descriptionElement = screen.getByRole('heading', {
      name: /descripción del producto/i,
    });

    expect(conditionElement).toBeInTheDocument();
    expect(headingH1).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(buttonPay).toBeInTheDocument();
  });
});
