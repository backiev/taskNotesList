
import Grid from '@mui/material/Grid';
import { useState } from 'react'
import './App.css'
import { SideBar } from './components/SideBar';
import { Note } from './components/Note';
import {INoteType, IRightBar} from './types/data'

import { Context } from './Context';


const style = {
  height: '100%'
};



function App() {
  const [rightBar, setRightBar] = useState<IRightBar>({value: 'takeNote', index: -1});
  const [notes, setNotes] = useState<INoteType[]>([
    {
      id: 0,
      title: 'First note',
      text: 'text of first note',
      date: Date.now(),
      selected: false,
    },
    {
      id: 1,
      title: 'Second Note',
      text: 'text of second note',
      date: Date.now(),
      selected: false,
    },
    {
      id: 2,
      title: 'Third Note',
      text: 'text of third note',
      date: Date.now(),
      selected: false,
    },
    {
      id: 3,
      title: 'Fourth Note',
      text: 'text of fourth note',
      date: Date.now(),
      selected: false,
    },
    {
      id: 4,
      title: 'Fourth Note',
      text: 'text of fourth note',
      date: Date.now(),
      selected: false,
    },
  ]);

  const addNote = (title: string, text: string) => {
    setNotes((curNotes) => [...curNotes, {id: curNotes.length, title: title, text: text, date: Date.now(), selected: false}]);
  }
  const removeNote = (id: number) => {
    setNotes((curNotes) => [...curNotes].filter(note => note.id !== id));
  }
  const toggleRightBar = (value: string) => {
    setRightBar({value: value, index: -1});
  }
  const editNote = (id: number, text: string) => {
    console.log(123);
  }
  const giveRightBar = () => rightBar.value;

  const selectNote = (id: number) => {
    notes.map(note => note.id === id ? note.selected = true : note.selected = false);
  }

  const selectedNote = () => notes.filter(note => note.selected === true);

  const giveNotes = () => notes;

  return (
    <Context.Provider value={{addNote, removeNote, toggleRightBar, editNote, giveRightBar, selectNote, selectedNote, giveNotes}}>
      <Grid sx={style} container spacing={2}>
        <Grid item xs={4}>
          <SideBar notes={notes} />
        </Grid>
        <Grid item xs={7}>
          <Note/>
        </Grid>
      </Grid>
    </Context.Provider>
  )
}

export default App
