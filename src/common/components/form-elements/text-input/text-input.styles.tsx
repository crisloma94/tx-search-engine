import styled, { css } from 'styled-components';

const StyledTextInput = styled.input.attrs({
  type: 'text',
})(
  ({ theme: { colors, fontSizes, spaces } }) => css`
    font-size: ${fontSizes.small}
    border: none;
    color: ${colors.darkText};
    background-color: transparent;
    padding: ${spaces.small};
    border: 1px solid ${colors.secondary};

    &::placeholder {
      color: ${colors.greyText};
    }
  `,
);

export default StyledTextInput;
