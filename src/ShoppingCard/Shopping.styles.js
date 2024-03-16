import styled from "styled-components";

export const ShoppingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff0d;;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 0 0 calc(50% - 10px);
`;
export const ShoppingCardImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  height: 130px;
`;

export const ShoppingCardName = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
  color: #fff;;
`;

export const ShoppingCardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #141f5973;
  font-size: 18px;
  color: #ffffffb3;
  border-radius: 8px;
  width: 70%;
  height: 40px;
  margin: 10px auto;
`;

export const ShoppingCardCoinIcon = styled.img`
  margin-right: 5px;
  width: 25px;
`;

export const ShoppingCardBuyButton = styled.button`
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(45deg, #00b7ffd4, #003671);
  background-size: 200% 200%;
  transition: background 1s ease;

  &:hover {
    background-position: right center;
  }
`;

export const ShoppingCardDetailsButton = styled.button`
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(45deg, #ffffff0d, #00b7ffd4);
  background-size: 200% 200%;
  transition: background 1s ease;

  &:hover {
    background-position: right center;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`;
