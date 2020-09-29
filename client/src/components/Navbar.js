import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" >Auth0</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    {localStorage.getItem('token') ? (
                        <li className="nav-item ">
                            <Link className="nav-link" to="/logout" >logout</Link>
                        </li>
                    ) : (
                            <React.Fragment><li className="nav-item ">
                                <Link className="nav-link" to="/login" >Login</Link>
                            </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/signup" >Signup</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/dashboard" >dashboard</Link>
                                </li>
                            </React.Fragment>)}
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
