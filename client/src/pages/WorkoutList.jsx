import React from 'react';

function WorkoutList() {
    return (
        <nav>
            <h1>This is the workout list page</h1>
            <ul>
                <li><button onClick={handleLogin}>Login</button></li>
                <li><button onClick={handleLogout}>Logout</button></li>
                <li><button onClick={handleProfile}>Profile</button></li>
            </ul>
        </nav>
    );
}


const handleLogin = () => {
    
};

const handleLogout = () => {
    
};

const handleProfile = () => {
   
};

export default WorkoutList;
