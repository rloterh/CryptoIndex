import axios from 'axios';

const FETCH_GEN_METRICS = 'FETCH_GEN_METRICS';
const baseURL = 'https://api.coinlore.net/api/global/';

const initialState = [];

export const fetchGenData = () => async (dispatch) => {
  const response = await axios.get(baseURL);
  const payload = response.data.map((data) => {
    const btcDominance = data.btc_d;
    const ethDominance = data.eth_d;
    const currencyData = {
      btcDominance,
      ethDominance,
    };
    return currencyData;
  });
  dispatch({
    type: FETCH_GEN_METRICS,
    payload,
  });
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GEN_METRICS:
      return action.payload;
    default:
      return state;
  }
};

export default globalReducer;
