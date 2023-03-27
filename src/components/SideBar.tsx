import * as React from 'react';
import List from '@mui/material/List';

import {INoteType} from '../types/data';
import Grid from '@mui/material/Grid';
import { AddNote } from '../ui/AddNote';
import { useContext } from 'react';
import { Context } from '../Context';
import { ListItemNote } from './ListItemNote';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: '#eee',
  minHeight: '100vh',
  height: '100%',
  padding: '0',
  paddingTop: '50px',
  color: 'black'
};

const styleList = {
  width: '100%',
  maxHeight: '80vh',
  height: '80vh',
  maxWidth: 360,
  bgcolor: '#eee',
  // height: '100vh',
  padding: '0',
  paddingTop: '50px',
  color: 'black',
  overflow: 'scroll',
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
    <Grid sx={style} direction='column' container style={{paddingTop: '0'}}>
      <Grid item>
        <List sx={styleList} component="nav" aria-label="mailbox folders">
          {notes.map(note => (
            <ListItemNote note={note} handlerNote={handlerNote} key={note.id}/>
          ))}
        </List>
      </Grid>
      <Grid item style={{padding: '30px 0'}}>
        <AddNote />
      </Grid>
    </Grid>
  );
}