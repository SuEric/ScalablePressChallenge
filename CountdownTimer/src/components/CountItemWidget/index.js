import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import BoxCounter from './BoxCounter';
import BoxLabel from './BoxLabel';

const style = {
  display: 'inline-block',
};

const CountItemWidget = ( { counter, label } ) => (
  <div style={style}>
    <Box>
      <BoxCounter> {counter} </BoxCounter>
      <BoxLabel> {label}</BoxLabel>
    </Box>
  </div>
);

CountItemWidget.propTypes = {
  counter: PropTypes.number,
  label: PropTypes.string
};

CountItemWidget.defaultProps = {
  counter: 0,
  label: ' Time Unit'
};

export default CountItemWidget;