import styled, { css } from 'styled-components';

export const StyledHomepage = styled.div(
  ({ theme: { spaces } }) => css`
  display: grid;
  padding: ${spaces.medium}
  `,
);
