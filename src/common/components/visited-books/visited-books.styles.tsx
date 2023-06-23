import styled, { css } from 'styled-components';

export const StyledVisitedBooks = styled.div(
  ({ theme: { colors, spaces } }) => css`
    ul {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));;
      grid-template-rows: masonry;
      gap: ${spaces.medium};
    }
    li {
      background-color: ${colors.lightSecondary};
      border: 1px solid ${colors.secondary};
    }
  `,
);
