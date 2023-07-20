const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const bodyparse = require("body-parser");
const database = require("mysql");
// const schedule = require("node-schedule");
// const nodemailer = require("nodemailer");
// const util = require("util");
const {application, request, response} = require('express');

const add = express();
add.use(cors());
add.use(fileupload());
add.use(bodyparse.json());
add.use(express.json());
add.use(express.static('public'));

let student = database.createConnection({
    host: "localhost",
    user: "root",
    password: "Mahi17100@",
    database: "student"
})


student.connect(function(error)
{
    if(error)
    {
        console.log(error);
    } else {
        console.log("db connected")
    }
})


                // GET API

add.get('/register', (request,response) => {
    console.log(request.params);
    student.query('select * from signup' , (error, result) => {
        if(error) {
            console.log(error)
        } else {
            response.send(result)
            console.log(result)
        }
    })
})


                // Register


add.post('/user',(request,response)=>{
    try{
        console.log(JSON.stringify(request.body));
        let {user_name, gender, date_of_birth, phone_number, email}=request.body;
        if(user_name !=null && gender !=null && date_of_birth !=null && phone_number !=null && email !=null) {
            let sql='insert into sign_up (user_name, gender, date_of_birth, phone_number, email, effective_from, effective_on, created_by, created_on, status) values (?,?,?,?,?,current_timestamp(),current_timestamp(),current_user(),current_timestamp(),"A")';
            student.query(sql,[user_name, gender, date_of_birth, phone_number, email],(error,result)=>{
                if(error){
                    let msg={"status":"error"};
                    response.send(msg);
                    console.log(error);
                } else {
                    let msg={"status":"success"};
                    response.send(msg);
                }
            })
        }else{
            let msg={"status":"InvalidData"};
            response.send(msg);
        }
    }catch(error){
        response.send(error);
    }
})


                // Login


add.post("/userlogin", (request, response) => {

    const { email, password } = request.body;
    const sql = "SELECT * FROM sign_up WHERE email = ? and status='A'";
    student.query(sql, [email], (error, result) => {
        if (error) {
            console.log(error);
            const a = { status: "error" };
            response.send(a);
        } else {
            if (result.length > 0) {
                const login = result[0];
                if (login.password === password) {
                    // Login successful
                    const a = { status: "success"};
                    response.send(a);
                    console.log("Login successful!");
                } else {
                    // Incorrect password
                    const a = { status: "error", message: "Incorrect password" };
                    response.send(a);
                }
            } else {
                // User not found
                const a = { status: "error", message: "User not found" };
                response.send(a);
            }
        }
    });
});



add.listen(1111 , () => {
    console.log("server is running on 1111 port");
});

