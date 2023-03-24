import React from 'react'
import {MarkDown} from './MarkDown'
import { TopBar } from './TopBar'
import Grid from '@mui/material/Grid';
import { GridNotes } from './GridNotes';
import { TakeNote } from './TakeNote';


export const Note: React.FC = () => {
  return (
    <Grid container direction='column'>
      <Grid item><TopBar /></Grid>
      {/* <Grid item><MarkDown /></Grid> */}
      {/* <Grid item><GridNotes /></Grid> */}
      <Grid item><TakeNote /></Grid>
    </Grid>
  )
}
