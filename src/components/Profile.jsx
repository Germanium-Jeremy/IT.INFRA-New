import React from "react";
import SubHeader from "./subComponents/SubHeader";
import SideContent from "./subComponents/SideContent";
import Info from "./subComponents/Info";
import Managed from "./subComponents/Managed";
import { FaInfo, FaBriefcase, FaNetworkWired } from "react-icons/fa";

const Profile = () => {
    const homeSubNavLinks = [
        {
            id: 1,
            label: "YOUR INFO",
            icon: FaInfo,
            href: '#yourInfo'
       },
        {
            id: 2,
            label: "NETWORKS MANAGED",
            icon: FaBriefcase,
            href: '#managed'
       }
    ]
    return (
        <div className="w-full h-fit p-0 m-0">
            <SubHeader subNavLinks={homeSubNavLinks} />
            <SideContent />
            <main className='w-5/6 h-fit mt-5 p-3'>
                <Info />
                <Managed/>
            </main>
        </div>
    );
};

export default Profile;
