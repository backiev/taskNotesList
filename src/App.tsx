
import Grid from '@mui/material/Grid';
import { useState } from 'react'
import './App.css'
import { SideBar } from './components/SideBar';
import { Note } from './components/Note';


const style = {
  height: '100%'
};

function App() {
  return (
    <Grid sx={style} container spacing={2}>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
      <Grid item xs={7}>
        <Note />
      </Grid>
    </Grid>
  )
}

export default App
