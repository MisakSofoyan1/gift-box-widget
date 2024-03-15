import styled from "styled-components";

export const BoxWrapper = styled.div`
  background-color: #000c24;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  font-size: 27px;
  background: #001849;
  border: none;
  cursor: pointer;
  margin-left: 83px;
  color: white;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  background-color: #001849;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 27px;
  background-color: ${({ isactive }) => isactive ? '#002571' : '#001849'};
  border: none;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  padding: 10px;
`;

export const Content = styled.div`
  display: ${({ isactive }) => isactive ? 'block' : 'none'};
`;
