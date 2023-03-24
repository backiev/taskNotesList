import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import { ModalDelete } from './ModalDelete';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Chip from '@mui/joy/Chip';


export const AddNote = () => {
  const [selected, setSelected] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Chip style={{width: '100%'}}>
      <Grid container spacing={4} alignItems="center" >
        <Grid item>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            style={{marginLeft: '15px'}}
            onClick={handleOpen}
          >
            <AddIcon />
          </ToggleButton> 
        </Grid>
        <Grid item style={{zIndex: "1"}}><Typography>Add Note</Typography></Grid>
      </Grid>
      <ModalDelete open={open} handleClose={handleClose} add={true}/>
    </Chip>
  )
}
