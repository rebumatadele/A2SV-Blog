import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user state type
interface UserState {
  userId: string;
  token: string;
}

// Define the initial state with the appropriate type
const initialState: { user: UserState } = {
  user: {
    token: "",
    userId: "",
  },
};

const userSigninSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Correctly use PayloadAction to define the action type
    setUser(state, action: PayloadAction<UserState>) {
      state.user.token = action.payload.token;
      state.user.userId = action.payload.userId;
    },
  },
});

export const userActions = userSigninSlice.actions;
export { userSigninSlice };
