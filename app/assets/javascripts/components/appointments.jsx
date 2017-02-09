var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: '',
      location: '',
      appt_time: ''
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function() {
    var appointment = {title: this.state.title, location: this.state.location, appt_time: this.state.appt_time};
    $.post('/appointments',
            {appointment: appointment})
          .done(function(data) {
            this.addNewAppointment(data);
          }.bind(this));
  },

  addNewAppointment: function(appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  },

  render: function() {
    return(
      <div>
        <AppointmentForm title={this.state.title}
        appt_time={this.state.appt_time} location={this.state.location}
        onUserInput={this.handleUserInput}
        onFormSubmit={this.handleFormSubmit} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    );
  }
});
