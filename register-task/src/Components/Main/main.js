import React from "react";
import './main.css'
import { Link } from "react-router-dom";

export function Main()
{
    return(
        <>
            <div class="landmaindiv text-light m-0 p-0">
                <nav class="navbar navbar-light bg-secondary shadow sticky-top">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-3 pl-5">
                        <h1 className="font-weight-bold mr-5">YSQUARE TASK</h1>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2">
                        <form className="form-inline ">
                            <Link to="/login"><button class="btn btn-primary my-2 my-sm-0" type="submit">LogIn</button></Link>
                            <Link to="/signup"><button class="btn btn-success my-2 my-sm-0 m-2" type="submit">SignUp</button></Link>
                        </form>
                    </div>
                </nav>
                {/* <div className='container-fluid landsecdiv col-lg-12 pt-5'>
                    <div className='landsecfidiv col-lg-5'></div>
                    <div className='landsecsecdiv container col-lg-3 pt-5 mt-5 pl-5'>
                        <Link to='/StudentReg'><button className="landdivbut" type="button">Registeration</button></Link>
                    </div>
                    <div className='landsecthdiv col-lg-4'></div>
                </div> */}
            </div>
        </>
    );
}