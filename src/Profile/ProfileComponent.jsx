import React from 'react';
import { Balance, ImageNameWrapper, Name, ProfileWrapper, ThumbnailImage } from './Profile.styles';
import PropTypes from 'prop-types';
import CoinIcon from '../assets/coin.svg';

const Profile = ({ data }) => {
  return (
    <ProfileWrapper>
      <ImageNameWrapper>
        <ThumbnailImage src={data?.thumbnail} alt="Profile Thumbnail" />
        <Name>{data.name}</Name>
      </ImageNameWrapper>
      <Balance>
        <img src={CoinIcon} alt="Coins" />
        <div>
          <p>Balance</p>
          <p>{data.balance}</p>
        </div>
      </Balance>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

Profile.defaultProps = {
  profile: {
    name: '',
    balance: 0,
    thumbnail: '',
  },
};

export default Profile;