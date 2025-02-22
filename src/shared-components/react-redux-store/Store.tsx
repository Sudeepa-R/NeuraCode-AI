import { configureStore, createSlice } from "@reduxjs/toolkit";

const neuracodeaiSlice = createSlice({
  name: "neuracodeai",
  initialState: { activepageKey: "home" },
  reducers: {
    SetActivePageKey: (state, action) => {
      state.activepageKey = action.payload;
    },
  },
});

export const { SetActivePageKey } = neuracodeaiSlice.actions;

const store = configureStore({
  reducer: {
    neuracodeai: neuracodeaiSlice.reducer,
  },
});

export default store;

// ........... OR ...........
