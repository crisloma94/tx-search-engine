import { useEffect, useState } from 'react';
import { BookSearchModel } from '../../types/books.types';
import axios from 'axios';
import { BOOK_SEARCH_API_URL } from '../constants/api';
import { DEFAULT_BOOK_FIELDS, DEFAULT_LIMIT_PARAM } from '../constants/request';

interface useBookSearchProps {
  query: string;
}

export const useBookSearch = ({ query }: useBookSearchProps) => {
  const [offsetParam, setOffsetParam] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [results, setResults] = useState<BookSearchModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (query.length > 2) {
          const response = await axios.get(`${BOOK_SEARCH_API_URL}`, {
            params: {
              q: query,
              fields: DEFAULT_BOOK_FIELDS,
              limit: DEFAULT_LIMIT_PARAM,
              offset: offsetParam,
            },
          });
          setResults((previousResults) => [
            ...previousResults,
            ...response.data.docs,
          ]);
          setTotalResults(response.data.numFound);
          setLoading(false);
        }
      } catch (error) {
        setError('There has been an error searching for books');
        setLoading(false);
      }
    };

    fetchData();
  }, [offsetParam, query]);

  const loadMore = () => {
    const newOffset = offsetParam + DEFAULT_LIMIT_PARAM;
    if (newOffset <= totalResults) {
      setOffsetParam(newOffset);
    }
  };

  const clearSearch = () => {
    setResults([]);
    setTotalResults(0);
    setOffsetParam(0);
    setLoading(false);
    setError(null);
  };

  return { results, loading, error, loadMore, clearSearch };
};
