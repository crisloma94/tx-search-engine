import { useAppSelector } from '../../hooks/redux-ts-hooks';
import BookCard from '../book-card/book-card.component';
import { StyledVisitedBooks } from './visited-books.styles';

export default function VisitedBooks() {
  const { visitedBooks } = useAppSelector((state) => state.visitedBooks);
  if (!visitedBooks.length) {
    return <h1>Start searching for books!</h1>;
  }
  return (
    <StyledVisitedBooks>
      <h1>Last visited books</h1>
      <ul>
        {visitedBooks.map((book) => (
          <BookCard book={book} key={book.key} />
        ))}
      </ul>
    </StyledVisitedBooks>
  );
}
