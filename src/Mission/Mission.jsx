import React, { useEffect, useState } from 'react';
import MissionCard from '../MissionCard/MissionCard';
import { CardsWrapper } from '../Shopping/Shopping.styles';
import mockMissionCards from '../mock/missionCards';


const Mission = () => {
  const [missions, setMissions] = useState([]);

  const getAllMissions = () => {
    //API call to get missions

    const data = mockMissionCards;
    setMissions(data);
  };

  const onButtonClick = (id) => {
    //navigate to page(deposit or games)

    console.log(id, 'MissionId');
  };

  useEffect(() => {
    getAllMissions();
  }, []);

  return (
    <CardsWrapper>
      {missions.map((mission) => (
        <MissionCard
          key={mission?.id}
          image={mission?.image}
          name={mission?.name}
          reward={mission?.reward}
          buttonName={mission?.buttonName}
          onClick={() => onButtonClick(mission?.id)}
        />
      ))}
    </CardsWrapper>
  )
};

export default Mission;
