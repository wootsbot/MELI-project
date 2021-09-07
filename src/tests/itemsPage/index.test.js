import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemsPage from '@/pages/[items]/index';

const renderComponent = (props = {}) => render(<ItemsPage {...props} />);

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const itemsMock = [
  {
    id: 'MLA903951222',
    site_id: 'MLA',
    title: 'Cable Cargador Usb Original Lightning iPhone 6 7 8 X Xs Xr',
    price: 1899.99,
    condition: 'new',
    thumbnail: '/D_659328-MLA47006823834_082021-O.jpg',
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
  },
];

jest.mock('../../hooks/useItems', () => {
  return jest.fn(() => ({
    items: itemsMock,
  }));
});

jest.mock('../../hooks/useDomainDiscovery', () => {
  return jest.fn(() => ({
    discovery: { category_name: 'category name', attributes: [{ id: '123', value_name: 'name' }] },
  }));
});

describe('<ItemsPage />', () => {
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

  it('should render only item with info of mock when serach is success', () => {
    const router = { push: jest.fn(), query: { search: 'iphone' } };

    useRouter.mockReturnValue(router);

    const { container, unmount } = renderComponent();

    const searchFiled = screen.getByRole('textbox', {
      name: /search/i,
    });

    const buttonSearch = screen.getByRole('button', {
      name: /search/i,
    });

    expect(searchFiled).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();

    act(() => {
      userEvent.type(searchFiled, 'iphone');
      userEvent.click(buttonSearch);
    });

    const priceElement = screen.getByText(/\$ 1,899\.99/i);
    const headingH3 = screen.getByRole('heading', {
      name: /cable cargador usb original lightning iphone 6 7 8 x xs xr/i,
    });
    const addressElement = screen.getByText(/capital federal/i);

    expect(priceElement).toBeInTheDocument();
    expect(headingH3).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();

    act(() => {
      unmount();
    });
  });
});
