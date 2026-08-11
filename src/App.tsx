import React from 'react';
import './app.css';
import NavBar from './components/navBar/NavBar';
import LandingPage from './Pages/LandingPage';

function App() {
    return (
        <div className="site">
            <NavBar />
            <LandingPage />
        </div>
    );
}

export default App;
