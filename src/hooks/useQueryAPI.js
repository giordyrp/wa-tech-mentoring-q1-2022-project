import { useEffect, useReducer, useState } from 'react';
import { API_BASE_URL } from '../utils/constants';
import { useLatestAPI } from './useLatestAPI';

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

const useQueryAPI = (initialQuery) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [state, disptach] = useReducer(reducer, initialState);
  const [query, setQuery] = useState(initialQuery);  

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    const getData = async () => {
      try {
        disptach({ type: 'start' });
  
        const params = query
          .map(
            (elem) =>
              `${elem[0]}=${
                elem[0] === 'q'
                  ? encodeURIComponent(
                      `[[${elem[1][0]}(${elem[1][1]}, ${
                        typeof elem[1][2] === 'object' ? JSON.stringify(elem[1][2]) : `"${elem[1][2]}"`
                      })]]`
                    )
                  : elem[1]
              }`
          )
          .join('&');

          
        const response = await fetch(`${API_BASE_URL}/documents/search?ref=${apiRef}&${params}`, {
          signal: controller.signal,
        });
  
        const data = await response.json();
  
        disptach({ type: 'response', data });
      } catch (error) {
        disptach({ type: 'error', error });
      }
    };

    if (query) getData();

    return () => {
      controller.abort();
    };

  }, [apiRef, isApiMetadataLoading, query]);

  return { ...state, setQuery };
};

export default useQueryAPI;
