import styled, { css } from 'styled-components';

export const StyledSearchResults = styled.div(
  ({ theme: { colors, spaces } }) => css`
    position: absolute;
    box-sizing: border-box;
    background-color: ${colors.lightSecondary};
    width: 30rem;
    max-width: 100vw;
    right: -${spaces.small};
    max-height: 80vh;
    overflow: hidden;
    overflow-y: scroll;
    margin-top: ${spaces.small};
    padding: ${spaces.medium};
    border: 1px solid ${colors.secondary};
  
    .search-result__list {
      padding: 0;
      margin-bottom: ${spaces.large};
    }
  `,
);
