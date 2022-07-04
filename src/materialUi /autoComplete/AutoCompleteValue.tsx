import * as React from 'react';
import "./AutoCompleteValue.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';

export default function AutoCompleteValue() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  // console.log(value)

  return (
    <>
      <Box className="mt-5">
        <Typography variant="h5" >Auto Complete Value</Typography>
          <Stack spacing={2} direction="row" sx={{ mb: 0 }} alignItems="center">  
            <VolumeDown />
              <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
            {value}
          </Stack>
        
      </Box>
    </>
  );
}
