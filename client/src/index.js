import React from 'react';
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from "./Context/Auth";
import { AreaProvider } from "./Context/Area";
import { CategoryProvider } from './Context/Category';
import {GymProvider} from "./Context/Gym";
import { UserProvider } from "./Context/User";
import reportWebVitals from './reportWebVitals';
import NavScrollExample from './components/homescreen/Homescreen';
import GymCard from "./components/gymCard/GymCard";
import Gyms from "./gym_admin/Gyms/Gyms";
import Users from "./gym_admin/Users/Users";
import Areas from './gym_admin/Area/Area';
import Category from './gym_admin/Category/Category';

import PrivateRoute from "./privateRoute/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    //<React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <AreaProvider>
          <CategoryProvider>
            <GymProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<NavScrollExample />} />

                  <Route element={<PrivateRoute role={"admin"} />}>
                    <Route path="gym/:id" element={<GymCard />} />
                    <Route path="admin/gyms" element={<Gyms />} />
                    <Route path="admin/users" element={<Users />} />

                    <Route path="admin/categories" element={<Category />} />
                    <Route path="admin/areas" element={<Areas />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </GymProvider>
          </CategoryProvider>
        </AreaProvider>
      </UserProvider>
    </AuthProvider>
    //</React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);