import { renderHook } from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';

import useItem from '../useItem';

describe('useItem', () => {
  it('should return undefined default result', () => {
    const { items } = renderHook(() => useItem({ itemId: 'MLI123' })).result.current;

    expect(items).toBeUndefined();
  });
});
