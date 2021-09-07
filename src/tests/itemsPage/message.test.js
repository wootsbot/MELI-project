import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemsPage from '@/pages/[items]/index';

const renderComponent = (props = {}) => render(<ItemsPage {...props} />);

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

jest.mock('../../hooks/useItems', () => {
  return jest.fn(() => ({
    items: [],
  }));
});

jest.mock('../../hooks/useDomainDiscovery', () => {
  return jest.fn(() => ({
    discovery: {},
  }));
});

describe('<ItemsPage />', () => {
  beforeEach(() => {
    jest.unmock('../../hooks/useItems');
    jest.unmock('../../hooks/useDomainDiscovery');
    jest.resetModules();
  });

  it('should render message when not data', () => {
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
      userEvent.type(searchFiled, 'no data');
      userEvent.click(buttonSearch);
    });

    const SVGElement = container.querySelector('#sandbox > div > div > div > div > div:nth-child(1) > svg');
    const headingH3 = screen.getByRole('heading', {
      name: /escribe en el buscador lo que quieres encontrar\./i,
    });
    const messageText = screen.getByText(
      /escribe tu búsqueda en el campo que figura en la parte superior de la pantalla/i,
    );

    expect(headingH3).toBeInTheDocument();
    expect(messageText).toBeInTheDocument();

    act(() => {
      unmount();
    });
  });
});
