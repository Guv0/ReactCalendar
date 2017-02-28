import React from 'react';
import AppointmentForm from './appointmentform';
import { AppointmentsList } from './appointmentslist';
import update from 'immutability-helper';

export default class Appointments extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      location: '',
      appt_time: ''
    }
  }

  handleUserInput (obj) {
    this.setState(obj);
  }

  handleFormSubmit () {
    const appointment = {title: this.state.title, location: this.state.location, appt_time: this.state.appt_time};
    $.post('/appointments',
            {appointment: appointment})
          .done(function(data) {
            this.addNewAppointment(data);
          }.bind(this));
  }

  addNewAppointment (appointment) {
    const appointments = update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render () {
    return(
      <div>
        <AppointmentForm title={this.state.title}
        appt_time={this.state.appt_time} location={this.state.location}
        onUserInput={(obj) => this.handleUserInput(obj)}
        onFormSubmit={() => this.handleFormSubmit()} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
}
