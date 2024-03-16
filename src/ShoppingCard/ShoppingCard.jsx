import React from 'react';
import { ButtonsWrapper, ShoppingCardBuyButton, ShoppingCardCoinIcon, ShoppingCardDetailsButton, ShoppingCardImage, ShoppingCardName, ShoppingCardPrice, ShoppingCardWrapper } from './Shopping.styles';
import CoinIcon from '../assets/coin.svg';
import PropTypes from 'prop-types';

const ShoppingCard = ({ image = 'https://img.rationalcdn.com/starsweb/prod/10294_3.jpg', name = '10 FREE SPINS WOLF GOLD', price = 4000, onBuy, onDetails }) => {
  return (
    <ShoppingCardWrapper>
      <ShoppingCardImage src={image} alt={name} />
      <ShoppingCardName>{name}</ShoppingCardName>
      <ShoppingCardPrice>
        <ShoppingCardCoinIcon src={CoinIcon} alt="Coins" />
        Price: {price}
      </ShoppingCardPrice>
      <ButtonsWrapper>
        <ShoppingCardBuyButton onClick={onBuy}>Buy Now</ShoppingCardBuyButton>
        <ShoppingCardDetailsButton onClick={onDetails}>Details</ShoppingCardDetailsButton>
      </ButtonsWrapper>
    </ShoppingCardWrapper>
  );
};

ShoppingCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onBuy: PropTypes.func.isRequired,
  onDetails: PropTypes.func.isRequired,
};

ShoppingCard.defaultProps = {
  image: '',
  name: '',
  price: 0,
  onBuy: () => { },
  onDetails: () => { },
};

export default ShoppingCard;
