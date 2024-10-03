import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import Notfound from './components/Notfound.jsx';
import Social from './components/Services/Social.jsx';
import Web from './components/Services/Web.jsx';
import Whatsapp from './components/Services/Whatsapp.jsx';
import Ppc from './components/Services/Ppc.jsx';
import Seo from './components/Services/Seo.jsx';
import Pricing from './components/Pricing.jsx';




const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'*',
        element:<Notfound/>
      },
      {
        path:'social',
        element:<Social/>
      },
      {
        path:'seo',
        element:<Seo/>
      },
      {
        path:'web',
        element:<Web/>
      },
      {
        path:'whatsapp',
        element:<Whatsapp/>
      },
      {
        path:'ppc',
        element:<Ppc/>
      },
      {
        path:'pricing',
        element:<Pricing/>
      },
      
      
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);