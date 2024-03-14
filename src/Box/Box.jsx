import React, { useEffect, useRef } from 'react';
import { BoxWrapper } from './Box.styles';

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
    <BoxWrapper ref={boxRef}>
      <button onClick={onClose}>Close Modal</button>
      asdasdasd
    </BoxWrapper>
  )
};

export default Box;
