import { render } from '@testing-library/react';
import HomePage from '../homepage.view';
import Theme from '../../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';

describe('Homepage view test suite', () => {
  const getComponent = () => (
    <Provider store={store}>
      <Theme>
        <HomePage />
      </Theme>
    </Provider>
  );
  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
