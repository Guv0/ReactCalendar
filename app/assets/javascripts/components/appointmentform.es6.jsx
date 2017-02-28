class AppointmentForm extends React.Component {

  handleChange (e) {
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  // setLocation: function(e) {
  //   const name = e.target.name;
  //   obj = {};
  //   obj[name] = e.target.value;
  //   this.props.onUserInput(obj);
  // },

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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Label label='Enter Title, Location, Date and Time' />
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange.bind(this)} className="form-input" />
          <input name='location' placeholder='Where?'
            value={this.props.location}
            onChange={this.handleChange.bind(this)} className="form-input" />
          <Datetime input={false} open={true}
            inputProps={inputProps} value={this.props.appt_time}
            onChange={this.setApptTime.bind(this)} />
          <input type='submit' value='Make Appointment' className="submit-btn" />
        </form>
      </div>
    );
  }
}