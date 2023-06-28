import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const userFromLocalStorage = localStorage.getItem("user");
const parsedUser =
  userFromLocalStorage !== undefined ? JSON.parse(userFromLocalStorage) : null;

const INITIAL_STATE = {
  user: parsedUser,
  isFetching: false,
  error: false,
};

console.log(parsedUser);

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
