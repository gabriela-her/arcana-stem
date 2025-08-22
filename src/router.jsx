import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home';
import CardDetail from './pages/CardDetail';
import Reading from './pages/Reading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'card/:id', element: <CardDetail /> },
      { path: 'reading', element: <Reading /> }
    ]
  }
]);

export default router;
