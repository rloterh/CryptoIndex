import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import CurrencyImg from '../../assets/currency.png';
import './CurrencyCard.scss';

const CurrencyCard = (props) => {
  const {
    id, name, symbol, priceUsd, priceBtc, mC, tSp, rank,
  } = props;
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate('details', {
      state: {
        id, name, symbol, priceUsd, priceBtc, mC, tSp, rank,
      },
    });
  };
  const altCurency = { style: 'currency', currency: 'USD' };
  const convertToDollars = new Intl.NumberFormat('en-US', altCurency);
  return (
    <ListGroup.Item key={id} onClick={goToDetails} data-testid="list-group-item">
      <div className="d-flex" id="data-container">
        <div className="bottom-data d-flex">
          <img src={CurrencyImg} alt="currency-icon" className="currency-image" />
          <i className="far fa-arrow-alt-circle-right" />
        </div>
        <h3>{name}</h3>
        <p>
          {' ( '}
          {symbol}
          {' ) '}
        </p>
        <p>
          { convertToDollars.format(priceUsd) }
        </p>
      </div>
    </ListGroup.Item>
  );
};

CurrencyCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  priceUsd: PropTypes.string.isRequired,
  priceBtc: PropTypes.string.isRequired,
  mC: PropTypes.string.isRequired,
  tSp: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default CurrencyCard;
