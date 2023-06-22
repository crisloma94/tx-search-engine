import styled, { css } from 'styled-components';
import { StyledBookSearch } from '../book-search/book-search.styles';
import { StyledElementContainer } from '../layout-elements/element-container/element-container.styles';

export const StyledNavigationBar = styled.nav(
  ({ theme: { breakpoints, colors, spaces } }) => css`
    background-color: ${colors.lightPrimary};
    padding: ${spaces.small};
    ${StyledElementContainer} {
      max-width: ${breakpoints.xl};
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: ${spaces.large};
      margin: 0 auto;
    }
    ${StyledBookSearch} {
    }
  `,
);
