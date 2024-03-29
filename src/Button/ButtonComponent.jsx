import React, { useState } from 'react';
import { StyledGiftLogo, Wrapper } from './Button.styles';
import Box from '../Box/Box';
import mockUserData from '../mock/userData';

const ButtonComponent = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [userData, setUserData] = useState(mockUserData);
  const [isIconVisible, setIsIconVisible] = useState(true);

  const getUserDataById = async (id) => {
    //need api call to get user data
    console.log(id, 'UserId');

    const data = mockUserData;
    setUserData(data);
  };

  const openBox = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    getUserDataById(id);

    setIsBoxOpen(true);
    setIsIconVisible(false);
  };

  const closeModal = () => {
    setIsBoxOpen(false);
  };

  return (
    <Wrapper>
      {isBoxOpen && <Box onClose={closeModal} userData={userData} setIsIconVisible={setIsIconVisible}/>}
      <StyledGiftLogo $isVisible={isIconVisible} onClick={openBox} />
    </Wrapper>
  )
};

export default ButtonComponent;
