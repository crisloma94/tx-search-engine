import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { BookSearchModel } from '../../../types/books.types';

export interface VisitedBooksState {
  visitedBooks: BookSearchModel[];
}

const initialState: VisitedBooksState = {
  visitedBooks: [],
};

export const visitedBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookSearchModel>) => {
      const newVisitedBooks = [action.payload, ...state.visitedBooks];
      state.visitedBooks = [
        ...new Map(newVisitedBooks.map((item) => [item.key, item])).values(),
      ];
    },
  },
});

export const { addBook } = visitedBooksSlice.actions;

export default visitedBooksSlice;
