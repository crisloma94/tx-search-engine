import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled(Link)(
  ({ theme: { colors, spaces, fontFamilies } }) => css`
    display: flex;
    align-items: center;
    gap: ${spaces.small};
    text-decoration: none;
    span {
      font-family: ${fontFamilies.primary};
      color: ${colors.secondary};
    }
  `,
);
