import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard/Pages/Dashboard.tsx';
import Amenities from './Dashboard/Pages/Amenities.tsx';
import Equipments from './Dashboard/Pages/Equipments.tsx';
import Facilities from './Dashboard/Pages/Facilities.tsx';
import { Provider } from 'react-redux'
import { store } from './Dashboard/Redux/store.ts';
import Form from './Dashboard/Pages/Form.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: 
        <Dashboard/>
      },{
        path:"/Amenities",
        element:<Amenities/>
      },{
        path:"/Equipments",
        element:<Equipments/>
      },{
        path:"/Facilities",
        element:<Facilities/>
      }
    ] , 
  },
  {
    path:"/Form",
    element:<Form/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
