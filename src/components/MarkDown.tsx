import React from 'react'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Typography } from '@mui/material';

export const MarkDown: React.FC = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h5">Markdown title</Typography>
        <Typography variant="subtitle1">Markdown</Typography>
      </Box>
      <Box display={'none'}>
        <TextareaAutosize
          aria-label="11px"
          minRows={3}
          value={"Markdown"}
          style={{ width: 200, backgroundColor: 'white', color: 'black' }}
        />
      </Box>
      
    </Box>
  )
}



