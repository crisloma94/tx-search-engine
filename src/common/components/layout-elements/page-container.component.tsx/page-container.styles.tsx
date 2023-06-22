import styled, { css } from 'styled-components';

export const StyledPageContainer = styled.div(
  ({ theme: { breakpoints } }) => css`
    display: grid;
    max-width: ${breakpoints.xl};
    margin: 0 auto;
  `,
);
