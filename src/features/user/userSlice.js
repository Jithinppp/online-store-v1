import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUserStatus } from "../../utils/firebase.utils";

const initialState = {
  currentUser: null,
  status: "idle",
  error: null,
  userStatus: "",
};

export const checkUserLoggedIn = createAsyncThunk(
  "user/checkUserLoggedIn",
  async () => {
    const res = await checkUserStatus();
    return res;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkUserLoggedIn.pending, (state, action) => {
        state.status = "loading";
        state.userStatus = "loading";
      })
      .addCase(checkUserLoggedIn.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentUser = {
            email: action.payload.email,
            uid: action.payload.uid,
          };
          state.status = "success";
        } else {
          state.currentUser = null;
        }
      })
      .addCase(checkUserLoggedIn.rejected, (state, action) => {
        // state.error = action.payload.auth.currentUser;
        state.status = "failed";
        state.userStatus = action.payload;
      });
  },
});

// dispatch actions
export const { setCurrentUser } = userSlice.actions;

// selectors
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectCurrentUserStatus = (state) => state.user.status;

export default userSlice.reducer;
