export interface INoteType {
    id: number;
    title: string;
    text: string;
    date: number;
    italic: boolean;
    bold: boolean;
    underline: boolean;
    selected: boolean;
}

export interface IRightBar {
    value: string;
    index: number;
}

export interface IRightBarProps {
    rightBar: IRightBar;
}
