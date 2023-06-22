import { RouterProvider } from '../node_modules/react-router-dom/dist/index';
import router from './routes';
import Theme from './styles/theme/index';
import { Provider } from 'react-redux';
import { store } from './core/store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  );
}

export default App;
