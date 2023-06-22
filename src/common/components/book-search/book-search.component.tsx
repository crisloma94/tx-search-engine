import { useState, useRef, useEffect } from 'react';
import { useBookSearch } from '../../hooks/use-book-search';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { useDebounce } from '../../hooks/user-debounce';
import TextInput from '../form-elements/text-input/text-input.component';
import { StyledBookSearch } from './book-search.styles';
import { SearchResults } from './search-results/search-results.component';

export default function BookSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showResultsPopup, setShowResultsPopup] = useState<boolean>(false);
  const debouncedSearchQuery: string = useDebounce<string>(searchQuery, 500);

  const searchResultsRef = useRef<HTMLDivElement>(null);

  const { results, loading, error, loadMore, clearSearch } = useBookSearch({
    query: debouncedSearchQuery,
  });

  useEffect(() => {
    if (!showResultsPopup && !!debouncedSearchQuery.length && results.length) {
      setShowResultsPopup(true);
    }
  }, [results]);

  useEffect(() => {
    clearSearch();
  }, [debouncedSearchQuery]);

  useOnClickOutside(searchResultsRef, () => {
    setShowResultsPopup(false);
    setSearchQuery("");
    clearSearch();
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleInputClick = () => {
    if (!showResultsPopup) {
      setShowResultsPopup(true);
    }
  };

  return (
    <StyledBookSearch>
      <TextInput
        placeholder="Search..."
        handleChange={handleChange}
        value={searchQuery}
        onClick={handleInputClick}
        name="search"
      />
      {showResultsPopup && (
        <SearchResults
          ref={searchResultsRef}
          results={results}
          loading={loading}
          error={error}
          loadMore={loadMore}
        />
      )}
    </StyledBookSearch>
  );
}
