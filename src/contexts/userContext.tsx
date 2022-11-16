import React, { useEffect, useContext, createContext, useState } from "react";
import { User, mockUsers, userContextTypes } from "../models/user";
import { getUsers } from "../utils/api";


type UProps = {
  children: React.ReactNode;
}

const UserContext = createContext<userContextTypes | null>(null);
export const useUser = () => {
  return useContext(UserContext);
}

const UserProvider = ({children} : UProps) => {
  const [users, setUsers] = useState<User[]>(mockUsers);


useEffect(() => {
  const getAllUsers = async() => {
    const users = await getUsers();
    console.log(users);
    if (users) {
      setUsers(users);
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
