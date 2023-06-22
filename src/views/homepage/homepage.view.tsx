import PageContainer from '../../common/components/layout-elements/page-container.component.tsx/page-container.component';
import VisitedBooks from '../../common/components/visited-books/visited-books.component';
import { StyledHomepage } from './homepage.styles';

export default function HomePage() {
  return (
    <PageContainer>
      <StyledHomepage>
        <VisitedBooks />
      </StyledHomepage>
    </PageContainer>
  );
}
