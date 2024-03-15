import React, { useState } from 'react';
import { StyledGiftLogo, Wrapper } from './Button.styles';
import Box from '../Box/Box';

const ButtonComponent = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const openBox = () => {
    setIsBoxOpen(true);
  };

  const closeModal = () => {
    setIsBoxOpen(false);
  };

  return (
      <Wrapper>
      {isBoxOpen && <Box onClose={closeModal} />}
      <StyledGiftLogo isvisible={isBoxOpen ? '' : 'true'} onClick={openBox} />
      </Wrapper>
  )
};

export default ButtonComponent;