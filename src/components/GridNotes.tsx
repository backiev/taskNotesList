import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useContext } from 'react';
import { Context } from '../Context';

export const GridNotes = () => {
    const {giveNotes, toggleRightBar, selectNote, giveFilterNote} = useContext(Context);
    const notes = giveNotes();
    const filterNote = giveFilterNote();

    const cardHandler = (id: number) => {
        selectNote(id);
        toggleRightBar('markDown');
    }
  return (
    <Grid container spacing={2}>
        {notes.filter(item => item.title.startsWith(filterNote)).map(note => (
        <Grid item xs={4} key={note.id} onClick={() => cardHandler(note.id)}>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {note.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {note.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        ))}
    </Grid>
  )
}
