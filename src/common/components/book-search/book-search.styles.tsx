import styled, { css } from 'styled-components';

export const StyledBookSearch = styled.div(
  ({ theme: { spaces } }) => css`
    position: relative;
    padding: ${spaces.small};
  `,
);
