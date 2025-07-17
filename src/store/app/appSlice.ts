import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  test: boolean;
}

const initialState: AppState = {
  test: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTest: (state, action: PayloadAction<boolean>) => {
      state.test = action.payload;
    },
  },
});

export const { setTest } = appSlice.actions;
export default appSlice.reducer;
