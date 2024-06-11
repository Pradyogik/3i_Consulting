import React from "react";
import HeroSection from '../../Components/HeroSection/HeroSection';
import contactBg from '../../Assets/Images/Group 11671.png';
import HomeContactUs from '../Home/HomeContactUs';
import Hero from '../../Components/Hero'



function Contact(){


    return(<>
    <Hero bannerImg={contactBg} />
    <HomeContactUs/>
    </>)
}

export default React.memo(Contact)