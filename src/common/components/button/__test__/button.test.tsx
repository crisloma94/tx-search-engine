import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Theme from '../../../../styles/theme';
import { store } from '../../../../core/store/store';
import Button, { ButtonProps } from '../button.component';

describe('Button component test suite', () => {
  const getComponent = (props: ButtonProps) => (
    <Provider store={store}>
      <Theme>
        <Button {...props} />
      </Theme>
    </Provider>
  );
  const setup = (props: ButtonProps) => render(getComponent(props));

  const onClickMock = jest.fn();
  const defaultProps = { text: 'Button text', onClick: onClickMock };

  it('Should match snapshot', () => {
    const { container } = setup(defaultProps);
    expect(container).toMatchSnapshot();
  });

  it('Should call the onClick function when clicked', async () => {
    setup(defaultProps);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
