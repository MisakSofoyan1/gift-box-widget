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
    <div>
      <Wrapper>
        <StyledGiftLogo onClick={openBox} />
      </Wrapper>

      {isBoxOpen && <Box onClose={closeModal} />}
    </div>
  )
};

export default ButtonComponent;