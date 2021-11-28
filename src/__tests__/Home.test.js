import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Home from '../components/Home/Home';
import Hero from '../components/Hero/Hero';
import Currency from '../components/CurrencyCard/CurrencyCard';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Home', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    currencyReducer: [
      {
        id: '1',
        name: 'BitCoin-Test',
        symbol: 'BTC-TEST',
        priceUsd: '100',
        priceBtc: '1',
        marketCap: '32000',
        totalSupply: '333',
        rank: 1,
      },
    ],
    globalReducer: [
      {
        btcDominance: '43',
        ethDominance: '19',
      },
    ],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Create and show list of Currencys', () => {
    render(<Home />);
    expect(screen.getByTestId('list-container')).toBeInTheDocument();
  });
  test('Create and display GlobalCrypto Data component', () => {
    const globalData = useSelectorMock(
      (mockStore) => mockStore.globalReducer[0],
    );
    render(
      <Hero
        key={globalData.btcDominance}
        btcDominance={globalData.btcDominance}
        ethDominance={globalData.ethDominance}
      />,
    );
    expect(screen.getByTestId('global-container')).toBeInTheDocument();
  });
  test('Create Currency Component inside Rockets List', () => {
    const currencyData = useSelectorMock((mockStore) => mockStore.currencyReducer[0]);
    render(
      <Currency
        key={currencyData.id}
        id={currencyData.id}
        name={currencyData.name}
        symbol={currencyData.symbol}
        priceUsd={currencyData.priceUsd}
        priceBtc={currencyData.priceBtc}
        mC={currencyData.marketCap}
        tSp={currencyData.totalSupply}
        rank={currencyData.rank}
      />,
    );
    expect(screen.getByTestId('list-group-item')).toBeInTheDocument();
  });
});
