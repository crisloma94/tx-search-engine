import { forwardRef, Ref } from 'react';
import { BookSearchModel } from '../../../../types/books.types';
import BookCard from '../../book-card/book-card.component';
import Button from '../../button/button.component';
import SearchResultsSkeleton from './search-results-skeleton/search-results-skeleton.component';
import { StyledSearchResults } from './search-results.styles';

export interface SearchResultsProps {
  results: BookSearchModel[];
  loading: boolean;
  error: string | null;
  loadMore: () => void;
}

export const SearchResults = forwardRef<HTMLDivElement, SearchResultsProps>(
  (
    { results = [], loading, error, loadMore }: SearchResultsProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <StyledSearchResults ref={ref}>
        {!!results.length && (
          <ul className="search-result__list">
            {results.map((book) => (
              <BookCard book={book} key={book.key} />
            ))}
          </ul>
        )}
        {loading && <SearchResultsSkeleton />}
        {!error && !loading && !!results.length && (
          <Button text="Load more" onClick={loadMore} />
        )}
        {!error && !loading && !results.length && (
          <p>We could not find any books</p>
        )}
        {error && <p>{error}</p>}
      </StyledSearchResults>
    );
  },
);
