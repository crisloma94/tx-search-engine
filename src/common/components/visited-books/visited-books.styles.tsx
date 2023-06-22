import styled, { css } from 'styled-components';

export const StyledVisitedBooks = styled.div(
  ({ theme: { colors, spaces } }) => css`
    ul {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: masonry;
      gap: ${spaces.medium};
    }
    li {
      background-color: ${colors.lightSecondary};
    }
  `,
);
