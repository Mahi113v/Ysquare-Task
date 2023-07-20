import React from "react";
import './logout.css';
import { Link } from "react-router-dom";

export function Logout() {
    return(
        <>
            <div class="logmaindiv text-light m-0 p-0">
                <nav class="navbar navbar-light bg-primary shadow sticky-top">
                    <div className="col-lg-5"></div>
                    <div className="col-lg-3 pl-5">
                        <h1 className="logouttext text-dark">WELCOME</h1>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-1 ml-3">
                            <Link to="/"><button class="btn btn-info my-2 my-sm-0" type="submit">Logout</button></Link>
                    </div>
                </nav>
                <div className="filogoutdiv mr-auto ml-auto container">
                    <h1 className="textlog text-dark text-center">LogIn Successfully..!</h1>
                </div>
            </div>
        </>
    );
}