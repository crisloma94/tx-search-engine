import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Theme from '../../../../styles/theme';
import { store } from '../../../../core/store/store';
import BookSearch from '../book-search.component';

describe('Book search component test suite', () => {
  const getComponent = () => (
    <Provider store={store}>
      <Theme>
        <BookSearch />
      </Theme>
    </Provider>
  );
  const setup = () => render(getComponent());

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('Should open the results popup when click on input text', () => {
    setup();
    fireEvent.click(screen.getByRole('textbox'));
    expect(screen.getByText('We could not find any books')).toBeInTheDocument();
  });

  it('Should close the results popup when click outside the search results', async () => {
    setup();
    fireEvent.click(document);
    await waitFor(() =>
      expect(
        screen.queryByText('We could not find any books'),
      ).not.toBeInTheDocument(),
    );
  });

  it('Should open the results popup when type on input text', async () => {
    setup();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    });
    await waitFor(() =>
      expect(
        screen.getByText('We could not find any books'),
      ).toBeInTheDocument(),
    );
  });
});
