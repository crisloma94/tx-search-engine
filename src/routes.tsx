import { createBrowserRouter } from 'react-router-dom';
import Base from './views/base/base.view';
import BookDetail from './views/book-detail/book-detail.view';
import ErrorNotFound from './views/error-not-found/error-not-found';
import HomePage from './views/homepage/homepage.view';

const router = createBrowserRouter([
  {
    element: <Base />,
    errorElement: <ErrorNotFound />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'book/:bookId',
        element: <BookDetail />,
      },
    ],
  },
]);

export default router;
