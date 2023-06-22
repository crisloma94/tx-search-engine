import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useBookSearch } from '../use-book-search';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useBookSearch hook test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const defaultBook = {
    author_name: ['Author name test'],
    cover_i: 5678,
    first_publish_year: 1984,
    id_goodreads: ['1234'],
    id_librarything: ['567'],
    isbn: ['89'],
    key: '/works/OL545572W',
    oclc: ['1', '2'],
    publisher: ['Publisher example'],
    title: 'Title test',
  };

  it('Should fetch data and return results', async () => {
    const mockResponse = {
      data: {
        docs: [defaultBook],
        numFound: 1,
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useBookSearch({ query: 'test' }));

    // Initial state
    expect(result.current.results).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      // Updated state
      expect(result.current.results).toEqual(mockResponse.data.docs);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  it('Should return an error when it cannot fetch data', async () => {
    mockedAxios.get.mockRejectedValueOnce(null);

    const { result } = renderHook(() => useBookSearch({ query: 'test' }));

    await waitFor(() => {
      expect(result.current.error).toEqual(
        'There has been an error searching for books',
      );
    });
  });

  it('Should fetch more data when loadMore is executed', async () => {
    const mockResponse = {
      data: {
        docs: [
          defaultBook,
          defaultBook,
          defaultBook,
          defaultBook,
          defaultBook,
          defaultBook,
        ],
        numFound: 12,
      },
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useBookSearch({ query: 'test' }));

    // First load
    await waitFor(() => {
      expect(result.current.results).toHaveLength(6);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    result.current.loadMore();

    // Second load
    await waitFor(() => {
      expect(result.current.results).toHaveLength(12);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });
});
