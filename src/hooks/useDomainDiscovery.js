import useFetch from '@/hooks/useFetch';

function useDomainDiscovery({ search }) {
  const { data, isError, isLoading } = useFetch(`/sites/MLA/domain_discovery/search?q=${search}&limit=1`);

  const [discovery] = data ?? [];
  return { discovery, isError, isLoading };
}

export default useDomainDiscovery;
