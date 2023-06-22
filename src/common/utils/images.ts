import { BookSearchModel } from '../../types/books.types';
import { DEFAULT_COVER_IMAGE_SIZE } from '../constants/images';

export const getBookCoverPath = (book: BookSearchModel): string => {
  if (book.cover_i) {
    return `id/${book.cover_i}-${DEFAULT_COVER_IMAGE_SIZE}.jpg`;
  } else if (book.id_librarything && book.id_librarything.length) {
    return `librarything/${book.id_librarything[0]}-${DEFAULT_COVER_IMAGE_SIZE}.jpg`;
  } else if (book.isbn && book.isbn.length) {
    return `isbn/${book.isbn[0]}-${DEFAULT_COVER_IMAGE_SIZE}.jpg`;
  } else if (book.oclc && book.oclc.length) {
    return `oclc/${book.oclc[0]}-${DEFAULT_COVER_IMAGE_SIZE}.jpg`;
  } else if (book.id_goodreads && book.id_goodreads.length) {
    return `goodreads/${book.id_goodreads[0]}-${DEFAULT_COVER_IMAGE_SIZE}.jpg`;
  }
  return '';
};
