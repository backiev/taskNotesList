import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import { ModalDelete } from './ModalDelete';



export const Trash = () => {
  const [selected, setSelected] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleFormat = (
  //   event: React.MouseEvent<HTMLElement>,
  //   newFormats: boolean,
  // ) => {
  //   setFormats(true);
  // };

  return (
    <Box>
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
        style={{margin: '0 15px'}}
        onClick={handleOpen}
      >
        <DeleteIcon />
      </ToggleButton>
      <ModalDelete open={open} handleClose={handleClose} add={false}/>
    </Box>
  )
}
