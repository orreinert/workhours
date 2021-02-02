import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}
export default App;
