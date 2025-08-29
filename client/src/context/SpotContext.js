import React, {useState, createContext} from "react";
export const SpotContext = createContext();

export const SpotContextProvider = props => {
    const [spots, setSpots] = useState([])

    const addSpot = (spot) => {
        setSpots(spots=>[...spots,spot]);
    }

    return(
        <SpotContext.Provider value= {{spots, setSpots, addSpot}}>
            {props.children}
        </SpotContext.Provider>
    )
}