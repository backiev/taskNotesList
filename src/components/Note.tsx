import React, {useContext} from 'react'
import {MarkDown} from './MarkDown'
import { TopBar } from './TopBar'
import Grid from '@mui/material/Grid';
import { GridNotes } from './GridNotes';
import { TakeNote } from './TakeNote';
import { Context } from '../Context';

export const Note: React.FC = () => {
  const {giveRightBar} = useContext(Context);
  const rightBar = giveRightBar();
  return (
    <Grid container direction='column'>
      <Grid item><TopBar /></Grid>
      { (rightBar === 'takeNote') ? (<Grid item><TakeNote /></Grid>) : '' }
      { (rightBar === 'markDown') ? (<Grid item><MarkDown /></Grid>) : '' }
      { (rightBar === 'gridNotes') ? (<Grid item><GridNotes /></Grid>) : '' }
    </Grid>
  )
}
