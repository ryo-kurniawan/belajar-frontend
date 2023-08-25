import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import NewsPage from './pages/news_page';
import ErrorPage from './pages/404';
import './index.css';
import LinkTreePage from './pages/link_tree';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/news',
    element: <NewsPage/>
  },
  {
    path: '/linktree',
    element: <LinkTreePage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
