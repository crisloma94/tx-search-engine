import styled, { css } from 'styled-components';
import { StyledBookCover } from '../../common/components/book-cover/book-cover.styles';

export const StyledBookDetail = styled.div(
  ({ theme: { colors, spaces } }) => css`
    display: grid;
    background-color: ${colors.lightSecondary};
    padding: ${spaces.large};
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
    gap: ${spaces.large};
    margin-top: ${spaces.large};
    border: 1px solid ${colors.secondary};

    ${StyledBookCover} {
      width: 15rem;
      height: 22rem;
      object-fit: fill;
      margin-bottom: ${spaces.large};
    }

    a {
      color: ${colors.secondary};
    }
  `,
);
