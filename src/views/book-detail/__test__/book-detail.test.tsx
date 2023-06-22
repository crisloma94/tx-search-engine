import { render, screen } from '@testing-library/react';
import Theme from '../../../styles/theme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BookDetail from '../book-detail.view';
import * as hook from '../../../common/hooks/use-get-book';
import { BookSearchModel } from '../../../types/books.types';

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

const mockStore = configureStore([]);
const mockedStore = mockStore({});

describe('Book detail view test suite', () => {
  const getComponent = () => (
    <Provider store={mockedStore}>
      <Theme>
        <BookDetail />
      </Theme>
    </Provider>
  );
  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    jest.spyOn(hook, 'useGetBook').mockImplementation(() => ({
      bookData: defaultBook,
      error: '',
      loading: false,
    }));
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should add a book on page load', () => {
    jest.spyOn(hook, 'useGetBook').mockImplementation(() => ({
      bookData: defaultBook,
      error: '',
      loading: false,
    }));
    setup();
    expect(screen.getByText('Author name test')).toBeInTheDocument();
  });

  it('Should render an error message when there is an error fetching the data', () => {
    jest.spyOn(hook, 'useGetBook').mockImplementation(() => ({
      bookData: {} as BookSearchModel,
      error: 'Error',
      loading: false,
    }));
    setup();
    expect(
      screen.getByText('Sorry... there has been an error fetching the data'),
    ).toBeInTheDocument();
  });
});
