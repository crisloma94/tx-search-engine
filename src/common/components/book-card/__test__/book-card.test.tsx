import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import BookCard from '../book-card.component';
import { BookSearchModel } from '../../../../types/books.types';
import Theme from '../../../../styles/theme';
import { store } from '../../../../core/store/store';

describe('Book card component test suite', () => {
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
  const getComponent = () => (
    <Provider store={store}>
      <Theme>
        <BookCard book={defaultBook} />
      </Theme>
    </Provider>
  );
  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
