import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user state type
interface UserState {
  token: string,
  userEmail: string,
  userName: string,
  userProfile: string,
  userRole: string,
}

// Define the initial state with the appropriate type
const initialState: { user: UserState } = {
  user: {
    token: "",
    userEmail: "",
    userName: "",
    userProfile: "",
    userRole: "",
  },
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Correctly use PayloadAction to define the action type
    setUser(state, action: PayloadAction<UserState>) {
      state.user.token = action.payload.token;
      state.user.userEmail = action.payload.userEmail;
      state.user.userName = action.payload.userName;
      state.user.userProfile = action.payload.userProfile;
      state.user.userRole = action.payload.userRole;
    },
  },
});

export const userActions = loginSlice.actions;
export { loginSlice };
