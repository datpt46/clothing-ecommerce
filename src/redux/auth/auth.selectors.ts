import { StoreState } from "redux/root-reducer";
import { createSelector } from "reselect";

const selectAuth = (state: StoreState) => state.auth;

export const selectIsloggedIn = createSelector(selectAuth, (auth) => auth.isLoggedIn);
export const selectLogging = createSelector(selectAuth, (auth) => auth.logging);
export const selectCurrentUser = createSelector(selectAuth, (auth) => auth.currentUser);
