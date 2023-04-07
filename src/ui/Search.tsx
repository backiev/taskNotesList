import { OutlinedInput } from '@mui/material';
import { memo } from 'react';
import { useState, useContext, useCallback } from 'react';
import { Context } from '../Context';

export const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const {searchNote, toggleRightBar} = useContext(Context);

  const searchHandler: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback((e) => {
    setSearch(e.target.value);
    toggleRightBar('gridNotes');
    searchNote(e.target.value);
  }, [search]);
  return (
    <OutlinedInput size='small' placeholder='Search...' value={search} onChange={e => searchHandler(e)}/>
  );
};