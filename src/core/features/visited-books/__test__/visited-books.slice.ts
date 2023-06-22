import configureStore from 'redux-mock-store';
import { addBook } from '../visited-books.slice';

const mockStore = configureStore([]);
const store = mockStore({});

describe('visitedBooksSlice test suite', () => {
  it('Should add a book to visitedBooks state', () => {
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

    store.dispatch(addBook(defaultBook));
    const actions = store.getActions();
    const expectedPayload = { type: addBook.type, payload: defaultBook };

    expect(actions).toEqual([expectedPayload]);
  });
});
