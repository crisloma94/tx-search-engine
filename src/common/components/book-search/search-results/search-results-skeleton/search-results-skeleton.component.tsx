import ContentLoader from 'react-content-loader';
import { useTheme } from 'styled-components';
import { StyledSearchResultsSkeleton } from './search-results-skeleton.styles';

export default function SearchResultsSkeleton() {
  const theme = useTheme();
  return (
    <StyledSearchResultsSkeleton>
      {[...Array(3)].map((_, index) => (
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor={theme.colors.lightText}
          foregroundColor={theme.colors.white}
          key={index}
        >
          <rect x="0" y="0" rx="0" ry="0" width="80" height="112" />
          <rect x="96" y="16" rx="0" ry="0" width="200" height="16" />
          <rect x="96" y="50" rx="0" ry="0" width="200" height="16" />
          <rect x="96" y="84" rx="0" ry="0" width="200" height="16" />
        </ContentLoader>
      ))}
    </StyledSearchResultsSkeleton>
  );
}
