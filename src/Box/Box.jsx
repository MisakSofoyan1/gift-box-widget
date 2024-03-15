import React, { useEffect, useRef } from 'react';
import { Backdrop, BoxWrapper } from './Box.styles';
import PropTypes from 'prop-types';

const Box = ({ onClose, userData }) => {
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

Box.propTypes = {
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    profile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }).isRequired,
    missions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    inbox: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
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
    },
    missions: [],
    inbox: [],
  },
};

export default Box;
