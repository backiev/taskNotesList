export interface INoteType {
    id: number;
    title: string;
    text: string;
    date: number;
    selected: boolean;
}

export interface IRightBar {
    value: string;
    index: number;
}