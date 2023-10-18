import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavScrollExample from './components/homescreen/Homescreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './components/register/Register';

export default function App () {
  return (
  //<React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavScrollExample />} >
    </Route>
    <Route>
          <Route path="/register" element={<RegisterForm />} />
    </Route>
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>
);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
