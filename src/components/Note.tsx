import React, { useContext} from 'react'
import {MarkDown} from './MarkDown'
import { TopBar } from './TopBar'
import Grid from '@mui/material/Grid';
import { GridNotes } from './GridNotes';
import { TakeNote } from './TakeNote';
import { memo } from 'react';
import {IRightBarProps} from '../types/data';


export const Note: React.FC<IRightBarProps> = ({rightBar}) => {
  return (
    <Grid container direction='column'>
      <Grid item><TopBar rightBar={rightBar} /></Grid>
      { (rightBar.value === 'takeNote') ? (<Grid item style={{maxWidth: '100%'}}><TakeNote /></Grid>) : '' }
      { (rightBar.value === 'markDown') ? (<Grid item style={{maxWidth: '100%'}}><MarkDown /></Grid>) : '' }
      { (rightBar.value === 'gridNotes') ? (<Grid item style={{maxWidth: '100%'}}><GridNotes /></Grid>) : '' }
    </Grid>
  )
};
