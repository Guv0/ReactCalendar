import React from 'react';
import { Appointment } from './appointment'

export const AppointmentsList = ({appointments}) =>
      <div className="appointments">
        <h3>Appointments:</h3>
        {appointments.map(function(appointment){
          return (
           <Appointment appointment={appointment} key={appointment.id} />
          )
        })}
      </div>

