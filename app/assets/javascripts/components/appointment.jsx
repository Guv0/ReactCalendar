var Appointment = React.createClass({
  render: function() {
    return(
      <div className="appointment">
        <h4>{this.props.appointment.title}</h4>
        <p>{formatDate(this.props.appointment.appt_time)}</p>
      </div>
    );
  }
});
