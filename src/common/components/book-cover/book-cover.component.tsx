import { BookSearchModel } from '../../../types/books.types';
import { BOOK_COVER_API_URL } from '../../constants/api';
import { DEFAULT_COVER } from '../../constants/images';
import { getBookCoverPath } from '../../utils/images';
import { StyledBookCover } from './book-cover.styles';

interface BookCoverProps {
  book: BookSearchModel;
}

export default function BookCover({ book }: BookCoverProps) {
  const bookCoverPath = getBookCoverPath(book)
    ? `${BOOK_COVER_API_URL}${getBookCoverPath(book)}`
    : DEFAULT_COVER;
  return (
    <StyledBookCover
      src={bookCoverPath}
      alt="Default book cover"
      className="book-cover"
    />
  );
}
