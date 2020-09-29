import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        response: '',
        error: ''
    });
    const { username, password, response, error } = data;


    const change = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const signup = async (e) => {
        e.preventDefault();


        const fields = {
            username,
            password
        }



        try {
            const response = await axios.post("/signup", fields)
            setData({
                ...data,
                response: response.data

            })

        }
        catch (err) {
            setData({
                ...data,
                error: err.data
            })

        }

    }


    if (response === 'success') {
        return (
            <div>
                <h2 >created successfully</h2>
                <p>Click here to <Link to="/login" >Login</Link></p>
            </div>
        )
    }
    else {


        return (
            <div style={{ width: "20%", margin: "auto" }}>
                {error ? <h2>{error}</h2> : <p data-testid="response" value={response}>{response}</p>}
                <form onSubmit={signup}>
                    <div className="d-flex justify-content-between">
                        <label>Username</label>
                        <input type="text" data-testid="username" name="username" value={username} onChange={change} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <label>Password</label>
                        <input type="password" data-testid="password" name="password" value={password} onChange={change} />
                    </div>

                    <br />
                    <button type="submit" data-testid="signup">Sign Up</button>
                </form>

            </div>
        );
    }

}


export default SignUp;
