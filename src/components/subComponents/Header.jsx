import React from "react";
import { Link } from "react-router-dom";
import { FaServer, FaNetworkWired, FaRegIdCard, FaWifi, FaSignInAlt, FaSearch } from "react-icons/fa";
import Infra from '/it.jpg'

const navbarLinks = [
    {
        id: "1",
        label: "Network Configuration",
        icon: FaNetworkWired,
        href: "/network",
    },
    {
        id: "2",
        label: "Server Logs",
        icon: FaServer,
        href: "/server",
    },
    {
        id: "3",
        label: "Software Lincessing",
        icon: FaRegIdCard,
        href: "/lincess",
    },
    {
        id: "4",
        label: "Search",
        icon: FaSearch,
        href: "/search",
    },
    {
        id: "5",
        label: "Sign up",
        icon: FaSignInAlt,
        href: "/authentication",
    }
];

const Header = () => {
    return (
        <header className="w-full h-16 flex justify-between p-3 bg-blue-900 z-20">
            <Link to='/'><img src={Infra} alt="infra" className="w-2/4" /></Link>
            <nav className="text-blue-900 flex justify-between gap-2 items-center p-3">
               {navbarLinks.map((link) => (
                   <Link
                       to={link.href}
                       key={link.id}
                       className="hover:text-blue-600 hover:bg-blue-100 p-2 bg-white rounded-lg flex"
                   >    
                        {<link.icon className="mr-3 mt-1" />}
                       {link.label}
                   </Link>
               ))}
           </nav>
        </header>
    )
};

export default Header;
