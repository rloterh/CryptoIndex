import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import CurrencyDetails from './CurrencyDetails/CurrencyDetails';
import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <p>Crypto Index Nav</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CurrencyDetial" element={<CurrencyDetails />} />
      </Routes>
    </Router>
  </div>
);

export default App;
