import useFetch from '@/hooks/useFetch';

function useItem({ itemId }) {
  const { data, isError, isLoading } = useFetch(`/items/${itemId}`);
  const { data: description } = useFetch(`/items/${itemId}/description`);

  return { item: data, itemDescription: description, isError, isLoading };
}

export default useItem;
