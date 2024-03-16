import React, { useEffect, useState } from 'react';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import { CardsWrapper } from './Shopping.styles';
import mockShoppingCards from '../mock/shoppingCards';


const Shopping = () => {
  const [cards, setCards] = useState([]);

  const getAllShoppingCards = () => {
    //API call to get shopping cards

    const data = mockShoppingCards;
    setCards(data);
  };

  const onBuy = (itemId) => {
    //logic to buy
    console.log(itemId, 'ITEMID');
  };

  const onDetails = (itemId) => {
    // SHOW details
    console.log(itemId, 'DETAILS');
  };

  useEffect(() => {
    getAllShoppingCards();
  }, []);

  return (
    <CardsWrapper>
      {cards.map((card) => (
        <ShoppingCard
          key={card?.id}
          image={card?.image}
          name={card?.name}
          price={card?.price}
          onBuy={() => onBuy(card?.id)}
          onDetails={() => onDetails(card?.id)}
        />
      ))}
    </CardsWrapper>
  )
};

export default Shopping;
