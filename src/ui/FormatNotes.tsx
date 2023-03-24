import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const FormatNotes = () => {
  const [formats, setFormats] = React.useState<string>('list');

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string,
  ) => {
    if (newFormats !== null) setFormats(newFormats);
    
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      exclusive
      aria-label="text formatting"
      sx={{marginRight: '30px'}}
    >
      <ToggleButton value="list" aria-label="list">
        <FormatListBulletedIcon />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="grid">
        <GridViewIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}