import React, { memo } from 'react'
import {Selection} from '../ui/Selection';
import {FormatNotes} from '../ui/FormatNotes';
import {Search} from '../ui/Search';
import {EditNote} from '../ui/EditNote';
import Grid from '@mui/material/Grid';
import { Trash } from '../ui/Trash';
import {IRightBarProps} from '../types/data';



const style = {
  height: '50px',
  width: '100%',
  margin: '20px 0',
};



export const TopBar: React.FC<IRightBarProps> = memo(({rightBar}) => {  
  return (
    <Grid display="flex" alignItems="center" justifyContent="space-between" sx={style} spacing={4} container>
      
      <Grid item sx={{padding: '0px !important'}} display="flex" alignItems="center">
        <FormatNotes />
        <Selection />
        <Trash rightBar={rightBar}/>
        <EditNote />
      </Grid>
      <Grid item sx={{padding: '0px !important'}}> 
        <Search />
      </Grid>

    </Grid>
  )
});
