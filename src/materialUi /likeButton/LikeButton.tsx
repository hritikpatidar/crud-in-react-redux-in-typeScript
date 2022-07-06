import React from "react"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function LikeButton() {
  const [value, setValue] = useState<boolean>(false)

  let handleChange=(e:any,newValue:any)=>{
    setValue(newValue);
  }
  
  // console.log(value);
  return (
    <div  className="mt-5">
      <Typography variant="h4">Like button</Typography>
      <Checkbox arial-label="checkbox" icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={ handleChange}/>    
      <Fab aria-label="like">
        <Checkbox arial-label="checkbox" icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={ handleChange} />   
      </Fab>  
    </div>
  );
}
