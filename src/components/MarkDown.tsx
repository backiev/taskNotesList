import React from 'react'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Typography } from '@mui/material';
import { useEffect, useContext } from 'react';
import { Context } from '../Context';

export const MarkDown: React.FC = () => {
  const {selectedNote} = useContext(Context);
  const note = selectedNote();
  useEffect(() => {
    console.log(note);
  });
  return (
    <Box>
      <Box>
        <Typography variant="h5">{note[0].title}</Typography>
        <Typography variant="subtitle1">{note[0].text}</Typography>
      </Box>
      <Box display={'none'}>
        <TextareaAutosize
          aria-label="11px"
          minRows={3}
          value={"Markdown"}
          style={{ width: 200, backgroundColor: 'white', color: 'black' }}
        />
      </Box>
      
    </Box>
  )
}



