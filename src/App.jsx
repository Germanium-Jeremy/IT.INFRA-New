import React from "react";
import Header from "./components/subComponents/Header";
import Footer from './components/subComponents/Footer'
import Missing from "./components/Missing";
import Home from "./components/Home";
import Authentication from "./components/Auth";
import Login from "./components/subComponents/Login";
import Signup from "./components/subComponents/Signup";
import Forgot from "./components/subComponents/Forgot";
import Reset from "./components/subComponents/Reset";
import Profile from "./components/Profile";
import Network from "./components/Network";
import Server from "./components/Server";
import Lincess from "./components/Lincess";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center align-middle">
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contacts" exact element={<Contact />} />
                <Route path='/authentication/*' exact element={<Authentication/>}>
                    <Route path="login" exact element={<Login/>} />
                    <Route path='signup' element={<Signup/>} />
                    <Route path='reset' element={<Reset/>} />
                    <Route path='forgot' element={ <Forgot/>} />
                </Route>
                <Route path="/network" exact element={<Network />} />
                <Route path="/server" exact element={<Server />} />
                <Route path="/lincess" exact element={<Lincess />} />
                <Route path="/profile" exact element={<Profile />} />
                <Route path="*" exact element={<Missing />} />
            </Routes>
            <Footer />
        </main>
    );
};
export default App;