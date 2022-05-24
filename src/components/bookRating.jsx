import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const BookRating = () => {
  const [value, setValue] = React.useState(3);
  return (
    <div>
        <Box
            sx={{
            '& > legend': { mt: 2 },
            }}
         />
      <Typography component="legend">Моя оценка</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  )
}

export default BookRating