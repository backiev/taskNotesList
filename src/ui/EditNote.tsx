import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../Context';
import { memo } from 'react';

export const EditNote: React.FC = () => {
  const {toggleEdit, giveEdit} = useContext(Context);
  const checked = giveEdit();
  
  return (
    <Switch
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        toggleEdit(event.target.checked)
      }
      endDecorator={<Typography>Edit</Typography>}
      sx={(theme: Theme) => ({
        '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '51px',
        '--Switch-trackHeight': '31px',
        '--Switch-trackBackground': theme.vars.palette.background.level3,
        [`& .${switchClasses.thumb}`]: {
          transition: 'width 0.2s, left 0.2s',
        },
        '&:hover': {
          '--Switch-trackBackground': theme.vars.palette.background.level3,
        },
        '&:active': {
          '--Switch-thumbWidth': '32px',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': 'rgb(48 209 88)',
          '&:hover': {
            '--Switch-trackBackground': 'rgb(48 209 88)',
          },
        },
      })}
    />
  );
};