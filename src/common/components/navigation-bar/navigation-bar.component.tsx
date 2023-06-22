import BookSearch from '../book-search/book-search.component';
import ElementContainer from '../layout-elements/element-container/element-container.component';
import Logo from '../logo/logo.component';
import { StyledNavigationBar } from './navigation-bar.styles';

export default function NavigationBar() {
  return (
    <StyledNavigationBar>
      <ElementContainer>
        <>
          <Logo />
          <BookSearch />
        </>
      </ElementContainer>
    </StyledNavigationBar>
  );
}
