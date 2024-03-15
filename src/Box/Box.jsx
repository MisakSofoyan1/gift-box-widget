import React, { useEffect, useRef } from 'react';
import { Backdrop, BoxWrapper } from './Box.styles';

const Box = ({ onClose }) => {
  const boxRef = useRef(null);

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
        <button onClick={onClose}>Close Modal</button>
        asdasdasd
      </BoxWrapper>
    </Backdrop>
  )
};

export default Box;
