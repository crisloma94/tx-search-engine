import styled, { css } from 'styled-components';
import { StyledBookCover } from '../book-cover/book-cover.styles';

export const StyledBookCard = styled.li(
  ({ theme: { colors, spaces, fontSizes, fontWeights } }) => css`
    list-style: none;
    padding: ${spaces.medium};
    display: grid;
    gap: ${spaces.medium};
    grid-template-areas: 'img info';
    grid-template-columns: 5rem auto;

    p {
      margin: 0;
    }

    ${StyledBookCover} {
      width: 5rem;
      height: 7rem;
      object-fit: fill;
      grid-area: img;
    }

    .book-card__info {
      grid-area: info;
    }

    .book-card__title {
      font-size: ${fontSizes.medium};
      font-weight: ${fontWeights.bold};
    }

    .book-card__publisher {
      color: ${colors.greyText};
      font-size: ${fontSizes.small};
    }

    a {
      display: block;
      color: ${colors.secondary};
      font-size: ${fontSizes.small};
      padding-top: ${spaces.small};
    }
  `,
);
