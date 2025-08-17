import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import CardDetail from './pages/CardDetail.jsx';
import Reading from './pages/Reading.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'card/:id', element: <CardDetail /> },
      { path: 'reading', element: <Reading /> },
    ],
  },
]);

export default router;
