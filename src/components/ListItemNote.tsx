import React, {CSSProperties, memo} from 'react';
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

interface IStylesItem  {
  whiteSpace: string,
  overflow: string,
  textOverflow: string,
}

const styles: CSSProperties = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

export const ListItemNote: React.FC<IListItem> = memo(({note, handlerNote}) => {

  
  return (
    <Box  onClick={() => handlerNote(note.id)}>
      <ListItem button>
        <ListItemText primary={note.title} secondary={note.text} style={styles} />
      </ListItem>
      <Divider />
    </Box>
  )
});
