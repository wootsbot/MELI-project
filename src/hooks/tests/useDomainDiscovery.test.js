import { renderHook } from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';

import useDomainDiscovery from '../useDomainDiscovery';

describe('useItems', () => {
  it('should return undefined default result', () => {
    const { items } = renderHook(() => useDomainDiscovery({ search: 'iphone' })).result.current;

    expect(items).toBeUndefined();
  });
});
