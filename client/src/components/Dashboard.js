import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [loggedout, setLoggedout] = useState(false)
    useEffect(() => {

    }, [loggedout])
    const logout = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');

            setLoggedout(true)
        }
    }


    if (localStorage.getItem('token')) {
        const profile = JSON.parse(localStorage.getItem('profile'))
        return (
            <div>
                <h2>This is the private dashboard</h2>
                <button onClick={logout}>logout</button>



                <div>
                    <h2>This is from auth0-lock authentication</h2>
                    <h3>{profile.name}</h3>
                    <h3>{profile.email}</h3>
                </div>
            </div>
        );

    }
    else {
        return (
            <div>
                <h2>You are not Authenticated</h2>
                <p>Please Login first</p>



            </div>



        )
    }
}



export default Dashboard;
