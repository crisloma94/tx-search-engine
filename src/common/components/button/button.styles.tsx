import styled, { css } from 'styled-components';

const StyledButton = styled.button.attrs({
  type: 'button',
})(
  ({ theme: { colors, fontSizes, fontWeights, spaces } }) => css`
    font-weight: ${fontWeights.bold};
    font-size: ${fontSizes.small};
    color: ${colors.lightText};
    background-color: ${colors.secondary};
    padding: ${spaces.small} ${spaces.large};
    border: none;
    cursor: pointer;
  `,
);

export default StyledButton;
