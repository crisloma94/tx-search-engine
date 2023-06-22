import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useGetBook } from '../use-get-book';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useGetBook hook test suite', () => {
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

  it('Should fetch book detail data', async () => {
    const mockResponse = {
      data: {
        docs: [defaultBook],
        numFound: 1,
      },
    };

    mockedAxios.get.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useGetBook('id'));

    await waitFor(() => {
      expect(result.current.bookData).toEqual(mockResponse.data.docs[0]);
    });
  });

  it('Should return an error when it cannot fetch data', async () => {
    mockedAxios.get.mockRejectedValueOnce(null);

    const { result } = renderHook(() => useGetBook('id'));

    await waitFor(() => {
      expect(result.current.error).toEqual(
        'An error has ocurred fetching book detail data',
      );
    });
  });
});
