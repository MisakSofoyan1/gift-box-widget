import React, { useEffect, useRef, useState } from 'react';
import { Backdrop, BoxWrapper, CloseButton, Content, ContentWrapper, TabButton, TabWrapper } from './Box.styles';
import PropTypes from 'prop-types';
import Profile from '../Profile/ProfileComponent';
import Shopping from '../Shopping/Shopping';
import Mission from '../Mission/Mission';
import Inbox from '../Inbox/Inbox';

const Box = ({ onClose, userData, setIsIconVisible }) => {
  const boxRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Shop');
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsIconVisible(true);
    setTimeout(onClose, 1500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Backdrop $isOpen={isOpen}>
      <BoxWrapper ref={boxRef} $isOpen={isOpen}>
        <TabWrapper>
          <TabButton $isActive={activeTab === 'Shop'} onClick={() => handleTabClick('Shop')}>Shop</TabButton>
          <TabButton $isActive={activeTab === 'Missions'} onClick={() => handleTabClick('Missions')}>Missions</TabButton>
          <TabButton $isActive={activeTab === 'Inbox'} onClick={() => handleTabClick('Inbox')}>Inbox</TabButton>
          <CloseButton onClick={handleClose}>&#10006;</CloseButton>
        </TabWrapper>
        <ContentWrapper>
          <Profile data={userData} />
          <Content $isActive={activeTab === 'Shop'}>
            <Shopping />
          </Content>
          <Content $isActive={activeTab === 'Missions'}>
            <Mission />
          </Content>
          <Content $isActive={activeTab === 'Inbox'}>
            <Inbox id={userData?.id} />
          </Content>
        </ContentWrapper>
      </BoxWrapper>
    </Backdrop>
  )
};

Box.propTypes = {
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  setIsIconVisible: PropTypes.func.isRequired,
};

Box.defaultProps = {
  onClose: () => { },
  userData: {
    id: 0,
    name: '',
    balance: 0,
    thumbnail: '',
  },
  setIsIconVisible: () => { },
};

export default Box;
