import globalReducer from '../features/global';

const prevState = [];

const fetchGenData = () => {
  const fetchedData = {
    btcDominance: '39',
    ethDominance: '18',
  };
  return prevState.push(fetchedData);
};

describe('globalReducer Testing', () => {
  test('Testing initial state globalReducer', () => {
    expect(globalReducer(undefined, {})).toEqual([]);
  });
  test('Testing fetching data to globalReducer', () => {
    expect(globalReducer(prevState, fetchGenData())).toEqual([
      {
        btcDominance: '39',
        ethDominance: '18',
      },
    ]);
  });
});
