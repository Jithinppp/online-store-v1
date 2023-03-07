import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

// dispatch actions
export const { setCurrentUser } = userSlice.actions;

// selectors
export const selectCurrentUser = (state) => state.user.currentUser;

export default userSlice.reducer;
