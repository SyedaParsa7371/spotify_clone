import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  loggedin: false,
  access_token: null as string | null,
};

const auth = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    logedIn: (state, action: PayloadAction<{access_token: string}>) => {
      console.log('payload===> store', action.payload.access_token);
      state.loggedin = true;
      state.access_token = action.payload.access_token;
    },
    logedOut: state => {
      state.loggedin = false;
      state.access_token = null;
    },
  },
});

export const {logedIn, logedOut} = auth.actions;
export default auth.reducer;
