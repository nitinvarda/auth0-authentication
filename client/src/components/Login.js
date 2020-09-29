import React, { useState } from 'react';
import auth0 from 'auth0-js';
import { DOMAIN, AUDIENCE, CLIENT_ID } from '../config';
import { Redirect, Link } from 'react-router-dom';
import { Auth0Lock } from 'auth0-lock';

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        authorized: false,
        error: ''
    });
    const { username, password, authorized, error } = data;


    const change = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    var auth = new auth0.WebAuth({
        domain: DOMAIN,
        clientID: CLIENT_ID
    });



    const submit = (e) => {
        e.preventDefault();

        auth.client.login(
            {
                realm: 'Mongoose', //connection name or HRD domain
                username: username,
                password: password,
                audience: AUDIENCE,
                scope: 'read:name read:nickname'
            },
            function (err, authResult) {

                if (err) {
                    // console.log(err.description)
                    setData({
                        ...data,
                        error: err.description
                    })

                    setTimeout(() => {
                        setData({
                            ...data,
                            error: ''
                        })
                    }, 5000)
                }
                else {
                    // Auth tokens in the result or an error


                    localStorage.setItem('token', authResult.accessToken);
                    setData({
                        ...data,
                        authorized: true
                    })



                }

            }
        );

    }


    var lock = new Auth0Lock(CLIENT_ID, DOMAIN);
    var accessToken = null;
    var profile = {};

    lock.on("authenticated", function (authResult) {
        console.log(authResult)
        lock.getUserInfo(authResult.accessToken, function (error, profileResult) {
            if (error) {
                // Handle error
                return;
            }

            accessToken = authResult.accessToken;
            localStorage.setItem('token', accessToken);
            profile = profileResult;
            localStorage.setItem('profile', JSON.stringify(profile))


            // Update DOM
        });
    });
    const login = () => {
        lock.show({ allowedConnections: ["Mongoose", "google-oauth2", "Username-Password-Authentication"] })
    }
    //
    const logout = () => {
        lock.logout()
    }


    if (authorized) {
        return (
            <Redirect to="/dashboard" />
        )
    }
    else {

        return (
            <div style={{ width: "20%", margin: "auto" }}>
                <h2>This is using api</h2>
                {error ? <h2>{error}</h2> : <div></div>}

                <form onSubmit={submit}>
                    <div className="d-flex justify-content-between">
                        <label>Username</label>
                        <input type="text" data-testid="username" name="username" value={username} onChange={change} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <label>Password</label>
                        <input type="password" data-testid="password" name="password" value={password} onChange={change} />
                    </div>

                    <br />
                    <button type="submit" data-testid="login">Login</button>
                </form>
                <br />
                <hr />
                <div>
                    <h1>This is using auth0-lock</h1>
                    <button onClick={login}>Login</button>
                    <Link to="/dashboard"><button>Dashboard</button></Link>
                    <button onClick={logout}>Logout</button>
                </div>

            </div>
        );
    }
}


export default Login;
