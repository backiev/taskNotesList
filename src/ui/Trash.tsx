import React, { memo } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import { ModalDelete } from './ModalDelete';
import {IRightBarProps} from '../types/data';



export const Trash: React.FC<IRightBarProps>= memo(({rightBar}) => {
  const [selected, setSelected] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    rightBar.value === 'markDown' ? setOpen(true) : ' ';
  };
  const handleClose = () => setOpen(false);

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
})
