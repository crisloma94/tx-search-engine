import styled, { css } from 'styled-components';

export const StyledSearchResults = styled.div(
  ({ theme: { colors, spaces } }) => css`
    position: absolute;
    background-color: ${colors.lightSecondary};
    width: 30rem;
    right: 0;
    max-height: 80vh;
    overflow: hidden;
    overflow-y: scroll;
    margin: ${spaces.small};
    padding: ${spaces.medium};

    .search-result__list {
      padding: 0;
      margin-bottom: ${spaces.large};
    }
  `,
);
