import React, { createContext, useEffect, useReducer, useState } from "react";
import { Action, AppState, SelectedPage, User, UserProps } from "@/shared/type";

type Props = {
  children: React.ReactNode;
};

const initialState: AppState = {
  users: [
    {
      id: 1,
      fName: "Oteri Prince",
      status: "Borrowed",
      books: ["Games of Thrones", "The Throne"],
      date: {
        date_borrowed: new Date(),
        date_returned: new Date("2024-04-22"),
      },
      time: '13:30',
    },
    {
      id: 2,
      fName: "Sunday Micheal",
      status: "Returned",
      books: ["The Godfather", "Muyiwa the coder"],
      date: {
        date_borrowed: new Date(),
        date_returned: new Date("2024-04-15"),
      },
      time: '16:00',
    },
  ],
};

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    // Adding newUser
    case "ADD_USER":
      return { ...state, users: [...state.users, action.newUser] };
    default:
      return state;
  }
}

export const libraryContext = createContext<UserProps>({} as UserProps);

const GlobalStateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const addNewUser = (newUser: User) => {
    dispatch({ type: "ADD_USER", newUser });
  };

  const contextValue = {
    users: [state.users],
    selectedPage,
    setSelectedPage,
    addNewUser,
    mobileToggle,
    setMobileToggle
  };

  useEffect(() => {
    if (state.users.length > 2) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);
  return (
    <libraryContext.Provider value={contextValue}>
      {children}
    </libraryContext.Provider>
  );
};

export default GlobalStateProvider;
