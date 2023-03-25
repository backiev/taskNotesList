import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {INoteType} from '../types/data';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AddNote } from '../ui/AddNote';
import { useContext } from 'react';
import { Context } from '../Context';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: '#eee',
  height: '100%',
  padding: '5px',
  paddingTop: '50px',
  color: 'black'
};

interface INoteSideBarProps {
  notes: INoteType[];
}

export const SideBar: React.FC<INoteSideBarProps> = ({notes}) => {
  const {toggleRightBar, selectNote} = useContext(Context);
  const handlerNote = (id: number) => {
    selectNote(id);
    toggleRightBar('markDown');
  }

  return (
    
    <Grid sx={style} direction='column' justifyContent="space-between" container spacing={4} style={{paddingTop: '0'}}>
      <Grid item>
        <List sx={style} component="nav" aria-label="mailbox folders">
          {notes.map(note => (
            <Box key={note.id} onClick={() => handlerNote(note.id)}>
              <ListItem button>
                <ListItemText primary={note.title} secondary={note.text}/>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Grid>
      <Grid item >
        <AddNote />
      </Grid>
    </Grid>
  );
}