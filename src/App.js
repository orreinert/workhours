import React, { useState } from 'react';
import moment from '@date-io/moment';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  const [beginTime, setBegin] = useState(new Date('2017-05-24T07:00'));
  const [workTime, setWork] = useState(new Date('2017-05-24T08:00'));
  const [endTime, setEnd] = useState(new Date('2017-05-24T15:30'));

  function calculateEnd(begin, work) {
    let breakMinutes = 0;

    let hours = work.getHours();
    let minutes = work.getMinutes();

    if (hours < 6 || (hours === 6 && minutes === 0)) {
      breakMinutes = 0;
    }

    if ((hours === 6 && minutes >= 1) || hours > 6) {
      breakMinutes = 30;

      if (hours >= 9 && minutes >= 1) {
        breakMinutes += 15;
      }
    }

    begin.setHours(begin.getHours() + hours);
    begin.setMinutes(begin.getMinutes() + minutes + breakMinutes);
    setEnd(begin);
  }

  function handleWorkChange(event) {
    let work = new Date(event);
    let begin = new Date(beginTime);
    setWork(new Date(event));
    calculateEnd(begin, work);
  }

  function handleBeginChange(event) {
    let work = new Date(event);
    let begin = new Date(workTime);
    setBegin(new Date(event));
    calculateEnd(begin, work);
  }

  return (
    <MuiPickersUtilsProvider utils={moment}>
      <p>Arbeitszeit:</p>
      <TimePicker value={workTime} onChange={handleWorkChange} ampm={false} orientation="landscape" autoOk />
      <p>Arbeitsbeginn:</p>
      <TimePicker value={beginTime} onChange={handleBeginChange} ampm={false} orientation="landscape" autoOk />
      <p>Arbeitsende:</p>
      <TimePicker value={endTime} ampm={false} />
    </MuiPickersUtilsProvider>
  );
}

export default App;