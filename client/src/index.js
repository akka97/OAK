import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import { GymProvider } from "./Context/GymContext";
import reportWebVitals from './reportWebVitals';
import NavScrollExample from './components/homescreen/Homescreen';
import GymCard from "./components/gymCard/GymCard";
import GymAdmin from "./gym_admin/GymAdmin";
import Gyms from "./gym_admin/Gyms/Gyms";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function App() {
  return (
    //<React.StrictMode>
    <GymProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavScrollExample />} />
          <Route path="gym/:id" element={<GymCard />} />
          <Route path="admin" element={<GymAdmin />} />
          <Route path="gyms" element={<Gyms />} />
        </Routes>
      </BrowserRouter>
    </GymProvider>
    //</React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
