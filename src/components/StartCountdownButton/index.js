import React from 'react';
import PropTypes from 'prop-types';

import CountdownButton from './CountdownButton';

const StartCountdownButton = ( {onClick} ) => (
  <CountdownButton onClick={onClick}>Start the count!</CountdownButton>
);

StartCountdownButton.propTypes = {
  onClick: PropTypes.func
};

export default StartCountdownButton;