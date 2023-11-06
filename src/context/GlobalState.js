 import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
 


 //!crete context
 export const GlobalContext = createContext();

const initialState ={
    watchlist: [],
    watched: [],
}

 //! provider components
 export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    console.log(state);


    return <GlobalContext.Provider value={{
        mert:"developer",
    }}>{props.children}</GlobalContext.Provider>
 }