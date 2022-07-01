import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Calander() {
  const [value, setValue] = React.useState<Date | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <h1>calander</h1>
      <DatePicker
        label="Your Date Of Birth"
        value={value}
        onChange={(newValue:any) => {
          setValue(newValue);
        }}
        renderInput={(params:any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
export default Calander