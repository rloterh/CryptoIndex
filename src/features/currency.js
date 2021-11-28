import axios from 'axios';

const FETCH_CURRENCY = 'FETCH_CURRENCY';
const baseURL = 'https://api.coinlore.net/api/tickers/';

const initialState = [];

export const fetchCurrencies = () => async (dispatch) => {
  const response = await axios.get(baseURL);
  const payload = response.data.data.map((data) => {
    const { id, name, symbol } = data;
    const priceUsd = data.price_usd;
    const priceBtc = data.price_btc;
    const marketCap = data.market_cap_usd;
    const totalSupply = data.tsupply;
    const { rank } = data;
    const currencyData = {
      id, name, symbol, priceUsd, priceBtc, marketCap, totalSupply, rank,
    };
    return currencyData;
  });
  dispatch({
    type: FETCH_CURRENCY,
    payload,
  });
};