import React from "react";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";

function Main({ props }) {
  
    return (
      <main className="main">
        <Promo></Promo>
        <NavTab></NavTab>
        <Footer></Footer>
      </main>
    );
  }
  
  export default Main;
  