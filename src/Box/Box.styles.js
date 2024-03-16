import styled from "styled-components";

export const BoxWrapper = styled.div`
  background-color: #000c24;
  margin-right: 180px;
  transform: ${({ isopen }) => isopen ? 'translate3d(0, 0, 0)' : 'translate3d(0, 65vh, 0)' };
  transition: transform 1.5s;
  width: 600px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isopen }) => isopen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)' };
  transition: background-color 1.5s ease;
  display: flex;
  justify-content: end;
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
  gap: 10px;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 27px;
  background-color: ${({ isactive }) => isactive ? '#002571' : '#001849'};
  border: none;
  color: ${({ isactive }) => isactive ? '#fff' : '#4035c9'};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #002571;
    color: #fff;
  }
`;

export const ContentWrapper = styled.div`
  padding: 10px;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
  scrollbar-width: none;
`;

export const Content = styled.div`
  display: ${({ isactive }) => isactive ? 'block' : 'none'};
`;
