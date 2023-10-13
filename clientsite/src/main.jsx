import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Blogs from './Components/Blogs.jsx';
import EditPost from './Components/EditPost.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/posts',
        element: <Blogs />,
        loader: () => fetch('http://localhost:5000/posts')
      },
      {
        path: '/posts/:id',
        element: <EditPost />,
        loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
