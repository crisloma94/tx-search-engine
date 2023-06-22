import styled, { css } from 'styled-components';

export const StyledSearchResultsSkeleton = styled.div(
  ({ theme: { spaces } }) => css`
    margin: ${spaces.small};
    padding: ${spaces.medium};
  `,
);
