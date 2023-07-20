import React, { useState, useEffect } from "react";
import axios from 'axios';
import './login.css';
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [error,setError]=useState('')
    const login = (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        var username = document.getElementById("user").value;
        var password = document.getElementById("pass").value;
        if (username == "") {
            alert("please enter the name")
        } else if (password == "") {
            alert("please enter the password")

        } else {
            let user_Info = {
                "email": username,
                "password": password
            }
            console.log(user_Info);

            document.getElementById("user").value = "";
            document.getElementById("pass").value = "";

            axios.post("http://localhost:1111/userlogin", user_Info, config)
                .then(function (res) {
                    if (res.data.status == 'error') {
                        alert('Unsuccessfull..!')
                        console.log(res.data);
                    } else if (res.data.status == 'success') {
                        alert('success')
                        navigate("/logout")
                        console.log(res.data);
                    }
                })
        }
    }
    return (
        <>
            <div className="login-boxdiv">
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-div">
                            <input type="text" name="" id="user" required="" />
                            <label>Email Id</label>
                        </div>
                        <div className="user-div">
                            <input type="password" name="" id="pass" required="" />
                            <label>Password</label>
                        </div>
                        <a className="btn__submit" href="#" onClick={login}>Submit</a>
                    </form>
                </div>
            </div>
        </>
    );
}