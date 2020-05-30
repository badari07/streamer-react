import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initial_state = { isSignedIn: null, userId: null };

const reducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };

    default:
      return state;
  }
};

export default reducer;
