import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpotDetailPage from './routes/SpotDetailPage';
import UpdatePage from './routes/UpdatePage';
import Home from "./routes/Home";
import { SpotContextProvider } from './context/SpotContext';

const App = () => {
    return (
        <SpotContextProvider>
            <div className="container"> 
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/spot/:id/update" element={<UpdatePage />} />
                        <Route path="/:id" element={<SpotDetailPage />} />
                    </Routes>
                </Router>
            </div>
        </SpotContextProvider>
    );
};

export default App;
