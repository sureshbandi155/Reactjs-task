import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Resources from './pages/Resources/Resources';
import Videos from './pages/Videos/Videos';
import Ebooks from './pages/Ebooks/Ebooks';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <div className="main-container">
                <Route exact path="/" component={Resources} />
                <Route exact path="/videos" component={Videos} />
                <Route exact path="/ebooks" component={Ebooks} />
            </div>
        </BrowserRouter>

    );
}

export default App;
