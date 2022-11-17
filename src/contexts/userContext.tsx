import React, { useEffect, useContext, createContext, useState } from "react";
import { User, mockUsers, userContextTypes } from "../models/user";
import { getUsers } from "../utils/api";


type UProps = {
  children: React.ReactNode;
}

export const UserContext = createContext<userContextTypes | null>(null);

export function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
      throw new Error(
        "GithubProvider must be wrapped inside the provider, " +
        "otherwise it will not function correctly."
      )
  }
  return context;
}

const UserProvider = ({children} : UProps) => {
  const [users, setUsers] = useState<User[]>(mockUsers);

useEffect(() => {
  const getAllUsers = async() => {
    const users = await getUsers();

    if (users) {
     users.sort(function(a:any, b:any) {
        const nameA = a.last_name.toUpperCase();
        const nameB = b.last_name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      setUsers(users.slice(0, 10));
    }
  }
  getAllUsers();
}, [])

  const value = {
    users,
  }
  return (
   <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

export default UserProvider;
