import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Theme from '../../../../../styles/theme';
import TextInput, { TextInputProps } from '../text-input.component';
import { store } from '../../../../../core/store/store';

describe('Text input component test suite', () => {
  const getComponent = (props: TextInputProps) => (
    <Provider store={store}>
      <Theme>
        <TextInput {...props} />
      </Theme>
    </Provider>
  );
  const setup = (props: TextInputProps) => render(getComponent(props));

  const onClickMock = jest.fn();
  const handleChangeMock = jest.fn();
  const defaultProps = {
    placeholder: 'Text input placeholder',
    onClick: onClickMock,
    handleChange: handleChangeMock,
    value: 'Text input value',
    name: 'Text input name',
  };

  it('Should match snapshot', () => {
    const { container } = setup(defaultProps);
    expect(container).toMatchSnapshot();
  });

  it('Should call the onClick function when clicked', async () => {
    setup(defaultProps);
    fireEvent.click(screen.getByRole('textbox'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Should call the handleChange function when clicked', async () => {
    setup(defaultProps);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    });
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
