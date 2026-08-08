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

import Vidu1B11 from './components/Bai11/Vidu1';
import Vidu2 from './components/Bai11/Vidu2';

import Vidu1B12 from './components/Bai12/Vidu1';

import A from './components/Bai31/A';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Blog name="Quoc"/>} />
          <Route path="/account" element={<Account />} />

          <Route path="/Vidu1B11" element={<Vidu1B11 />} />
          <Route path="/Vidu2" element={<Vidu2 />} />
          <Route path="/Vidu1B12" element={<Vidu1B12 />} />
          <Route path="/Abai31" element={<A />} />

        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
reportWebVitals();