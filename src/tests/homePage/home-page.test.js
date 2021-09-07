import { render, screen } from '@testing-library/react';

import HomePage from '@/pages/index';

const renderComponent = (props = {}) => render(<HomePage {...props} />);

describe('<HomePage />', () => {
  it('Should render correctly', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render text in elemente h3, p and svg', () => {
    const { container } = renderComponent();

    const SVGElement = container.querySelector('#sandbox > div > div > div > div > div:nth-child(1) > svg');

    const headingH3 = screen.getByRole('heading', {
      name: /escribe en el buscador lo que quieres encontrar\./i,
    });
    const messageText = screen.getByText(
      /escribe tu búsqueda en el campo que figura en la parte superior de la pantalla/i,
    );

    expect(headingH3).toBeInTheDocument();
    expect(messageText).toBeInTheDocument();
  });
});
