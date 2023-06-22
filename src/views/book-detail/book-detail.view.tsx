import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookCover from '../../common/components/book-cover/book-cover.component';
import PageContainer from '../../common/components/layout-elements/page-container.component.tsx/page-container.component';
import { useAppDispatch } from '../../common/hooks/redux-ts-hooks';
import { useGetBook } from '../../common/hooks/use-get-book';
import { isObjectEmpty } from '../../common/utils/objects';
import { addBook } from '../../core/features/visited-books/visited-books.slice';
import { StyledBookDetail } from './book-detail.styles';

export default function BookDetail() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { bookData, error } = useGetBook(params.bookId as string);

  useEffect(() => {
    if (!isObjectEmpty(bookData)) {
      dispatch(addBook(bookData));
    }
  }, [bookData, dispatch]);

  const authorName = bookData.author_name && bookData.author_name[0];

  if (error) {
    return (
      <PageContainer>
        <h1>Sorry... there has been an error fetching the data</h1>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <StyledBookDetail>
        <BookCover book={bookData} />
        <div className="book-detail__info">
          <h1 className="book-detail__title">{`${bookData.title} (${bookData.first_publish_year})`}</h1>
          <h2 className="book-detail__author">{authorName}</h2>
          <p className="book-detail__publisher">
            {bookData.publisher && bookData.publisher[0]}
          </p>
          <a
            href={`https://www.amazon.es/s?k=${bookData.title}+${authorName}`}
            target="_blank"
          >
            Search on amazon
          </a>
        </div>
      </StyledBookDetail>
    </PageContainer>
  );
}
