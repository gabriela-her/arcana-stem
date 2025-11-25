import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import CardDetail from './pages/CardDetail/CardDetail.jsx';
import Reading from './pages/ReadingPage/Reading.jsx';
import CardsGallery from './pages/CardsGallery/CardsGallery.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },      
      { path: 'reading', element: <Reading /> },
      { path: "cards", element: <CardsGallery /> },
      { path: 'card/:id', element: <CardDetail /> },

    ]
  }
]);

export default router;
