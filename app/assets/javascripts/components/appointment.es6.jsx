class Appointment extends React.Component{
  render () {
    return(
      <div className="appointment">
        <h4>{this.props.appointment.title}</h4>
        <h5><em>Location: {this.props.appointment.location}</em></h5>
        <p>{formatDate(this.props.appointment.appt_time)}</p>
      </div>
    );
  }
}
