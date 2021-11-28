import currencyReducer from '../features/currency';

const prevState = [];

const fetchCurrencies = () => {
  const fetchedData = {
    id: '23',
    name: ' Coin MMM',
    symbol: 'CMM',
    priceUsd: '68',
    priceBtc: '34',
    marketCap: '354',
    totalSupply: '421',
    rank: 1,
  };
  return prevState.push(fetchedData);
};

describe('currencyReducer Testing', () => {
  test('Testing initial state currencyReducer', () => {
    expect(currencyReducer(undefined, {})).toEqual([]);
  });
  test('Testing fetching data to currencyReducer', () => {
    expect(currencyReducer(prevState, fetchCurrencies())).toEqual([
      {
        id: '23',
        name: ' Coin MMM',
        symbol: 'CMM',
        priceUsd: '68',
        priceBtc: '34',
        marketCap: '354',
        totalSupply: '421',
        rank: 1,
      },
    ]);
  });
});
