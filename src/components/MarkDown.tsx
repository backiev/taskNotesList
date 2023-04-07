import React, { memo } from 'react'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Typography } from '@mui/material';
import { useContext, CSSProperties  } from 'react';
import { Context } from '../Context';

interface IStylesEdit {
  height: string;
  width: string;
  backgroundColor: string;
  color: string;
  resize: string;
}

interface IStylesDefault {
  fontWeight: string;
  textDecoration: string;
  fontStyle: string;
  wordWrap: string;
}

const stylesEdit: CSSProperties = {
  height: '70vh',
  // maxWidth: 400,
  width: '100%',
  backgroundColor: 'white',
  color: 'black',
  resize: 'none',
  outline: 'none'
}

export const MarkDown: React.FC = () => {
  const {selectedNote,toggleEdit, giveEdit, editNote} = useContext(Context);
  const editMode = giveEdit();
  const note = selectedNote();

  const stylesDefault: CSSProperties = {
    fontWeight: 'none',
    textDecoration: 'none',
    fontStyle: 'none',
    wordWrap: 'break-word',
  }
  

  note[0].bold ? stylesDefault.fontWeight = 'bold' : stylesDefault.fontWeight = 'normal';
  note[0].italic ? stylesDefault.fontStyle = 'italic' : stylesDefault.fontStyle = 'normal';
  note[0].underline ? stylesDefault.textDecoration = 'underline' : stylesDefault.textDecoration = 'none';

  return (
    <Box>
      {editMode ? (
        <Box>
          <Typography variant="h5">{note[0].title}</Typography>
          <TextareaAutosize
            aria-label="11px"
            minRows={3}
            value={note[0].text}
            style={ stylesEdit }
            onChange={(e) => editNote(note[0].id, e.target.value)}
          />
        </Box>
      ) : (
        <Box >
          <Typography variant="h5">{note[0].title}</Typography>
          <Typography variant="subtitle1" 
            onClick={() => toggleEdit(true)} 
            style={stylesDefault}
          >{note[0].text}</Typography>
        </Box>
      )}
    </Box>
  )
};



