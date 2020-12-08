interface initialStateConfig {
  [index: number]: {
    type: string;
    title: string;
    author: string;
    creationDate: number;
  }
}

const initialState: initialStateConfig = [
  {
    type: 'Монография',
    title: 'Название 3',
    author: 'Автор 3',
    creationDate: 2001,
  },
  {
    type: 'Монография',
    title: 'Название 1',
    author: 'Автор 2',
    creationDate: 2002,
  },
  {
    type: 'Научная публикация',
    title: 'Название 2',
    author: 'Автор 1',
    creationDate: 2003,
  },
];

export default initialState;
