import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import './styles/style.scss'
import App from "./App.jsx";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/pages/auth/login/Login.jsx";
import OtherServices from "./components/pages/auth/otherServices/OtherServices.jsx";
import Support from "./components/pages/support/Support.jsx";
import BaseLayout from "./components/layouts/baseLayout/BaseLayout.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
// import * as ReactCalendar from "react-calendar/dist/Calendar.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
