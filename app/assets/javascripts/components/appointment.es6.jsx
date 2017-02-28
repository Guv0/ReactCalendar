const Appointment = ({appointment}) =>
      <div className="appointment">
        <h4>{appointment.title}</h4>
        <h5><em>Location: {appointment.location}</em></h5>
        <p>{formatDate(appointment.appt_time)}</p>
      </div>
