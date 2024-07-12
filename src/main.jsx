import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css';
import{createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home.jsx';
import Bag from './routes/Bag.jsx';
import myntraStore from './store/index.js';
import {Provider} from "react-redux";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />/*, loader: postLoade */ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}><RouterProvider router={router} />  </Provider>

  </React.StrictMode>,
)
