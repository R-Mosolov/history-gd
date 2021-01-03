import data from '../data/manuscripts/manuscripts-base';

interface initialStateConfig {
  [index: number]: {
    type: string;
    title: string;
    author: string;
    creationDate: number;
  }
}

const initialState: initialStateConfig = data;

export default initialState;