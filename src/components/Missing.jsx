import React from "react";
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <div className=" w-4/6 flex h-4/6 items-center justify-center">
            <div className="w-full text-center text-2xl text-blue-950 shadow-2xl shadow-slate-600 p-10">
                <p>404</p>
                <p>Page Not Found</p>
                <Link to='/' className="text-cyan-800 hover:text-cyan-700"> Home </Link>
            </div>
        </div>
    )
};

export default Missing;
