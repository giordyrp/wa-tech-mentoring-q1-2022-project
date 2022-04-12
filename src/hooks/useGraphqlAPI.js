import { API } from 'aws-amplify';
import { useEffect, useReducer, useState } from 'react';

const initialState = { data: {}, loading: true, error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, loading: true, error: null };
    case 'response':
      return { ...state, loading: false, data: action.data };
    case 'error':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const useGraphqlAPI = (initialQuery) => {
  const [state, disptach] = useReducer(reducer, initialState);
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const promise = API.graphql(initialQuery);

    const getData = async () => {
      try {
        disptach({ type: 'start' });

        const { data } = await promise;
        const key = Object.keys(data)[0];
        disptach({ type: 'response', data: data[key].items });
      } catch (error) {
        disptach({ type: 'error', error });
      }
    };

    if (query) getData();

    return () => {
      API.cancel(promise, 'component unmounted');
    };
  }, [query]);

  return { ...state, setQuery };
};

export default useGraphqlAPI;
