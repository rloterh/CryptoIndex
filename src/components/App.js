import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import CurrencyDetails from './CurrencyDetails/CurrencyDetails';
import './App.scss';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<CurrencyDetails />} />
    </Routes>
  </Router>
);

export default App;
