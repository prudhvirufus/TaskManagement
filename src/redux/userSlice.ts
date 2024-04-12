import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateType {
  state: {
    isFetching: boolean;
  };
  user: {
    name: string;
    isAuthenticated: boolean;
  };
}

const initialState: InitialStateType = {
  state: {
    isFetching: false,
  },
  user: {
    name: "collins",
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching: (state) => {
      state.state.isFetching = false;
    },
  },
});

export const { setIsFetching } = userSlice.actions;

export default userSlice.reducer;
