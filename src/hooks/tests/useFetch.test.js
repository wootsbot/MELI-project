import 'whatwg-fetch';

import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import useFetch from '../useFetch';

beforeAll(() => jest.spyOn(window, 'fetch'));

describe('useFetch', () => {
  it('should return data, an isError = null and isLoading = false when success fech', async () => {
    let result = null;

    window.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ name: 'success' }),
    });

    await act(async () => {
      result = renderHook(() => useFetch('/thisurliscorrect')).result;
    });

    expect(result.current).toMatchObject({ data: { name: 'success' }, isError: null, isLoading: false });
  });

  it('should return isError with response of fecth when is error in fech', async () => {
    let result = null;

    window.fetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
    });

    await act(async () => {
      result = renderHook(() => useFetch('/thisurliscorrect')).result;
    });

    expect(result.current).toMatchObject({ data: null, isError: { ok: false, status: 403 }, isLoading: false });
  });
});
