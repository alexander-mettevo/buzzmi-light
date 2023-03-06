import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import './styles/style.scss'
import * as DatePicker from "react-date-picker/dist/DatePicker.css";
import OtherServices from "./components/pages/otherServices/OtherServices.jsx";
// import * as ReactCalendar from "react-calendar/dist/Calendar.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
    errorElement: <>Error</>,
  },
  {
    path: "/other-services",
    element: <OtherServices/>,
    errorElement: <>Error</>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
