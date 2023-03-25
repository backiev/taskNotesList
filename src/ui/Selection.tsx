import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useContext } from 'react';
import { Context } from '../Context';
import {INoteType} from '../types/data'

export const Selection = () => {
  const {selectedNote, toggleFormats, giveRightBar} = useContext(Context);
  // const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
  const rightbar = giveRightBar();
  const note = selectedNote();

  let formats: string[] = [];
  if (rightbar === 'markDown') {
    if (note[0].bold) {
      formats.push('bold');

    }
    if (note[0].italic) {
      formats.push('italic');

    }
    if (note[0].underline) {
      formats.push('underline');

    }
    
  }

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    if (rightbar === 'markDown') {
      toggleFormats([...newFormats], note[0].id);
    }
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underline" aria-label="underline">
        <FormatUnderlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}