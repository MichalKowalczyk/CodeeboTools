/*
  MIT License
  Copyright (c) 2021 MichalKowalczyk
  
  Source: https://github.com/MichalKowalczyk/CodeeboTools

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface LangState {
  lang: 'pl' | 'en';
}

const initialState: LangState = {
  lang: 'pl',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<'pl' | 'en'>) => {
      state.lang = action.payload;
    },
  },
});

export const { set } = langSlice.actions;
export const selectLang = (state: RootState) => state.lang.lang;

export default langSlice.reducer;