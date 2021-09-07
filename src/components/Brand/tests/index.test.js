import { render } from '@testing-library/react';

import Brand from '..';

describe('<Brand />', () => {
  it('Should render correctly', async () => {
    const { container } = await render(<Brand />);

    expect(container).toMatchSnapshot();
  });
});
