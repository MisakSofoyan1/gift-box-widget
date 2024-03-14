import { ReactComponent as GiftLogo } from '../assets/gift.svg';
import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: aquamarine;
`;

export const StyledGiftLogo = styled(GiftLogo)`
  width: 120px;
  height: 120px;
  cursor: pointer;
  transition: width 0.7s, height 0.7s;

  &:hover {
    width: 140px;
    height: 140px;
  }
`;
