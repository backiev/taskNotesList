import * as React from 'react';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { OutlinedInput } from '@mui/material';
import Button from '@mui/joy/Button';
import { useState, useContext } from 'react';
import { Context } from '../Context';


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

export const  ModalDelete:React.FC<IModalType> = ({open, handleClose, add}) => {
  const {addNote, removeNote} = useContext(Context);
  const [inputAdd, setInputAdd] = useState<IInputAdd>({
    inputTitle: '',
    inputText: ''
  });

  const handlerAddNote = () => {
    addNote(inputAdd.inputTitle, inputAdd.inputText);
  }

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
          <h2 id="unstyled-modal-title">Write Title and Text</h2>
          <OutlinedInput placeholder='Title...' value={inputAdd.inputTitle} onChange={(e) => setInputAdd({ inputTitle: e.target.value, inputText: inputAdd.inputText})}/>
          <OutlinedInput placeholder='Text...' value={inputAdd.inputText} onChange={(e) => setInputAdd({ inputTitle: inputAdd.inputTitle, inputText: e.target.value})}/>
          <Button onClick={handlerAddNote}>Button</Button>
        </Box>)
        : 
        (<Box sx={style}>
          <h2 id="unstyled-modal-title">Delete</h2>
          <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
        </Box>)
        }
      </Modal>
    </div>
  );
}