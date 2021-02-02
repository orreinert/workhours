import React, { useState } from 'react';
import moment from '@date-io/moment';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  const [beginTime, setBegin] = useState(new Date());
  const [workTime, setWork] = useState(new Date());
  const [endTime, setEnd] = useState(new Date());

  function calculateEnd() {
    let breakMinutes = 0;
    console.log(beginTime);
    console.log(workTime);

    let hours = workTime.getHours();
    let minutes = workTime.getMinutes();

    if (hours < 6 || (hours === 6 && minutes === 0)) {
      breakMinutes = 0;
    }

    if ((hours === 6 && minutes >= 1) || hours > 6) {
      breakMinutes = 30;

      if (hours >= 9 && minutes >= 1) {
        breakMinutes += 15;
      }
    }

    let end = beginTime;
    end = moment(end).add(workTime.getHours(), 'hours');
    end = moment(end).add(workTime.getMinutes(), 'minutes');
    end = moment(end).add(breakMinutes, 'minutes');
    setEnd(end);
  }

  function handleBeginChange(event) {
    let time = new Date(event);
    console.log(time);
    setBegin(time);
    calculateEnd();
  }

  function handleWorkChange(event) {
    setWork(new Date(event));
    calculateEnd();
  }

  return (
    <MuiPickersUtilsProvider utils={moment}>
      <p>Arbeitsbeginn:</p>
      <TimePicker value={beginTime} onChange={handleBeginChange} ampm={false} />
      <p>Arbeitszeit:</p>
      <TimePicker value={workTime} onChange={handleWorkChange} ampm={false} />
      <p>Arbeitsende:</p>
      <TimePicker value={endTime} ampm={false} readOnly={true} />
    </MuiPickersUtilsProvider>
  );
}

export default App;