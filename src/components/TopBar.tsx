import React from 'react'
import {Selection} from '../ui/Selection';
import {FormatNotes} from '../ui/FormatNotes';
import {Search} from '../ui/Search';
import {EditNote} from '../ui/EditNote';
import Grid from '@mui/material/Grid';
import { Trash } from '../ui/Trash';


const style = {
  height: '50px',
  width: '100%',
  margin: '20px 0',
};

export const TopBar: React.FC = () => {
  return (
    <Grid display="flex" alignItems="center" justifyContent="space-between" sx={style} spacing={4} container>
      
      <Grid item sx={{padding: '0px !important'}} display="flex" alignItems="center">
        <FormatNotes />
        <Selection />
        <Trash />
        <EditNote />
      </Grid>
      <Grid item sx={{padding: '0px !important'}}> 
        <Search />
      </Grid>

    </Grid>
  )
}
