import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { AuthProvider } from "./Context/Auth";
import { AreaProvider } from "./Context/Area";
import reportWebVitals from './reportWebVitals';
import NavScrollExample from './components/homescreen/Homescreen';
import GymCard from "./components/gymCard/GymCard";
import Sidenav from "./gym_admin/Sidenav/Sidenav";
import Gyms from "./gym_admin/Gyms/Gyms";
import Users from "./gym_admin/Users/Users";
import Areas from './gym_admin/Area/Area';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function App() {
  return (
    //<React.StrictMode>
    <AuthProvider>
      <AreaProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavScrollExample />} />
            <Route path="gym/:id" element={<GymCard />} />
            <Route path="admin" element={<Sidenav />} />
            <Route path="gyms" element={<Gyms />} />
            <Route path="users" element={<Users />} />
            <Route path="areas" element={<Areas />} />
          </Routes>
        </BrowserRouter>
      </AreaProvider>
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
