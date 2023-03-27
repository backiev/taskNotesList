import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import {INoteType} from '../types/data';

interface IListItem {
    key: number;
    note: INoteType;
    handlerNote: (id: number) => void;
}



export const ListItemNote: React.FC<IListItem> = ({note, handlerNote}) => {
  return (
    <Box  onClick={() => handlerNote(note.id)}>
        <ListItem button>
          <ListItemText primary={note.title} secondary={note.text}/>
        </ListItem>
        <Divider />
    </Box>
  )
}
