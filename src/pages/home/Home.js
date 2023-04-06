import React from "react";
import HomeCommission from "../../components/commissions/homeCommission";
import Input from "../../components/forms/input";
import HeaderSection from "../../components/headerSection/headerSection";
import Actualites from "./Actualites";
import MotDuPresident from "./MotDuPresident";
import Partenaires from "./Partenaires";
import Contact from "./Contact";


const Home = () => {

  return (
    <div className="w-full h-auto">
      {/* <div>Banner</div> */}
      {/* <HomeCommission /> */}
      <HeaderSection />
      <div>
        {/* COmmissions 1 */}
        <HomeCommission />
        {/* Actualites */}
        <Actualites />
        {/* Mot du president 3 */}
        <MotDuPresident />
        {/* Partenaires 4 */}
        <Partenaires />

        {/* Part 5 */}
        <Contact />


      </div>
    </div>
  );
};

export default Home;
