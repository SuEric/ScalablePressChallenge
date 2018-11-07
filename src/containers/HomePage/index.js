import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateInputWidget from '../../components/DateInputWidget';
import StartCountdownButton from '../../components/StartCountdownButton';
import CountItemWidget from '../../components/CountItemWidget';

const style = {
  wrapper: {
    margin: '2em auto',
    width: '80%',
    textAlign: 'center'
  },
  counterSection: {
    marginTop: '2em'
  }
};

class HomePage extends Component {
  
  constructor(props) {
    super(props);
    
    this.onChangeTargetDate = this.onChangeTargetDate.bind(this);
    this.onStartCountDown = this.onStartCountDown.bind(this);
    
    this.state = {
      days:0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: () => {}
    }
  }

  onChangeTargetDate(newDate) {
    // example of newDate: Jan 5, 2019 15:37:25
    this.setState({
      targetDate: newDate
    });
  }

  onStartCountDown() {

    const initialDate = new Date(this.state.targetDate).getTime();

    if (!this.validateDate(initialDate)) {
      alert('Please enter a valid date & make sure it is not an already passed date');
      return;
    }
    
    clearInterval(this.state.timer);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const delta = initialDate - now;

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });

      if (delta < 0) {
        this.resetCounter();
      }
      
    }, 1000);

    this.setState({
      timer
    });
  }

  resetCounter() {
    clearInterval(this.state.timer);
    this.setState({
      days:0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  }

  validateDate(date) {
    const now = new Date().getTime();
    const delta = date - now;

    if (!date || delta < 0) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div style={style.wrapper}>
        <div>
          <DateInputWidget onChange={this.onChangeTargetDate}/>
          <StartCountdownButton onClick={this.onStartCountDown}/>
        </div>
        <div style={style.counterSection}>
          <CountItemWidget counter={this.state.days}label={'Days'}/>
          <CountItemWidget counter={this.state.hours}label={'Hours'}/>
          <CountItemWidget counter={this.state.minutes}label={'Minutes'}/>
          <CountItemWidget counter={this.state.seconds}label={'Seconds'}/>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  targetDate: PropTypes.string,
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  timer: PropTypes.func.isRequired
}

HomePage.defaultProps = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  timer: () => {}
}

export default HomePage;