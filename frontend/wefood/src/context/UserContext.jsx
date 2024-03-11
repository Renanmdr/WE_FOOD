import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const Context = createContext()


// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
    const { register } = useAuth()
    return (
        <Context.Provider value={{register}}>
            {children}
        </Context.Provider>
    )

}