import React from 'react'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Typography } from '@mui/material';
import { useEffect, useContext } from 'react';
import { Context } from '../Context';

export const MarkDown: React.FC = () => {
  const {selectedNote,toggleEdit, giveEdit, editNote} = useContext(Context);
  const editMode = giveEdit();
  const note = selectedNote();

  // const stylesS: <string>{} = {
  //   fontWeight: 'bold',
  //   fontStyle: 'italic',
  //   textDecoration: 'underline',
  // }

  return (
    <Box>
      {editMode ? (
        <Box>
          <Typography variant="h5">{note[0].title}</Typography>
          <TextareaAutosize
            aria-label="11px"
            minRows={3}
            value={note[0].text}
            style={ { height: 400, width: 400, backgroundColor: 'white', color: 'black'} }
            onChange={(e) => editNote(note[0].id, e.target.value)}
          />
        </Box>
      ) : (
        <Box>
          <Typography variant="h5">{note[0].title}</Typography>
          <Typography variant="subtitle1" onClick={() => toggleEdit(true)} 
            // style={}
          >{note[0].text}</Typography>
        </Box>
      )}
    </Box>
  )
}



