import { render } from '@testing-library/react';
import Theme from '../../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../../core/store/store';
import Base from '../base.view';

describe('Base view test suite', () => {
  const getComponent = () => (
    <Provider store={store}>
      <Theme>
        <Base />
      </Theme>
    </Provider>
  );
  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
