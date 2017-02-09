var AppointmentsList = React.createClass({
  render: function() {
    return (
      <div className="appointments">
        <h3>Appointments:</h3>
        {this.props.appointments.map(function(appointment){
          return (
           <Appointment appointment={appointment} key={appointment.id} />
          )
        })}
      </div>
    )
  }
});
