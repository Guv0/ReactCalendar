var AppointmentForm = React.createClass({

  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  // setLocation: function(e) {
  //   var name = e.target.name;
  //   obj = {};
  //   obj[name] = e.target.value;
  //   this.props.onUserInput(obj);
  // },

  setApptTime: function(e) {
    var name = 'appt_time';
    var obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render: function() {
    var inputProps = {
      name: 'appt_time'
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Label label='Enter Title, Location, Date and Time' />
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange} className="form-input" />
          <input name='location' placeholder='Where?'
            value={this.props.location}
            onChange={this.handleChange} className="form-input" />
          <Datetime input={false} open={true}
            inputProps={inputProps} value={this.props.appt_time}
            onChange={this.setApptTime} />
          <input type='submit' value='Make Appointment' className="submit-btn" />
        </form>
      </div>
    );
  }
});
