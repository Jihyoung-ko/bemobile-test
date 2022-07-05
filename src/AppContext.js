import { createContext, useContext } from "react";

export const MainContext = createContext({})

export const useMainState = () => useContext(MainContext)