import React from 'react';
import { Label } from './label';
import Datetime from 'react-datetime';

export default class AppointmentForm extends React.Component {

  handleChange (e) {
    const name = e.target.name;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setApptTime (e) {
    const name = 'appt_time';
    const obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render () {
    const inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Label label='Enter Title, Location, Date and Time' />
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={(e) => this.handleChange(e)} className="form-input" />
          <input name='location' placeholder='Where?'
            value={this.props.location}
            onChange={(e) => this.handleChange(e)} className="form-input" />
          <Datetime input={false} open={true}
            inputProps={inputProps} value={this.props.appt_time}
            onChange={(e) => this.setApptTime(e)} />
          <input type='submit' value='Make Appointment' className="submit-btn" />
        </form>
      </div>
    );
  }
}
