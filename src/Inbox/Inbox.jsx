
import React, { useEffect, useState } from 'react';
import InboxCard from './InboxCard';
import PropTypes from 'prop-types';
import mockInboxCards from '../mock/inboxCards';

const Inbox = ({ id }) => {
  const [inboxes, setInboxes] = useState([]);

  const getInboxes = (userId) => {
    //API call to get inboxes by userId
    console.log(userId, 'getInboxesByUserId');

    const data = mockInboxCards;
    setInboxes(data);
  };

  useEffect(() => {
    getInboxes(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {inboxes.map((inbox) => (
        <InboxCard
          key={inbox?.id}
          id={inbox?.id}
          title={inbox?.title}
          date={inbox?.timestamp}
          content={inbox?.content}
          seen={inbox?.seen}
        />
      ))}
    </div>
  )
};

Inbox.propTypes = {
  id: PropTypes.number.isRequired,
};

Inbox.defaultProps = {
  id: 0,
};

export default Inbox;
