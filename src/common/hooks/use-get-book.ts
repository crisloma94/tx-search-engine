import { useEffect, useState } from 'react';
import { BookSearchModel } from '../../types/books.types';
import axios from 'axios';
import { BOOK_SEARCH_API_URL } from '../constants/api';
import { DEFAULT_BOOK_FIELDS } from '../constants/request';

export const useGetBook = (key: string) => {
  const [bookData, setBookData] = useState<BookSearchModel>(
    {} as BookSearchModel,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BOOK_SEARCH_API_URL}`, {
          params: { q: key, fiedls: DEFAULT_BOOK_FIELDS, limit: 1, offset: 0 },
        });
        setBookData(response.data.docs[0]);
      } catch (error) {
        setError('An error has ocurred fetching book detail data');
      }

      setLoading(false);
    };

    fetchData();
  }, [key]);

  return { bookData, loading, error };
};
