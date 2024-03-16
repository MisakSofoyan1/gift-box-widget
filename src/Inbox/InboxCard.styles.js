import styled from "styled-components";

export const InboxCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #ffffff0d;
  color: ${({ $isSeen }) => $isSeen ? '#ffffff69' : 'white'};

  &:hover {
    background-color: #ffffff1a;
  }
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $isSeen }) => $isSeen ? '#0a317f' : 'white'};
  margin-right: 10px;
`;

export const DateWrapper = styled.div`
  font-size: 14px;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 40px;
  word-wrap: break-word;
  text-align: center;
`;

export const Preview = styled.div`
  color: #666;
`;

export const Message = styled.div`
  margin-top: 10px;
  color: #ffffffbf;
  font-size: 18px;
  overflow: hidden;
  text-align: center;
  line-height: 2;
  max-height: ${({ $isExpanded }) => $isExpanded ? '500px' : '40px'};
  transition: max-height 1.5s; 
`;

export const DotDateWrapper = styled.div`
  display: flex;
  align-items: center;
`;
