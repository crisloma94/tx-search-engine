import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BookSearchModel } from '../../../../types/books.types';
import Theme from '../../../../styles/theme';
import { store } from '../../../../core/store/store';
import BookCover from '../book-cover.component';

describe('Book cover component test suite', () => {
  const getComponent = (book: BookSearchModel) => (
    <Provider store={store}>
      <Theme>
        <BookCover book={book} />
      </Theme>
    </Provider>
  );
  const setup = (book: BookSearchModel) => render(getComponent(book));

  it('Should match snapshot', () => {
    const { container } = setup({
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
    });
    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot with default cover', () => {
    const { container } = setup({
      author_name: ['Author name test'],
      first_publish_year: 1984,
      key: '/works/OL545572W',
      publisher: ['Publisher example'],
      title: 'Title test',
    });
    expect(container).toMatchSnapshot();
  });
});
