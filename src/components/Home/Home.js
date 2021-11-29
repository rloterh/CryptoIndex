import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup, Form } from 'react-bootstrap';
import { fetchCurrencies } from '../../features/currency';
import { fetchGenData } from '../../features/global';
import CurrencyCard from '../CurrencyCard/CurrencyCard';
import Hero from '../Hero/Hero';
import './Home.scss';

const Home = () => {
  const backArrow = document.querySelector('#back-arrow');
  if (backArrow !== null) {
    backArrow.classList.add('d-none');
  }
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(fetchGenData());
  }, []);
  const currencies = storeData.currencyReducer;
  const globalData = storeData.globalReducer;
  const [currencyInput, setInput] = useState('');
  const listcurrencies = currencies.filter(
    (currency) => currencyInput === '' || currency.name.toLowerCase().includes(currencyInput) || currency.name.includes(currencyInput),
  );
  return (
    <Container>
      {globalData.map((data) => (
        <Hero
          key={data.btcDominance}
          btcDominance={data.btcDominance}
          ethDominance={data.ethDominance}
          volumeChange={data.volumeChange}
        />
      ))}
      <Form.Control
        className="search-form"
        value={currencyInput}
        onInput={(e) => setInput(e.target.value)}
        type="text"
        required
        placeholder="Search"
        id="name-input"
      />
      <div id="home-tag">
        <p>Top Cryptocurrencies</p>
      </div>
      <ListGroup data-testid="list-container">
        {listcurrencies.map((currency) => (
          <CurrencyCard
            key={currency.id}
            id={currency.id}
            name={currency.name}
            symbol={currency.symbol}
            priceUsd={currency.priceUsd}
            priceBtc={currency.priceBtc}
            mC={currency.marketCap}
            tSp={currency.totalSupply}
            rank={currency.rank}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
