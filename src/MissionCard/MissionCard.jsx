import React from 'react';
import {
  MissionCardImage,
  MissionCardName,
  MissionCardWrapper,
  MissionCardReward,
  MissionCardCoinIcon,
  ButtonsWrapper,
  MissionCardBuyButton,
  RewardIconAmountWrapper,
  Terms,
} from './MissionCard.styles';
import CoinIcon from '../assets/coin.svg';

const MissionCard = ({ image, name, reward, buttonName, onClick }) => {
  return (
    <MissionCardWrapper>
      <MissionCardImage src={image} alt={name} />
      <MissionCardName>{name}</MissionCardName>
      <div>
        <Terms>Terms & Conditions</Terms>
        <MissionCardReward>
          Reward:
          <RewardIconAmountWrapper>
            <MissionCardCoinIcon src={CoinIcon} alt="Coins" />
            {reward}
          </RewardIconAmountWrapper>
        </MissionCardReward>
        <ButtonsWrapper>
          <MissionCardBuyButton onClick={onClick}>{buttonName}</MissionCardBuyButton>
        </ButtonsWrapper>
      </div>
    </MissionCardWrapper>
  )
};

export default MissionCard;
