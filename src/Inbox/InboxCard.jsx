import React, { useState } from 'react';
import { DateWrapper, Dot, DotDateWrapper, InboxCardWrapper, Message, Title } from './InboxCard.styles';
import PropTypes from 'prop-types';

const InboxCard = ({ id, title, date, content, seen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    //API request to make this inbox seen
    console.log(id, 'inboxID');

    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString) => {
    const currentDate = new Date();
    const formattedDate = new Date(dateString);

    if (currentDate.toDateString() === formattedDate.toDateString()) {
      return 'Today';
    }
    else if (currentDate.getDate() - formattedDate.getDate() === 1) {
      return 'Yesterday';
    }
    else {
      return dateString;
    }
  };

  return (
    <InboxCardWrapper onClick={toggleExpand} $isSeen={seen}>
      <DotDateWrapper>
        <Dot $isSeen={seen} />
        <DateWrapper>{formatDate(date)}</DateWrapper>
      </DotDateWrapper>
      <Title>{title}</Title>
      <Message $isExpanded={isExpanded}>{content}</Message>
    </InboxCardWrapper>
  );
};

InboxCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
};

InboxCard.defaultProps = {
  id: 0,
  title: '',
  date: '',
  content: '',
  seen: false,
};

export default InboxCard;
