
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
  const [rightBar, setRightBar] = useState<IRightBar>({value: 'gridNotes', index: -1});
  const [checked, setChecked] = useState<boolean>(false);
  const [filterNote, setFilterNote] = useState<string>('');
  const [notes, setNotes] = useState<INoteType[]>([
    {
      id: 0,
      title: 'First note',
      text: 'text of first note',
      date: Date.now(),
      italic: false,
      bold: false,
      underline: false,
      selected: false,
    },
  ]);

  const addNote = (title: string, text: string) => {
    setNotes((curNotes) => [...curNotes, {id: curNotes.length, title: title, text: text, date: Date.now(), bold: false, italic: false, underline: false, selected: false}]);
  }
  const removeNote = (id: number) => {
    setNotes((curNotes) => [...curNotes].filter(note => note.id !== id));
  }
  const searchNote = (value: string) => {
    setFilterNote(value);
  }
  const giveFilterNote = () => filterNote;

  const toggleRightBar = (value: string) => {
    setRightBar({value: value, index: -1});
  }
  const editNote = (id: number, text: string) => {
    const newNotes = notes.map(note => {
      if (note.id === id) note.text = text
      return note;
    });
    setNotes([...newNotes]);
  }

  const toggleFormats = (array: string[], id: number) => {

    const newObjFormats = {
      bold: false,
      italic: false,
      underline: false,
    }
    array.map(item => {
      if (item === 'bold') {
        newObjFormats.bold = true;
      } 
      if (item === 'italic') {
        newObjFormats.italic = true;
      } 
      if (item === 'underline') {
        newObjFormats.underline = true;
      }
    })
    const newNotes = notes.map(note => {
      if (note.id === id) {
        note.bold = newObjFormats.bold;
        note.italic = newObjFormats.italic;
        note.underline = newObjFormats.underline;
      }
      return note;
    });
    setNotes([...newNotes]);
  }


  const giveRightBar = () => rightBar.value;

  const selectNote = (id: number) => {
    notes.map(note => note.id === id ? note.selected = true : note.selected = false);
  }

  const selectedNote = () => notes.filter(note => note.selected === true);

  const giveNotes = () => notes;

  const toggleEdit = (event: boolean) => {
    setChecked(event)
  };

  const giveEdit = () => checked;

  return (
    <Context.Provider value={{addNote, removeNote,searchNote,giveFilterNote,toggleFormats, toggleRightBar, editNote, giveRightBar, selectNote, selectedNote, giveNotes, toggleEdit, giveEdit}}>
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
