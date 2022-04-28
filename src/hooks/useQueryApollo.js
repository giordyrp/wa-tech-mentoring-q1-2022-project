import { useQuery } from '@apollo/client';

const useQueryApollo = (name, ...rest) => {
  const query = useQuery(...rest);

  if (!query.loading && !query.error) {
    query.data = query.data[name];
  }

  return query;
};

export default useQueryApollo;
