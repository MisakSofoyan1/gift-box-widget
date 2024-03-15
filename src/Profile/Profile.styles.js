import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff26;
  gap: 25px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
`;

export const ImageNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const ThumbnailImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Balance = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > img {
    width: 65px;
    height: auto;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 20px;

    > p {
      margin: 0;
    }
  }
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
