import React from "react";
import InfoSection from "./InfoSection";
import Home_AboutUs from "./Home_AboutUs";
import Home_Services from "./Home_Services";
import OurProducts from "./OurProducts";
import ProductSlider from "./ProductSlider";
import ClientImages from "./ClientImages";
import TestimonialsSection from "./TestimonialsSection";
import ChooseUs from "./ChooseUs";
import OurProjects from "./OurProjects";
import Gallery from "./Gallery";
import FAQs from "./FAQs";
import HomeContactUs from "./HomeContactUs";







function Home(){


    return(<>
    <InfoSection/>
    <Home_AboutUs/>
    <Home_Services/>
    <OurProducts/>
    <ProductSlider/>
    <ClientImages/>
    <TestimonialsSection/>
    <ChooseUs/>
    <OurProjects/>
{/* <Gallery/> */}
    <FAQs/>
    <HomeContactUs/>
    </>)
}

export default React.memo(Home);