import React from 'react';
import MomentUtils from '@date-io/moment';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeginTime: new Date(),
      selectedWorkTime: new Date(),
      selectedEndTime: new Date(),
    }
    this.state.selectedWorkTime.setHours(8, 0, 0, 0);
  }

  handleChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <p>Arbeitsbeginn:</p>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <TimePicker value={this.state.selectedBeginTime} onChange={this.handleChange} ampm={false} />
        </MuiPickersUtilsProvider>

        <p>Arbeitszeit:</p>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <TimePicker value={this.state.selectedWorkTime} onChange={this.handleChange} ampm={false} />
        </MuiPickersUtilsProvider>

        <p>Arbeitsende:</p>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <TimePicker value={this.state.selectedEndTime} ampm={false} readOnly={true} />
        </MuiPickersUtilsProvider>
      </div >
    );
  }
}

export default App;