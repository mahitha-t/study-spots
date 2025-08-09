import React, {useState, createContext} from "react";
export const SpotContext = createContext();

export const SpotContextProvider = props => {
    const [spots, setSpot] = useState([])

    return(
        <SpotContext.Provider value= {{spots, setSpot}}>
            {props.children}
        </SpotContext.Provider>
    )
}