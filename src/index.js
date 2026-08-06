import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Blog from './components/Blog';
import Account from './components/Account';

import Vidu1 from './components/Bai11/Vidu1';
import Login from './components/Bai11/Login';
import Vidu2 from './components/Bai11/Vidu2';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Blog name="Quoc"/>} />
          <Route path="/account" element={<Account />} />

          <Route path="/Vidu1" element={<Vidu1 />} />
          <Route path="/Vidu2" element={<Vidu2 />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
