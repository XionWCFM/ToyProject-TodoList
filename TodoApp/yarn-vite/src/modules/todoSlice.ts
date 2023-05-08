import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialState = InitialObject[];

export interface InitialObject {
  id: string;
  text: string | undefined;
  checked: boolean;
}

const initialState: InitialState = [];

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    insert: (state: InitialState, action: PayloadAction<InitialObject>) =>
      state.concat(action.payload),
    remove: (state: InitialState, action: PayloadAction<string>) =>
      state.filter((todo) => todo.id !== action.payload),
    toggle: (state: InitialState, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.checked = !todo.checked;
    },
  },
});

export const { insert, remove, toggle } = todoSlice.actions;
export default todoSlice;
