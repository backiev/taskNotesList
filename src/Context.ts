import React from 'react';
import {INoteType, IRightBar} from './types/data'

interface IContextProps {
    addNote: (title: string, text: string) => void;
    removeNote: (id: number) => void;
    searchNote: (value: string) => void;
    giveFilterNote: () => string;
    toggleRightBar: (value: string) => void;
    editNote: (id: number, text: string) => void;
    giveRightBar: () => string;
    selectNote: (id: number) => void;
    selectedNote: () => INoteType[];
    giveNotes: () => INoteType[];
    toggleEdit: (event: boolean) => void;
    giveEdit: () => boolean;
}

export const Context = React.createContext({} as IContextProps);