import { OutlinedInput } from '@mui/material';
import { useState, useContext } from 'react';
import { Context } from '../Context';

export const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const {searchNote, toggleRightBar} = useContext(Context);

  const searchHandler: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    setSearch(e.target.value);
    toggleRightBar('gridNotes');
    searchNote(e.target.value);
  }
  return (
    <OutlinedInput size='small' placeholder='Search...' value={search} onChange={e => searchHandler(e)}/>
  );
}