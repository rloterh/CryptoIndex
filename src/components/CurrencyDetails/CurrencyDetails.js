import { ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import currencyImg from '../../assets/currency.png';
import './CurrencyDetails.scss';

const CurrencyDetails = () => {
  const backArrow = document.querySelector('#back-arrow');
  if (backArrow !== null) {
    backArrow.classList.remove('d-none');
  }
  const { state } = useLocation();
  const altCurency = { style: 'currency', currency: 'USD' };
  const convertToDollars = new Intl.NumberFormat('en-US', altCurency);
  return (
    <div className="full-details-container d-flex">
      <div className="title-container">
        <img src={currencyImg} alt="eth" id="eth-logo" />
        <div className="alias">
          <h2>{ state.name }</h2>
          <h3>
            {' ( '}
            { state.symbol }
            {' ) '}
          </h3>
        </div>
      </div>
      <div id="detail-tag">
        <h4>
          { state.name }
          {' Info '}
        </h4>
      </div>
      <ListGroup className="data-container">
        <ListGroup.Item className="row">
          <h3>
            {'Currency Name: '}
            { state.name }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Symbol: '}
            { state.symbol }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Price(USD): '}
            { convertToDollars.format(state.priceUsd) }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'BTC Price: ( '}
            { state.priceBtc }
            {' ) BTC'}
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Marketcap: '}
            { convertToDollars.format(state.mC) }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Total Supply: '}
            { state.tSp }
          </h3>
        </ListGroup.Item>
        <ListGroup.Item className="row">
          <h3>
            {'Rank: '}
            { state.rank }
          </h3>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CurrencyDetails;
