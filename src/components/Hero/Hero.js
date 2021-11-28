import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import './Hero.scss';

const Hero = (props) => {
  const { btcDominance, ethDominance } = props;
  return (
    <div className="hero-container d-flex" data-testid="global-container">
      <div className="d-data-1">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="d-data-2">
        <h2>::Currency Dominance::</h2>
        <p>
          {'BTC: '}
          {btcDominance}
          %
        </p>
        <p>
          {'ETH: '}
          {ethDominance}
          %
        </p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  btcDominance: PropTypes.string.isRequired,
  ethDominance: PropTypes.string.isRequired,
};

export default Hero;
