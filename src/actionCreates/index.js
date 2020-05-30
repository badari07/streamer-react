import { SIGN_IN, SIGN_OUT } from "../actions/types";

export const signIn = (id) => ({
  type: SIGN_IN,
  payload: id,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
