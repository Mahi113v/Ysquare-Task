import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Main } from "./Components/Main/main";
import { SignUp } from "./Components/Signup/signup";
import { Login } from "./Components/Login/login";
import { Logout } from "./Components/Logout/logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Main/>]}></Route>
          <Route path='/signup' element={[<SignUp/>]}></Route>
          <Route path='/login' element={[<Login/>]}></Route>
          <Route path='/logout' element={[<Logout/>]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
