import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Theme from '../../../../styles/theme';
import VisitedBooks from '../visited-books.component';

// Configure mock store
const mockStore = configureStore([]);

describe('Visited Books component test suite', () => {
  const getComponent = (store: Object) => (
    <Provider store={mockStore(store)}>
      <Theme>
        <VisitedBooks />
      </Theme>
    </Provider>
  );
  const setup = (store: Object) => render(getComponent(store));

  const books = [
    {
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
    },
  ];

  it('Should match snapshot', () => {
    const container = setup({ visitedBooks: { visitedBooks: [] } });
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot with books', () => {
    const container = setup({ visitedBooks: { visitedBooks: books } });
    expect(container).toMatchSnapshot();
  });

  it('Should render the visited books saved', () => {
    setup({ visitedBooks: { visitedBooks: books } });
    expect(screen.getByText(books[0].author_name[0])).toBeInTheDocument();
  });
});
