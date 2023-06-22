import { render, screen } from '@testing-library/react';
import { SearchResults, SearchResultsProps } from '../search-results.component';
import { BookSearchModel } from '../../../../../types/books.types';
import SearchResultsSkeleton from '../search-results-skeleton/search-results-skeleton.component';
import { Provider } from 'react-redux';
import Theme from '../../../../../styles/theme';
import { store } from '../../../../../core/store/store';

describe('Search results component test suite', () => {
  const defaultBook: BookSearchModel = {
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

  const loadMoreMock = jest.fn();

  const getComponent = (props: SearchResultsProps) => (
    <Provider store={store}>
      <Theme>
        <SearchResults {...props} />
      </Theme>
    </Provider>
  );
  const setup = (props: SearchResultsProps) => render(getComponent(props));

  it('Should match snapshot', () => {
    const container = setup({
      results: [defaultBook],
      loading: false,
      error: null,
      loadMore: loadMoreMock,
    });
    expect(container).toMatchSnapshot();
  });

  it('Should render the loading component when loading is true', () => {
    setup({
      results: [defaultBook],
      loading: true,
      error: null,
      loadMore: loadMoreMock,
    });
    expect(<SearchResultsSkeleton />).toBeTruthy();
  });

  it('Should render the error component when error is true', () => {
    const errorText = 'There has been an error... try again';
    setup({
      results: [],
      loading: false,
      error: errorText,
      loadMore: loadMoreMock,
    });
    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it('Should render the no results component when results is empty', () => {
    setup({ results: [], loading: false, error: '', loadMore: loadMoreMock });
    expect(screen.getByText('We could not find any books')).toBeInTheDocument();
  });

  it('Should render the load more button when results is not empty', () => {
    setup({
      results: [defaultBook],
      loading: false,
      error: '',
      loadMore: loadMoreMock,
    });
    expect(screen.getByText('Load more')).toBeInTheDocument();
  });
});
