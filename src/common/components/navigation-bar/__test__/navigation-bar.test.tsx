import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Theme from '../../../../styles/theme';
import { store } from '../../../../core/store/store';
import NavigationBar from '../navigation-bar.component';

describe('Navigation bar component test suite', () => {
  const getComponent = () => (
    <Provider store={store}>
      <Theme>
        <NavigationBar />
      </Theme>
    </Provider>
  );
  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
