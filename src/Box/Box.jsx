import React, { useEffect, useRef, useState } from 'react';
import { Backdrop, BoxWrapper, CloseButton, Content, ContentWrapper, TabButton, TabWrapper } from './Box.styles';
import PropTypes from 'prop-types';
import Profile from '../Profile/ProfileComponent';

const Box = ({ onClose, userData }) => {
  const boxRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Shop');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Backdrop>
      <BoxWrapper ref={boxRef}>
        <TabWrapper>
          <TabButton isactive={activeTab === 'Shop' ? 'true' : ''} onClick={() => handleTabClick('Shop')}>Shop</TabButton>
          <TabButton isactive={activeTab === 'Missions' ? 'true' : ''} onClick={() => handleTabClick('Missions')}>Missions</TabButton>
          <TabButton isactive={activeTab === 'Inbox' ? 'true' : ''} onClick={() => handleTabClick('Inbox')}>Inbox</TabButton>
          <CloseButton onClick={onClose}>&#10006;</CloseButton>
        </TabWrapper>
        <ContentWrapper>
          <Profile data={userData?.profile} />
          <Content isactive={activeTab === 'Shop' ? 'true' : ''}>
            Shop content
          </Content>
          <Content isactive={activeTab === 'Missions' ? 'true' : ''}>
            Missions content
          </Content>
          <Content isactive={activeTab === 'Inbox' ? 'true' : ''}>
            Inbox content
          </Content>
        </ContentWrapper>
      </BoxWrapper>
    </Backdrop>
  )
};

Box.propTypes = {
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    profile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    missions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    inbox: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        seen: PropTypes.bool.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

Box.defaultProps = {
  onClose: () => { },
  userData: {
    profile: {
      name: '',
      balance: 0,
      thumbnail: '',
    },
    missions: [],
    inbox: [],
  },
};

export default Box;
