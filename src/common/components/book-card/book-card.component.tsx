import { Link } from 'react-router-dom';
import { BookSearchModel } from '../../../types/books.types';
import BookCover from '../book-cover/book-cover.component';
import { StyledBookCard } from './book-card.styles';

interface BookCardprops {
  book: BookSearchModel;
}

export default function BookCard({ book }: BookCardprops) {
  const getBookKey = (key: string) => {
    const splittedKey = key.split('/');
    return splittedKey[splittedKey.length - 1];
  };
  const authorName = book.author_name && book.author_name[0];

  return (
    <StyledBookCard key={book.key}>
      <BookCover book={book} />
      <div className="book-card__info">
        <Link
          to={`/book/${getBookKey(book.key)}`}
          className="book-card__title"
        >{`${book.title} (${book.first_publish_year})`}</Link>
        <p className="book-card__author">{authorName}</p>
        <p className="book-card__publisher">
          {book.publisher && book.publisher[0]}
        </p>
        <a
          href={`https://www.amazon.es/s?k=${book.title}+${authorName}`}
          target="_blank"
        >
          Search on amazon
        </a>
      </div>
    </StyledBookCard>
  );
}
