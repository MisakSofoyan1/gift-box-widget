import { ReactComponent as GiftLogo } from '../assets/gift.svg';
import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledGiftLogo = styled(GiftLogo)`
  width: 120px;
  height: 120px;
  cursor: pointer;
  transition: width 0.7s, height 0.7s, opacity 1.5s;
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  position: relative;
  bottom: 0;
  right: 0;

  &:hover {
    width: 140px;
    height: 140px;
  }
`;
