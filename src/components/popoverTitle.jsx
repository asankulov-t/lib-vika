import { Popover, Typography, Button } from '@mui/material';
import { MoreVert } from '@mui/icons-material'
import React from 'react'
import  './styleOverride.css'

export default function PopoverTitle() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            <MoreVert  style={{color:'#474747'}}/>
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'button',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    );
  }