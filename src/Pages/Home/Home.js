import React from "react";
import InfoSection from "./InfoSection";
import Home_AboutUs from "./Home_AboutUs";
import Home_Services from "./Home_Services";
import OurProducts from "./OurProducts";
import ProductSlider from "./ProductSlider";







function Home(){


    return(<>
    <InfoSection/>
    <Home_AboutUs/>
    <Home_Services/>
    <OurProducts/>
    <ProductSlider/>
    </>)
}

export default React.memo(Home);