import * as React from 'react';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { OutlinedInput } from '@mui/material';
import Button from '@mui/joy/Button';
import { useState, useContext } from 'react';
import { Context } from '../Context';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';




const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
  width: 400,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '2px solid currentColor',
  padding: '16px 32px 24px 32px',
});

interface IModalType {
    open: boolean;
    handleClose: () => void;
    add: boolean;
}

interface IInputAdd {
  inputTitle: string;
  inputText: string;
}

export const  ModalDelete:React.FC<IModalType> = React.memo(({open, handleClose, add}) => {
  const {addNote, removeNote, selectedNote, toggleRightBar, giveRightBar} = useContext(Context);
  const [inputAdd, setInputAdd] = useState<IInputAdd>({
    inputTitle: '',
    inputText: ''
  });
  const noteSelected = selectedNote();
  const rightBar = giveRightBar();

  const handlerAddNote = () => {
    addNote(inputAdd.inputTitle, inputAdd.inputText);
    setInputAdd({inputTitle: '', inputText: ''});
  }

  const handlerRemoveNote = () => {
    if (rightBar === 'markDown') {
      toggleRightBar('gridNotes');
      removeNote(noteSelected[0].id);
      handleClose();
    }
  }

  const handlerInput = React.useCallback((event: any) => {
    setInputAdd({ inputTitle: event, inputText: inputAdd.inputText})
  }, [inputAdd.inputTitle])

  return (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
      >
        {add ? 
        (<Box sx={style}>
          <Typography variant="h5" mb={2} textAlign={'center'}>Write Title and Text</Typography>
          <Grid container display={'flex'} flexDirection={'column'} alignItems={'center'} spacing={2}>
            <Grid item>
              <OutlinedInput placeholder='Title...' value={inputAdd.inputTitle} onChange={(e) => handlerInput(e.target.value)}/>
            </Grid>
            <Grid item>
              <OutlinedInput placeholder='Text...' value={inputAdd.inputText} onChange={(e) => setInputAdd({ inputTitle: inputAdd.inputTitle, inputText: e.target.value})}/>
            </Grid>
            <Grid item>
              <Button onClick={handlerAddNote}>Add note</Button>
            </Grid>
          </Grid>
        </Box>)
        : 
        (<Box sx={style}>
          <Typography variant="h5" mb={2} textAlign={'center'}>Do you want to delete this Note?</Typography>
          <Grid display={'flex'} alignItems={'center'}>
            <Button onClick={handlerRemoveNote} style={{margin: '0 auto'}}>Delete</Button>
          </Grid>
        </Box>)
        }
      </Modal>
    </div>
  );
});