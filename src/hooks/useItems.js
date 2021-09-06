import useFetch from '@/hooks/useFetch';

function useItems({ search }) {
  const { data, isError, isLoading } = useFetch(`/sites/MLA/search?q=:${search}&limit=4`);

  const results = data?.results;
  return { items: results, isError, isLoading };
}

export default useItems;
