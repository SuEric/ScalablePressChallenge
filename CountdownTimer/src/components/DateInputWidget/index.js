import React from 'react';
import PropTypes from 'prop-types';

import DateInput from './DateInput';
import DateLabel from './DateLabel';

const DateInputWidget = ( { onChange } ) => (
  <div>
    <DateLabel>Date for Countdown:</DateLabel>
    <DateInput 
      placeholder={'use format: Jan 5, 2019 15:37:25'}
      onChange={ (event) => onChange(event.target.value) }
    />
  </div>
);

DateInputWidget.propTypes = {
  onChange: PropTypes.func
}

export default DateInputWidget;