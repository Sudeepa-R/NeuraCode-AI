import { configureStore, createSlice } from "@reduxjs/toolkit";

const neuracodeaiSlice = createSlice({
  name: "neuracodeai",
  initialState: { activepageKey: "home", mobileMenuViewActive: false },
  reducers: {
    SetActivePageKey: (state, action) => {
      state.activepageKey = action.payload;
    },
    SetmobileMenuViewActive: (state, action) => {
      state.mobileMenuViewActive = action.payload;
    },
  },
});

export const { SetActivePageKey, SetmobileMenuViewActive } =
  neuracodeaiSlice.actions;

const store = configureStore({
  reducer: {
    neuracodeai: neuracodeaiSlice.reducer,
  },
});

export default store;

// ........... OR ...........
