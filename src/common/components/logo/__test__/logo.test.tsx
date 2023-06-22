import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Theme from '../../../../styles/theme';
import { store } from '../../../../core/store/store';
import Logo from '../logo.component';

describe('Logo component test suite', () => {
  const getComponent = () => (
    <Provider store={store}>
      <Theme>
        <Logo />
      </Theme>
    </Provider>
  );
  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
