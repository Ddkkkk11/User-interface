import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "../App";
import Demo from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
// APP > List
//Login
export default function BaseRouter () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='/demo' element={<Demo/>}></Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}