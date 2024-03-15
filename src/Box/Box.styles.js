import styled from "styled-components";

export const BoxWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  bottom: 300px;
  right: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
