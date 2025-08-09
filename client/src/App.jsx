import React from 'react';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import SpotDetailPage from './routes/SpotDetailPage';
import UpdatePage from './routes/UpdatePage';
import Home from "./routes/Home";
import { SpotContextProvider } from './context/SpotContext';


const App =() => {
    return (
        <SpotContextProvider>
            <div className="container"> 
        <Router>
            <Routes>
                <Route exact path= "/" element={<Home/>}/>
                <Route exact path= "/spots/:id/update" element={<UpdatePage/>}/>
                <Route exact path= "/:id" element={<SpotDetailPage/>}/>
            </Routes>
        </Router>
    </div>
        </SpotContextProvider>
    
    );
};

export default App;