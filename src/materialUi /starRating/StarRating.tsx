import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';

export default function StarRating() {
    const [value, setValue] = React.useState<number | null>(2);


    function HomeIcon(props: SvgIconProps ) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }

    console.log(value)
    return (
        <>
            <Typography variant="h4" className="mt-5">Rating</Typography>
            <Box sx={{ '& > legend': { mt: 2 }, }}>
                <Typography component="legend">Controlled</Typography>
                <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }} />
                {" thanks for "+value +" stars"}
            </Box>
            <Box sx={{ '& > legend': { mt: 2 }, }}>
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                
            </Box>
            <Box sx={{ '& > legend': { mt: 2 }, }}>
               
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                
            </Box>
            <Box sx={{ '& > legend': { mt: 2 }, }}>
                
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </Box>
            <HomeIcon color="primary" />
            <AccessAlarmIcon/>
            <BatteryCharging60Icon/>
        </>
    );
}
