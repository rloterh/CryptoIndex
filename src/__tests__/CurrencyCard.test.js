import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CurrencyCard from '../components/CurrencyCard/CurrencyCard';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('CurrencyCard', () => {
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
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Create and show list of Currencies', () => {
    render(<CurrencyCard />);
    expect(screen.getByTestId('list-group-item')).toBeInTheDocument();
  });
  test('Create CurrencyCard Component inside Rockets List', () => {
    const currencyData = useSelectorMock((mockStore) => mockStore.currencyReducer[0]);
    render(
      <CurrencyCard
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

describe('checks if CurrencyCard component renders correctly', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <CurrencyCard />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
