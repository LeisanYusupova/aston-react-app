import { createSlice } from '@reduxjs/toolkit';
import { UserProcessState } from 'src/shared/types/types.tsx';

const initialState: UserProcessState = {
  email: null,
  id: null,
};

export const userProcess = createSlice({
  name: 'userProcess',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userProcess.actions;

export default userProcess.reducer;
