import { renderHook } from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';

import useItems from '../useItems';

describe('useItems', () => {
  it('should return undefined default result', () => {
    const { items } = renderHook(() => useItems({ search: 'iphone' })).result.current;

    expect(items).toBeUndefined();
  });
});
