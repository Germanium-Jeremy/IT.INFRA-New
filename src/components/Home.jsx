import React from "react";
import SubHeader from "./subComponents/SubHeader";
import SideContent from "./subComponents/SideContent";
import Infrastructure from './subComponents/Infrastructure'
import Infra from "./subComponents/Infra";
import Benefits from "./subComponents/Benefits";
import Reviews from "./subComponents/Reviews";
import { FaBuilding, FaBusinessTime, FaGoodreads, FaReadme } from "react-icons/fa";

const Home = () => {
    const homeSubNavLinks = [
        {
            id: 1,
            label: "IT INFRASTRUCTURE",
            icon: FaBuilding,
            href: '#infrastructure'
       },
        {
            id: 2,
            label: "IT.INFRA",
            icon: FaBusinessTime,
            href: '#infra'
       },
        {
            id: 3,
            label: "BENEFITS",
            icon: FaGoodreads,
            href: '#benefits'
       },
        {
            id: 4,
            label: "REVIEWS",
            icon: FaReadme,
            href: '#reviews'
       }
    ]
    return (
        <div className="w-full h-fit p-0 m-0">
            <SubHeader subNavLinks={homeSubNavLinks} />
            <SideContent />
            <main className='w-5/6 h-fit mt-10 p-3'>
                <Infrastructure />
                <Infra />
                <Benefits />
                <Reviews />
            </main>
        </div>
    )
};

export default Home;